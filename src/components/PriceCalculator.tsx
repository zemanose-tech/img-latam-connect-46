import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calculator, DollarSign, Percent, Star } from "lucide-react";
import { Link } from "react-router-dom";

const basePrices = {
  tennis: 45000,
  golf: 55000,
  football: 52000,
  basketball: 46000,
  baseball: 47000,
  soccer: 43000,
  lacrosse: 44000,
  track: 41000,
  wrestling: 42000
};

const programTypes = {
  boarding: { name: "Programa de Internado", multiplier: 1.0 },  
  day: { name: "Programa de Día", multiplier: 0.6 },
  camps: { name: "Campamentos", multiplier: 0.15 },
  online: { name: "Entrenamiento Online", multiplier: 0.05 }
};

const regionDiscounts = {
  "mexico": { name: "México", discount: 15 },
  "colombia": { name: "Colombia", discount: 20 },
  "brazil": { name: "Brasil", discount: 18 },
  "argentina": { name: "Argentina", discount: 22 },
  "chile": { name: "Chile", discount: 17 },
  "peru": { name: "Perú", discount: 25 },
  "other": { name: "Otro País", discount: 10 }
};

const PriceCalculator = () => {
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [duration, setDuration] = useState([12]); // months
  const [showResults, setShowResults] = useState(false);

  const calculatePrice = () => {
    if (!selectedSport || !selectedProgram || !selectedRegion) return 0;

    const basePrice = basePrices[selectedSport as keyof typeof basePrices];
    const programMultiplier = programTypes[selectedProgram as keyof typeof programTypes].multiplier;
    const regionDiscount = regionDiscounts[selectedRegion as keyof typeof regionDiscounts].discount;
    const durationMonths = duration[0];

    let totalPrice = basePrice * programMultiplier;
    
    // Adjust for duration if not boarding program
    if (selectedProgram !== "boarding") {
      totalPrice = (totalPrice / 12) * durationMonths;
    }

    // Apply regional discount
    const discountAmount = totalPrice * (regionDiscount / 100);
    const finalPrice = totalPrice - discountAmount;

    return {
      originalPrice: totalPrice,
      discountAmount,
      finalPrice,
      discountPercent: regionDiscount
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const resetCalculator = () => {
    setSelectedSport("");
    setSelectedProgram("");
    setSelectedRegion("");
    setDuration([12]);
    setShowResults(false);
  };

  const priceResult = calculatePrice();
  const canCalculate = selectedSport && selectedProgram && selectedRegion;

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-img-blue/10 rounded-full flex items-center justify-center">
            <Calculator className="w-6 h-6 text-img-blue" />
          </div>
        </div>
        <CardTitle className="text-2xl text-img-blue">Calculadora de Precios</CardTitle>
        <CardDescription>
          Obtén una estimación personalizada de costos para tu programa deportivo con descuentos regionales incluidos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block">Deporte de Interés</label>
              <Select value={selectedSport} onValueChange={setSelectedSport}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un deporte" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tennis">Tenis</SelectItem>
                  <SelectItem value="golf">Golf</SelectItem>
                  <SelectItem value="football">Fútbol Americano</SelectItem>
                  <SelectItem value="basketball">Baloncesto</SelectItem>
                  <SelectItem value="baseball">Béisbol</SelectItem>
                  <SelectItem value="soccer">Fútbol</SelectItem>
                  <SelectItem value="lacrosse">Lacrosse</SelectItem>
                  <SelectItem value="track">Atletismo</SelectItem>
                  <SelectItem value="wrestling">Lucha</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Tipo de Programa</label>
              <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tipo de programa" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(programTypes).map(([key, program]) => (
                    <SelectItem key={key} value={key}>
                      {program.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">País de Origen</label>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tu país" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(regionDiscounts).map(([key, region]) => (
                    <SelectItem key={key} value={key}>
                      {region.name} - {region.discount}% descuento
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedProgram && selectedProgram !== "boarding" && (
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Duración: {duration[0]} {duration[0] === 1 ? "mes" : "meses"}
                </label>
                <Slider
                  value={duration}
                  onValueChange={setDuration}
                  min={1}
                  max={12}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 mes</span>
                  <span>12 meses</span>
                </div>
              </div>
            )}

            <Button 
              onClick={handleCalculate}
              disabled={!canCalculate}
              className="w-full bg-img-blue hover:bg-img-blue-dark"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calcular Precio
            </Button>
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            {showResults && canCalculate ? (
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 mb-4">
                  <Star className="w-4 h-4 mr-1" />
                  Estimación Personalizada
                </Badge>
                
                <Card className="border-2 border-img-blue/20">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Precio Base:</span>
                        <span className="font-medium">${typeof priceResult === 'object' ? priceResult.originalPrice.toLocaleString() : '0'}</span>
                      </div>
                      
                      <div className="flex justify-between items-center text-green-600">
                        <span className="text-sm flex items-center">
                          <Percent className="w-4 h-4 mr-1" />
                          Descuento Regional ({typeof priceResult === 'object' ? priceResult.discountPercent : 0}%):
                        </span>
                        <span className="font-medium">-${typeof priceResult === 'object' ? priceResult.discountAmount.toLocaleString() : '0'}</span>
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-img-blue flex items-center">
                            <DollarSign className="w-5 h-5 mr-1" />
                            Precio Final:
                          </span>
                          <span className="text-2xl font-bold text-img-blue">
                            ${typeof priceResult === 'object' ? priceResult.finalPrice.toLocaleString() : '0'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="bg-img-blue/5 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>Incluye:</strong>
                        </p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• Entrenamiento deportivo profesional</li>
                          <li>• Uso de instalaciones de élite</li>
                          <li>• Supervisión académica (programas de internado)</li>
                          <li>• Análisis de rendimiento</li>
                          <li>• Apoyo nutricional</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-3">
                  <Button onClick={resetCalculator} variant="outline" className="flex-1">
                    Nueva Consulta
                  </Button>
                  <Link to="/contact" className="flex-1">
                    <Button className="w-full bg-img-blue hover:bg-img-blue-dark">
                      Solicitar Info
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-12">
                  <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Selecciona las opciones para ver tu estimación personalizada
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {showResults && (
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Nota:</strong> Esta es una estimación basada en precios estándar. Los costos finales pueden variar según factores adicionales como becas académicas, descuentos por hermanos, y promociones especiales. Contacta a nuestro representante para obtener una cotización oficial.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PriceCalculator;