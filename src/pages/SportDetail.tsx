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
    description: "Nuestro programa de tenis de élite combina entrenamiento técnico avanzado con preparación física especializada para desarrollar jugadores de clase mundial.",
    highlights: ["12 canchas de tenis profesionales", "Entrenadores certificados ATP/WTA", "Análisis de video biomecánico", "Preparación física especializada"],
    programs: [
      { name: "Programa Anual", duration: "10 meses", ages: "14-18 años", price: "$45,000" },
      { name: "Campamentos de Verano", duration: "2-4 semanas", ages: "12-18 años", price: "$3,500/semana" },
      { name: "Entrenamientos Personalizados", duration: "Flexible", ages: "Todas las edades", price: "$150/hora" }
    ],
    facilities: [
      "12 canchas de tenis Hard Court",
      "4 canchas de arcilla",
      "Centro de fitness especializado",
      "Sala de análisis de video",
      "Área de recuperación y fisioterapia"
    ],
    schedule: {
      morning: "6:00-9:00 AM - Entrenamiento en cancha",
      midday: "12:00-2:00 PM - Preparación física",
      afternoon: "3:00-5:00 PM - Práctica táctica y juegos"
    }
  },
  golf: {
    name: "Golf",
    hero: golfImage,
    description: "Nuestro programa de golf cuenta con un campo de 18 hoyos diseñado específicamente para el desarrollo de golfistas de élite.",
    highlights: ["Campo de 18 hoyos profesional", "Driving range de 300 yardas", "Short game area completo", "Tecnología TrackMan"],
    programs: [
      { name: "Programa de Boarding School", duration: "Año académico", ages: "14-18 años", price: "$55,000" },
      { name: "Campamentos de Golf", duration: "1-2 semanas", ages: "10-18 años", price: "$2,800/semana" },
      { name: "Academy Day Program", duration: "Después de clases", ages: "12-18 años", price: "$25,000/año" }
    ],
    facilities: [
      "Campo de golf de 18 hoyos",
      "Driving range de 300 yardas",
      "Putting green de práctica",
      "Short game area",
      "Simuladores de golf indoor"
    ],
    schedule: {
      morning: "7:00-10:00 AM - Práctica en el campo",
      midday: "1:00-3:00 PM - Short game y putting",
      afternoon: "4:00-6:00 PM - Rondas de práctica"
    }
  },
  football: {
    name: "Fútbol Americano",
    hero: footballImage,
    description: "Programa integral de fútbol americano diseñado para preparar atletas para el siguiente nivel universitario.",
    highlights: ["Campo de práctica profesional", "Sala de pesas de élite", "Análisis táctico avanzado", "Preparación para becas universitarias"],
    programs: [
      { name: "Post-Graduate Program", duration: "1 año", ages: "18-19 años", price: "$48,000" },
      { name: "High School Program", duration: "Año académico", ages: "14-18 años", price: "$52,000" },
      { name: "Summer Training", duration: "6-8 semanas", ages: "14-19 años", price: "$8,500" }
    ],
    facilities: [
      "Campo de fútbol americano profesional",
      "Sala de pesas de 10,000 sq ft",
      "Sala de video y análisis táctico",
      "Pista de velocidad de 40 yardas",
      "Centro de recuperación"
    ],
    schedule: {
      morning: "6:00-8:00 AM - Preparación física",
      midday: "2:00-4:00 PM - Práctica en el campo",
      afternoon: "5:00-6:00 PM - Análisis de video"
    }
  },
  basketball: {
    name: "Baloncesto",
    hero: basketballImage,
    description: "Desarrollo integral de habilidades de baloncesto con enfoque en fundamentals y juego avanzado.",
    highlights: ["Gimnasios de práctica profesionales", "Entrenamiento de skills individual", "Scrimmages competitivos", "Desarrollo del juego mental"],
    programs: [
      { name: "Prep Program", duration: "Año académico", ages: "15-19 años", price: "$46,000" },
      { name: "Skills Academy", duration: "Todo el año", ages: "13-18 años", price: "$28,000" },
      { name: "Elite Camps", duration: "1-2 semanas", ages: "12-18 años", price: "$1,850/semana" }
    ],
    facilities: [
      "3 gimnasios de práctica",
      "Cancha principal con gradas",
      "Área de entrenamiento individual",
      "Centro de preparación física",
      "Sala de análisis de video"
    ],
    schedule: {
      morning: "7:00-9:00 AM - Skills training",
      midday: "1:00-3:00 PM - Team practice",
      afternoon: "4:00-5:30 PM - Strength training"
    }
  },
  baseball: {
    name: "Béisbol",
    hero: baseballImage,
    description: "Programa completo de béisbol con enfoque en todas las posiciones y desarrollo de lanzadores.",
    highlights: ["Diamantes de práctica profesionales", "Jaulas de bateo cubiertas", "Análisis biomecánico", "Desarrollo especializado de pitchers"],
    programs: [
      { name: "Academy Program", duration: "Año académico", ages: "14-18 años", price: "$47,000" },
      { name: "Summer Baseball", duration: "8-10 semanas", ages: "13-18 años", price: "$6,500" },
      { name: "Pitching Academy", duration: "Todo el año", ages: "14-19 años", price: "$30,000" }
    ],
    facilities: [
      "4 diamantes de béisbol",
      "12 jaulas de bateo cubiertas",
      "Área de bullpen",
      "Laboratorio biomecánico",
      "Centro de recuperación"
    ],
    schedule: {
      morning: "7:00-10:00 AM - Practice on field",
      midday: "1:00-2:30 PM - Batting practice",
      afternoon: "3:30-5:00 PM - Position training"
    }
  },
  soccer: {
    name: "Fútbol",
    hero: soccerImage,
    description: "Entrenamiento técnico y táctico del fútbol moderno con preparación para el siguiente nivel.",
    highlights: ["Campos de césped natural", "Entrenamiento táctico avanzado", "Preparación física específica", "Scout universitario"],
    programs: [
      { name: "Soccer Academy", duration: "Año académico", ages: "14-18 años", price: "$43,000" },
      { name: "Elite Training", duration: "Todo el año", ages: "12-18 años", price: "$26,000" },
      { name: "Soccer Camps", duration: "1-2 semanas", ages: "10-18 años", price: "$1,650/semana" }
    ],
    facilities: [
      "6 campos de fútbol de césped natural",
      "2 campos sintéticos",
      "Centro de fitness específico",
      "Sala de análisis táctico",
      "Área de recuperación"
    ],
    schedule: {
      morning: "7:00-9:30 AM - Technical training",
      midday: "1:00-3:00 PM - Tactical practice",
      afternoon: "4:00-5:30 PM - Physical preparation"
    }
  },
  lacrosse: {
    name: "Lacrosse",
    hero: lacrosseImage,
    description: "Desarrollo completo en lacrosse masculino y femenino con técnicas avanzadas.",
    highlights: ["Campos especializados", "Técnica avanzada", "Estrategia de juego", "Preparación universitaria"],
    programs: [
      { name: "Lacrosse Academy", duration: "Año académico", ages: "14-18 años", price: "$44,000" },
      { name: "Skills Development", duration: "Todo el año", ages: "12-18 años", price: "$24,000" },
      { name: "Summer Lacrosse", duration: "4-6 semanas", ages: "11-18 años", price: "$4,200" }
    ],
    facilities: [
      "4 campos de lacrosse",
      "Wall ball practice area",
      "Centro de fitness",
      "Sala de video",
      "Equipment room"
    ],
    schedule: {
      morning: "7:00-9:00 AM - Skills practice",
      midday: "1:30-3:30 PM - Team practice",
      afternoon: "4:00-5:00 PM - Strength training"
    }
  },
  track: {
    name: "Atletismo",
    hero: trackImage,
    description: "Entrenamiento completo en pista y campo para todas las disciplinas atléticas.",
    highlights: ["Pista de 400m profesional", "Zona de saltos completa", "Área de lanzamientos", "Preparación olímpica"],
    programs: [
      { name: "Track & Field Academy", duration: "Año académico", ages: "14-18 años", price: "$41,000" },
      { name: "Elite Training", duration: "Todo el año", ages: "13-18 años", price: "$22,000" },
      { name: "Track Camps", duration: "2-3 semanas", ages: "12-18 años", price: "$2,100/semana" }
    ],
    facilities: [
      "Pista de 400 metros",
      "Área de salto alto y con garrocha",
      "Foso de salto largo y triple",
      "Círculos de lanzamiento",
      "Pista cubierta para mal tiempo"
    ],
    schedule: {
      morning: "6:30-8:30 AM - Track practice",
      midday: "12:00-2:00 PM - Field events",
      afternoon: "3:30-5:00 PM - Strength & conditioning"
    }
  },
  wrestling: {
    name: "Lucha",
    hero: wrestlingImage,
    description: "Programa de lucha con técnicas tradicionales y modernas para competencia de élite.",
    highlights: ["Sala de lucha especializada", "Entrenamiento técnico avanzado", "Preparación mental", "Competencias nacionales"],
    programs: [
      { name: "Wrestling Academy", duration: "Año académico", ages: "14-18 años", price: "$42,000" },
      { name: "Technique Training", duration: "Todo el año", ages: "12-18 años", price: "$20,000" },
      { name: "Wrestling Camps", duration: "1-2 semanas", ages: "10-18 años", price: "$1,450/semana" }
    ],
    facilities: [
      "Sala de lucha de 3,000 sq ft",
      "8 mats de competencia",
      "Área de preparación física",
      "Sauna para corte de peso",
      "Sala de video análisis"
    ],
    schedule: {
      morning: "6:00-8:00 AM - Technique practice",
      midday: "1:00-2:30 PM - Live wrestling",
      afternoon: "4:00-5:30 PM - Strength training"
  },
  volleyball: {
    name: "Voleibol",
    hero: volleyballImage,
    description: "Programa integral de voleibol con técnicas avanzadas de ataque, defensa y trabajo en equipo para competir al más alto nivel.",
    highlights: ["Canchas cubiertas profesionales", "Entrenamiento técnico especializado", "Desarrollo de trabajo en equipo", "Competencias universitarias"],
    programs: [
      { name: "Volleyball Academy", duration: "Año académico", ages: "14-18 años", price: "$40,000" },
      { name: "Skills Training", duration: "Todo el año", ages: "12-18 años", price: "$21,000" },
      { name: "Volleyball Camps", duration: "1-2 semanas", ages: "10-18 años", price: "$1,550/semana" }
    ],
    facilities: [
      "4 canchas de voleibol cubiertas",
      "Cancha principal con gradas",
      "Área de entrenamiento técnico",
      "Centro de preparación física",
      "Sala de análisis de video"
    ],
    schedule: {
      morning: "7:00-9:00 AM - Técnica individual",
      midday: "1:00-3:00 PM - Práctica de equipo",
      afternoon: "4:00-5:30 PM - Preparación física"
    }
  },
  performance: {
    name: "Performance",
    hero: performanceImage,
    description: "Programa de alto rendimiento deportivo enfocado en optimizar el desempeño atlético a través de ciencia deportiva y tecnología avanzada.",
    highlights: ["Análisis biomecánico avanzado", "Preparación física científica", "Recuperación deportiva", "Nutrición especializada"],
    programs: [
      { name: "Elite Performance Program", duration: "Año académico", ages: "15-18 años", price: "$50,000" },
      { name: "Performance Training", duration: "Todo el año", ages: "13-18 años", price: "$32,000" },
      { name: "Performance Camps", duration: "2-3 semanas", ages: "14-18 años", price: "$4,500/semana" }
    ],
    facilities: [
      "Laboratorio de biomecánica",
      "Centro de alto rendimiento",
      "Piscina de recuperación",
      "Cámaras de crioterapia",
      "Laboratorio nutricional"
    ],
    schedule: {
      morning: "6:00-8:00 AM - Evaluaciones físicas",
      midday: "12:00-2:00 PM - Entrenamiento especializado",
      afternoon: "3:00-5:00 PM - Recuperación y análisis"
    }
  },
  softball: {
    name: "Softball",
    hero: softballImage,
    description: "Programa completo de softball femenino con énfasis en técnicas específicas de bateo, pitcheo y estrategia de juego.",
    highlights: ["Diamantes especializados", "Técnica de bateo avanzada", "Pitcheo femenino especializado", "Estrategia de juego moderna"],
    programs: [
      { name: "Softball Academy", duration: "Año académico", ages: "14-18 años", price: "$43,500" },
      { name: "Skills Development", duration: "Todo el año", ages: "12-18 años", price: "$23,000" },
      { name: "Softball Camps", duration: "1-2 semanas", ages: "10-18 años", price: "$1,750/semana" }
    ],
    facilities: [
      "3 diamantes de softball",
      "8 jaulas de bateo especializadas",
      "Área de pitcheo cubierto",
      "Centro de preparación física",
      "Sala de análisis táctico"
    ],
    schedule: {
      morning: "7:00-9:30 AM - Práctica en el campo",
      midday: "1:00-2:30 PM - Bateo y pitcheo",
      afternoon: "3:30-5:00 PM - Juegos de práctica"
    }
  }
  }
};

const SportDetail = () => {
  const { sportId } = useParams();
  const sport = sportDetails[sportId as keyof typeof sportDetails];

  if (!sport) {
    return <div>Deporte no encontrado</div>;
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
                        <Button className="w-full bg-img-blue hover:bg-img-blue-dark">
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
      <Footer />
    </div>
  );
};

export default SportDetail;