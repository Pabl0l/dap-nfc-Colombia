'use client'
// Página de detalle del producto

import { useState } from 'react';
import { getProductBySlug } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Eye, ShoppingCart, CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const [isBlank, setIsBlank] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const slug = params.slug;
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000); // Reset after 2 seconds
  };

  const blankImageSrc = product.image.replace(/(\.\w+$)/, '-blank$1');

  return (
    <div className="bg-dark text-light">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Image Column */}
          <div className="relative w-full aspect-[1200/859] bg-primary/10 rounded-xl flex items-center justify-center shadow-lg overflow-hidden animate-fade-in">
            <Image
              src={product.image}
              alt={`Imagen de ${product.name}`}
              fill
              className={`object-contain transition-opacity duration-500 ${isBlank ? 'opacity-0' : 'opacity-100'}`}
            />
            <Image
              src={blankImageSrc}
              alt={`Imagen de ${product.name}`}
              fill
              className={`absolute top-0 left-0 object-contain transition-opacity duration-500 ${isBlank ? 'opacity-100' : 'opacity-0'}`}
            />
            <button 
              onClick={() => setIsBlank(!isBlank)}
              className="absolute top-4 right-4 z-10 bg-dark/50 text-light rounded-full p-2 hover:bg-dark transition-colors backdrop-blur-sm"
              aria-label="Toggle blank image"
            >
              <Eye size={22} />
            </button>
          </div>

          {/* Details Column */}
          <div className="flex flex-col h-full animate-subtle-slide-up">
            <div style={{ animationDelay: '100ms' }}>
              <span className="text-sm font-medium text-accent">{product.category}</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-light mt-2 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-light mb-6">
                {product.description}
              </p>
              {product.slug === 'tag-menu' && (
                <div className="bg-primary/30 p-4 rounded-lg mb-6 border border-accent/50 animate-fade-in">
                  <p className="text-light text-base font-medium">
                    ¿Necesitas una solución para tu negocio? Para restaurantes y empresas que requieren una cantidad superior, ofrecemos condiciones especiales.
                  </p>
                  <p className="text-accent text-sm mt-2">
                    Contáctanos para una propuesta personalizada.
                  </p>
                </div>
              )}
              <p className="font-display text-4xl font-bold text-light mb-8">
                {product.price}
              </p>
            </div>

            <div className="mt-auto pt-8" style={{ animationDelay: '300ms' }}>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <button
                  onClick={handleAddToCart}
                  className={`w-full sm:w-[48%] py-3 px-4 sm:py-4 sm:px-6 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    addedToCart
                      ? 'bg-green-500 text-white'
                      : 'bg-accent text-light hover:bg-secondary hover:text-light'
                  }`}
                  disabled={addedToCart}
                >
                  {addedToCart ? (
                    <><CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" /> Añadido</>
                  ) : (
                    <><ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" /> Añadir al Carrito</>
                  )}
                </button>
                <Link
                  href={`https://wa.me/+573001234567?text=Hola,%20estoy%20interesado%20en%20el%20producto:%20${product.name}%20del%20catálogo%20de%20dap%20NFC%20Colombia.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-[48%] py-3 px-4 sm:py-4 sm:px-6 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 bg-green-500 text-white hover:bg-green-600"
                >
                  <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="hidden sm:inline">Preguntar por WhatsApp</span>
                  <span className="sm:hidden">WhatsApp</span>
                </Link>
              </div>
            </div>

            {/* Practical Uses Section */}
            {product.practicalUses && product.practicalUses.length > 0 && (
              <div className="mt-12" style={{ animationDelay: '200ms' }}>
                <h2 className="font-display text-2xl font-bold text-light mb-5">
                  Usos Prácticos
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.practicalUses.map((use, index) => (
                    <div key={index} className="bg-primary/20 p-4 rounded-lg shadow-sm">
                      <p className="text-secondary">{use}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}