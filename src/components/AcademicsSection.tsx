const AcademicsSection = () => {
  return <section className="bg-white px-6 py-16">
      {/* Image Placeholder */}
      <div className="bg-gray-400 h-64 mb-8 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <p className="text-sm">Classroom Image Placeholder</p>
          <p className="text-xs">(Students studying)</p>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-primary mb-8">ACADÉMICOS</h2>
      
      <p className="text-gray-700 text-lg leading-relaxed mb-8">Para que los estudiantes-atletas prosperen en las aulas universitarias del siglo 21 y más allá, deben estar equipados con un conjunto de habilidades que encarne los mandatos de un mundo cambiante. IMG Academy emplea las mejores prácticas que reflejan la investigación actual de aprendizaje efectivo a través de la integración estratégica de la alfabetización informacional y un plan de instrucción y currículum que dicta la inclusión de tareas de pensamiento complejo y riguroso.</p>

      <div className="flex flex-col gap-4">
        <button className="bg-gray-200 text-primary px-8 py-4 rounded-full font-semibold">
          Saber Más
        </button>
        <button className="bg-gray-200 text-primary px-8 py-4 rounded-full font-semibold">
          Ver Perfil Escolar
        </button>
      </div>
    </section>;
};
export default AcademicsSection;