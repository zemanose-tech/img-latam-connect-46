import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BookingInfoSection = () => {
  return (
    <section className="bg-primary text-white px-6 py-16">
      <Card className="bg-primary border-none text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold mb-8">
            LO QUE LAS FAMILIAS DEBEN SABER ANTES DE RESERVAR
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex items-start">
            <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <p className="text-sm leading-relaxed">
              El registro del campo cierra 10 días antes del inicio de cada campo.
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <p className="text-sm leading-relaxed">
              El check-in del campo es el domingo, y el check-out es el sábado (excepto para algunos campos de vacaciones y torneos).
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <p className="text-sm leading-relaxed">
              Los campos están disponibles durante todo el año, siendo enero-marzo, junio-agosto y diciembre los meses más populares entre los atletas. Es importante reservar con al menos 6 meses de anticipación para asegurar tu lugar y garantizar disponibilidad.
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <p className="text-sm leading-relaxed">
              Los campistas pueden extender su estadía en el campo mientras estén en el campus, pendiente de disponibilidad de internado y entrenamiento deportivo.
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <p className="text-sm leading-relaxed">
              Los precios pueden aumentar mientras más cerca esté la fecha de reserva, así que reserva temprano para ahorrar.
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <p className="text-sm leading-relaxed">
              Los campistas de múltiples semanas típicamente reservan una de nuestras excursiones supervisadas fuera del campus para relajarse y disfrutar tiempo con otros campistas en algunas de nuestras atracciones locales.
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <p className="text-sm leading-relaxed">
              Opciones de campo reembolsables están disponibles. Si compras un paquete reembolsable, IMGA reembolsará la cantidad que pagaste para comprar el paquete, menos una tarifa de servicio igual al 2.5% del monto total pagado por dicho paquete, siempre que canceles el paquete al menos 48 horas antes de tu fecha programada original de llegada.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default BookingInfoSection;