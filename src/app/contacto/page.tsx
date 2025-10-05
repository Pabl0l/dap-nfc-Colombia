import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactoPage() {
  const phoneNumber = '573042181853';
  const message = '¡Hola! Estoy interesado en los productos NFC de dap. ¿Podrían darme más información?';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-dark text-light pt-24 md:pt-32 pb-20 animate-fade-in">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-5xl md:text-7xl font-extrabold text-light mb-6">
          Contáctanos
        </h1>
        <p className="text-xl text-light max-w-3xl mx-auto mb-12">
          ¿Tienes preguntas o estás listo para empezar tu proyecto? Estamos aquí para ayudarte.
        </p>
        <Link 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center px-8 py-4 bg-accent text-light font-bold rounded-full transition-all duration-300 hover:bg-secondary hover:text-light hover:scale-105 shadow-lg shadow-accent/20"
        >
          <FaWhatsapp className="mr-3 h-6 w-6" />
          Hablar por WhatsApp
        </Link>
      </section>
    </div>
  );
}
