import { NextRequest, NextResponse } from "next/server";
export const runtime = "edge";

export async function GET(req: NextRequest) {
  const client_id = process.env.SPOTIFY_CLIENT_ID!;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!;
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  async function getAccessToken() {
    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }),
    });
    const tokenJson = await tokenRes.json();
    return tokenJson.access_token;
  }

  try {
    let access_token = await getAccessToken();

    const stream = new ReadableStream({
      start(controller) {
        const encoder = new TextEncoder();
        let lastProgress: number | null = null;
        let closed = false;

        // Send initial heartbeat so browser keeps the connection
        controller.enqueue(encoder.encode(":ok\n\n"));

        const interval = setInterval(async () => {
          if (closed) return;

          try {
            const response = await fetch(
              "https://api.spotify.com/v1/me/player/currently-playing?market=IN",
              { headers: { Authorization: `Bearer ${access_token}` } },
            );

            // Handle expired token
            if (response.status === 401) {
              access_token = await getAccessToken();
              return;
            }

            if (!response.ok) return;
            const data = await response.json();

            if (data?.progress_ms !== lastProgress) {
              lastProgress = data.progress_ms;
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify(data)}\n\n`),
              );
            }
          } catch (err) {
            console.error("Spotify SSE error:", err);
          }
        }, 1000);

        req.signal.addEventListener("abort", () => {
          closed = true;
          clearInterval(interval);
          controller.close();
        });
      },
    });

    return new NextResponse(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
