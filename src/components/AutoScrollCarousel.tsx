import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

interface AutoScrollCarouselProps {
  images: Array<{
    id: number;
    image: string;
    alt?: string;
  }>;
  height?: string;
  delay?: number;
}

const AutoScrollCarousel = ({ 
  images, 
  height = "h-48 sm:h-64 md:h-72 lg:h-80", 
  delay = 2500 
}: AutoScrollCarouselProps) => {
  const plugin = useRef(
    Autoplay({ delay, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
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
          {images.map(image => (
            <CarouselItem key={image.id} className="basis-auto flex-shrink-0">
              <div className={`${height} w-auto`}>
                <img 
                  src={image.image} 
                  alt={image.alt || `Image ${image.id}`}
                  className="h-full w-full sm:w-auto object-cover sm:object-contain filter brightness-95 saturate-100 contrast-105 transition-transform duration-500 ease-in-out" 
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default AutoScrollCarousel;