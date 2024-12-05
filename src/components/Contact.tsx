import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Dúvidas? Estamos aqui para você!</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center justify-center">
            <MessageCircle className="h-6 w-6 text-green-500 mr-2" />
            <span>WhatsApp: (XX) XXXX-XXXX</span>
          </div>
          <div className="flex items-center justify-center">
            <Mail className="h-6 w-6 text-blue-500 mr-2" />
            <span>E-mail: suporte@carregadorturbo.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}