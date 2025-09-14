import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Play, Camera, Zap } from "lucide-react";
import facilitiesImage from "@/assets/facilities.jpg";

const facilities = [
  {
    title: "Centro de Tenis",
    description: "55 canchas de tenis de superficie múltiple",
    features: ["Canchas Hard Court", "Canchas de Arcilla", "Iluminación LED", "Sistema de video análisis"]
  },
  {
    title: "Campos de Golf",
    description: "18 hoyos de campeonato diseñados por profesionales",
    features: ["Campo regulación PGA", "Driving range cubierto", "Putting greens", "Simuladores indoor"]
  },
  {
    title: "Instalaciones de Fútbol",
    description: "Múltiples campos de entrenamiento de clase mundial",
    features: ["Césped natural y artificial", "Sistema de riego automatizado", "Iluminación profesional", "Áreas de recuperación"]
  },
  {
    title: "Centro Académico",
    description: "Aulas equipadas con tecnología de punta",
    features: ["Aulas inteligentes", "Laboratorios de ciencias", "Biblioteca digital", "Espacios de estudio"]
  },
  {
    title: "Centro de Rendimiento",
    description: "Instalaciones de acondicionamiento físico de élite",
    features: ["Gimnasio de última generación", "Piscina olímpica", "Centro de rehabilitación", "Análisis biomecánico"]
  },
  {
    title: "Residencias",
    description: "Alojamiento cómodo y seguro para estudiantes internacionales",
    features: ["Habitaciones modernas", "Áreas comunes", "Seguridad 24/7", "Servicio de comidas"]
  }
];

const FacilitiesSection = () => {
  return (
    <section id="instalaciones" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-img-gray text-primary">
            <MapPin className="w-4 h-4 mr-2" />
            Instalaciones de Clase Mundial
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entrena en las <span className="text-primary">mejores instalaciones</span>
            <br />del mundo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            IMG Academy cuenta con más de 600 acres de instalaciones deportivas y académicas de última generación 
            en Bradenton, Florida, diseñadas para maximizar el potencial de cada estudiante-atleta.
          </p>
        </div>

        {/* Hero Image with Overlay */}
        <div className="relative mb-16 rounded-lg overflow-hidden shadow-elegant">
          <div 
            className="h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${facilitiesImage})` }}
          >
            <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white/90 text-primary hover:bg-white"
              >
                <Play className="w-6 h-6 mr-2" />
                Tour virtual de las instalaciones
              </Button>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {facilities.map((facility, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Élite
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">{facility.title}</h3>
                <p className="text-muted-foreground mb-4">{facility.description}</p>
                
                <ul className="space-y-2">
                  {facility.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-hero rounded-lg p-8 text-white mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Instalaciones en números</h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Cada detalle de nuestras instalaciones ha sido diseñado pensando en la excelencia deportiva y académica.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">600+</div>
              <div className="text-white/80">Acres de instalaciones</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">55</div>
              <div className="text-white/80">Canchas de tenis</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">18</div>
              <div className="text-white/80">Hoyos de golf</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-white/80">Acceso a instalaciones</div>
            </div>
          </div>
        </div>

        {/* Location & Virtual Tour */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-bold text-foreground">Ubicación privilegiada</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Ubicada en Bradenton, Florida, IMG Academy se encuentra a solo 45 minutos del Aeropuerto 
                Internacional de Tampa y a 1 hora de Orlando, ofreciendo fácil acceso desde cualquier parte del mundo.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                  Clima subtropical ideal para entrenar todo el año
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                  Cerca de aeropuertos internacionales
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                  Comunidad segura y amigable
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Camera className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-bold text-foreground">Explora virtualmente</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Realiza un recorrido virtual por nuestras instalaciones desde la comodidad de tu hogar. 
                Conoce cada detalle de lo que será tu nuevo hogar deportivo y académico.
              </p>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Play className="w-4 h-4 mr-2" />
                  Tour virtual 360°
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Camera className="w-4 h-4 mr-2" />
                  Galería de fotos
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="w-4 h-4 mr-2" />
                  Mapa interactivo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;