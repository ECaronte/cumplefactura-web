import { Briefcase, Check } from 'lucide-react';

const features = [
  {
    title: 'Panel Gestoría (opcional)',
    items: [
      'Todas las facturas de sus clientes',
      'Descarga masiva',
      'CSV y XML perfectos para importación',
      'Series legales y numeración sin errores',
      'Historial inmutable',
      'Alertas y avisos'
    ]
  },
  {
    title: 'Envíos automáticos',
    description: 'El autónomo no tiene que enviar nada: la gestoría recibe todo sin pedirlo.'
  },
  {
    title: 'API para integración',
    description: 'Para quien quiera automatizar aún más con su software de gestoría.'
  },
  {
    title: 'Comisión recurrente',
    description: 'Por cada cliente que traen, reciben una comisión mensual. Ganan más dinero y ahorran horas.'
  }
];

const benefits = [
  'Facturas perfectas (sin errores humanos)',
  'Exportación inmediata',
  'Cero descuadres',
  'Cero facturas repetidas',
  'Cero devoluciones por formato',
  'Autónomos tranquilos → gestorías tranquilas'
];

export default function AgencyFeatureSection() {
  return (
    <section className="py-24 bg-background overflow-hidden" aria-labelledby="agency-feature-title">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4" aria-hidden="true">
              <Briefcase className="h-8 w-8" />
            </div>
            <h2 id="agency-feature-title" className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Hecho para WooCommerce. <br/>
              <span className="text-accent">Diseñado para gestorías.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Las gestorías son un canal estratégico y CumpleFactura está optimizado para hacer su trabajo más rápido, más cómodo y sin errores.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <article key={index} className="space-y-2">
                  <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                  {feature.description && (
                    <p className="text-muted-foreground">{feature.description}</p>
                  )}
                  {feature.items && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2" role="list">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" aria-hidden="true"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>

          <aside className="flex-1 w-full">
            <div className="bg-brand-light rounded-2xl p-8 md:p-10 border border-blue-100 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">Por qué les va a encantar</h3>
              <ul className="space-y-4" role="list">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                    <span className="text-lg font-medium text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-blue-200">
                <p className="text-lg font-bold text-primary text-center">
                  El canal gestorías es tu motor de crecimiento. <br/>
                  Con CumpleFactura, ellas ganan y tú también.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
