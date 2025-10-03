export type Product = {
  id: string;
  slug: string;
  name: string;
  category: 'Tags' | 'Stickers' | 'Cards';
  description: string;
  price: string;
  image: string;
  practicalUses: string[];
};

export const products: Product[] = [
  // Categoria: Tags
  {
    id: 'tag-custom',
    slug: 'tag-custom',
    name: 'Tag Custom',
    category: 'Tags',
    description: 'Un tag circular y minimalista con tu logo que transforma cualquier superficie en un punto de conexión instantáneo.',
    price: '$18.000',
    image: '/images/tag-custom.jpg',
    practicalUses: [
      'Compartir tu contacto profesional.',
      'Mostrar tu portafolio de diseño o fotografía.',
      'Dar acceso a la red Wi-Fi de tu negocio.',
      'Lanzar una playlist de Spotify.',
    ],
  },
  {
    id: 'mini-cd-case',
    slug: 'mini-cd-case',
    name: 'Mini Case',
    category: 'Tags',
    description: 'Protege y personaliza tu tag Mini CD con una carátula que completa su icónica estética retro.',
    price: '$12.000',
    image: '/images/mini-cd-case.jpg',
    practicalUses: [
      'Decorar y proteger tu tag Mini CD.',
      'Añadir un código QR de respaldo.',
      'Personalizar la carátula con el arte de tu álbum.',
      'Incluir instrucciones de uso.',
    ],
  },
  {
    id: 'tag-mini-cd',
    slug: 'tag-mini-cd',
    name: 'Mini CD',
    category: 'Tags',
    description: 'Fusiona la nostalgia de un mini CD con tecnología NFC para compartir tu universo sonoro de forma memorable.',
    price: '$25.000',
    image: '/images/tag-mini-cd.jpg',
    practicalUses: [
      'Promocionar tu nuevo single o álbum.',
      'Compartir un podcast exclusivo.',
      'Regalar una playlist curada en un evento.',
      'Como merchandising original para fans.',
    ],
  },
  {
    id: 'tag-pet',
    slug: 'tag-pet',
    name: 'PetTag',
    category: 'Tags',
    description: 'Mantén a tu mascota segura y conectada con una placa inteligente que comparte su información esencial al instante.',
    price: '$20.000',
    image: '/images/tag-pet.jpg',
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
    price: '$15.000',
    image: '/images/sticker.jpg',
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
    price: '$22.000',
    image: '/images/menu.jpg',
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
    price: '$45.000',
    image: '/images/card-custom.jpg',
    practicalUses: [
      'Networking en eventos y conferencias.',
      'Compartir tu VCard (tarjeta de contacto digital).',
      'Mostrar tu sitio web o portafolio.',
      'Impresionar a clientes potenciales.',
    ],
  },
  {
    id: 'card-resena-premium',
    slug: 'card-resena-premium',
    name: 'Reseña Premium',
    category: 'Cards',
    description: 'Facilita la obtención de reseñas valiosas con una tarjeta sofisticada que refleja la calidad de tu servicio.',
    price: '$55.000',
    image: '/images/card-v-custom.jpg',
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
