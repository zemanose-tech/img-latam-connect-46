import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User, Calendar } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-img-gray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            <MessageCircle className="w-4 h-4 mr-2" />
            Contacto Directo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tu representante en <span className="text-primary">Latinoamérica</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Como parte del programa de referencias global de IMG Academy, te ofrecemos atención personalizada 
            en español y soporte completo durante todo el proceso de admisión.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Personal Representative Card */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">Tu representante personal</CardTitle>
                    <CardDescription>Especialista en admisiones para Latinoamérica</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Soy [Tu Nombre], representante oficial de IMG Academy para Colombia, España, Panamá y Costa Rica. 
                    Mi trabajo es hacer que tu proceso de admisión sea lo más sencillo posible.
                  </p>
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="text-sm text-foreground font-semibold">
                      ✨ Garantía de respuesta en menos de 24 horas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Teléfono / WhatsApp</h3>
                      <p className="text-sm text-muted-foreground">Disponible de 8:00 - 20:00</p>
                    </div>
                  </div>
                  <p className="text-primary font-semibold">+57 123 456 7890</p>
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Enviar WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email directo</h3>
                      <p className="text-sm text-muted-foreground">Respuesta en 24h</p>
                    </div>
                  </div>
                  <p className="text-primary font-semibold">admisiones.latam@imgacademy.com</p>
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar email
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Office Hours & Coverage */}
            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold text-foreground">Horarios de atención</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Lunes - Viernes</p>
                    <p className="text-muted-foreground">8:00 AM - 8:00 PM (Hora Colombia)</p>
                    <p className="text-muted-foreground">2:00 PM - 2:00 AM (Hora España)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Sábados</p>
                    <p className="text-muted-foreground">9:00 AM - 2:00 PM (Hora Colombia)</p>
                    <p className="text-muted-foreground">3:00 PM - 8:00 PM (Hora España)</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-accent mr-2" />
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">Cobertura:</span> Colombia, España, Panamá, Costa Rica
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Solicita información personalizada</CardTitle>
              <CardDescription>
                Completa este formulario y te contactaremos en menos de 24 horas con información específica 
                sobre programas, becas y descuentos disponibles.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre *</Label>
                  <Input id="firstName" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellidos *</Label>
                  <Input id="lastName" placeholder="Tus apellidos" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono / WhatsApp *</Label>
                  <Input id="phone" placeholder="+57 123 456 7890" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">País *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu país" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="colombia">Colombia</SelectItem>
                      <SelectItem value="spain">España</SelectItem>
                      <SelectItem value="panama">Panamá</SelectItem>
                      <SelectItem value="costa-rica">Costa Rica</SelectItem>
                      <SelectItem value="other">Otro país</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Edad del estudiante</Label>
                  <Input id="age" placeholder="15 años" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="program">Programa de interés</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="¿Qué programa te interesa?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="boarding">Programa de Internado</SelectItem>
                    <SelectItem value="summer">Campamentos de Verano</SelectItem>
                    <SelectItem value="university">Academias Universitarias</SelectItem>
                    <SelectItem value="unsure">No estoy seguro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sport">Principal deporte de interés</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el deporte principal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tennis">Tenis</SelectItem>
                    <SelectItem value="golf">Golf</SelectItem>
                    <SelectItem value="soccer">Fútbol</SelectItem>
                    <SelectItem value="basketball">Baloncesto</SelectItem>
                    <SelectItem value="baseball">Béisbol</SelectItem>
                    <SelectItem value="track">Atletismo</SelectItem>
                    <SelectItem value="multiple">Múltiples deportes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje adicional</Label>
                <Textarea 
                  id="message" 
                  placeholder="Cuéntanos sobre tus objetivos deportivos y académicos, experiencia previa, preguntas específicas, etc." 
                  rows={4}
                />
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar solicitud de información
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Al enviar este formulario, aceptas que nos contactemos contigo sobre los programas de IMG Academy.
                    <br />
                    <span className="text-accent font-semibold">Tu información está 100% protegida.</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schedule Call CTA */}
        <div className="mt-16 bg-gradient-hero rounded-lg p-8 text-center text-white">
          <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">¿Prefieres una llamada personal?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Agenda una llamada gratuita de 30 minutos para resolver todas tus dudas y conocer en detalle 
            los programas que mejor se adapten a tus objetivos.
          </p>
          <Button variant="secondary" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Calendar className="w-5 h-5 mr-2" />
            Agendar llamada gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;