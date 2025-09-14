import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Percent, Gift, Users, Clock, Star, CheckCircle } from "lucide-react";

const discountOffers = [
  {
    title: "Descuento Latinoamérica",
    discount: "15%",
    description: "Descuento exclusivo para estudiantes de Colombia, España, Panamá y Costa Rica",
    validUntil: "31 de Marzo, 2025",
    conditions: ["Aplicable a todos los programas", "Válido para nuevos estudiantes", "No acumulable con otras ofertas"],
    highlight: "Más popular",
    bgColor: "bg-gradient-hero"
  },
  {
    title: "Hermanos/Familia",
    discount: "20%",
    description: "Descuento adicional cuando dos o más hermanos se inscriben en el mismo año",
    validUntil: "Todo el año",
    conditions: ["Mínimo 2 hermanos", "Inscripción simultánea", "Aplicable al segundo hermano en adelante"],
    highlight: "Ahorro familiar",
    bgColor: "bg-gradient-accent"
  },
  {
    title: "Inscripción Temprana",
    discount: "10%",
    description: "Reserva tu lugar con anticipación y obtén un descuento adicional",
    validUntil: "15 de Febrero, 2025",
    conditions: ["Reserva antes del 15 de febrero", "Pago del 50% al momento de reserva", "Para programas de verano 2025"],
    highlight: "Tiempo limitado",
    bgColor: "bg-primary"
  }
];

const benefits = [
  "Proceso de admisión sin costo adicional",
  "Asesoría personalizada en español",
  "Soporte durante todo el proceso",
  "Conexión directa con familias latinoamericanas",
  "Asistencia con visas y documentación",
  "Seguimiento académico y deportivo continuo"
];

const DiscountsSection = () => {
  return (
    <section id="descuentos" className="py-20 bg-img-gray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            <Gift className="w-4 h-4 mr-2" />
            Ofertas Exclusivas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Descuentos especiales</span>
            <br />para Latinoamérica
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Como parte del programa de referencias global de IMG Academy, ofrecemos descuentos exclusivos 
            y beneficios adicionales para estudiantes de nuestra región.
          </p>
        </div>

        {/* Discount Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {discountOffers.map((offer, index) => (
            <Card key={index} className="relative overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 border-0">
              {/* Background Pattern */}
              <div className={`absolute inset-0 ${offer.bgColor} opacity-5`}></div>
              
              {/* Highlight Badge */}
              {offer.highlight && (
                <div className="absolute -top-3 left-6 z-10">
                  <Badge className="bg-accent text-accent-foreground">{offer.highlight}</Badge>
                </div>
              )}

              <CardHeader className="relative pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Percent className="w-8 h-8 text-primary" />
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{offer.discount}</div>
                    <div className="text-sm text-muted-foreground">OFF</div>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{offer.title}</CardTitle>
                <CardDescription className="text-base">{offer.description}</CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <div className="space-y-4">
                  {/* Valid Until */}
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">Válido hasta: {offer.validUntil}</span>
                  </div>

                  {/* Conditions */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Condiciones:</h4>
                    <ul className="space-y-1">
                      {offer.conditions.map((condition, conditionIndex) => (
                        <li key={conditionIndex} className="text-xs text-muted-foreground flex items-start">
                          <CheckCircle className="w-3 h-3 mr-2 mt-0.5 text-accent flex-shrink-0" />
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                    Aplicar descuento
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-background rounded-lg p-8 shadow-card">
          <div className="text-center mb-8">
            <Star className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Beneficios adicionales incluidos
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Además de los descuentos, como parte de nuestro programa regional recibes estos beneficios sin costo adicional:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Users className="w-5 h-5 mr-2" />
              Solicitar información completa
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 bg-gradient-hero rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            ¿Listo para comenzar tu aventura en IMG Academy?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Contáctanos hoy mismo para una consulta personalizada gratuita y descubre cómo podemos 
            ayudarte a alcanzar tus objetivos deportivos y académicos con los mejores descuentos disponibles.
          </p>
          <Button variant="secondary" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Contactar ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscountsSection;