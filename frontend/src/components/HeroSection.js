import React from "react";
import { MessageCircle, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        <div className="hero-announcement">
          <Sparkles size={14} />
          <span>Novo: IA que entende linguagem natural</span>
        </div>
        
        <h1 className="heading-hero">
          Assistente Virtual Inteligente
          <br />
          para seu WhatsApp
        </h1>
        
        <p className="hero-subtitle body-large">
          Transforme seu atendimento com nossa IA avançada que compreende seus clientes 
          e oferece respostas personalizadas, sem menus complicados.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://wa.me/5561916475247"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <MessageCircle size={18} />
            Experimentar Grátis
          </a>
          
          <button 
            onClick={() => document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Saber Mais
          </button>
        </div>
        
        <div className="mt-8 body-small text-center">
          <p>✓ Sem menus estáticos  ✓ Integração personalizada  ✓ Suporte 24/7</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;