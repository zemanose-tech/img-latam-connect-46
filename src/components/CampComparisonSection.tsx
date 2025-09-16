import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
const CampComparisonSection = () => {
  return <section className="bg-gray-50 px-6 py-16">
      <div className="container mx-auto max-w-6xl">
        {/* Introduction Text */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Los campamentos de IMG Academy están diseñados para ofrecer una experiencia deportiva y educativa excepcional que desarrolla tanto las habilidades atléticas como el carácter personal de cada participante. Con instalaciones de clase mundial y entrenadores profesionales, nuestros programas combinan entrenamiento técnico avanzado, acondicionamiento físico y desarrollo mental para maximizar el potencial de cada atleta. Ofrecemos diferentes modalidades de campamentos:
          </p>
        </div>

        {/* Help Choosing Section */}
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardContent className="text-center py-8">
            <h2 className="text-3xl font-bold text-primary mb-4">¿Necesitas Ayuda Eligiendo Tu Programa?</h2>
            
            
          </CardContent>
        </Card>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header */}
              <div className="grid grid-cols-5 gap-0">
                <div className="p-4"></div>
                <div className="text-center bg-gray-100 p-4">
                  <div className="bg-gray-300 h-3 mb-3 rounded"></div>
                  <h3 className="font-bold text-sm text-gray-700">IMG ACADEMY<br />CAMP</h3>
                </div>
                <div className="text-center bg-blue-400 p-4">
                  <div className="bg-blue-500 h-3 mb-3 rounded"></div>
                  <h3 className="font-bold text-sm text-white">TOTAL ATHLETE<br />CAMP</h3>
                </div>
                <div className="text-center bg-blue-600 p-4">
                  <div className="bg-blue-700 h-3 mb-3 rounded"></div>
                  <h3 className="font-bold text-sm text-white">BREAKTHROUGH<br />CAMP</h3>
                </div>
                <div className="text-center bg-lime-400 p-4">
                  <div className="bg-lime-500 h-3 mb-3 rounded"></div>
                  <h3 className="font-bold text-sm text-gray-800">GAME CHANGER<br />CAMP</h3>
                </div>
              </div>

              {/* Section: Weekly Sport Camps */}
              <div className="grid grid-cols-5 gap-0 border-t">
                <div className="flex items-center p-4 bg-gray-50">
                  
                  <div>
                    <div className="font-bold text-blue-600 text-sm mb-1">CAMPOS DEPORTIVOS SEMANALES</div>
                    <div className="text-xs text-gray-600">En nuestro campus ubicado en Bradenton, Florida</div>
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-100 flex items-center justify-center">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-center p-4 bg-blue-400 flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="text-center p-4 bg-blue-600 flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="text-center p-4 bg-lime-400 flex items-center justify-center">
                  <Check className="w-6 h-6 text-gray-800" />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-0 border-t">
                <div className="p-4 text-sm text-gray-700 bg-gray-50">
                  Dos sesiones de entrenamiento específico por deporte (AM/PM) por día
                </div>
                <div className="text-center p-4 bg-gray-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-center p-4 bg-blue-400 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div className="text-center p-4 bg-blue-600 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div className="text-center p-4 bg-lime-400 flex items-center justify-center">
                  <Check className="w-5 h-5 text-gray-800" />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-0 border-t">
                <div className="p-4 text-sm text-gray-700 bg-gray-50">
                  Sesiones de fuerza y acondicionamiento, y rendimiento mental
                </div>
                <div className="text-center p-4 bg-gray-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-center p-4 bg-blue-400 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div className="text-center p-4 bg-blue-600 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div className="text-center p-4 bg-lime-400 flex items-center justify-center">
                  <Check className="w-5 h-5 text-gray-800" />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-0 border-t">
                <div className="p-4 text-sm text-gray-700 bg-gray-50">
                  Camiseta del Campo y Mochila
                  
                </div>
                <div className="text-center p-4 bg-gray-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-center p-4 bg-blue-400 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div className="text-center p-4 bg-blue-600 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div className="text-center p-4 bg-lime-400 flex items-center justify-center">
                  <Check className="w-5 h-5 text-gray-800" />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-0 border-t">
                <div className="p-4 text-sm text-gray-700 bg-gray-50">
                  Membresía esencial IMG Academy+
                </div>
                <div className="text-center p-4 bg-gray-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-center p-4 bg-blue-400 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div className="text-center p-4 bg-blue-600 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div className="text-center p-4 bg-lime-400 flex items-center justify-center">
                  <Check className="w-5 h-5 text-gray-800" />
                </div>
              </div>

              {/* Section: Performance Training */}
              <div className="grid grid-cols-5 gap-0 border-t">
                <div className="flex items-center p-4 bg-gray-50">
                  
                  <div>
                    <div className="font-bold text-blue-600 text-sm mb-1">ENTRENAMIENTO DE RENDIMIENTO</div>
                    <div className="text-xs text-gray-600">Entrenamiento adicional en áreas preseleccionadas como fuerza, velocidad, resistencia mental u otras disciplinas de rendimiento</div>
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-100 flex items-center justify-center">
                  {/* Empty for IMG Academy */}
                </div>
                <div className="text-center p-4 bg-blue-400 flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="text-center p-4 bg-blue-600 flex items-center justify-center">
                  
                </div>
                <div className="text-center p-4 bg-lime-400 flex items-center justify-center">
                  <Check className="w-6 h-6 text-gray-800" />
                </div>
              </div>

              {/* Section: Personalized Coaching */}
              <div className="grid grid-cols-5 gap-0 border-t">
                <div className="flex items-center p-4 bg-gray-50">
                  
                  <div>
                    <div className="font-bold text-blue-600 text-sm mb-1">ENTRENAMIENTO PERSONALIZADO</div>
                    <div className="text-xs text-gray-600">Instrucción adicional 1:1 o en grupos pequeños</div>
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-100 flex items-center justify-center">
                  {/* Empty for IMG Academy */}
                </div>
                <div className="text-center p-4 bg-blue-400 flex items-center justify-center">
                  {/* Empty for Total Athlete */}
                </div>
                <div className="text-center p-4 bg-blue-600 flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="text-center p-4 bg-lime-400 flex items-center justify-center">
                  <Check className="w-6 h-6 text-gray-800" />
          </div>
        </div>

        {/* Pricing Blocks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {/* IMG Academy Camp */}
          

          {/* Total Athlete Camp */}
          

          {/* Breakthrough Camp */}
          

          {/* Game Changer Camp */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-lime-400 overflow-hidden">
            
            
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CampComparisonSection;