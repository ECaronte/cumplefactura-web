import { CheckCircle2, Store, GraduationCap, Briefcase, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const audiences = [
  {
    title: 'Autónomos Digitales',
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    description: 'Olvídate del papeleo manual y céntrate en tu negocio.'
  },
  {
    title: 'Tiendas WooCommerce',
    icon: <Store className="h-6 w-6 text-primary" />,
    description: 'Integración nativa perfecta con tu tienda online.'
  },
  {
    title: 'Academias Online',
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    description: 'Gestiona facturas de cientos de alumnos automáticamente.'
  },
  {
    title: 'Gestorías y Agencias',
    icon: <Building2 className="h-6 w-6 text-primary" />,
    description: 'Simplifica la vida de tus clientes y reduce tu carga de trabajo.'
  }
];

export default function TargetAudienceSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Para quién es CumpleFactura</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diseñado para simplificar la facturación de cualquier negocio digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  {item.icon}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}