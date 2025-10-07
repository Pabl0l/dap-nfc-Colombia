import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import NFCIntroAnimation from '@/components/NFCIntroAnimation';

export default function Home() {
  return (
    <section className="relative min-h-[88dvh] flex items-center justify-center bg-dark overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          {/* Left Column: NFC Animation */}
          <div className="md:text-left mb-10 md:mb-0">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-light tracking-tighter mb-6 animate-subtle-slide-up w-full">
              <NFCIntroAnimation />
            </h1>
          </div>

          {/* Right Column: Description and Button */}
          <div className="text-center md:text-center">
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-light mb-10 animate-subtle-slide-up animation-delay-300">
              Con <span className='font-bold text-2xl'>dap</span>, cada interacción es fluida, sorprendente y memorable. <br /> Proyecta innovación y modernidad con un solo toque.
            </p>
            <div className="flex justify-center md:justify-center animate-fade-in animation-delay-600">
              <Link 
                href="/catalogo"
                className="group inline-flex items-center justify-center px-8 py-4 bg-accent text-light font-bold rounded-full transition-all duration-300 hover:bg-secondary hover:text-light hover:scale-105 shadow-lg shadow-accent/20"
              >
                Descubre la Experiencia
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
