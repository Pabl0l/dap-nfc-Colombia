### Proyecto dap nfc Colombia

Propuesta de Valor Alternativa tecnológica superior al QR No depende de cámara ni apps externas → basta acercar el celular. Más rápida, intuitiva y confiable → una experiencia “mágica” para el usuario. Ocupa menos espacio y se integra mejor en cualquier superficie (mesa, tarjeta, empaque). Estética y personalización Pegatinas y tarjetas que se ven modernas, limpias y futuristas. Personalizables con colores, logos y diseños que refuerzan la identidad de marca. Capacidad de diferenciar negocios (restaurantes, tiendas) y profesionales (freelancers, creadores). Practicidad y eficiencia Reemplaza impresos físicos (menús, tarjetas, folletos), reduciendo costos y desorden. Configuración inmediata: WhatsApp, redes sociales, portafolio, ubicación, WiFi. Solución versátil: funciona en restaurantes, oficinas, eventos, networking o uso personal. Impacto ecológico y digitalización accesible Menos papel → alternativa más sostenible y alineada con la tendencia “eco-friendly”. Facilita la digitalización de pymes y emprendedores con un producto económico y fácil de usar. Innovación y diferenciación Aporta un aura de modernidad y prestigio: “mi negocio/proyecto está al día con la tecnología”. Genera curiosidad y conversación: usar NFC crea una experiencia memorable que sorprende a clientes y contactos. 

### Contexto: 
* El sitio web es para un negocio/emprendimiento. 
* Objetivo: dar a conocer el emprendimiento en internet y que los clientes puedan comunicarse directamente conmigo por WhatsApp para solicitar productos (no quiero integrar pagos en línea por ahora). 
* Deseo que sea moderno, rápido, responsive y con buen SEO. 
* La solución debe ser lo más sencilla de entender y mantener, también debe ser lo más práctica posible. 
* Tecnologías sugeridas: 
**Next.js** para el frontend, **Tailwind CSS** para estilos, hosting en **Vercel**. 
* Deseo tener botones de WhatsApp en los productos (con mensajes prellenados, puede haber un pequeño formulario para ingresar datos como productos en los que está interesad, ETC). 
* Si es posible, que la estructura permita crecer más adelante (ejemplo: integrar CMS o más funcionalidades). 
### Lo que quiero de ti: 
1. Ayúdame a generar la **estructura base del proyecto** (carpetas, archivos iniciales, dependencias). 
2. Incluye ejemplos de código de las páginas principales: 
* **Inicio**: presentación del negocio, llamada a la acción. 
* **Catálogo de productos**: lista simple de productos con botón para añadir al carrito y que al darle comprar se redirija a whatsapp con un mensaje indicando todos los productos en los que está interesado el cliente. 
* **Contacto**: botón flotante con enlace a WhatsApp. 
3. Usa buenas prácticas modernas (SEO, performance, responsive). 
4. No necesito backend complejo ni pagos integrados. 
5. Hazlo como si fueras a entregar la **plantilla base de un proyecto real** que luego yo pueda personalizar con mis textos e imágenes. ### Texto del proyecto: Nombre del proyecto: dap o dap nfc colombia 


### 📌 Business Model Canvas – Proyecto dap NFC Colombia 
1. Propuesta de Valor Alternativa tecnológica superior al QR 
2. Segmentos de Clientes Restaurantes y pymes → packs de stickers para menús, ubicación, contacto, WiFi. Profesionales y freelancers → tarjetas NFC como alternativa a la tarjeta física tradicional. Curiosos/techies → packs de pegatinas en blanco para experimentar. 
3. Canales WhatsApp (Nequi/Daviplata como método de pago). Instagram + TikTok → para mostrar demos visuales y atraer leads. Página web (landing) → catálogo, información, contacto directo. Ventas presenciales iniciales → amigos, universidad, primeros clientes de confianza. 
4. Relaciones con Clientes Atención personalizada en WhatsApp (asesoría rápida + demo en video). Contenido educativo en redes: “Cómo usar NFC”, “Ejemplos de uso en restaurantes”. 
5. Fuentes de Ingreso Venta directa de productos: Pegatinas NFC crudas (packs). Stickers configurados básicos. Tarjetas NFC personalizadas. Margen extra por personalización (diseños impresos o branding). Packs para restaurantes/pymes (10–50 stickers configurados). 
6. Recursos Clave Stock inicial de 200 unidades. Conocimientos de programación/web → crear landings y demos rápidos. Branding propio (logo, estilo de marca). Contacto con diseñadores gráficos para personalización. 
7. Actividades Clave Importar y gestionar inventario. Configurar y probar stickers/tarjetas. Diseñar branding básico (propio y para productos). Crear contenido en redes sociales (videos cortos, demos). Atender ventas y soporte por WhatsApp. 
8. Socios Clave Diseñadores gráficos → para personalización. Proveedores internacionales → de tags NFC a bajo costo. Amigos/contactos → primeros clientes y embajadores. 
9. Estructura de Costos Compra/importación de NFC tags/stickers/tarjetas. Costos de impresión y personalización (si aplica). Herramientas de marketing digital (mínimo al inicio). Empaque básico (bolsas, etiquetas). Envíos. 
10 Productos principales: 
#Tags 
Tag Custom Mini CD Mini Album Menu PetTag 
#Stickers 
Sticker custom Mini cd (case) Reseña econo 
#Card 
Card Custom Reseña premium iCarnets



### Instrucciones

- Usa Next.js
- Tailwind para css

### Estructura

dap-nfc-colombia/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx                # Home
│   ├── catalogo/
│   │   └── page.tsx            # Catálogo de productos
│   └── contacto/
│       └── page.tsx            # Contacto
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── WhatsAppButton.tsx
│   └── FloatingWhatsApp.tsx
├── lib/
│   └── products.ts             # Lista inicial de productos
├── public/
│   ├── logo.png
│   └── images/                 # Carpeta para imágenes de productos
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── package.json


### Reglas de negocio
- No debe haber inicio de sesión pues todo se hará vía whatsapp
- El sitio web es solo de catálogo de producto / portafolio, no es un medio para realizar compras.
- El botón de whatsapp debe ser el objetiivo de este sitio ya que es atraves de whatsapp que se atenderá a los clientes.
- Se presta un servicio de alta calidad, "premium", por lo que el sitio web debe reflejar lo mismo.


### Colores de la marca

#59A5D8
#386FA4
#133C55
#010101
#f1f1f1


### Estilo

Debe ser premium, elegante, al mismo tiempo que tecnológico y sencillo.
Debe contar con buenas prácticas de programación, debe ser accesible. 
Debe ser 100% responsivo.
Debe contener animaciones suaves y fluidas.

### Tipografía

Poppins <- Títulos, subtitulos. https://fonts.google.com/specimen/Poppins
Outfit  <- Párrafos, descripciones. https://fonts.google.com/specimen/Outfit
