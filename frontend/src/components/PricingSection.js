import React from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="precos" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">
            Investimento Transparente
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Oferecemos soluções acessíveis para pequenas e médias empresas, 
            com valores que cabem no seu orçamento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Implementation Cost */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle size={32} className="text-blue-600" />
              </div>
              <h3 className="heading-2 mb-4">Implementação</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-600">R$ 400</span>
                <span className="body-medium text-gray-600"> - </span>
                <span className="text-3xl font-bold text-blue-600">R$ 2.000</span>
              </div>
              <p className="body-medium text-gray-600 mb-6">
                Configuração única do assistente personalizado para seu negócio
              </p>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-3 text-green-600 flex-shrink-0" />
                  <span className="body-small">Análise completa do negócio</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-3 text-green-600 flex-shrink-0" />
                  <span className="body-small">Configuração e treinamento da IA</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-3 text-green-600 flex-shrink-0" />
                  <span className="body-small">Integrações personalizadas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-3 text-green-600 flex-shrink-0" />
                  <span className="body-small">Testes e ajustes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-3 text-green-600 flex-shrink-0" />
                  <span className="body-small">Treinamento da equipe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Cost */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="heading-2 mb-4">Mensalidade</h3>
              <div className="mb-4">
                <span className="body-small text-gray-600">A partir de </span>
                <span className="text-3xl font-bold text-green-600">R$ 60</span>
                <span className="body-medium text-gray-600">/mês</span>
              </div>
              <p className="body-medium text-gray-600 mb-6">
                Valor varia conforme utilização e integrações necessárias
              </p>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-3 text-green-600 flex-shrink-0" />
                  <span className="body-small">Assistente 24/7 ativo</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-3 text-green-600 flex-shrink-0" />
                  <span className="body-small">Suporte técnico</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-3 text-green-600 flex-shrink-0" />
                  <span className="body-small">Atualizações automáticas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-3 text-green-600 flex-shrink-0" />
                  <span className="body-small">Relatórios mensais</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-3 text-green-600 flex-shrink-0" />
                  <span className="body-small">Backup e segurança</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="heading-2 mb-4">Como Definimos o Valor?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div className="space-y-2">
              <h4 className="heading-3">Implementação</h4>
              <p className="body-small text-gray-600">
                • Complexidade das integrações<br/>
                • Número de funcionalidades<br/>
                • Customizações específicas<br/>
                • Tempo de desenvolvimento
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="heading-3">Mensalidade</h4>
              <p className="body-small text-gray-600">
                • Volume de conversas<br/>
                • Integrações ativas<br/>
                • Recursos utilizados<br/>
                • Nível de suporte
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="heading-3">Sem Surpresas</h4>
              <p className="body-small text-gray-600">
                • Orçamento transparente<br/>
                • Sem taxas ocultas<br/>
                • Sem fidelidade obrigatória<br/>
                • Cancelamento livre
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <a 
              href="https://wa.me/556191647524?text=Olá! Gostaria de receber um orçamento para o assistente virtual da FabLab."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;