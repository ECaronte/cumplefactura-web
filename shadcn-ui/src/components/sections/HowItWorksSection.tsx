import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Paso 1',
    description: 'El cliente hace un pedido en tu tienda WooCommerce.'
  },
  {
    number: '2',
    title: 'Paso 2',
    description: 'CumpleFactura genera la factura automáticamente.'
  },
  {
    number: '3',
    title: 'Paso 3',
    description: 'La factura se firma digitalmente con tu certificado XAdES.'
  },
  {
    number: '4',
    title: 'Paso 4',
    description: 'Se aplica el hash y el registro Verifactu.'
  },
  {
    number: '5',
    title: 'Paso 5',
    description: 'Opcional: se prepara para MiFacturae y para tu gestoría.'
  },
  {
    number: '6',
    title: 'Paso 6',
    description: 'Tu gestoría puede recibir todo en CSV, XML o a través de API.'
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
        
        <div className="text-center mt-12">
          <p className="text-xl font-medium text-primary">
            Todo ocurre en segundos sin que tengas que intervenir.
          </p>
        </div>
      </div>
    </section>
  );
}