import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";
const ImgCampsSection = () => {
  const campsCarouselImages = Array.from({
    length: 12
  }, (_, i) => ({
    id: i + 1,
    image: `/carousel_images/camps_carousel/${i + 1}.${i === 0 || i === 9 ? 'JPG' : 'jpg'}`,
    alt: `Camps Image ${i + 1}`
  }));
  const campImages = [{
    id: 1,
    label: "Summer Camps",
    emoji: "⛺"
  }, {
    id: 2,
    label: "Day Camps",
    emoji: "🌅"
  }, {
    id: 3,
    label: "Sport Specific",
    emoji: "🏆"
  }, {
    id: 4,
    label: "Multi-Sport",
    emoji: "🎯"
  }, {
    id: 5,
    label: "Elite Training",
    emoji: "💪"
  }];
  return <section className="bg-background px-6 py-16">
      <AutoScrollCarousel images={campsCarouselImages} height="h-80" delay={3000} />
      <div className="mb-8">
        <Carousel className="w-full">
          <CarouselContent>
            {campImages.map(image => <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                
              </CarouselItem>)}
          </CarouselContent>
          
          
        </Carousel>
      </div>

      <h2 className="text-4xl font-bold text-primary mb-8">IMG CAMPS</h2>
      
      <p className="text-foreground text-lg leading-relaxed mb-8">Los campamentos deportivos de IMG Academy brindan a los atletas la plataforma para maximizar su potencial, ofreciendo opciones de programación personalizables únicas para la edad, nivel de habilidad y objetivos deportivos de cada uno. Con programas disponibles durante todo el año, los campamentos de IMG permiten a los atletas acceder a entrenamientos que pueden mejorar su juego durante casi todos los periodos de descanso en sus calendarios escolares o deportivos.</p>

      <Button asChild>
        <Link to="/camps">Saber Más</Link>
      </Button>
    </section>;
};
export default ImgCampsSection;