import AutoScrollCarousel from "@/components/AutoScrollCarousel";

interface SportImageCarouselProps {
  sportName: string;
}

const SportImageCarousel = ({ sportName }: SportImageCarouselProps) => {
  // Get images based on sport type
  const getCarouselImages = () => {
    if (sportName === "Tenis") {
      // Tennis carousel images (13 images)
      return Array.from({ length: 13 }, (_, i) => ({
        id: i + 1,
        image: `/carousel_images/tennis_carousel/${i + 1}.jpg`,
        alt: `Instalaciones de Tenis ${i + 1}`
      }));
    }
    
    if (sportName === "Golf") {
      // Golf carousel images (17 images)
      return Array.from({ length: 17 }, (_, i) => ({
        id: i + 1,
        image: `/carousel_images/golf_carousel/${i + 1}.jpg`,
        alt: `Instalaciones de Golf ${i + 1}`
      }));
    }
    
    // Placeholder images for other sports - using a generic sports facility image
    return Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      image: `/carousel_images/camps_carousel/1.JPG`, // Using existing camp image as placeholder
      alt: `Instalaciones de ${sportName} ${i + 1}`
    }));
  };

  const carouselImages = getCarouselImages();

  return (
    <AutoScrollCarousel 
      images={carouselImages} 
      height="h-64 sm:h-80 md:h-96" 
      delay={3000} 
    />
  );
};

export default SportImageCarousel;