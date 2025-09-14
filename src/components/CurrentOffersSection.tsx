import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CurrentOffersSection = () => {
  return (
    <section className="bg-white px-6 py-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-primary mb-4">
          OFERTAS ACTUALES DEL CAMPO
        </h2>
      </div>

      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">IMG ACADEMY</h3>
              <h4 className="text-xl font-bold">TARIFA DE RESIDENTE DE FLORIDA</h4>
            </div>
            {/* Image placeholder */}
            <div className="w-24 h-24 bg-gray-400 rounded"></div>
          </div>
          
          <p className="text-lg mb-6">
            Los residentes de Florida pueden ahorrar 10% en campos juveniles entre 12/29/24 - 5/25/25 y 8/17/25 - 12/28/25.
          </p>
          
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold">
            Reserva Tu Lugar
          </Button>
        </div>
      </Card>

      {/* Additional image placeholder */}
      <div className="mt-8">
        <div className="w-full h-64 bg-gray-400 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-600">
            <p className="text-sm">Imagen de Atletas Placeholder</p>
            <p className="text-xs">(Equipo celebrando)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentOffersSection;