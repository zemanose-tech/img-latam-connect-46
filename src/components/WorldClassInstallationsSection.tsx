import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";

const WorldClassInstallationsSection = () => {
  const instalacionesImages = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    image: `/carousel_images/instalaciones_carousel/${i + 1}.jpg`,
    alt: `Instalaciones IMG Academy ${i + 1}`
  }));

  return (
    <section className="bg-muted px-6 py-16">
      <div className="mb-8">
        <AutoScrollCarousel images={instalacionesImages} height="h-80" />
      </div>

      <h2 className="text-4xl font-bold text-primary mb-8">INSTALACIONES DE CLASE MUNDIAL</h2>
      
      <p className="text-foreground text-lg leading-relaxed mb-8">
        Nuestras instalaciones deportivas y académicas están diseñadas para inspirar la excelencia. Con más de 600 acres de campus, ofrecemos las mejores facilidades deportivas del mundo, desde campos profesionales hasta centros de alto rendimiento equipados con la tecnología más avanzada para el desarrollo atlético integral.
      </p>

      <Button asChild>
        <Link to="/facilities">Saber Más</Link>
      </Button>
    </section>
  );
};

export default WorldClassInstallationsSection;