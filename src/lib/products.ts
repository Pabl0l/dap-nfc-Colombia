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
    description: 'El punto de partida. Un tag NFC circular y minimalista, personalizable con tu logo para un branding sutil y elegante. Ideal para vincular a tu red Wi-Fi, menú digital o portafolio.',
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
    description: 'Complemento para tu tag de Mini CD. Un tag diseñado para la carátula, completando la experiencia retro y protegiendo tu tag.',
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
    description: 'Estilo retro y nostálgico. Un tag con apariencia de mini CD para conectar tu música, podcast o playlist con un solo toque. El favorito de los artistas.',
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
    description: 'La placa de identificación inteligente para tu mascota. Almacena su información de contacto, historial médico y mantenla segura con un toque.',
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
    description: 'Versatilidad total. Un sticker NFC que puedes adherir a cualquier superficie. Personalízalo con tu marca y úsalo en portátiles, agendas o empaques.',
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
    description: 'La evolución del QR. Un sticker elegante para que los clientes de tu restaurante accedan al menú de forma instantánea, rápida y sin usar la cámara.',
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
    description: 'Tu tarjeta de presentación definitiva. Un diseño premium con tecnología NFC para compartir tu contacto, redes y portafolio de manera profesional e inolvidable.',
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
    description: 'Una tarjeta elegante y duradera para solicitar reseñas. Perfecta para negocios que cuidan cada detalle y buscan un feedback de alta calidad.',
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
