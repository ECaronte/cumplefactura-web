import { Zap, ShoppingCart, ShieldCheck, Building2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Automático de verdad',
    description: 'Cada pedido en WooCommerce genera una factura que se firma digitalmente y se registra según Verifactu. No tienes que hacer nada.',
    icon: <Zap className="h-8 w-8" aria-hidden="true" />
  },
  {
    title: 'WooCommerce nativo',
    description: 'No somos un CRM externo. CumpleFactura funciona directamente dentro de tu tienda WooCommerce, sin sincronizaciones raras.',
    icon: <ShoppingCart className="h-8 w-8" aria-hidden="true" />
  },
  {
    title: 'Cumplimiento legal total',
    description: 'Implementa Verifactu, firma XAdES, numeración legal, MiFacturae y los requisitos del RD 1007/2023.',
    icon: <ShieldCheck className="h-8 w-8" aria-hidden="true" />
  },
  {
    title: 'Pensado para gestorías',
    description: 'Exportación profesional en CSV y XML, API opcional y un futuro Panel Gestoría para trabajar con varios clientes de forma cómoda.',
    icon: <Building2 className="h-8 w-8" aria-hidden="true" />
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-background" aria-labelledby="features-title">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="features-title" className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">
            La forma más simple y legal de facturar desde WooCommerce.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <article key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="h-16 w-16 rounded-full bg-brand-light flex items-center justify-center text-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link to="/integraciones">
              Ver Integraciones <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
