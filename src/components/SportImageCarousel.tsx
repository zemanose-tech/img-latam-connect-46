import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface SportImageCarouselProps {
  sportName: string;
}

const SportImageCarousel = ({ sportName }: SportImageCarouselProps) => {
  // Placeholder images for each sport
  const carouselImages = [
    { id: 1, label: "Instalaciones Principales" },
    { id: 2, label: "Área de Entrenamiento" },
    { id: 3, label: "Equipamiento Especializado" },
    { id: 4, label: "Campos de Práctica" },
    { id: 5, label: "Centro de Acondicionamiento" }
  ];

  return (
    <div className="relative w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {carouselImages.map((image) => (
            <CarouselItem key={image.id}>
              <div className="relative h-96 bg-gray-400 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🏟️</div>
                    <p className="text-lg font-medium">{image.label}</p>
                    <p className="text-sm opacity-75">{sportName}</p>
                  </div>
                </div>
                {/* Sport name overlay in top-left corner */}
                <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                  <span className="font-bold text-sm">{sportName.toUpperCase()}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default SportImageCarousel;