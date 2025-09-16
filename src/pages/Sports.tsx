import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PriceCalculator from "@/components/PriceCalculator";
import { Link } from "react-router-dom";
import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import heroSportsImage from "@/assets/hero-sports.jpg";
import tennisImage from "@/assets/tennis-facilities.jpg";
import golfImage from "@/assets/golf-facilities.jpg";
import footballImage from "@/assets/football-facilities.jpg";
import basketballImage from "@/assets/basketball-facilities.jpg";
import baseballImage from "@/assets/baseball-facilities.jpg";
import soccerImage from "@/assets/soccer-facilities.jpg";
import lacrosseImage from "@/assets/lacrosse-facilities.jpg";
import trackImage from "@/assets/track-facilities.jpg";
import wrestlingImage from "@/assets/wrestling-facilities.jpg";
import volleyballImage from "@/assets/volleyball-facilities.jpg";
import performanceImage from "@/assets/performance-facilities.jpg";
import softballImage from "@/assets/softball-facilities.jpg";
import adultsImage from "@/assets/adults-facilities.jpg";
const sportsPrograms = [{
  id: "tennis",
  name: "Tenis",
  description: "Programa de entrenamiento de élite en tenis con instalaciones de clase mundial",
  image: tennisImage,
  highlights: ["12 canchas de tenis", "Entrenadores profesionales", "Análisis de video", "Preparación física especializada"]
}, {
  id: "golf",
  name: "Golf",
  description: "Campo de golf de 18 hoyos diseñado para el desarrollo integral del golfista",
  image: golfImage,
  highlights: ["Campo de 18 hoyos", "Driving range", "Putting green", "Short game area"]
}, {
  id: "football",
  name: "Fútbol Americano",
  description: "Entrenamiento completo para futuros atletas universitarios",
  image: footballImage,
  highlights: ["Campo de práctica", "Sala de pesas", "Análisis táctico", "Preparación para becas"]
}, {
  id: "basketball",
  name: "Baloncesto",
  description: "Desarrollo de habilidades fundamentales y avanzadas del baloncesto",
  image: basketballImage,
  highlights: ["Gimnasios profesionales", "Entrenamiento individual", "Scrimmages competitivos", "Desarrollo mental"]
}, {
  id: "baseball",
  name: "Béisbol",
  description: "Programa integral de béisbol con enfoque en todas las posiciones",
  image: baseballImage,
  highlights: ["Diamantes de práctica", "Jaulas de bateo", "Análisis biomecánico", "Desarrollo de lanzadores"]
}, {
  id: "soccer",
  name: "Fútbol",
  description: "Entrenamiento técnico y táctico del fútbol moderno",
  image: soccerImage,
  highlights: ["Campos de césped natural", "Entrenamiento táctico", "Preparación física", "Scout universitario"]
}, {
  id: "lacrosse",
  name: "Lacrosse",
  description: "Desarrollo completo en lacrosse masculino y femenino",
  image: lacrosseImage,
  highlights: ["Campos especializados", "Técnica avanzada", "Estrategia de juego", "Preparación universitaria"]
}, {
  id: "track",
  name: "Atletismo",
  description: "Entrenamiento en pista y campo para todas las disciplinas",
  image: trackImage,
  highlights: ["Pista de 400m", "Zona de saltos", "Lanzamientos", "Preparación olímpica"]
}, {
  id: "volleyball",
  name: "Voleibol",
  description: "Programa integral de voleibol con técnicas avanzadas y trabajo en equipo",
  image: volleyballImage,
  highlights: ["Canchas cubiertas", "Entrenamiento técnico", "Trabajo en equipo", "Competencias universitarias"]
}, {
  id: "performance",
  name: "Performance",
  description: "Entrenamiento de alto rendimiento para optimizar el desempeño atlético",
  image: performanceImage,
  highlights: ["Análisis biomecánico", "Preparación física", "Recuperación deportiva", "Nutrición especializada"]
}, {
  id: "softball",
  name: "Softball",
  description: "Desarrollo completo en softball con enfoque en habilidades específicas",
  image: softballImage,
  highlights: ["Diamantes especializados", "Técnica de bateo", "Pitcheo femenino", "Estrategia de juego"]
}, {
  id: "adults",
  name: "Programas de Adultos",
  description: "Programas especializados para atletas adultos que buscan mejorar su rendimiento",
  image: adultsImage,
  highlights: ["Entrenamientos personalizados", "Flexibilidad de horarios", "Preparación física", "Programas corporativos"]
}];
const Sports = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Programas Deportivos
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Elige un deporte para ver información detallada del programa
            </p>
            
            {/* Sport Selection Dropdown Style */}
            <div className="mt-8 max-w-2xl mx-auto">
              
            </div>
          </div>
        </section>

        {/* Sports Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sportsPrograms.map(sport => <Card key={sport.id} className="group hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img src={sport.image} alt={`Instalaciones de ${sport.name}`} className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-primary text-white">
                      {sport.name}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-primary">{sport.name}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {sport.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    
                    <Link to={sport.id === 'adults' ? '/adult-programs' : `/sport/${sport.id}`}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        Ver Programa Completo
                      </Button>
                    </Link>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Price Calculator Section */}
        

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-img-blue to-img-blue-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para Comenzar tu Camino?
            </h2>
            <p className="text-xl text-img-white/90 mb-8 max-w-2xl mx-auto">
              Contacta a nuestro representante en Latinoamérica para obtener información personalizada sobre nuestros programas deportivos.
            </p>
            <Button 
              size="lg" 
              className="bg-img-white text-img-blue hover:bg-img-white/90 font-bold px-8"
              onClick={() => setIsModalOpen(true)}
            >
              Contactar Ahora
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <InquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>;
};
export default Sports;