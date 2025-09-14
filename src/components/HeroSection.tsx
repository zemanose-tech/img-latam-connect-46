const HeroSection = () => {
  return <>
      {/* Video Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gray-600 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-8xl mb-4">▶️</div>
            <p className="text-xl font-medium">Video Introductorio IMG Academy</p>
            <p className="text-sm opacity-75">Auto-reproducción • Silenciado • Bucle</p>
          </div>
        </div>
        {/* Video placeholder - in real implementation, this would be a video element */}
        <div className="hidden">
          {/* <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
           >
            <source src="/path-to-video.mp4" type="video/mp4" />
           </video> */}
        </div>
      </section>

      <section className="bg-primary text-white">
      {/* Logo Section */}
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-white rounded mx-auto mb-8 flex items-center justify-center">
          <span className="text-primary text-2xl font-bold">IMG</span>
        </div>
        <h1 className="text-xl font-bold mb-2">IMG ACADEMY</h1>
      </div>

      {/* Award Badge */}
      <div className="flex justify-center mb-16">
        <div className="bg-gray-400 rounded-lg p-8 w-80 h-48 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <p className="text-sm">Award Badge Placeholder</p>
            <p className="text-xs">(K12Digest Award)</p>
          </div>
        </div>
      </div>

      {/* Main Heading */}
      <div className="px-6 pb-16">
        <h2 className="text-4xl font-bold leading-tight mb-8">
          UN CAMPUS.<br />
          POTENCIAL<br />
          ILIMITADO.
        </h2>
        <p className="text-lg leading-relaxed">
          En IMG Academy, reunimos a estudiantes-atletas apasionados con entrenadores y profesores de clase mundial, creando un entorno único donde el talento se transforma en resultados. Aquí, cada meta cuenta y cada logro se apoya con una atención personalizada. Año escolar 2024-2025.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-100 text-primary px-6 py-16">
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">100</div>
            <p className="text-sm">por ciento de aceptación universitaria</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">25</div>
            <p className="text-sm">admisiones estudiantiles a las 25 mejores universidades según US News</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">311</div>
            <p className="text-sm">estudiantes-atletas comprometidos con programas División I, II, III y NAIA</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">8</div>
            <p className="text-sm">compromisos estudiantiles con escuelas Ivy League</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">38</div>
            <p className="text-sm">Estudiosos AP</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">71</div>
            <p className="text-sm">países representados</p>
          </div>
        </div>
      </div>
    </section>
    </>;
};
export default HeroSection;