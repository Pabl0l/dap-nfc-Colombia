import type { Metadata } from "next";
import { Poppins, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { CartProvider } from "@/context/CartContext";
import { Cart } from "@/components/Cart";

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
  title: "dap NFC Colombia ",
  description: "Descubre la alternativa tecnológica y elegante al código QR. Conecta de forma fluida, sorprende a tus clientes y proyecta innovación con nuestros productos NFC.",
  openGraph: {
    title: "dap NFC Colombia ",
    description: "Eleva tu marca con dap NFC. Tarjetas y stickers que crean interacciones memorables y refuerzan tu identidad. No es un producto, es un símbolo de modernidad.",
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
      <body className={`${poppins.variable} ${outfit.variable} font-sans antialiased`}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <div className="mb-16 md:mb-0">
              <Navbar />
            </div>
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <FloatingWhatsApp />
          <Cart />
        </CartProvider>
      </body>
    </html>
  );
}
