import Image from 'next/image';
import { Zap, Smartphone, Share2, Settings, CheckCircle } from 'lucide-react';

export default function SobreNFCPage() {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-brand-blue-light" />,
      title: "¿Qué es la Tecnología NFC?",
      description: "Near Field Communication (NFC) es una tecnología de comunicación inalámbrica de corto alcance que permite el intercambio de datos entre dispositivos con solo acercarlos.",
      image: "/images/placeholder.svg",
      reverse: false
    },
    {
      icon: <Smartphone className="w-12 h-12 text-brand-blue-light" />,
      title: "Cómo Funciona",
      description: "Simplemente acerca cualquier smartphone moderno al tag NFC. No se necesitan aplicaciones especiales - el sistema operativo detecta automáticamente la información y pregunta al usuario si desea abrirla.",
      image: "/images/placeholder.svg",
      reverse: true
    },
    {
      icon: <Share2 className="w-12 h-12 text-brand-blue-light" />,
      title: "Comparte al Instante",
      description: "Comparte tus redes sociales, portafolio, menús digitales, Wi-Fi, números de contacto, promociones y mucho más con un simple toque.",
      image: "/images/placeholder.svg",
      reverse: false
    },
    {
      icon: <Settings className="w-12 h-12 text-brand-blue-light" />,
      title: "Fácil Configuración",
      description: "Configuramos tus tags NFC con la información que necesites. Puedes actualizar el contenido en cualquier momento sin necesidad de reemplazar el producto físico.",
      image: "/images/placeholder.svg",
      reverse: true
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-brand-blue-light" />,
      text: "No requiere batería ni energía externa"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-brand-blue-light" />,
      text: "Compatible con la mayoría de smartphones modernos"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-brand-blue-light" />,
      text: "Interacción instantánea - menos de 1 segundo"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-brand-blue-light" />,
      text: "Seguro - requiere proximidad de 4-10 cm"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-brand-blue-light" />,
      text: "Contenido actualizable remotamente"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-brand-blue-light" />,
      text: "Duradero y resistente al uso"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h1 className="font-display text-5xl md:text-6xl font-extrabold text-brand-light mb-6">
          La Magia del <span className="text-brand-blue-light">NFC</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Descubre cómo la tecnología NFC está transformando la manera en que compartimos información, 
          creando experiencias interactivas y sin fricciones para tus clientes y contactos.
        </p>
      </section>

      {/* Features Sections */}
      {features.map((feature, index) => (
        <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-brand-blue-dark/20' : ''}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  {feature.icon}
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-light ml-4">
                    {feature.title}
                  </h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="relative w-full h-80 bg-brand-dark rounded-lg overflow-hidden flex items-center justify-center">
                  <Image 
                    src={feature.image} 
                    alt={feature.title}
                    width={400}
                    height={300}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Benefits Section */}
      <section className="py-20 bg-brand-blue-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-light mb-4">
              Ventajas Clave
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Por qué la tecnología NFC es la elección perfecta para conectar tu mundo físico con el digital
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-4">
                {benefit.icon}
                <p className="text-brand-light font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-light mb-6">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explora nuestro catálogo de productos NFC y descubre cómo podemos transformar 
            la manera en que conectas con tu audiencia.
          </p>
          <a 
            href="/catalogo"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue-light text-white font-bold rounded-full transition-all duration-300 hover:bg-brand-blue hover:scale-105 shadow-lg shadow-brand-blue/20"
          >
            Ver Catálogo
          </a>
        </div>
      </section>
    </div>
  );
}