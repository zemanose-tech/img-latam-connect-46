import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import logoWhite from "@/assets/img-logo-white.png";
import logoOverlay from "@/assets/logo-overlay.png";

const HeroSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  // Use instalaciones images for hero carousel
  const heroImages = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    image: `/carousel_images/instalaciones_carousel/${i + 1}.jpg`,
    alt: `IMG Academy Hero ${i + 1}`
  }));

  return <>
      {/* Hero Carousel Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Carousel 
          plugins={[plugin.current]}
          className="w-full h-full"
          opts={{
            align: "start",
            loop: true,
            dragFree: false,
            slidesToScroll: 1,
          }}
        >
          <CarouselContent className="h-full -ml-0">
            {heroImages.map(image => (
              <CarouselItem key={image.id} className="pl-0 basis-full">
                <div className="relative h-screen w-full">
                  <img 
                    src={image.image} 
                    alt={image.alt}
                    className="h-full w-full object-cover" 
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Static Logo Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <img 
            src={logoOverlay}
            alt="Logo Overlay"
            className="w-48 h-auto drop-shadow-2xl"
          />
        </div>
      </section>

      <section className="bg-primary text-white">
      {/* Logo Section */}
      

      {/* Award Badge */}
      

      {/* Main Heading */}
      <div className="px-6 pb-16">
        <h2 className="text-4xl font-bold leading-tight mb-8">
          UN CAMPUS.<br />
          POTENCIAL<br />
          ILIMITADO.
        </h2>
        <p className="text-lg leading-relaxed">
          En IMG Academy, reunimos a estudiantes-atletas apasionados con entrenadores y profesores de clase mundial, creando un entorno único donde el talento se transforma en resultados. Aquí, cada meta cuenta y cada logro se apoya con una atención personalizada. Año escolar 2024-2025.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-100 text-primary px-6 py-16">
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">100</div>
            <p className="text-sm">por ciento de aceptación universitaria</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">25</div>
            <p className="text-sm">admisiones estudiantiles a las 25 mejores universidades según US News</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">311</div>
            <p className="text-sm">estudiantes-atletas comprometidos con programas División I, II, III y NAIA</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">8</div>
            <p className="text-sm">compromisos estudiantiles con escuelas Ivy League</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">38</div>
            <p className="text-sm">Estudiosos AP</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">71</div>
            <p className="text-sm">países representados</p>
          </div>
        </div>
      </div>
    </section>
    </>;
};
export default HeroSection;