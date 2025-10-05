'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import { Eye, ShoppingCart, CheckCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBlank, setIsBlank] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 1500);
  };

  const handleToggleBlank = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBlank(!isBlank);
  };

  const blankImageSrc = product.image.replace(/(\.\w+$)/, '-blank$1');

  return (
    <Link 
      href={`/catalogo/${product.slug}`}
      className="block group bg-dark rounded-xl overflow-hidden border border-secondary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-[1200/859] bg-dark flex items-center justify-center overflow-hidden">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill
          className={`object-contain transition-all duration-500 ease-in-out ${isHovered ? 'scale-105' : 'scale-100'} ${isBlank ? 'opacity-0' : 'opacity-100'}`} 
        />
        <Image 
          src={blankImageSrc} 
          alt={product.name} 
          fill
          className={`absolute top-0 left-0 object-contain transition-all duration-500 ease-in-out ${isHovered ? 'scale-105' : 'scale-100'} ${isBlank ? 'opacity-100' : 'opacity-0'}`} 
        />
        <button 
          onClick={handleToggleBlank}
          className="absolute top-3 right-3 z-10 bg-dark/50 text-light rounded-full p-2 hover:bg-dark transition-colors backdrop-blur-sm"
          aria-label="Toggle blank image"
        >
          <Eye size={20} />
        </button>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-accent tracking-widest uppercase">{product.category}</span>
        <h3 className="font-display text-xl font-bold text-light mt-2 mb-2 truncate">{product.name}</h3>
        <p className="text-secondary text-sm mb-4 h-20 overflow-hidden">
          {product.description}
        </p>
        
        <div className="mt-auto flex justify-between items-center">
          <p className="text-2xl font-display font-bold text-light">
            {product.price}
          </p>
          <button 
            onClick={handleAddToCart} 
            disabled={addedToCart}
            className={`rounded-full p-3 flex items-center justify-center transition-all duration-300 scale-100 group-hover:scale-110 ${
              addedToCart
                ? 'bg-green-500 text-white'
                : 'bg-accent text-light hover:bg-secondary hover:text-light'
            }`}
            aria-label={`Añadir ${product.name} al carrito`}
          >
            {addedToCart ? <CheckCircle size={20} /> : <ShoppingCart size={20} />}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;