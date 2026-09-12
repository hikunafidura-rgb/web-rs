import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmergencyFloat from "../components/EmergencyFloat";
import { IconSprite } from "../components/Icons";

export const metadata = {
  title: "HIKUNA Hospital — Compassionate Care, Advanced Medicine",
  description: "Discover trusted doctors, advanced medical services, and personalized healthcare — all in one place.",
  openGraph: {
    title: "HIKUNA Hospital — Compassionate Care, Advanced Medicine",
    description: "Trusted doctors, advanced medical services, and personalized healthcare — all in one place.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HIKUNA Hospital — Compassionate Care, Advanced Medicine",
    description: "Trusted doctors, advanced medical services, and personalized healthcare — all in one place.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <IconSprite />
        <Navbar />
        {children}
        <Footer />
        <EmergencyFloat />
      </body>
    </html>
  );
}
