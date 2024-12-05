import React from 'react';
import { Zap, Battery, ShieldCheck, Truck } from 'lucide-react';
import { LightningStorm } from './animations/LightningStorm';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      <LightningStorm />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            <Zap className="h-16 w-16 text-yellow-300 filter drop-shadow-lg animate-energy" />
            <div className="absolute inset-0 bg-yellow-300 opacity-50 blur-xl animate-energy" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
              Carregador Turbo 125W
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-6">
            Carregamento Ultra Rápido para Seu Dispositivo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <Battery className="h-8 w-8 text-green-400 animate-energy" />
              <div className="text-xl font-bold text-green-400">
                0% → 50% em 10 minutos!
              </div>
            </div>

            <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex flex-col items-center mb-4">
                <span className="text-lg line-through text-gray-400">De R$ 299,90</span>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-yellow-300 mr-2 animate-energy" />
                  <span className="text-4xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">
                    R$ 149,00
                  </span>
                </div>
                <span className="text-yellow-300 mt-2 animate-energy">Economize R$ 150,90!</span>
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-8 rounded-full text-xl transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                COMPRAR AGORA
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                <ShieldCheck className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-blue-300">Garantia de 12 meses</span>
              </div>
              <div className="flex items-center bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                <Truck className="h-6 w-6 text-green-400 mr-2" />
                <span className="text-green-300">Frete Grátis</span>
              </div>
            </div>
          </div>

          <div className="bg-black/20 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-yellow-300">Destaques</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <Zap className="h-6 w-6 text-yellow-400 mt-1 animate-energy" />
                <div>
                  <h4 className="font-semibold text-white">Potência Máxima</h4>
                  <p className="text-blue-100">125W de energia para carregamento ultra rápido</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <Battery className="h-6 w-6 text-green-400 mt-1 animate-energy" />
                <div>
                  <h4 className="font-semibold text-white">Carregamento Inteligente</h4>
                  <p className="text-blue-100">Tecnologia avançada de distribuição de energia</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <ShieldCheck className="h-6 w-6 text-blue-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Proteção Total</h4>
                  <p className="text-blue-100">Sistema completo de segurança contra sobrecarga</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}