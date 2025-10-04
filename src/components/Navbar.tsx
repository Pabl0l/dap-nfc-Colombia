'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { openCart, cart } = useCart()
  const pathname = usePathname()

  // Handle scroll effect for the navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navClassName = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-dark/90' 
      : 'bg-transparent'
  }`

  return (
    <header className={navClassName}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-3xl font-display text-light">
            dap
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium text-light hover:text-accent transition-colors duration-300">
              Inicio
            </Link>
            <Link href="/catalogo" className="font-medium text-light hover:text-accent transition-colors duration-300">
              Catálogo
            </Link>
            <Link href="/sobre-nfc" className="font-medium text-light hover:text-accent transition-colors duration-300">
              Sobre NFC
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {pathname.startsWith('/catalogo') && (
              <button onClick={openCart} className="relative text-light hover:text-accent transition-colors">
                <ShoppingCart size={28} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-dark">
                    {cart.length}
                  </span>
                )}
              </button>
            )}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-light">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className={`fixed inset-0 z-40 bg-dark/95 backdrop-blur-sm md:hidden animate-fade-in`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link href="/" onClick={() => setIsOpen(false)} className="block text-3xl font-medium text-light hover:text-accent">
              Inicio
            </Link>
            <Link href="/catalogo" onClick={() => setIsOpen(false)} className="block text-3xl font-medium text-light hover:text-accent">
              Catálogo
            </Link>
            <Link href="/sobre-nfc" onClick={() => setIsOpen(false)} className="block text-3xl font-medium text-light hover:text-accent">
              Sobre NFC
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar