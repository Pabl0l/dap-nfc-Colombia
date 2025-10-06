import { getProductBySlug, getAllProducts } from '@/lib/products';
import ProductDetailClient from '@/components/ProductDetailClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
};

export default ProductDetailPage;