import { Quote } from 'lucide-react';

const testimonials = [
  "Es el único sistema que no me obliga a entrar a generar facturas manualmente.",
  "Mi gestoría trabaja más rápido porque todo le llega perfecto.",
  "Lo instalé en 5 minutos. No he vuelto a pensar en facturas.",
  "Por fin un plugin para WooCommerce que cumple 100% con la normativa española."
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-brand-light" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="testimonials-title" className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">
            Lo que dicen nuestros usuarios
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((text, index) => (
            <article key={index} className="bg-white p-6 rounded-xl shadow-sm border flex flex-col h-full">
              <Quote className="h-8 w-8 text-accent/40 mb-4" aria-hidden="true" />
              <blockquote className="text-gray-700 italic flex-1">"{text}"</blockquote>
              <div className="mt-4 flex items-center" aria-hidden="true">
                <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                <div className="h-2 w-20 bg-gray-100 rounded"></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
