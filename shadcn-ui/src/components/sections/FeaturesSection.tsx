import {
  Zap,
  ShoppingCart,
  ShieldCheck,
  Building2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Automático de verdad",
    description:
      "Cada pedido en WooCommerce genera una factura y añade la capa de cumplimiento (QR + hash + frase legal). Sin pasos manuales.",
    icon: <Zap className="h-8 w-8" aria-hidden="true" />,
  },
  {
    title: "WooCommerce nativo",
    description:
      "No somos un CRM externo. CumpleFactura funciona dentro de tu tienda WooCommerce, sin sincronizaciones raras.",
    icon: <ShoppingCart className="h-8 w-8" aria-hidden="true" />,
  },
  {
    title: "Cumplimiento legal total (hoy)",
    description:
      "Trazabilidad con hash encadenado, numeración/series y capa de cumplimiento en el PDF. Listo para trabajar con gestorías.",
    icon: <ShieldCheck className="h-8 w-8" aria-hidden="true" />,
  },
  {
    title: "Pensado para gestorías",
    description:
      "Exportación profesional en CSV/XML, estados claros y un panel multi-cliente en roadmap para centralizar carteras.",
    icon: <Building2 className="h-8 w-8" aria-hidden="true" />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-background" aria-labelledby="features-title">
      <div className="container">
        <div className="text-center mb-14 md:mb-16">
          <h2
            id="features-title"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-5 text-primary"
          >
            La forma más simple y legal de facturar desde WooCommerce.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Diseñado para ecommerce: menos fricción, más coherencia, y una
            salida limpia hacia contabilidad y gestoría.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 mb-14">
          {features.map((feature, index) => (
            <article
              key={index}
              className="flex flex-col items-center text-center p-7 bg-card rounded-xl shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="h-16 w-16 rounded-full bg-brand-light flex items-center justify-center text-primary mb-7">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link to="/integraciones">
              Ver Integraciones{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
