'use client'

import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

const FloatingWhatsApp = () => {
  const pathname = usePathname();
  const isProductPage = pathname.startsWith('/catalogo/');
  const isHome = pathname === '/';

  if (isProductPage) {
    return null;
  }

  const phoneNumber = '573042181853'
  const message = '¡Hola! Estoy interesado en los productos NFC de dap. ¿Podrían darme más información?'

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 right-8 z-50 bg-accent text-light p-4 rounded-full shadow-lg hover:bg-secondary hover:text-light transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center animate-fade-in ${!isHome && 'w-16 h-16'}`}
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={isHome ? 28 : 32} />
      {isHome && (
        <span className="hidden md:inline-block ml-2 font-bold whitespace-nowrap">
          Escríbenos!
        </span>
      )}
    </Link>
  )
}

export default FloatingWhatsApp
