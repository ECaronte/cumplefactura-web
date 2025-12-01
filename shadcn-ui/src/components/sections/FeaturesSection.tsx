import { Zap, ShoppingCart, ShieldCheck, Building2 } from 'lucide-react';

const features = [
  {
    title: 'Automático de verdad',
    description: 'Cuando tu tienda recibe un pedido, CumpleFactura genera la factura, la firma digitalmente, la encadena en Verifactu y la registra. Tú no haces nada.',
    icon: <Zap className="h-8 w-8" />
  },
  {
    title: 'WooCommerce nativo',
    description: 'No es un sistema externo ni un CRM adaptado: nace directamente en WooCommerce. Cero sincronizaciones, cero fallos.',
    icon: <ShoppingCart className="h-8 w-8" />
  },
  {
    title: 'Cumplimiento legal total',
    description: 'Compatible con Ley 11/2021, RD 1007/2023, Verifactu, Firma XAdES, MiFacturae, Libros y numeraciones legales. Tu negocio queda protegido.',
    icon: <ShieldCheck className="h-8 w-8" />
  },
  {
    title: 'Perfecto para gestorías',
    description: 'Exportación en CSV, XML y API opcional. Panel Gestoría para acceso ordenado. Las gestorías ahorran tiempo y ganan comisión.',
    icon: <Building2 className="h-8 w-8" />
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">
            La forma más simple y legal de facturar desde WooCommerce.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="h-16 w-16 rounded-full bg-brand-light flex items-center justify-center text-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}