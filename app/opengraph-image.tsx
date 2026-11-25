import { ImageResponse } from "next/og";
import { cv, site } from "@/content/cv";

export const alt = site.ogAlt;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B0F14",
          color: "#E6EDF3",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 15% 10%, rgba(34,211,238,0.18), transparent 34%), radial-gradient(circle at 90% 0%, rgba(34,211,238,0.1), transparent 26%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "22px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#22D3EE",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              border: "1px solid rgba(34,211,238,0.4)",
              backgroundColor: "rgba(34,211,238,0.12)",
              color: "#22D3EE",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            GG
          </span>
          CV / Portfolio
        </div>

        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "76px",
              lineHeight: 1.02,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              maxWidth: "900px",
            }}
          >
            {cv.name}
          </div>
          <div
            style={{
              marginTop: "22px",
              fontSize: "28px",
              lineHeight: 1.35,
              color: "#8B98A5",
              maxWidth: "900px",
            }}
          >
            {cv.headline}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #243140",
            paddingTop: "24px",
            fontSize: "20px",
            color: "#8B98A5",
          }}
        >
          <span>15 years in software · 5 years in Web3</span>
          <span style={{ color: "#22D3EE" }}>Argentina · Remote</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
