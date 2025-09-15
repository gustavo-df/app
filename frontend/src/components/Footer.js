import React from "react";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_ab28db60-7d14-48e6-8510-0858b168cd68/artifacts/rupubmui_Logo%20Moderno%20FabLab%20em%20Cores%20Prim%C3%A1rias.png" 
                alt="FabLab Logo" 
                className="h-8 w-auto"
              />
              <span className="ml-3 heading-3 font-mono text-white">FabLab</span>
            </div>
            <p className="body-medium text-gray-300 max-w-md">
              Transformamos o atendimento ao cliente com assistentes virtuais inteligentes 
              que entendem linguagem natural e oferecem experiências personalizadas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="heading-3 mb-4 text-white">Serviços</h4>
            <ul className="space-y-2">
              <li><button className="body-small text-gray-300 hover:text-white transition-colors">Assistente para Lojas</button></li>
              <li><button className="body-small text-gray-300 hover:text-white transition-colors">Assistente para Clínicas</button></li>
              <li><button className="body-small text-gray-300 hover:text-white transition-colors">Assistente para Veterinárias</button></li>
              <li><button className="body-small text-gray-300 hover:text-white transition-colors">Assistente para Barbearias</button></li>
              <li><button className="body-small text-gray-300 hover:text-white transition-colors">Soluções Personalizadas</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="heading-3 mb-4 text-white">Contato</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/556191647524"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 body-small text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle size={16} />
                (61) 9164-7524
              </a>
              <div className="flex items-center gap-3 body-small text-gray-300">
                <Mail size={16} />
                contato@fablab.com.br
              </div>
              <div className="flex items-center gap-3 body-small text-gray-300">
                <MapPin size={16} />
                Brasília, DF - Brasil
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="body-small text-gray-400">
            © 2025 FabLab. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button className="body-small text-gray-400 hover:text-white transition-colors">
              Política de Privacidade
            </button>
            <button className="body-small text-gray-400 hover:text-white transition-colors">
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;