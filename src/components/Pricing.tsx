import React from 'react';
import { Package, Truck, Clock, Zap, Battery, Shield } from 'lucide-react';
import { ElectricEffect } from './animations/ElectricEffect';
import { CountdownTimer } from './CountdownTimer';
import { PowerMeter } from './PowerMeter';
import { ComparisonChart } from './ComparisonChart';

export function Pricing() {
  return (
    <div className="bg-gray-900 py-16 relative overflow-hidden">
      <ElectricEffect />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-8 shadow-2xl relative">
          <div className="absolute inset-0 bg-black opacity-50 rounded-3xl" />
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex flex-col items-center mb-6">
                  <Clock className="h-12 w-12 text-yellow-300 animate-spin-slow mb-4" />
                  <h2 className="text-4xl font-bold text-yellow-300 animate-pulse mb-4">
                    OFERTA RELÂMPAGO!
                  </h2>
                  <CountdownTimer />
                </div>
                
                <PowerMeter />
                
                <div className="flex flex-col items-center mb-8">
                  <span className="text-xl line-through text-gray-400">De R$ 299,90</span>
                  <div className="flex items-center">
                    <Zap className="h-8 w-8 text-yellow-300 mr-2 animate-bounce" />
                    <span className="text-5xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">
                      R$ 149,00
                    </span>
                  </div>
                  <span className="text-yellow-300 mt-2 animate-pulse">Economize R$ 150,90!</span>
                </div>

                <div className="flex justify-center space-x-6 mb-8">
                  <div className="flex items-center bg-blue-900/50 p-3 rounded-lg">
                    <Package className="h-6 w-6 text-blue-400 mr-2 animate-bounce-slow" />
                    <span className="text-blue-300">Entrega Expressa</span>
                  </div>
                  <div className="flex items-center bg-blue-900/50 p-3 rounded-lg">
                    <Truck className="h-6 w-6 text-green-400 mr-2 animate-bounce-slow" />
                    <span className="text-green-300">Frete Grátis</span>
                  </div>
                </div>

                <div className="text-center">
                  <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-12 rounded-full text-xl transform hover:scale-105 transition-all animate-bounce-slow shadow-lg hover:shadow-yellow-300/50">
                    APROVEITAR AGORA
                  </button>
                  
                  <p className="mt-4 text-blue-300">
                    🔒 Pagamento 100% Seguro | Garantia de 12 meses
                  </p>
                  
                  <div className="mt-4 text-red-400 animate-pulse">
                    ⚡ Últimas unidades com este preço!
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-6">Especificações Técnicas</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center">
                    <Zap className="h-5 w-5 text-yellow-400 mr-2" />
                    Potência: 125W
                  </li>
                  <li className="flex items-center">
                    <Battery className="h-5 w-5 text-green-400 mr-2" />
                    Carregamento Rápido
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-400 mr-2" />
                    Proteção contra sobrecarga
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <ComparisonChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}