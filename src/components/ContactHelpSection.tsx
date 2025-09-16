const ContactHelpSection = () => {
  return <section className="bg-white px-6 py-16">
      {/* Student Athlete Portrait Placeholder */}
      

      <h2 className="text-4xl font-bold text-primary mb-12 text-center">
        ¿NECESITAS MÁS AYUDA?
      </h2>

      <div className="flex justify-center space-x-12">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary text-xs">✉️</span>
            </div>
          </div>
          <p className="text-primary font-bold text-sm">SOLICITAR<br />CONSULTA</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary text-xs">📞</span>
            </div>
          </div>
          <p className="text-primary font-bold text-sm">LLAMAR</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary text-xs">💬</span>
            </div>
          </div>
          <p className="text-primary font-bold text-sm">CHATEAR<br />CON NOSOTROS</p>
        </div>
      </div>
    </section>;
};
export default ContactHelpSection;