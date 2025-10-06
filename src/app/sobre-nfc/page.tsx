import { Zap, Smartphone, Share2, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import NfcAnimation from '@/components/NfcAnimation';
import HowItWorksAnimation from '@/components/HowItWorksAnimation'; 
import InstantShareAnimation from '@/components/InstantShareAnimation';

export default function SobreNFCPage() {
  const features = [
    {
      icon: <Zap className="w-10 h-10 text-accent" />,
      title: "¿Qué es?",
      description: "Near Field Communication (NFC) es una tecnología de comunicación inalámbrica de corto alcance que permite el intercambio de datos entre dispositivos con solo acercarlos.",
      reverse: false
    },
    {
      icon: <Smartphone className="w-10 h-10 text-accent" />,
      title: "¿Cómo Funciona?",
      description: "Simplemente acerca cualquier smartphone moderno al tag NFC. No se necesitan aplicaciones especiales - el sistema operativo detecta automáticamente la información y pregunta al usuario si desea abrirla.",
      reverse: true
    },
    {
      icon: <Share2 className="w-10 h-10 text-accent" />,
      title: "Comparte al Instante",
      description: "Comparte tus redes sociales, portafolio, menús digitales, Wi-Fi, números de contacto, promociones y mucho más con un simple toque.",
      reverse: false
    },

  ];

  const benefits = [
    { text: "No requiere batería ni energía externa" },
    { text: "Compatible con la mayoría de smartphones modernos" },
    { text: "Interacción instantánea - menos de 1 segundo" },
    { text: "Utiliza tecnología moderna y es estéticamente atractivo" },
    { text: "Contenido actualizable" },
    { text: "Duradero y resistente al uso" }
  ];

  return (
    <div className="bg-dark text-light pt-24 md:pt-32 pb-20 animate-fade-in">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 md:mb-28 animate-subtle-slide-up">
        <h1 className="font-display text-5xl md:text-7xl font-extrabold text-light mb-6">
          La Magia del <span className="text-accent">NFC</span>
        </h1>
        <p className="text-xl text-light max-w-3xl mx-auto">
          Descubre cómo la tecnología NFC está transformando la manera en que compartimos información, creando experiencias interactivas y sin fricciones.
        </p>
      </section>

      {/* Features Sections */}
      <div className="space-y-20 md:space-y-28">
        {features.map((feature, index) => (
          <section key={index} className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
              <div className="lg:w-1/2 animate-fade-in" style={{animationDelay: '200ms'}}>
                <div className="flex items-center mb-5">
                  <div className="bg-primary/30 p-3 rounded-full">{feature.icon}</div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-light ml-5">
                    {feature.title}
                  </h2>
                </div>
                <p className="text-lg text-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="lg:w-1/2 w-full animate-fade-in" style={{animationDelay: '400ms'}}>
                <div className="relative w-full aspect-square md:aspect-video rounded-xl flex items-center justify-center">
                  {index === 0 && <NfcAnimation />}
                  {index === 1 && <HowItWorksAnimation />}
                  {index === 2 && <InstantShareAnimation />}
                  {index > 2 && (
                    <div className="relative w-full aspect-video bg-primary/20 rounded-xl overflow-hidden flex items-center justify-center border border-secondary/20">
                      <div className="w-1/2 h-1/2 bg-secondary/10 rounded-lg transform rotate-45"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 mt-20 md:mt-28 bg-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-subtle-slide-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-light mb-4">
              Ventajas Clave
            </h2>
            <p className="text-xl text-light max-w-2xl mx-auto">
              Por qué la tecnología NFC es la elección perfecta para tu negocio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CheckCircle className="w-7 h-7 text-accent flex-shrink-0" />
                <p className="text-secondary font-medium text-lg">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-subtle-slide-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light mb-6">
            ¿Listo para Innovar?
          </h2>
          <p className="text-xl text-light mb-8 max-w-2xl mx-auto">
            Explora nuestro catálogo y descubre cómo podemos transformar la manera en que conectas con tu audiencia.
          </p>
          <Link 
            href="/catalogo"
            className="group inline-flex items-center justify-center px-8 py-4 bg-accent text-light font-bold rounded-full transition-all duration-300 hover:bg-secondary hover:text-light hover:scale-105 shadow-lg shadow-accent/20"
          >
            Ver Catálogo
          </Link>
        </div>
      </section>
    </div>
  );
}
