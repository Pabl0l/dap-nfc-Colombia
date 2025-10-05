'use client'

import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { X, ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react'

export const Cart = () => {
  const { isCartOpen, closeCart, cart, incrementQuantity, decrementQuantity, removeFromCart, getCartTotal } = useCart()

  const total = getCartTotal()

  const generateWhatsAppMessage = () => {
    const header = '¡Hola! Estoy interesado en los siguientes productos:\n\n'
    const items = cart.map(item => `*${item.name}* (x${item.quantity})`).join('\n')
    return `${header}${items}`
  }

  const whatsappUrl = `https://wa.me/573042181853?text=${encodeURIComponent(generateWhatsAppMessage())}`

  return (
    <div 
      className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={closeCart}
    >
      <div 
        className="absolute inset-0 bg-dark/50"
      ></div>
      <div 
        className={`absolute top-0 right-0 h-full w-full max-w-md bg-dark/80 backdrop-blur-lg text-light shadow-2xl transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-secondary/20">
            <h2 className="font-display text-2xl font-semibold">Tu Carrito</h2>
            <button onClick={closeCart} className="hover:text-accent transition-colors"><X size={28} /></button>
          </div>

          {/* Cart Content */}
          {cart.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
              <ShoppingCart size={64} className="text-secondary/50 mb-4" />
              <h3 className="font-display text-xl mb-2">Tu carrito está vacío</h3>
              <p className="text-secondary">Añade productos para verlos aquí.</p>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex items-start gap-4 bg-primary/30 p-4 rounded-lg">
                  <div className="relative w-24 aspect-[1200/859] rounded-md overflow-hidden">
                    <Image src={item.image} alt={item.name} fill className="object-contain" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold font-display text-lg">{item.name}</p>
                    <p className="text-accent font-semibold">{item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => decrementQuantity(item.id)} className="p-1 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"><Minus size={16}/></button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <button onClick={() => incrementQuantity(item.id)} className="p-1 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"><Plus size={16}/></button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-light hover:text-red-500 transition-colors">
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-secondary/20 space-y-4">
              <div className="flex justify-between items-center font-display text-xl">
                <span className="text-secondary">Subtotal:</span>
                <span className="font-bold text-light">{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(total)}</span>
              </div>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-accent text-light py-3 px-4 rounded-lg flex items-center justify-center gap-3 font-bold text-lg hover:bg-secondary hover:text-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <ShoppingCart size={22} />
                <span>Comprar por WhatsApp</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}