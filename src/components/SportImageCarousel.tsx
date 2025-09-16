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
    
    if (sportName === "Lacrosse") {
      // Lacrosse carousel images (7 images)
      return Array.from({ length: 7 }, (_, i) => ({
        id: i + 1,
        image: `/carousel_images/lacrosse_carousel/${i + 1}.jpg`,
        alt: `Instalaciones de Lacrosse ${i + 1}`
      }));
    }
    
    if (sportName === "Performance") {
      // Performance carousel images (10 images)
      return Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        image: `/carousel_images/performance_carousel/${i + 1}.jpg`,
        alt: `Instalaciones de Performance ${i + 1}`
      }));
    }
    
    if (sportName === "Fútbol" || sportName === "Soccer") {
      // Soccer carousel images (10 images)
      return Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        image: `/carousel_images/soccer_carousel/${i + 1}.jpg`,
        alt: `Instalaciones de Fútbol ${i + 1}`
      }));
    }
    
    if (sportName === "Track" || sportName === "Atletismo") {
      // Track carousel images (23 images)
      return Array.from({ length: 23 }, (_, i) => ({
        id: i + 1,
        image: `/carousel_images/track_carousel/${i + 1}.jpg`,
        alt: `Instalaciones de Atletismo ${i + 1}`
      }));
    }
    
    if (sportName === "Baseball" || sportName === "Béisbol") {
      // Baseball carousel images (16 images)
      return Array.from({ length: 16 }, (_, i) => ({
        id: i + 1,
        image: `/carousel_images/baseball_carousel/${i + 1}.jpg`,
        alt: `Instalaciones de Béisbol ${i + 1}`
      }));
    }
    
    if (sportName === "Basketball" || sportName === "Baloncesto") {
      // Basketball carousel images (9 images)
      return Array.from({ length: 9 }, (_, i) => ({
        id: i + 1,
        image: `/carousel_images/basketball_carousel/${i + 1}.jpg`,
        alt: `Instalaciones de Baloncesto ${i + 1}`
      }));
    }
    
    if (sportName === "Football" || sportName === "Fútbol Americano") {
      // Football carousel images (15 images)
      return Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        image: `/carousel_images/football_carousel/${i + 1}.jpg`,
        alt: `Instalaciones de Fútbol Americano ${i + 1}`
      }));
    }
    
    if (sportName === "Adultos" || sportName === "Adult Programs" || sportName === "Programas de Adultos") {
      // Adult programs carousel images (8 images)
      return Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        image: `/carousel_images/adultos_carousel/${i + 1}.jpg`,
        alt: `Instalaciones de Programas de Adultos ${i + 1}`
      }));
    }
    
    // Default fallback for other sports
    return Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      image: `/carousel_images/camps_carousel/1.JPG`,
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