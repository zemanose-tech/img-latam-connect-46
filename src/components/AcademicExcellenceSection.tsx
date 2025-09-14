import { Button } from "@/components/ui/button";

const AcademicExcellenceSection = () => {
  return (
    <section className="bg-primary text-primary-foreground px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-6">EXCELENCIA ACADÉMICA</h2>
          <div className="bg-primary-foreground/10 rounded-lg p-8">
            <p className="text-lg leading-relaxed mb-6">
              Para que los estudiantes-atletas prosperen en las aulas universitarias del siglo XXI y más allá, deben estar equipados con un conjunto de habilidades que encarne los mandatos de un mundo cambiante.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              IMG Academy emplea las mejores prácticas que reflejan la investigación actual de aprendizaje efectivo a través de la integración estratégica de la alfabetización informacional y un plan de instrucción y currículo que dicta la inclusión de tareas de pensamiento complejas y rigurosas.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-primary-foreground/10 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-3">Aprendizaje del Siglo XXI</h3>
            <p className="text-sm opacity-90">Metodologías modernas que preparan para el éxito universitario</p>
          </div>
          
          <div className="bg-primary-foreground/10 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-3">Pensamiento Crítico</h3>
            <p className="text-sm opacity-90">Desarrollo de habilidades analíticas y de resolución de problemas</p>
          </div>
          
          <div className="bg-primary-foreground/10 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-3">Alfabetización Informacional</h3>
            <p className="text-sm opacity-90">Competencias digitales para un mundo conectado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicExcellenceSection;