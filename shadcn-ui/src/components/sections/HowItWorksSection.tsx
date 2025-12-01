import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Paso 1',
    description: 'El cliente compra en tu WooCommerce.'
  },
  {
    number: '2',
    title: 'Paso 2',
    description: 'CumpleFactura genera la factura en el mismo instante.'
  },
  {
    number: '3',
    title: 'Paso 3',
    description: 'La factura se firma digitalmente con tu certificado (XAdES).'
  },
  {
    number: '4',
    title: 'Paso 4',
    description: 'Se encadena en Verifactu, cumpliendo la norma española de software verificable.'
  },
  {
    number: '5',
    title: 'Paso 5',
    description: 'Opcional: se envía a MiFacturae o se guarda para tu gestoría (CSV/XML/API).'
  },
  {
    number: '6',
    title: 'Paso 6',
    description: 'Tú no haces nada. Las facturas salen perfectas y legales automáticamente.'
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">
            Así funciona CumpleFactura (simple y automático).
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-background p-8 rounded-xl border shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-8xl font-bold text-primary">{step.number}</span>
              </div>
              <div className="relative z-10">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}