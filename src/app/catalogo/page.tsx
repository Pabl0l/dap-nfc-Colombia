'use client'

import { useState } from 'react'
import { products, Product } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import { ShoppingBag, X } from 'lucide-react'

export default function CatalogoPage() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const generateWhatsAppMessage = () => {
    const phoneNumber = '573042181853'; // Reemplaza con tu número
    let message = '¡Hola! Estoy interesado en los siguientes productos de dap:\n\n';
    
    const productCounts = cart.reduce((acc, product) => {
      acc[product.name] = (acc[product.name] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    for (const [name, count] of Object.entries(productCounts)) {
      message += `- ${name} (x${count})\n`;
    }

    message += '\nQuedo atento a la información para continuar con la compra. ¡Gracias!';
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
      <div className="text-center mb-16">
        <h1 className="font-display text-5xl md:text-6xl font-extrabold text-brand-light">Nuestro Catálogo</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">Explora nuestra colección de productos NFC diseñados para conectar tu mundo digital.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-8 right-8 z-50 bg-brand-blue-dark/80 backdrop-blur-lg rounded-lg p-6 shadow-2xl w-full max-w-sm border border-brand-blue/30">
          <h3 className="font-display text-2xl font-bold text-brand-light flex items-center"><ShoppingBag className="mr-3"/> Tu Pedido</h3>
          <div className="my-4 pr-2 max-h-48 overflow-y-auto">
            {Object.entries(cart.reduce((acc, product) => {
                acc[product.id] = (acc[product.id] || { ...product, count: 0 });
                acc[product.id].count++;
                return acc;
              }, {} as Record<string, Product & { count: number }>))
              .map(([key, { name, count }], index) => (
              <div key={`${key}-${index}`} className="flex justify-between items-center text-brand-light py-2">
                <span>{name} <span className="text-gray-400">x{count}</span></span>
                <button onClick={() => removeFromCart(key)} className="text-red-400 hover:text-red-300"><X size={18}/></button>
              </div>
            ))}
          </div>
          <a 
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-2 inline-flex items-center justify-center px-6 py-3 bg-brand-blue-light text-white font-bold rounded-lg transition-all duration-300 hover:bg-brand-blue shadow-lg"
          >
            Comprar por WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
