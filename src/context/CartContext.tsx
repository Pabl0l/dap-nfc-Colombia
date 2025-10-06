'use client'

import { createContext, useContext, useState, ReactNode } from 'react';
import type { Product } from '@/lib/products';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  incrementQuantity: (productId: string) => void;
  decrementQuantity: (productId: string) => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product: Product, quantity: number) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const incrementQuantity = (productId: string) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId: string) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const parsePrice = (price: string): number => {
    return parseFloat(price.replace(/[^\d,]/g, '').replace(',', '.'));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      let itemTotal = 0;
      if (item.bundle) {
        const bundlePrice = parsePrice(item.bundle.price);
        const additionalPrice = parsePrice(item.bundle.additionalUnitPrice);
        const additionalUnits = item.quantity - item.bundle.minUnits;
        itemTotal = bundlePrice + (additionalUnits > 0 ? additionalUnits * additionalPrice : 0);
      } else if (item.price) {
        itemTotal = parsePrice(item.price) * item.quantity;
      }
      return total + itemTotal;
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cart, isCartOpen, openCart, closeCart, addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};