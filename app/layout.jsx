import "./globals.css";

export const metadata = {
  title: "HIKUNA Hospital — Peduli, Profesional, Untuk Kesehatan Anda",
  description: "HIKUNA Hospital — Pelayanan kesehatan profesional, terpercaya, dan berorientasi pada pasien.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
