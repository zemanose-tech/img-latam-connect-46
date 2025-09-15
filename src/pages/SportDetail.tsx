import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Trophy, Calendar, MapPin } from "lucide-react";
import SportImageCarousel from "@/components/SportImageCarousel";
import { InquiryModal } from "@/components/InquiryModal";
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

const sportDetails = {
  tennis: {
    name: "Tenis",
    hero: tennisImage,
    description: `El programa de tenis de IMG Academy se ha construido sobre más de 40 años de resultados comprobados, con un modelo de desarrollo inigualable que marcó el estándar para academias de tenis en todo el mundo.

La magnitud y profundidad de nuestro programa crean un entorno dinámico y completo, donde siempre encontrarás a otro jugador que te rete y eleve tu nivel, gracias a la diversidad de estilos de juego.

Cada día, los estudiantes-atletas reciben entrenamiento diseñado para avanzar en todas las áreas: técnica, táctica, preparación física y fortaleza mental.`
  },
  golf: {
    name: "Golf",
    hero: golfImage,
    description: `Los mejores golfistas del mundo saben que el verdadero potencial se alcanza con un desarrollo integral. Por eso, en IMG Academy ponemos el foco en los aspectos físicos, mentales, técnicos y en la estrategia de campo, lo que convierte a nuestros campamentos de golf en los mejores del país.

Con una metodología de instrucción probada, los golfistas de IMG Academy se convierten en jugadores más completos, seguros y competitivos.

Nuestros campamentos están dirigidos a jóvenes de 8 a 18 años, con programas personalizables para todos los niveles de habilidad y disponibilidad durante todo el año, adaptándose a tu calendario.`
  },
  football: {
    name: "Fútbol Americano",
    hero: footballImage,
    description: `Hay una razón por la que el programa de fútbol americano de IMG Academy es reconocido como el mejor del país. Entrenadores de élite y una metodología de entrenamiento comprobada hacen posible que cada atleta maximice su potencial.

Este mismo enfoque convierte a los campamentos de fútbol americano de IMG en líderes de la industria para todas las posiciones, con un entrenamiento centrado en el desarrollo integral del jugador.

Dirigidos a jóvenes de 10 a 18 años, nuestros campamentos ofrecen programas personalizables para todos los niveles y están disponibles durante todo el año, adaptándose a tu calendario.`
  },
  basketball: {
    name: "Baloncesto",
    hero: basketballImage,
    description: `No importa tu nivel de habilidad, en IMG Academy encontrarás un campamento de baloncesto diseñado para alcanzar tus metas. Nuestros programas incluyen opciones de entrenamiento personalizado y especializaciones enfocadas en áreas clave como el rendimiento mental o el liderazgo.

Guiados por entrenadores de talla mundial, en un campus integral de primer nivel, los campamentos de verano de baloncesto de IMG Academy combinan entrenamientos en grupo, trabajo de habilidades específicas por posición y escenarios de juego reales para llevar tu desempeño al siguiente nivel.`
  },
  baseball: {
    name: "Béisbol",
    hero: baseballImage,
    description: `El programa de béisbol de IMG Academy ofrece una metodología integral para formar al estudiante-atleta completo. Los jugadores acceden a instalaciones y equipos de última generación, entrenadores inigualables, acompañamiento constante y una comunidad apasionada y motivadora.

Con múltiples equipos organizados por edad y nivel de habilidad, cada atleta comprometido encuentra la oportunidad perfecta para maximizar su potencial y llevar su juego al siguiente nivel.`
  },
  soccer: {
    name: "Fútbol",
    hero: soccerImage,
    description: `Los campamentos de fútbol de IMG Academy son los mejores del país en entrenamiento y desarrollo. Con la instrucción experta de entrenadores de primer nivel y una metodología comprobada que ha formado a múltiples jugadores de la MLS y a innumerables atletas de División I, nuestros campamentos están diseñados para perfeccionar cada aspecto de tu juego.

Dirigidos a jóvenes de 10 a 18 años, los programas son totalmente personalizables y están disponibles durante todo el año, ajustándose a tu calendario y necesidades.`
  },
  lacrosse: {
    name: "Lacrosse",
    hero: lacrosseImage,
    description: `Los campamentos de lacrosse de IMG Academy representan el mejor programa de entrenamiento del país. Gracias a la combinación de entrenamiento específico por posición, conceptos de equipo aplicados en situaciones reales de juego y un enfoque integral de desarrollo, cada atleta encuentra aquí la oportunidad de llevar su rendimiento al máximo nivel.

Dirigidos a jóvenes de 10 a 18 años, nuestros campamentos ofrecen programas personalizables para todos los niveles de habilidad y están disponibles durante todo el año, adaptándose a tu calendario.`
  },
  track: {
    name: "Atletismo",
    hero: trackImage,
    description: `El programa de atletismo de IMG Academy ofrece entrenamiento específico por disciplina para saltadores, velocistas, decatletas, vallistas, lanzadores, garrochistas y corredores de medio fondo, fondo y campo traviesa, siguiendo un calendario de competencia anual.

Con una metodología única y comprobada, basada en el desarrollo intencional de la capacidad de aprendizaje, la concentración y la resiliencia, cada estudiante-atleta fortalece sus habilidades y se siente preparado y seguro para rendir al máximo nivel.`
  },
  wrestling: {
    name: "Lucha",
    hero: wrestlingImage,
    description: `Programa de lucha con técnicas tradicionales y modernas para competencia de élite.`
  },
  volleyball: {
    name: "Voleibol",
    hero: volleyballImage,
    description: `Con más de 40 años de experiencia y una base de entrenamiento reconocida a nivel mundial, los campamentos de voleibol de IMG Academy ofrecen a cada atleta la oportunidad de alcanzar sus metas.

Diseñados para todos los niveles de habilidad, nuestros campamentos incluyen dos sesiones diarias en cancha y la opción de enfocarse en especializaciones clave como rendimiento mental o liderazgo.

Además, incorporan entrenamiento específico por posición y escenarios competitivos que preparan a los jugadores para destacar en la cancha y más allá.`
  },
  performance: {
    name: "Performance",
    hero: performanceImage,
    description: `El entrenamiento que realizas fuera de la cancha es tan importante como la práctica y la competencia. Por eso, los campamentos de Performance de IMG Academy se enfocan en el desarrollo integral del cuerpo y la mente, con entrenamientos en áreas clave como:

• Fuerza y potencia
• Velocidad y agilidad
• Confianza y liderazgo
• Prevención de lesiones (pre-hab)
• Nutrición
• ¡y mucho más!

Dirigidos a jóvenes de 12 a 18 años, estos campamentos están diseñados para todos los niveles de habilidad y te brindan la oportunidad de aprender directamente de líderes de talla mundial, que te ayudarán a convertirte en tu mejor versión cada día.

Disponibles durante todo el año, para adaptarse a tu calendario.`
  },
  softball: {
    name: "Sóftbol",
    hero: softballImage,
    description: `¡Sé parte de nuestro año inaugural y vive la experiencia del innovador programa de sóftbol de IMG Academy!

Nuestro programa de sóftbol prioriza el desarrollo de cada estudiante-atleta, garantizando un crecimiento tanto integral como personalizado. Nuestros entrenadores expertos adaptan el entrenamiento a la posición, necesidades, objetivos y nivel actual de cada jugadora.

La progresión a lo largo del año refleja la de un programa profesional, lo que permite a las atletas enfocarse en lo que más importa en cada temporada y llegar confiadas y preparadas antes de competir a nivel universitario.`
  }
};

