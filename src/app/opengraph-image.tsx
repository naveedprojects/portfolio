import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Naveed Mazhar - AI Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 80px",
            borderRadius: "24px",
            border: "1px solid #262626",
            backgroundColor: "rgba(20, 20, 20, 0.8)",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              background: "linear-gradient(90deg, #ffffff 0%, #a1a1aa 100%)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 16,
            }}
          >
            Naveed Mazhar
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#3b82f6",
              fontWeight: 600,
              marginBottom: 24,
            }}
          >
            AI Engineer & ML Systems Architect
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              fontSize: 24,
              color: "#a1a1aa",
            }}
          >
            <span
              style={{
                padding: "8px 16px",
                backgroundColor: "#262626",
                borderRadius: "8px",
              }}
            >
              LLM & Agentic AI
            </span>
            <span
              style={{
                padding: "8px 16px",
                backgroundColor: "#262626",
                borderRadius: "8px",
              }}
            >
              Voice AI
            </span>
            <span
              style={{
                padding: "8px 16px",
                backgroundColor: "#262626",
                borderRadius: "8px",
              }}
            >
              Computer Vision
            </span>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 24,
            color: "#71717a",
          }}
        >
          naveedmazhar.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
