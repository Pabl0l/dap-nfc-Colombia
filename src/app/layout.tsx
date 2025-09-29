import type { Metadata } from "next";
import { Poppins, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "dap nfc colombia - Innovación y Conectividad",
  description: "Transforma la manera en que conectas. Con la tecnología NFC de dap, comparte tus redes, menús y más, con un solo toque. Moderno, rápido y sin apps.",
  openGraph: {
    title: "dap nfc Colombia - Innovación y Conectividad",
    description: "La forma más rápida e intuitiva de compartir información. Descubre nuestros productos NFC.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${outfit.variable} font-sans bg-brand-dark text-brand-light antialiased`}>
        <div className="flex flex-col min-h-[88dvh]">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