const SportDetail = () => {
  const { sportId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState("");
  console.log("SportId from URL:", sportId);
  console.log("Available sports:", Object.keys(sportDetails));
  const sport = sportDetails[sportId as keyof typeof sportDetails];
  console.log("Found sport:", sport);

  if (!sport) {
    return <div>Deporte no encontrado - SportId: {sportId}</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        {/* Image Carousel Hero Section */}
        <section className="relative py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Link 
                to="/sports" 
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a Deportes
              </Link>
            </div>
            <SportImageCarousel sportName={sport.name} />
          </div>
        </section>

        {/* Main Hero Section */}
        <section className="relative py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 capitalize">
                {sport?.name}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {sport?.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-gray-100 font-bold"
                  >
                    Solicitar Consulta
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => {
                    setInquiryType(`Reserva para ${sport.name}`);
                    setIsModalOpen(true);
                  }}
                >
                  Reservar Ahora
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2">Elite</div>
                  <p className="text-sm text-white/80">Nivel de Entrenamiento</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <p className="text-sm text-white/80">Acceso a Instalaciones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Highlights */}
        <section className="py-12 bg-img-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sport.highlights.map((highlight, index) => (
                <Card key={index} className="text-center border-0 shadow-md">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-img-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="w-6 h-6 text-img-blue" />
                    </div>
                    <p className="font-medium text-gray-700">{highlight}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="programs" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="programs">Programas</TabsTrigger>
                <TabsTrigger value="facilities">Instalaciones</TabsTrigger>
                <TabsTrigger value="schedule">Horarios</TabsTrigger>
                <TabsTrigger value="contact">Contacto</TabsTrigger>
              </TabsList>

              <TabsContent value="programs" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {sport.programs.map((program, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-img-blue">{program.name}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {program.duration}
                            </span>
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {program.ages}
                            </span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-img-blue mb-4">
                          {program.price}
                        </div>
                        <Button 
                          className="w-full bg-img-blue hover:bg-img-blue-dark"
                          onClick={() => {
                            setInquiryType(`${program.name} - ${sport.name}`);
                            setIsModalOpen(true);
                          }}
                        >
                          Más Información
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="facilities" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sport.facilities.map((facility, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-img-blue/10 rounded-full flex items-center justify-center mr-4">
                            <MapPin className="w-4 h-4 text-img-blue" />
                          </div>
                          <p className="font-medium">{facility}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="schedule" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-img-blue">Mañana</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{sport.schedule.morning}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-img-blue">Mediodía</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{sport.schedule.midday}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-img-blue">Tarde</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{sport.schedule.afternoon}</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="contact" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-img-blue">Contacta a Nuestro Representante</CardTitle>
                    <CardDescription>
                      Obtén información personalizada sobre el programa de {sport.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>Nuestro representante en Latinoamérica está disponible para brindarte información detallada sobre:</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Requisitos de admisión específicos</li>
                        <li>Descuentos regionales disponibles</li>
                        <li>Proceso de aplicación</li>
                        <li>Becas y ayuda financiera</li>
                      </ul>
                      <Link to="/contact">
                        <Button size="lg" className="bg-img-blue hover:bg-img-blue-dark text-white">
                          Contactar Representante
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        inquiryType={inquiryType}
      />
      
      <Footer />
    </div>
  );
};

export default SportDetail;