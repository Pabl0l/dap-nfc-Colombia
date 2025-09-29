'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasMounted])

  const navClassName = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled && hasMounted ? 'bg-brand-dark/90 backdrop-blur-sm' : 'bg-transparent'}`

  return (
    <header className={navClassName}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-3xl font-bold font-display text-brand-light tracking-wider">
            dap
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium text-brand-light hover:text-brand-blue-light transition-colors duration-300">
              Inicio
            </Link>
            <Link href="/sobre-nfc" className="font-medium text-brand-light hover:text-brand-blue-light transition-colors duration-300">
              Sobre NFC
            </Link>
            <Link href="/catalogo" className="font-medium text-brand-light hover:text-brand-blue-light transition-colors duration-300">
              Catálogo
            </Link>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-light">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-brand-dark/95 backdrop-blur-sm`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-brand-light hover:bg-brand-blue-dark">
            Inicio
          </Link>
          <Link href="/sobre-nfc" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-brand-light hover:bg-brand-blue-dark">
            Sobre NFC
          </Link>
          <Link href="/catalogo" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-brand-light hover:bg-brand-blue-dark">
            Catálogo
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar