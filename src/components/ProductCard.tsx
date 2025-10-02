'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import { Eye, ShoppingCart, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1); // Añade 1 unidad por defecto
  };

  return (
    <Link 
      href={`/catalogo/${product.slug}`}
      className="block group bg-dark rounded-xl overflow-hidden border border-secondary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-[1200/859] bg-dark flex items-center justify-center overflow-hidden">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill
          className={`object-contain transition-transform duration-500 ease-in-out ${isHovered ? 'scale-105' : 'scale-100'}`} 
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold text-accent tracking-widest uppercase">{product.category}</span>
        <h3 className="font-display text-xl font-bold text-light mt-2 mb-3 truncate">{product.name}</h3>
        
        <div className="mt-4 flex justify-between items-center">
          <p className="text-2xl font-display font-bold text-light">
            {product.price}
          </p>
          <button 
            onClick={handleAddToCart} 
            className="bg-accent text-dark rounded-full p-3 flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:text-light scale-100 group-hover:scale-110"
            aria-label={`Añadir ${product.name} al carrito`}
          >
              <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;