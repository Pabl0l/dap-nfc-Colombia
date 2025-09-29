import Image from 'next/image';
import type { Product } from '@/lib/products'
import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="bg-brand-blue-dark/20 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/20 hover:scale-105 border border-brand-blue/20">
      <div className="relative w-full h-80 bg-brand-dark flex items-center justify-center">
        <Image src={product.image} alt={product.name} width={240} height={240} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold text-brand-blue-light tracking-widest uppercase">{product.category}</span>
        <h3 className="font-display text-2xl font-bold text-brand-light mt-2 mb-3 truncate">{product.name}</h3>
        <p className="text-gray-400 font-sans text-sm h-20 overflow-hidden">{product.description}</p>
        
        <div className="mt-6 flex justify-between items-center">
          <p className="text-2xl font-display font-bold text-brand-light">
            {product.price}
          </p>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-brand-blue-light text-white rounded-full p-3 flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300"
            aria-label={`Añadir ${product.name} al carrito`}
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
