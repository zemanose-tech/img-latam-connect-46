import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";
import { Button } from "@/components/ui/button";
import { InquiryModal } from "@/components/InquiryModal";
const Boarding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const internadoImages = Array.from({
    length: 14
  }, (_, i) => ({
    id: i + 1,
    image: `/carousel_images/internado_carousel/${i + 1}.jpg`,
    alt: `IMG Academy Internado ${i + 1}`
  }));
  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Internado Carousel Header */}
        <section className="w-full overflow-hidden">
          <AutoScrollCarousel images={internadoImages} height="h-96" />
        </section>

        {/* Hero Title Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              IMG ACADEMY – Donde el talento se convierte en éxito
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                IMG Academy es mucho más que un colegio preparatorio con opciones de internado y externado: es una institución dedicada a impulsar a los estudiantes-atletas hacia el éxito en la universidad, en su carrera y en la vida.
              </p>
              
              <p>
                Nuestro programa integral combina lo académico, lo deportivo y el desarrollo personal, ofreciendo una formación de excelencia que motiva y desafía a cada alumno en el aula, en el campo y fuera de él.
              </p>
              
              <p>
                Con un firme compromiso con la diversidad, reunimos a más de 1.500 estudiantes de 74 países, creando un entorno multicultural que enriquece el aprendizaje y fomenta la colaboración global. Los alumnos tienen acceso a una amplia gama de oportunidades: programas Honors, cursos Advanced Placement, doble titulación y 17 deportes de alto nivel.
              </p>
              
              <p>
                Nuestra metodología, basada en las mejores prácticas educativas y respaldada por investigaciones actuales, integra habilidades esenciales para el siglo XXI, alfabetización informacional y tareas de pensamiento complejo y riguroso, preparando a nuestros estudiantes para destacar en entornos universitarios y profesionales exigentes.
              </p>
              
              <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-2xl font-bold text-center text-primary">
                  El resultado: <span className="text-3xl text-primary">97%</span> de nuestros alumnos participa activamente en deportes, reforzando nuestra visión de una educación integral que forma líderes, deportistas y personas con valores para toda la vida.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              ¿Interesado en Nuestro Programa de Internado?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Obtén más información personalizada sobre nuestro programa de internado y cómo puede transformar el futuro de tu hijo.
            </p>
            <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-primary hover:bg-primary/90 text-white px-8">
              Solicitar Más Información
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Inquiry Modal */}
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} inquiryType="Programa de Internado" />
    </div>;
};
export default Boarding;