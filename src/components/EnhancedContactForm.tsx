import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Send, Star, Trophy, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const sportsOptions = [
  { id: "tennis", name: "Tenis" },
  { id: "golf", name: "Golf" },
  { id: "football", name: "Fútbol Americano" },
  { id: "basketball", name: "Baloncesto" },
  { id: "baseball", name: "Béisbol" },
  { id: "soccer", name: "Fútbol" },
  { id: "lacrosse", name: "Lacrosse" },
  { id: "track", name: "Atletismo" },
  { id: "wrestling", name: "Lucha" }
];

const ageGroups = [
  "10-12 años",
  "13-15 años", 
  "16-18 años",
  "19+ años"
];

const programTypes = [
  { id: "boarding", name: "Programa de Internado", description: "Año académico completo" },
  { id: "day", name: "Programa de Día", description: "Solo entrenamientos" },
  { id: "camps", name: "Campamentos", description: "1-4 semanas" },
  { id: "online", name: "Entrenamiento Online", description: "Desde casa" }
];

const EnhancedContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    age: "",
    sports: [] as string[],
    programType: "",
    experience: "",
    message: "",
    budget: "",
    startDate: "",
    parentConsent: false,
    newsletter: true
  });
  
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSportChange = (sportId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      sports: checked 
        ? [...prev.sports, sportId]
        : prev.sports.filter(s => s !== sportId)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "¡Solicitud Enviada!",
      description: "Nuestro representante te contactará en las próximas 24 horas.",
    });

    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      age: "",
      sports: [],
      programType: "",
      experience: "",
      message: "",
      budget: "",
      startDate: "",
      parentConsent: false,
      newsletter: true
    });
  };

  return (
    <div className="py-20 bg-gradient-to-b from-img-white to-img-gray">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-img-blue text-white">CONTACTO PERSONALIZADO</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-img-blue mb-6">
            Comienza Tu Futuro Deportivo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro representante en Latinoamérica está listo para ayudarte a dar el siguiente paso hacia la excelencia deportiva.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="h-fit sticky top-8">
              <CardHeader>
                <CardTitle className="text-img-blue flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Representante Oficial
                </CardTitle>
                <CardDescription>
                  IMG Academy Latinoamérica
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-img-blue/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-img-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-sm text-gray-600">+57 123 456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-img-blue/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-img-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600">admisiones.latam@imgacademy.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-img-blue/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-img-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-sm text-gray-600">Bradenton, Florida, USA</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="flex items-center justify-center mb-2">
                        <Trophy className="w-6 h-6 text-img-blue" />
                      </div>
                      <p className="text-sm font-medium">9 Deportes</p>
                      <p className="text-xs text-gray-600">de Élite</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-2">
                        <Users className="w-6 h-6 text-img-blue" />
                      </div>
                      <p className="text-sm font-medium">1200+</p>
                      <p className="text-xs text-gray-600">Estudiantes</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-2">
                        <Star className="w-6 h-6 text-img-blue" />
                      </div>
                      <p className="text-sm font-medium">25%</p>
                      <p className="text-xs text-gray-600">NCAA D1</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-img-blue">Solicitar Información Personalizada</CardTitle>
                <CardDescription>
                  Completa este formulario y recibe información detallada sobre programas, precios y descuentos regionales.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Nombre *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Apellido *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="country">País *</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="age">Edad del Estudiante *</Label>
                      <Select value={formData.age} onValueChange={(value) => handleInputChange('age', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona edad" />
                        </SelectTrigger>
                        <SelectContent>
                          {ageGroups.map((age) => (
                            <SelectItem key={age} value={age}>{age}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Sports Interest */}
                  <div>
                    <Label className="text-base font-medium">Deportes de Interés *</Label>
                    <p className="text-sm text-gray-600 mb-3">Selecciona todos los deportes que te interesan</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {sportsOptions.map((sport) => (
                        <div key={sport.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={sport.id}
                            checked={formData.sports.includes(sport.id)}
                            onCheckedChange={(checked) => handleSportChange(sport.id, !!checked)}
                          />
                          <Label htmlFor={sport.id} className="text-sm cursor-pointer">
                            {sport.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Program Type */}
                  <div>
                    <Label className="text-base font-medium">Tipo de Programa *</Label>
                    <RadioGroup 
                      value={formData.programType} 
                      onValueChange={(value) => handleInputChange('programType', value)}
                      className="mt-2"
                    >
                      {programTypes.map((program) => (
                        <div key={program.id} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value={program.id} id={program.id} />
                          <div className="flex-1">
                            <Label htmlFor={program.id} className="font-medium cursor-pointer">
                              {program.name}
                            </Label>
                            <p className="text-sm text-gray-600">{program.description}</p>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Additional Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="experience">Nivel de Experiencia</Label>
                      <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona nivel" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Principiante</SelectItem>
                          <SelectItem value="intermediate">Intermedio</SelectItem>
                          <SelectItem value="advanced">Avanzado</SelectItem>
                          <SelectItem value="elite">Élite</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="startDate">Fecha de Inicio Deseada</Label>
                      <Select value={formData.startDate} onValueChange={(value) => handleInputChange('startDate', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona fecha" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fall2025">Otoño 2025</SelectItem>
                          <SelectItem value="spring2026">Primavera 2026</SelectItem>
                          <SelectItem value="summer2025">Verano 2025</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje Adicional</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Cuéntanos sobre tus objetivos deportivos, preguntas específicas, o cualquier información adicional..."
                      rows={4}
                    />
                  </div>

                  {/* Consent and Newsletter */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="parentConsent"
                        checked={formData.parentConsent}
                        onCheckedChange={(checked) => handleInputChange('parentConsent', !!checked)}
                        required
                      />
                      <Label htmlFor="parentConsent" className="text-sm">
                        Confirmo que tengo autorización parental para solicitar información (requerido para menores de 18 años) *
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange('newsletter', !!checked)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Deseo recibir actualizaciones sobre programas, eventos y noticias de IMG Academy
                      </Label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-img-blue hover:bg-img-blue-dark text-white py-3 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Solicitar Información Gratuita
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContactForm;