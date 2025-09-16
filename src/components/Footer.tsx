import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import imgLogo from "@/assets/IMG_Gladys_white_transparent.png";
import { InquiryModal } from "@/components/InquiryModal";
import { useState } from "react";
const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={imgLogo} alt="IMG Academy - Gladys de Loaiza Authorized Representative" className="w-32 h-32 object-contain" />
              <div>
                <h3 className="text-xl font-bold">SPORTS ACADEMY</h3>
                <p className="text-xs text-primary-foreground/80">Global Referral Program Member of IMG Academy</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Líder mundial en educación deportiva con presencia en Latinoamérica. 
              Desarrollamos atletas de élite y estudiantes excepcionales desde 1978.
            </p>
            <div className="flex space-x-3">
              
              
              
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-primary-foreground/80 hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="/camps" className="text-primary-foreground/80 hover:text-accent transition-colors">Camps</a></li>
              <li><a href="/boarding" className="text-primary-foreground/80 hover:text-accent transition-colors">Internado</a></li>
              <li><a href="/facilities" className="text-primary-foreground/80 hover:text-accent transition-colors">Instalaciones</a></li>
              <li><a href="/sports" className="text-primary-foreground/80 hover:text-accent transition-colors">Deportes</a></li>
              <li><button onClick={() => setIsModalOpen(true)} className="text-primary-foreground/80 hover:text-accent transition-colors text-left">Contacto</button></li>
            </ul>
          </div>

          {/* Programs */}
          

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto directo</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-accent" />
                <span className="text-primary-foreground/80">+57 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-accent" />
                <span className="text-primary-foreground/80">admisiones.latam@imgacademy.com</span>
              </div>
              
            </div>
            
            
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            <p>&copy; 2025 IMG Academy. Todos los derechos reservados.</p>
            <p>Representante autorizado para Latinoamérica - Programa de Referencias Global</p>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Política de Privacidad
            </a>
            
            
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-white/20 text-center">
          <p className="text-xs text-primary-foreground/60">
            Esta página es operada por un representante autorizado del Programa de Referencias Global de IMG Academy. 
            Para información oficial, visita <a href="https://www.imgacademy.com" className="text-accent hover:underline">www.imgacademy.com</a>
          </p>
        </div>
      </div>
      
      {/* Inquiry Modal */}
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} inquiryType="Contacto General" />
    </footer>;
};
export default Footer;