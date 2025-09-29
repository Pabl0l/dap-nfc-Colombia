import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <section className="relative min-h-[88dvh] flex items-center justify-center bg-brand-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid-brand-blue/10"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-brand-light tracking-tighter mb-6">
          <span className="block text-brand-blue-light">Nuevas formas de compartir.</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
          Olvida los QR. Con la tecnología NFC de <span className="font-bold font-display text-brand-light tracking-wider">dap</span>, comparte lo que quieras con un solo toque. Una experiencia mágica para tus clientes y contactos.
        </p>
        <div className="flex justify-center">
          <Link 
            href="/catalogo"
            className="group inline-flex items-center justify-center px-8 py-4 bg-brand-blue-light text-white font-bold rounded-full transition-all duration-300 hover:bg-brand-blue hover:scale-105 shadow-lg shadow-brand-blue/20"
          >
            Explorar Productos
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
