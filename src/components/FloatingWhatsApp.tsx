'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

const FloatingWhatsApp = () => {
  // Reemplaza este número con tu número de WhatsApp, incluyendo el código de país sin el '+'.
  const phoneNumber = '573042181853'
  const message = '¡Hola! Estoy interesado en los productos NFC de dap. ¿Podrían darme más información?'

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-brand-blue-light text-white p-4 rounded-full shadow-lg hover:bg-brand-blue transition-transform duration-300 ease-in-out transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
    </Link>
  )
}

export default FloatingWhatsApp
