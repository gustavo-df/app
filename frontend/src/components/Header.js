import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header-nav">
      <div className="container">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_ab28db60-7d14-48e6-8510-0858b168cd68/artifacts/rupubmui_Logo%20Moderno%20FabLab%20em%20Cores%20Prim%C3%A1rias.png" 
              alt="FabLab Logo" 
              className="h-8 w-auto"
            />
            <span className="ml-3 heading-3 font-mono">FabLab</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="body-medium hover:text-gray-600 transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="body-medium hover:text-gray-600 transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('catalogo')}
              className="body-medium hover:text-gray-600 transition-colors"
            >
              Catálogo
            </button>
            <button 
              onClick={() => scrollToSection('recursos')}
              className="body-medium hover:text-gray-600 transition-colors"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="body-medium hover:text-gray-600 transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/5561916475247"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden btn-nav"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 py-4">
            <nav className="container flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="body-medium text-left hover:text-gray-600 transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="body-medium text-left hover:text-gray-600 transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('catalogo')}
                className="body-medium text-left hover:text-gray-600 transition-colors"
              >
                Catálogo
              </button>
              <button 
                onClick={() => scrollToSection('recursos')}
                className="body-medium text-left hover:text-gray-600 transition-colors"
              >
                Recursos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="body-medium text-left hover:text-gray-600 transition-colors"
              >
                Contato
              </button>
              <a 
                href="https://wa.me/5561916475247"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Falar no WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;