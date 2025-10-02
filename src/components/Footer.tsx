import Link from 'next/link';
import { Instagram, Code, MessageCircle } from 'lucide-react'; // Asumiendo que TikTok no está en lucide-react, usamos un ícono genérico

const Footer = () => {
  return (
    <footer className="bg-black text-light border-t border-secondary/20 py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Logo e Info */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-4xl font-display mb-2">
              dap
            </Link>
            <p className="text-sm text-secondary max-w-xs">
              Innovación y conectividad en la palma de tu mano.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-display text-lg mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-accent transition-colors">Inicio</Link></li>
              <li><Link href="/catalogo" className="hover:text-accent transition-colors">Catálogo</Link></li>
              <li><Link href="/sobre-nfc" className="hover:text-accent transition-colors">Sobre NFC</Link></li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="font-display text-lg mb-4">Contacto</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Instagram size={24} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Code size={24} /></a>{/* Placeholder for TikTok */}
              <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><MessageCircle size={24} /></a>
            </div>
          </div>

        </div>
        <div className="text-center text-secondary text-sm mt-12 pt-8 border-t border-secondary/20">
          <p>&copy; {new Date().getFullYear()} dap nfc Colombia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
