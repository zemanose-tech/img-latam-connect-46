import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InquiryModal } from "@/components/InquiryModal";
const CampDetailsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const camps = [{
    title: "IMG ACADEMY CAMP",
    subtitle: "Edades 13-18",
    icon: "🏃",
    features: ["CAMPOS DEPORTIVOS SEMANALES", "En nuestro campus ubicado en Bradenton, Florida"],
    description: "La metodología de entrenamiento de renombre mundial de IMG Academy que incluye instrucción deportiva de élite y entrenamiento grupal de fuerza/velocidad y rendimiento mental.",
    campInfo: "Nuestro programa base que incluye entrenamientos deportivos especializados, sesiones de fuerza y acondicionamiento, desarrollo mental, y acceso completo a nuestras instalaciones de clase mundial. Incluye dos sesiones diarias de entrenamiento específico por deporte, desarrollo de habilidades técnicas y tácticas, y participación en juegos y competencias.",
    bgColor: "bg-gray-100"
  }, {
    title: "TOTAL ATHLETE CAMP",
    subtitle: "Edades 13-18",
    icon: "🏃",
    iconSecond: "💪",
    features: ["ENTRENAMIENTO DE RENDIMIENTO", "Campo con un enfoque semanal de entrenamiento preseleccionado adicional"],
    description: "Diseñado para atletas que quieren mejorar la fuerza, velocidad, resistencia mental u otras áreas de rendimiento. Selecciona una especialización por semana, entregada diariamente.",
    campInfo: "Programa integral que combina entrenamientos deportivos con sesiones adicionales de rendimiento físico, análisis técnico avanzado y desarrollo de habilidades mentales específicas. Incluye entrenamiento especializado en fuerza, velocidad, agilidad y preparación mental deportiva con enfoque personalizado según las necesidades del atleta.",
    bgColor: "bg-blue-400"
  }, {
    title: "BREAKTHROUGH CAMP",
    subtitle: "Edades 13-18",
    icon: "🏃",
    iconSecond: "📋",
    features: ["ENTRENAMIENTO PERSONALIZADO", "Campo con una sesión diaria adicional de entrenamiento en un entorno más pequeño"],
    description: "Diseñado para atletas que quieren entrenamiento más personalizado para perfeccionar partes específicas de su juego.",
    campInfo: "Experiencia premium con entrenamientos personalizados 1:1, análisis biomecánico detallado, plan de nutrición individualizado y seguimiento especializado. Los atletas reciben atención individualizada de nuestros entrenadores expertos para desarrollar técnicas específicas y corregir aspectos técnicos de su rendimiento deportivo.",
    bgColor: "bg-blue-600"
  }, {
    title: "GAME CHANGER CAMP",
    subtitle: "Edades 13-18",
    icon: "🏃",
    iconSecond: "💪",
    iconThird: "📋",
    features: ["PAQUETE DE ENTRENAMIENTO DEFINITIVO", "Campo con entrenamiento de rendimiento adicional y sesiones de entrenamiento personalizado"],
    description: "Diseñado para atletas que quieren la experiencia de entrenamiento definitiva para transformar todos los aspectos de su desarrollo y rendimiento.",
    campInfo: "Nuestra experiencia más exclusiva que combina entrenamientos con atletas profesionales, acceso VIP a instalaciones, sesiones de liderazgo ejecutivo y networking con scouts universitarios. Incluye todos los beneficios de los programas anteriores más oportunidades únicas de desarrollo profesional y conexiones en el mundo deportivo de élite.",
    bgColor: "bg-lime-400"
  }];
  return <section className="bg-white px-6 py-16">
      <div className="space-y-8">
        {camps.map((camp, index) => <Card key={index} className="overflow-hidden">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-primary mb-2">
                {camp.title}
              </CardTitle>
              <p className="text-blue-600 font-semibold">{camp.subtitle}</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Icons */}
              

              {/* Features */}
              

              {/* Description */}
              

              {/* Camp Information */}
              <div className={`${camp.bgColor} rounded-lg p-6 text-center`}>
                <p className={`text-sm leading-relaxed mb-6 ${camp.bgColor === 'bg-blue-600' ? 'text-white' : 'text-gray-700'}`}>
                  {camp.campInfo}
                </p>
                <Button 
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full"
                  onClick={() => setIsModalOpen(true)}
                >
                  Reservar Ahora
                </Button>
              </div>
            </CardContent>
          </Card>)}
      </div>
      
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        inquiryType="Reserva de Campo"
      />
    </section>;
};
export default CampDetailsSection;