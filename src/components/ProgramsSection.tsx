import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, GraduationCap, Calendar, MapPin } from "lucide-react";
import { InquiryModal } from "@/components/InquiryModal";

const programs = [
  {
    title: "Programa de Internado",
    description: "Combinación perfecta de excelencia académica y entrenamiento deportivo de élite",
    duration: "Año completo",
    age: "13-18 años",
    sports: ["Tenis", "Golf", "Fútbol", "Baloncesto", "Béisbol"],
    highlight: "Más popular",
    features: ["Alojamiento completo", "Entrenamiento profesional", "Educación universitaria preparatoria"]
  },
  {
    title: "Campamentos de Verano",
    description: "Experiencia intensiva de entrenamiento durante las vacaciones escolares",
    duration: "1-4 semanas",
    age: "8-18 años",
    sports: ["Tenis", "Golf", "Fútbol", "Atletismo", "Natación"],
    highlight: "Ideal para principiantes",
    features: ["Flexible duración", "Todos los niveles", "Certificación internacional"]
  },
  {
    title: "Academias Universitarias",
    description: "Programa postgraduado para atletas de alto rendimiento",
    duration: "1-2 años",
    age: "18+ años",
    sports: ["Tenis profesional", "Golf profesional", "Desarrollo fitness"],
    highlight: "Nivel profesional",
    features: ["Entrenamiento profesional", "Networking internacional", "Oportunidades de carrera"]
  }
];

const ProgramsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");
  return (
    <section id="programas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-img-gray text-primary">Programas Disponibles</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Encuentra tu <span className="text-primary">camino perfecto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde programas de internado completo hasta campamentos especializados, 
            tenemos la opción perfecta para desarrollar tu potencial deportivo y académico.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card key={index} className="relative shadow-card hover:shadow-elegant transition-shadow duration-300 border-0">
              {program.highlight && (
                <div className="absolute -top-3 left-6">
                  <Badge className="bg-accent text-accent-foreground">{program.highlight}</Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Trophy className="w-8 h-8 text-primary" />
                  <Badge variant="outline" className="text-sm">{program.age}</Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">{program.title}</CardTitle>
                <CardDescription className="text-base">{program.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Duration */}
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{program.duration}</span>
                  </div>

                  {/* Sports Available */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Deportes disponibles:</h4>
                    <div className="flex flex-wrap gap-1">
                      {program.sports.map((sport, sportIndex) => (
                        <Badge key={sportIndex} variant="secondary" className="text-xs">
                          {sport}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Incluye:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full mt-6 bg-primary hover:bg-primary/90"
                    onClick={() => {
                      setSelectedProgram(program.title);
                      setIsModalOpen(true);
                    }}
                  >
                    Más información
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-img-gray rounded-lg p-8">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-foreground">¿No estás seguro qué programa elegir?</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nuestro equipo de admisiones en Latinoamérica te ayudará a encontrar el programa perfecto 
            según tus objetivos deportivos, académicos y presupuesto.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => {
              setSelectedProgram("Consulta Personalizada");
              setIsModalOpen(true);
            }}
          >
            <MapPin className="w-5 h-5 mr-2" />
            Consulta personalizada gratuita
          </Button>
        </div>
      </div>
      
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        inquiryType={`Información sobre ${selectedProgram}`}
      />
    </section>
  );
};

export default ProgramsSection;