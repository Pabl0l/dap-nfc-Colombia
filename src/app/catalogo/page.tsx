import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function CatalogoPage() {
  return (
    <div className="bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-16 animate-subtle-slide-up">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-light">
            Nuestro Catálogo
          </h1>
          <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
            Explora nuestra colección de productos NFC diseñados para conectar tu mundo digital con un solo toque.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}