'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { usePathname } from 'next/navigation'

const FloatingWhatsApp = () => {
  const pathname = usePathname();
  const isProductPage = pathname.startsWith('/catalogo/');

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
      className="fixed bottom-8 right-8 z-50 bg-accent text-dark p-4 rounded-full shadow-lg hover:bg-secondary hover:text-light transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center animate-fade-in"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
    </Link>
  )
}

export default FloatingWhatsApp
