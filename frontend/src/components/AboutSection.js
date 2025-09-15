import React from "react";
import { Brain, MessageSquare, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">
            Por que escolher nosso Assistente Virtual?
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Nossa solução utiliza modelos de linguagem avançados (LLM) para criar 
            uma experiência de atendimento natural e eficiente para seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain size={32} className="text-blue-600" />
            </div>
            <h3 className="heading-3 mb-3">IA Inteligente</h3>
            <p className="body-medium">
              Nosso assistente entende linguagem natural, proporcionando 
              conversas fluidas e respostas precisas para seus clientes.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare size={32} className="text-green-600" />
            </div>
            <h3 className="heading-3 mb-3">Sem Menus Estáticos</h3>
            <p className="body-medium">
              Acabou a frustração com menus complexos. Seus clientes conversam 
              naturalmente e obtêm o que precisam rapidamente.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap size={32} className="text-red-600" />
            </div>
            <h3 className="heading-3 mb-3">Integração Total</h3>
            <p className="body-medium">
              Conectamos com seus sistemas existentes: estoque, agenda, 
              CRM e muito mais, conforme sua necessidade.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="heading-2 mb-4">Focado em Pequenas e Médias Empresas</h3>
          <p className="body-large max-w-2xl mx-auto mb-6">
            Desenvolvemos nossa solução pensando especificamente nas necessidades 
            de negócios como o seu, oferecendo tecnologia de ponta com custo acessível.
          </p>
          <a 
            href="https://wa.me/556191647524"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Descobrir Como Funciona
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;