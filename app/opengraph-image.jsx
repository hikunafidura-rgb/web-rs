import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 60,
          padding: "0 90px",
          background: "linear-gradient(135deg,#0B1F33 0%,#16406f 70%,#1d7a6e 130%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 190,
            height: 190,
            borderRadius: 52,
            background: "linear-gradient(135deg,#0B1F33,#1677FF)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div style={{ fontSize: 110, fontWeight: 800, color: "#fff" }}>H</div>
          <div
            style={{
              position: "absolute",
              top: 22,
              right: 22,
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "#24B7A5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
              color: "#fff",
            }}
          >
            +
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: 6 }}>HIKUNA</div>
          <div style={{ fontSize: 30, color: "#A9BCCD", marginTop: 4 }}>Hospital & Medical Center</div>
          <div style={{ fontSize: 28, color: "#2BB8A8", marginTop: 18, fontWeight: 700 }}>
            Compassionate Care, Advanced Medicine.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
