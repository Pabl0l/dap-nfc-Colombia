import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <section className="relative min-h-[88dvh] flex items-center justify-center bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-light tracking-tighter mb-6 animate-subtle-slide-up">
          <span className="block text-accent">Nuevas formas de compartir.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-secondary mb-10 animate-subtle-slide-up animation-delay-300">
          Olvida los QR. Con la tecnología NFC de <span className="font-bold font-display text-light tracking-wider">dap</span>, comparte lo que quieras con un solo toque. Una experiencia mágica para tus clientes y contactos.
        </p>
        <div className="flex justify-center animate-fade-in animation-delay-600">
          <Link 
            href="/catalogo"
            className="group inline-flex items-center justify-center px-8 py-4 bg-accent text-dark font-bold rounded-full transition-all duration-300 hover:bg-secondary hover:text-light hover:scale-105 shadow-lg shadow-accent/20"
          >
            Explorar Productos
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
