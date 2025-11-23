import { GoogleTagManager } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import TransformerBackground from "./components/helper/transformer-background";
import PasswordGate from "./components/helper/password-gate";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";

export const metadata = {
  title: "Motasem Sakr - AI & ASIC Engineer | Intelligent Silicon Architect",
  description:
    "Portfolio of Motasem Sakr - Senior AI & ASIC Engineer specializing in chip design, AI model training, fine-tuning, and agentic AI systems. Architecting the future of intelligent hardware.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PasswordGate>
          <TransformerBackground />
          <ToastContainer />
          <Navbar />
          <main>
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </PasswordGate>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
