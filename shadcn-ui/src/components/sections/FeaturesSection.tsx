// shadcn-ui/src/components/sections/FeaturesSection.tsx
import {
  ShieldCheck,
  Zap,
  FileText,
  Database,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "VeriFactu y trazabilidad",
    desc: "Registro con huella digital (hash) y trazabilidad para cumplir con el marco de software verificable.",
  },
  {
    icon: FileText,
    title: "Numeración y series legales",
    desc: "Control de series y numeración correlativa para reducir riesgos y asegurar coherencia documental.",
  },
  {
    icon: Database,
    title: "Exportaciones para gestoría",
    desc: "CSV/XML listos para contabilidad y conciliación. Menos trabajo manual, menos errores.",
  },
  {
    icon: Zap,
    title: "Automático desde WooCommerce",
    desc: "Funciona en segundo plano: cuando hay pedido, se genera la factura y queda registrada.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Cumple sin cambiar tu forma de trabajar
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Una capa de cumplimiento para tu WooCommerce: automatiza, registra y
            exporta con trazabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl border shadow-sm p-6"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-slate-600">{f.desc}</p>
              <div className="mt-4 flex items-center text-sm text-slate-600">
                <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                Listo para 2026–2027
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
