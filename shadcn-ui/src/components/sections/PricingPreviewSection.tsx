// shadcn-ui/src/components/sections/PricingPreviewSection.tsx
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getPlans } from "@/services/mockApi";
import type { Plan } from "@/types";

function PriceLine({ plan }: { plan: Plan }) {
  const isFree = plan.id === "free";

  // Extra: detecta “Después: XX/mes” desde description para mostrarlo en pequeño (sin depender de tipos).
  const later = useMemo(() => {
    const m = plan.description?.match(/Después:\s*([0-9]+€)\/mes/i);
    return m?.[1] || "";
  }, [plan.description]);

  return (
    <div className="flex items-end gap-2">
      <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
      {!isFree && <span className="text-slate-600 mb-1">/mes</span>}
      {!isFree && later && (
        <span className="text-sm text-slate-500 mb-2 ml-2">
          después {later}/mes
        </span>
      )}
    </div>
  );
}

export default function PricingPreviewSection() {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    getPlans().then(setPlans);
  }, []);

  const sorted = useMemo(() => {
    const order = { free: 0, pro: 1, agency: 2 } as Record<string, number>;
    return [...plans].sort((a, b) => (order[a.id] ?? 99) - (order[b.id] ?? 99));
  }, [plans]);

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Precios simples (oferta hasta 1 julio 2027)
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Elige tu encaje: empieza gratis, activa cumplimiento completo o
            centraliza clientes si eres gestoría.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sorted.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl border p-8 shadow-sm bg-white ${
                plan.highlight ? "ring-2 ring-primary/40" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-slate-600">{plan.description}</p>
                </div>

                {plan.highlight && (
                  <Badge className="bg-primary text-primary-foreground">
                    Recomendado
                  </Badge>
                )}
              </div>

              <div className="mt-6">
                <PriceLine plan={plan} />
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-700">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className={
                    plan.highlight
                      ? "w-full bg-primary text-white hover:bg-primary/90"
                      : "w-full"
                  }
                  variant={plan.highlight ? "default" : "outline"}
                >
                  <Link to="/precios">{plan.cta}</Link>
                </Button>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Oferta vigente hasta 1 julio 2027. Los precios posteriores se
                muestran en la página de precios.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="link">
            <Link to="/precios">Ver la comparativa completa →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
