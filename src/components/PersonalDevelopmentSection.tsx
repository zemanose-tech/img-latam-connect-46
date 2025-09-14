const PersonalDevelopmentSection = () => {
  return (
    <section className="bg-white px-6 py-16">
      {/* Leadership Image Placeholder */}
      <div className="bg-gray-400 h-64 mb-8 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <p className="text-sm">Leadership Workshop Placeholder</p>
          <p className="text-xs">(Coach teaching leadership)</p>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-primary mb-8">
        DESARROLLO<br />
        PERSONAL
      </h2>
      
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Las llamadas habilidades "intangibles" como liderazgo, comunicación, manejo de la adversidad, confianza y enfoque son críticas para el éxito en todos los aspectos de la vida. Pero, ¿con qué frecuencia los estudiantes-atletas son <span className="underline">enseñados</span> intencionalmente cómo mejorar estas habilidades? En IMG Academy, tenemos más de 100 entrenadores con educación y experiencia en todas las facetas del desarrollo personal, con clases específicas y programas de entrenamiento implementados como parte de la experiencia de desarrollo general.
      </p>

      <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold">
        Saber Más
      </button>
    </section>
  );
};

export default PersonalDevelopmentSection;