// shadcn-ui/src/components/sections/TargetAudienceSection.tsx
import { Store, GraduationCap, Briefcase, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const audiences = [
  {
    title: "Autónomos Digitales",
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    description:
      "Menos fricción: cumplimiento y exportación listos para gestoría.",
  },
  {
    title: "Tiendas WooCommerce",
    icon: <Store className="h-6 w-6 text-primary" />,
    description: "Integración nativa con pedidos, clientes y productos.",
  },
  {
    title: "Academias Online",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    description: "Automatiza facturación recurrente sin procesos manuales.",
  },
  {
    title: "Gestorías y Agencias",
    icon: <Building2 className="h-6 w-6 text-primary" />,
    description:
      "Estandariza carteras y reduce incidencias con datos coherentes.",
  },
];

export default function TargetAudienceSection() {
  return (
    <section
      className="py-24 bg-slate-50 dark:bg-slate-900/50"
      aria-labelledby="audience-title"
    >
      <div className="container">
        <div className="text-center mb-14">
          <h2
            id="audience-title"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-5 text-primary"
          >
            Para quién es CumpleFactura
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Diseñado para simplificar la facturación de negocios digitales y
            facilitar el trabajo de las gestorías.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {audiences.map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-2">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  {item.icon}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
