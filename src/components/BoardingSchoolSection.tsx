import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";
const BoardingSchoolSection = () => {
  const internadoImages = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    image: `/carousel_images/internado_carousel/${i + 1}.jpg`,
    alt: `IMG Academy Internado ${i + 1}`
  }));

  return <section className="bg-muted px-6 py-16">
      <div className="mb-8">
        <AutoScrollCarousel images={internadoImages} height="h-80" />
      </div>

      <h2 className="text-4xl font-bold text-primary mb-8">BOARDING SCHOOL</h2>
      
      <p className="text-foreground text-lg leading-relaxed mb-8">Ninguna escuela en el mundo puede igualar a IMG Academy en cuanto a su programación y experiencia que prepara intencionalmente a los estudiantes-atletas para el éxito universitario y la vida más allá.</p>

      <Button asChild>
        <Link to="/boarding">Saber Más</Link>
      </Button>
    </section>;
};
export default BoardingSchoolSection;