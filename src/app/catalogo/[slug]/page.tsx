'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { getProductBySlug, Product } from '@/lib/products';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { useCart } from '@/context/CartContext';
import { CheckCircle, Minus, Plus, ShoppingCart, Eye } from 'lucide-react';

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState<string | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isBlank, setIsBlank] = useState(false);
  const { addToCart } = useCart();
  const params = useParams();

  const parsePrice = (price: string): number => {
    return parseFloat(price.replace(/[^\d,]/g, '').replace(',', '.'));
  };

  useEffect(() => {
    if (params.slug) {
      const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
      const fetchedProduct = getProductBySlug(slug);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        if (fetchedProduct.bundle) {
          setQuantity(fetchedProduct.bundle.minUnits);
        }
      }
    }
  }, [params.slug]);

  useEffect(() => {
    if (product) {
      let price = 0;
      if (product.bundle) {
        const bundlePrice = parsePrice(product.bundle.price);
        const additionalPrice = parsePrice(product.bundle.additionalUnitPrice);
        const additionalUnits = quantity - product.bundle.minUnits;
        price = bundlePrice + (additionalUnits > 0 ? additionalUnits * additionalPrice : 0);
      } else if (product.price) {
        price = parsePrice(product.price) * quantity;
      }
      setTotalPrice(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(price));
    }
  }, [product, quantity]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setAddedToCart(true);
      setTimeout(() => {
        setAddedToCart(false);
      }, 1500);
    }
  };

  const handleQuantityChange = (amount: number) => {
    const minQuantity = product?.bundle?.minUnits || 1;
    setQuantity(prev => Math.max(minQuantity, prev + amount));
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="text-light">Cargando producto...</div>
      </div>
    );
  }

  const blankImageSrc = product.image.replace(/(\.\w+$)/, '-blank$1');
  const whatsappMessage = `¡Hola! Estoy interesado en el producto: ${product.name} (x${quantity}) por un total de ${totalPrice}. ¿Podrían darme más información?`;

  return (
    <div className="bg-background text-light min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="relative aspect-[1200/859] rounded-xl overflow-hidden shadow-2xl shadow-accent/10">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className={`object-contain transition-opacity duration-500 ${isBlank ? 'opacity-0' : 'opacity-100'}`}
            />
            <Image
              src={blankImageSrc}
              alt={product.name}
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
          
          <div>
            <span className="text-sm font-semibold text-accent tracking-widest uppercase">{product.category}</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-light mt-2 mb-4">{product.name}</h1>
            <p className="text-secondary text-lg mb-6">{product.description}</p>
            
            <div className="bg-dark rounded-lg p-6 mb-6 border border-secondary/30">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-4xl font-display font-bold text-light">
                    {totalPrice}
                  </p>
                  {product.bundle && (
                     <p className="text-secondary mt-1">
                      Paquete con mínimo {product.bundle.minUnits} unidades.
                    </p>
                  )}
                </div>
                <div className="flex items-center border border-secondary/30 rounded-lg">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="p-3 text-secondary hover:text-light transition-colors"
                    aria-label="Disminuir cantidad"
                    disabled={product.bundle ? quantity <= product.bundle.minUnits : quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 font-bold text-lg">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="p-3 text-secondary hover:text-light transition-colors"
                    aria-label="Aumentar cantidad"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={handleAddToCart}
                  disabled={addedToCart}
                  className={`w-full flex items-center justify-center gap-2 rounded-lg p-4 text-lg font-semibold transition-all duration-300 ${
                    addedToCart
                      ? 'bg-green-500 text-white'
                      : 'bg-accent text-light hover:bg-secondary'
                  }`}
                >
                  {addedToCart ? <CheckCircle /> : <ShoppingCart />}
                  {addedToCart ? 'Añadido' : 'Añadir al carrito'}
                </button>
                <WhatsAppButton message={whatsappMessage} phoneNumber="+573042181853" />
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-light mb-3">Usos prácticos</h3>
              <ul className="space-y-2">
                {product.practicalUses.map((use, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-accent w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-secondary">{use}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
