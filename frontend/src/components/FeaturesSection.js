import React from "react";
import { CheckCircle, Clock, Users, Settings, BarChart, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Respostas Precisas",
      description: "IA treinada para entender o contexto e fornecer informações exatas sobre seu negócio."
    },
    {
      icon: Clock,
      title: "Disponível 24/7",
      description: "Seus clientes podem obter suporte e informações a qualquer hora do dia ou da noite."
    },
    {
      icon: Users,
      title: "Múltiplos Atendimentos",
      description: "Atenda centenas de clientes simultaneamente sem perder a qualidade do serviço."
    },
    {
      icon: Settings,
      title: "Integração Completa",
      description: "Conecte com seus sistemas existentes: estoque, agenda, CRM, pagamentos e mais."
    },
    {
      icon: BarChart,
      title: "Relatórios Detalhados",
      description: "Acompanhe métricas de atendimento, satisfação do cliente e performance em tempo real."
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Todos os dados são protegidos com criptografia de ponta e conformidade LGPD."
    }
  ];

  return (
    <section id="recursos" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">
            Recursos que Fazem a Diferença
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Nossa plataforma oferece tudo que você precisa para revolucionar 
            o atendimento ao cliente do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="hover-lift bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent size={24} className="text-blue-600" />
                </div>
                <h3 className="heading-3 mb-3">{feature.title}</h3>
                <p className="body-medium text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="heading-2 mb-4">Implementação Simples</h3>
          <p className="body-large max-w-2xl mx-auto mb-8">
            Nossa equipe cuida de toda a configuração e integração. 
            Em poucos dias, seu assistente estará funcionando perfeitamente.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-blue-600 mb-2">1</div>
              <h4 className="heading-3 mb-2">Análise</h4>
              <p className="body-small">Entendemos seu negócio e necessidades específicas.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-green-600 mb-2">2</div>
              <h4 className="heading-3 mb-2">Configuração</h4>
              <p className="body-small">Configuramos e treinamos o assistente para seu negócio.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-purple-600 mb-2">3</div>
              <h4 className="heading-3 mb-2">Lançamento</h4>
              <p className="body-small">Seu assistente entra em operação com suporte total.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;