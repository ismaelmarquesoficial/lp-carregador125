import React from 'react';
import { User } from 'lucide-react';

const testimonials = [
  {
    text: "Carrega meu celular em minutos! Simplesmente incrível.",
    author: "João M.",
    location: "SP"
  },
  {
    text: "Leve, prático e realmente cumpre o que promete!",
    author: "Mariana S.",
    location: "RJ"
  }
];

export function Testimonials() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Depoimentos de quem já comprou
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 p-2 rounded-full mr-4">
                  <User className="h-8 w-8 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}