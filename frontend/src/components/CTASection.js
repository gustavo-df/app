import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="hero-section">
      <div className="hero-content">
        <h2 className="heading-hero mb-6">
          Pronto para Transformar
          <br />
          seu Atendimento?
        </h2>
        
        <p className="hero-subtitle body-large mb-8">
          Experimente gratuitamente nosso assistente virtual e veja como ele pode 
          revolucionar a experiência dos seus clientes no WhatsApp.
        </p>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
          <h3 className="heading-2 mb-4">O que você ganha testando:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-center">
              <ArrowRight size={16} className="mr-3 text-green-600" />
              <span className="body-medium">Demonstração personalizada</span>
            </div>
            <div className="flex items-center">
              <ArrowRight size={16} className="mr-3 text-green-600" />
              <span className="body-medium">Análise gratuita do seu negócio</span>
            </div>
            <div className="flex items-center">
              <ArrowRight size={16} className="mr-3 text-green-600" />
              <span className="body-medium">Proposta de integração</span>
            </div>
            <div className="flex items-center">
              <ArrowRight size={16} className="mr-3 text-green-600" />
              <span className="body-medium">Suporte na implementação</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://wa.me/556191647524?text=Olá! Gostaria de experimentar o assistente virtual da FabLabAI para meu negócio."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
          >
            <MessageCircle size={20} />
            Experimentar Agora
          </a>
        </div>
        
        <div className="mt-8 body-small">
          <p>✓ Sem compromisso  ✓ Implementação gratuita  ✓ Suporte dedicado</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;