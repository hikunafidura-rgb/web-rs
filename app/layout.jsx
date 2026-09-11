import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmergencyFloat from "../components/EmergencyFloat";

export const metadata = {
  title: "HIKUNA Hospital — Compassionate Care, Advanced Medicine",
  description: "Discover trusted doctors, advanced medical services, and personalized healthcare — all in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <EmergencyFloat />
      </body>
    </html>
  );
}
