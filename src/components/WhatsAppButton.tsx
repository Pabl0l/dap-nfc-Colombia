import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  message: string;
  phoneNumber?: string;
  text?: string;
}

export const WhatsAppButton = ({ 
  message, 
  phoneNumber = '573042181853', // Número de teléfono por defecto
  text = 'Contactar por WhatsApp' // Texto por defecto
}: WhatsAppButtonProps) => {

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white transition-all duration-300 bg-[#386FA4] rounded-lg shadow-lg hover:bg-[#133C55] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#59A5D8]"
    >
      <FaWhatsapp size={24} />
      <span>{text}</span>
    </a>
  );
};
