export type Product = {
  id: string;
  slug: string;
  name: string;
  category: 'Tags' | 'Stickers' | 'Cards';
  description: string;
  price?: string;
  bundle?: {
    minUnits: number;
    price: string;
    additionalUnitPrice: string;
  };
  image: string;
  practicalUses: string[];
  isMostSold?: boolean;
};

export const products: Product[] = [
  {
    id: 'mini-cd-case',
    slug: 'mini-cd-case',
    name: 'Mini Case',
    category: 'Tags',
    description: 'Personaliza tu tag Mini CD con una carátula que completa su icónica estética retro.',
    price: '$20.000',
    image: '/images/mini-cd-case.webp',
    practicalUses: [
      'Regala una playlist.',
      'Colección retro personalizada.',
      'Merchandising original para fans.',
      'Compartir instrucciones de uso.',
    ],
    isMostSold: true,
  },
  // Categoria: Tags
  {
    id: 'tag-custom',
    slug: 'tag-custom',
    name: 'Tag Custom',
    category: 'Tags',
    description: 'Un tag circular y minimalista con tu logo que transforma cualquier superficie en un punto de conexión instantáneo.',
    bundle: {
      minUnits: 3,
      price: '$20.000',
      additionalUnitPrice: '$5.000',
    },
    image: '/images/tag-custom.webp',
    practicalUses: [
      'Compartir tu contacto.',
      'Mostrar tu portafolio.',
      'Dar acceso a la red Wi-Fi.',
      'Compartir una dirección de wallet de Bitcoin.',
    ],
  },
  {
    id: 'tag-mini-cd',
    slug: 'tag-mini-cd',
    name: 'Tag CD',
    category: 'Tags',
    description: 'Fusiona la nostalgia de un mini CD con tecnología NFC para compartir tu universo sonoro de forma memorable.',
    bundle: {
      minUnits: 3,
      price: '$20.000',
      additionalUnitPrice: '$5.000',
    },
    image: '/images/tag-mini-cd.webp',
    practicalUses: [
      'Regalar una playlist.',
      'Promocionar tu nuevo single o álbum.',
      'Como merchandising original para fans.',
      'Compartir un podcast exclusivo.',
    ],
  },
  {
    id: 'tag-pet',
    slug: 'tag-pet',
    name: 'PetTag',
    category: 'Tags',
    description: 'Mantén a tu mascota segura y conectada con una placa inteligente que comparte su información esencial al instante.',    price: '$12.000',
    image: '/images/tag-pet.webp',
    practicalUses: [
      'Almacenar datos de contacto del dueño.',
      'Guardar información médica importante.',
      'Registrar la dirección de casa en Google Maps.',
      'Compartir el perfil de Instagram de tu mascota.',
    ],
  },

  // Categoria: Stickers
  {
    id: 'sticker-custom',
    slug: 'sticker-custom',
    name: 'Sticker Custom',
    category: 'Stickers',
    description: 'Adhiere este sticker personalizable a cualquier objeto y conviértelo en una puerta de entrada a tu mundo digital.',
    bundle: {
      minUnits: 5,
      price: '$20.000',
      additionalUnitPrice: '$3.500',
    },
    image: '/images/sticker.webp',
    practicalUses: [
      'Pegarlo en tu laptop para compartir tu LinkedIn.',
      'En tu agenda para acceder a tus notas digitales.',
      'En el empaque de tus productos para mostrar un video de uso.',
      'Como detalle interactivo en eventos.',
    ],
  },
  {
    id: 'tag-menu',
    slug: 'tag-menu',
    name: 'Menú sticker',
    category: 'Stickers',
    description: 'Eleva la experiencia de tu restaurante con un sticker elegante que presenta tu menú de forma fluida y sin esfuerzo.',
    bundle: {
      minUnits: 12,
      price: '$40.000',
      additionalUnitPrice: '$3.500',
    },
    image: '/images/menu.webp',
    practicalUses: [
      'Acceso al menú digital en restaurantes.',
      'Ver la carta de bebidas en un bar.',
      'Mostrar especiales del día.',
      'Pagar la cuenta a través de un enlace.',
    ],
  },

  // Categoria: Cards
  {
    id: 'card-custom',
    slug: 'card-custom',
    name: 'Card Custom',
    category: 'Cards',
    description: 'Redefine el networking con una tarjeta de presentación premium que comparte tu mundo profesional con un solo toque.',
    price: '$35.000',
    image: '/images/card-custom.webp',
    practicalUses: [
      'Networking en eventos y conferencias.',
      'Compartir información de contacto.',
      'Mostrar tu sitio web o portafolio.',
      'Mostrar tus redes sociales o proyectos.',
    ],
  },
  {
    id: 'card-resena-premium',
    slug: 'card-resena-premium',
    name: 'Reseña Premium',
    category: 'Cards',
    description: 'Facilita la obtención de reseñas valiosas con una tarjeta sofisticada que refleja la calidad de tu servicio.',
    price: '$20.000',
    image: '/images/card-v-custom.webp',
    practicalUses: [
      'Entregar al cliente después de un servicio premium.',
      'En hoteles para calificar la estadía.',
      'Para agentes inmobiliarios después de mostrar una propiedad.',
      'En consultorios para evaluar la atención.',
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getAllProducts(): Product[] {
  return products;
}