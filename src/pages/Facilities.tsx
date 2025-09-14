import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const Facilities = () => {
  const campusImages = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    image: `/src/assets/instalaciones_carousel/${i + 1}.jpg`
  }));

  const plugin = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: false })
  );
  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Header Video Section */}
      <section className="relative overflow-hidden">
        <div className="aspect-video w-full">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/1znorFaKdcc?autoplay=1&mute=1&loop=1&controls=0&playlist=1znorFaKdcc&modestbranding=1&rel=0&showinfo=0" title="IMG Academy Campus Tour" allow="autoplay; encrypted-media" allowFullScreen />
        </div>
      </section>

      <main>
        {/* Engaging Installations Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-primary mb-8">EL EPICENTRO DE LA EXCELENCIA DEPORTIVA</h2>
              <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-6">Un Campus Sin Límites</h3>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Extendido a través de más de <span className="font-bold text-primary">600 acres</span> en el corazón de Florida, IMG Academy representa la culminación de décadas de innovación en instalaciones deportivas. Cada centímetro de nuestro campus ha sido meticulosamente diseñado para desafiar los límites de lo posible.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Desde campos que han sido testigos de récords mundiales hasta laboratorios que definen el futuro del rendimiento atlético, nuestras instalaciones no solo entrenan atletas: <span className="font-bold text-primary">forjan leyendas</span>.
                </p>
              </div>
              
              
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                
                <h4 className="text-xl font-bold text-primary mb-4">Campos de Competición</h4>
                <p className="text-muted-foreground">Superficies que cumplen con estándares de la FIFA, UEFA y organismos internacionales. Cada campo es una réplica exacta de los escenarios donde se definen los campeonatos mundiales.</p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                
                <h4 className="text-xl font-bold text-primary mb-4">Ciencia del Rendimiento</h4>
                <p className="text-muted-foreground">Laboratorios equipados con tecnología utilizada por equipos olímpicos. Análisis biomecánico, pruebas de VO2 máximo y sistemas de recuperación de vanguardia.</p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                
                <h4 className="text-xl font-bold text-primary mb-4">Centros de Fuerza</h4>
                <p className="text-muted-foreground">Gimnasios que rivalizan con los utilizados por atletas profesionales de la NFL, NBA y ligas europeas. Equipamiento exclusivo y programas personalizados.</p>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
              <h3 className="text-3xl font-bold mb-6">La Diferencia IMG</h3>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
                "No es solo donde entrenas, es donde te transformas. Cada instalación, cada detalle, cada innovación está diseñada con un único propósito: <span className="font-bold">llevarte más allá de tus límites</span> y convertirte en el atleta que siempre soñaste ser."
              </p>
            </div>
          </div>
        </section>

        {/* Instagram-style Auto-scrolling Carousel */}
        <section className="w-full overflow-hidden">
          <Carousel 
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              slidesToScroll: 1,
              containScroll: "trimSnaps",
            }}
          >
            <CarouselContent className="flex gap-1">
              {campusImages.map(image => (
                <CarouselItem key={image.id} className="basis-auto flex-shrink-0">
                  <div className="h-72 w-auto">
                    <img 
                      src={image.image} 
                      alt={`Instalaciones IMG Academy ${image.id}`}
                      className="h-full w-auto object-contain filter brightness-95 saturate-100 contrast-105 transition-transform duration-500 ease-in-out" 
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Facilities;