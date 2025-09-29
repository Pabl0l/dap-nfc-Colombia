export type Product = {
  id: string;
  name: string;
  category: 'Tags' | 'Stickers' | 'Cards';
  description: string;
  price: string;
  image: string;
};

export const products: Product[] = [
  // Categoria: Tags
  {
    id: 'tag-custom',
    name: 'Tag Custom',
    category: 'Tags',
    description: 'El punto de partida. Un tag NFC circular y minimalista, personalizable con tu logo para un branding sutil y elegante.',
    price: '$18.000',
    image: '/images/tag-custom.png',
  },
  {
    id: 'sticker-mini-cd-case',
    name: 'Mini Case',
    category: 'Tags',
    description: 'Complemento para tu tag de Mini CD. Un sticker diseñado para la carátula, completando la experiencia retro.',
    price: '$12.000',
    image: '/images/sticker-mini-cd-case.png',
  },
  {
    id: 'tag-mini-cd',
    name: 'Mini CD',
    category: 'Tags',
    description: 'Estilo retro y nostálgico. Un tag con apariencia de mini CD para conectar tu música o playlist con un solo toque.',
    price: '$25.000',
    image: '/images/tag-mini-cd.png',
  },
  {
    id: 'tag-pet',
    name: 'PetTag',
    category: 'Tags',
    description: 'La placa de identificación inteligente para tu mascota. Almacena su información de contacto y mantenla segura.',
    price: '$20.000',
    image: '/images/tag-pet.png',
  },

  // Categoria: Stickers
  {
    id: 'sticker-custom',
    name: 'Sticker Custom',
    category: 'Stickers',
    description: 'Versatilidad total. Un sticker NFC que puedes adherir a cualquier superficie. Personalízalo con tu marca.',
    price: '$15.000',
    image: '/images/placeholder.svg',
  },
  {
    id: 'sticker-resena',
    name: 'Reseña Econo',
    category: 'Stickers',
    description: 'Invita a tus clientes a dejar una reseña en Google o redes sociales con un sticker práctico y directo.',
    price: '$16.000',
    image: '/images/placeholder.svg',
  },
  {
    id: 'tag-menu',
    name: 'Menú sticker',
    category: 'Stickers',
    description: 'La evolución del QR. Un sticker elegante para que los clientes de tu restaurante accedan al menú de forma instantánea.',
    price: '$22.000',
    image: '/images/placeholder.svg',
  },

  // Categoria: Cards
  {
    id: 'card-custom',
    name: 'Card Custom',
    category: 'Cards',
    description: 'Tu tarjeta de presentación definitiva. Un diseño premium con tecnología NFC para compartir tu contacto profesionalmente.',
    price: '$45.000',
    image: '/images/placeholder.svg',
  },
  {
    id: 'card-resena-premium',
    name: 'Reseña Premium',
    category: 'Cards',
    description: 'Una tarjeta elegante y duradera para solicitar reseñas. Perfecta para negocios que cuidan cada detalle.',
    price: '$55.000',
    image: '/images/placeholder.svg',
  },
];