import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logoWhite from "@/assets/img-logo-white.png";
import { InquiryModal } from "@/components/InquiryModal";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnCampusOpen, setIsOnCampusOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logoWhite} alt="IMG Academy" className="h-8" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative group" onMouseEnter={() => setIsOnCampusOpen(true)} onMouseLeave={() => setIsOnCampusOpen(false)}>
            <button className="text-white hover:text-white/80 transition-colors flex items-center gap-1">
              En Campus <ChevronDown className="w-4 h-4" />
            </button>
            {isOnCampusOpen && <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-48 z-50">
                <Link to="/facilities" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Instalaciones
                </Link>
                <Link to="/camps" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Camps
                </Link>
                <Link to="/boarding" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Internados
                </Link>
                <Link to="/sports" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Deportes
                </Link>
              </div>}
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-white hover:text-white/80 transition-colors"
          >
            Contacto
          </button>
          
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="absolute top-full left-0 right-0 bg-primary md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <Link to="/" className="text-white hover:text-white/80 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </Link>
              <Link to="/facilities" className="text-white hover:text-white/80 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Instalaciones
              </Link>
              <Link to="/camps" className="text-white hover:text-white/80 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Camps
              </Link>
              <Link to="/boarding" className="text-white hover:text-white/80 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Internados
              </Link>
              <Link to="/sports" className="text-white hover:text-white/80 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Deportes
              </Link>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="text-white hover:text-white/80 transition-colors text-left"
              >
                Contacto
              </button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-fit">
                #AddMoreAthletes
              </Button>
            </nav>
          </div>}
      </div>
      
      {/* Inquiry Modal */}
      <InquiryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        inquiryType="Contacto General"
      />
    </header>;
};
export default Header;