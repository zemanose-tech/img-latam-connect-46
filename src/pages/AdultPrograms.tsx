import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { InquiryModal } from "@/components/InquiryModal";
import SportImageCarousel from "@/components/SportImageCarousel";

const AdultPrograms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const programDescription = `Los programas para adultos de IMG Academy están diseñados específicamente para atletas profesionales y aficionados que buscan mejorar su rendimiento deportivo en un ambiente de clase mundial.

Nuestros programas ofrecen la flexibilidad que necesitan los adultos trabajadores, con horarios adaptables y entrenamientos personalizados que se ajustan a sus objetivos específicos.

Con acceso a las mismas instalaciones de élite y entrenadores expertos que utilizan nuestros atletas juveniles, los participantes adultos pueden experimentar el entrenamiento de más alto nivel disponible.

**Características principales:**

• **Entrenamientos Personalizados**: Programas diseñados específicamente para las necesidades y objetivos de cada adulto

• **Flexibilidad de Horarios**: Opciones de entrenamiento que se adaptan a las responsabilidades profesionales y personales

• **Preparación Física Integral**: Enfoque holístico que incluye fuerza, acondicionamiento, nutrición y recuperación

• **Programas Corporativos**: Opciones especiales para empresas que buscan programas de bienestar para sus empleados

• **Instalaciones de Clase Mundial**: Acceso completo a todas las instalaciones deportivas de IMG Academy

• **Entrenadores Expertos**: Staff profesional con experiencia en entrenamiento de atletas de élite

**Deportes Disponibles:**
- Tenis
- Golf  
- Fitness y Acondicionamiento
- Entrenamiento Funcional
- Programas de Rehabilitación
- Preparación Física General

Los programas están disponibles durante todo el año, con opciones de intensidad y duración variables para adaptarse a diferentes niveles de experiencia y disponibilidad de tiempo.`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Programas de Adultos
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Entrenamiento de élite diseñado para atletas adultos
            </p>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-8">
          <SportImageCarousel sportName="Adultos" />
        </section>

        {/* Program Description */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {programDescription.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.includes(':**')) {
                  // Handle section headers
                  const title = paragraph.replace(/\*\*/g, '').replace(':', '');
                  return (
                    <h3 key={index} className="text-2xl font-bold text-primary mt-8 mb-4">
                      {title}
                    </h3>
                  );
                } else if (paragraph.startsWith('• **')) {
                  // Handle bullet points with bold headers
                  return (
                    <div key={index} className="mb-4">
                      {paragraph.split('\n').map((line, lineIndex) => {
                        if (line.startsWith('• **')) {
                          const parts = line.split('**: ');
                          const title = parts[0].replace('• **', '');
                          const content = parts[1] || '';
                          return (
                            <div key={lineIndex} className="mb-3">
                              <span className="font-bold text-primary">• {title}: </span>
                              <span className="text-gray-700">{content}</span>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  );
                } else if (paragraph.startsWith('- ')) {
                  // Handle simple lists
                  return (
                    <div key={index} className="ml-4 mb-2">
                      {paragraph.split('\n').map((line, lineIndex) => {
                        if (line.startsWith('- ')) {
                          return (
                            <div key={lineIndex} className="mb-1">
                              <span className="text-primary">• </span>
                              <span className="text-gray-700">{line.replace('- ', '')}</span>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  );
                } else {
                  // Regular paragraphs
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>
          </div>
        </section>

        {/* Inquiry Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              ¿Interesado en Nuestros Programas para Adultos?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Obtén más información personalizada sobre nuestros programas para adultos y cómo pueden ayudarte a alcanzar tus objetivos deportivos.
            </p>
            <Button 
              size="lg" 
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              Solicitar Más Información
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Inquiry Modal */}
      <InquiryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        inquiryType="Programas de Adultos"
      />
    </div>
  );
};

export default AdultPrograms;