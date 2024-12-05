import React from 'react';
import { Battery, Feather, Leaf, Smartphone, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Battery,
    title: 'Carga Ultra-Rápida',
    description: '50% de bateria em apenas 10 minutos! Velocidade incomparável.',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: Zap,
    title: 'Potência Máxima',
    description: '125W de pura energia para seu dispositivo.',
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    icon: Shield,
    title: 'Proteção Inteligente',
    description: 'Sistema avançado de proteção contra sobrecarga.',
    color: 'from-blue-400 to-blue-600'
  }
];

export function Features() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Tecnologia de Ponta
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="p-8">
                <div className={`inline-block bg-gradient-to-r ${feature.color} p-3 rounded-lg mb-4`}>
                  <feature.icon className="h-8 w-8 text-white animate-pulse" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}