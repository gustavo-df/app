import React from "react";
import { Store, Heart, Stethoscope, Scissors, MessageCircle } from "lucide-react";

const CatalogSection = () => {
  const assistants = [
    {
      id: 1,
      title: "Loja de Material de Construção",
      description: "Assistente especializado em materiais de construção, orçamentos, consulta de estoque e entrega.",
      icon: Store,
      color: "accent-purple",
      features: ["Consulta de produtos", "Orçamentos automáticos", "Status de entrega"]
    },
    {
      id: 2,
      title: "Clínica de Saúde e Beleza",
      description: "Gerenciamento de consultas, agendamentos, procedimentos e lembretes para pacientes.",
      icon: Heart,
      color: "accent-blue",
      features: ["Agendamento online", "Lembretes automáticos", "Histórico de consultas"]
    },
    {
      id: 3,
      title: "Clínica Veterinária",
      description: "Cuidado completo para pets, desde agendamentos até acompanhamento pós-consulta.",
      icon: Stethoscope,
      color: "accent-orange",
      features: ["Fichas dos pets", "Vacinas em dia", "Emergências 24h"]
    },
    {
      id: 4,
      title: "Barbearia",
      description: "Agendamentos inteligentes, preferências dos clientes e gestão de horários.",
      icon: Scissors,
      color: "accent-pink",
      features: ["Agenda inteligente", "Histórico de cortes", "Promoções personalizadas"]
    }
  ];

  return (
    <section id="catalogo" className="py-16 bg-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">
            Assistentes Especializados
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Cada assistente é personalizado para seu tipo de negócio, 
            com funcionalidades específicas que atendem suas necessidades.
          </p>
        </div>

        <div className="voice-grid">
          {assistants.map((assistant) => {
            const IconComponent = assistant.icon;
            return (
              <div key={assistant.id} className={`voice-card ${assistant.color} hover-lift`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center mr-4">
                    <IconComponent size={24} className="text-gray-700" />
                  </div>
                  <h3 className="voice-card-title">{assistant.title}</h3>
                </div>
                
                <p className="voice-card-description">
                  {assistant.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {assistant.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                      <span className="body-small">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="audio-player">
                  <button className="play-button">
                    <MessageCircle size={14} />
                  </button>
                  <div className="flex-1">
                    <div className="audio-progress">
                      <div className="absolute inset-0 bg-gray-700 rounded-full w-1/3"></div>
                    </div>
                  </div>
                  <span className="audio-time">Demo</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="body-medium mb-6">
            Não encontrou seu tipo de negócio? Criamos assistentes personalizados!
          </p>
          <a 
            href="https://wa.me/556191647524"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicitar Assistente Personalizado
          </a>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;