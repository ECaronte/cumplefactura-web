// shadcn-ui/src/components/sections/PricingPreviewSection.tsx
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getPlans } from "@/services/mockApi";
import type { Plan } from "@/types";

type BillingCycle = "monthly" | "annual" | "2y" | "3y";

const DISCOUNTS: Record<BillingCycle, number> = {
  monthly: 0,
  annual: 0,
  "2y": 0.1, // -10%
  "3y": 0.18, // -18%
};

// Ajusta aquí si cambias precios anuales promo
function annualPromoByPlanId(planId: string): number | null {
  if (planId === "connect") return 55;
  if (planId === "woo") return 119;
  // Partner: no lo hacemos “checkout self-serve” aquí
  if (planId === "partner") return null;
  return null;
}

function formatEUR(n: number) {
  // 119 -> "119 €" / 5.5 -> "5,50 €"
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: n % 1 === 0 ? 0 : 2,
    maximumFractionDigits: n % 1 === 0 ? 0 : 2,
  }).format(n);
}

function PriceLine({ plan, cycle }: { plan: Plan; cycle: BillingCycle }) {
  const annual = annualPromoByPlanId(plan.id);
  const isPartner = plan.id === "partner";

  // Partner: siempre CTA a contacto, no mostramos multi-year
  if (isPartner) {
    return (
      <div className="min-h-[84px] flex flex-col justify-end">
        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold text-slate-900">
            {plan.price}
          </span>
          <span className="text-slate-600 mb-1">/mes</span>
        </div>
        <p className="text-xs text-slate-500 mt-2">
          Plan B2B con onboarding. Precios por despacho/volumen en llamada.
        </p>
      </div>
    );
  }

  if (!annual) {
    // fallback si faltase mapping
    return (
      <div className="min-h-[84px] flex items-end gap-2">
        <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
        <span className="text-slate-600 mb-1">/mes</span>
      </div>
    );
  }

  if (cycle === "monthly") {
    return (
      <div className="min-h-[84px] flex items-end gap-2">
        <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
        <span className="text-slate-600 mb-1">/mes</span>
      </div>
    );
  }

  const years = cycle === "annual" ? 1 : cycle === "2y" ? 2 : 3;
  const discount = DISCOUNTS[cycle];
  const total = annual * years * (1 - discount);
  const perMonthEq = total / (12 * years);

  return (
    <div className="min-h-[84px] flex flex-col justify-end">
      <div className="flex items-end gap-2">
        <span className="text-4xl font-bold text-slate-900">
          {formatEUR(total)}
        </span>
        <span className="text-slate-600 mb-1">
          /{years === 1 ? "año" : `${years} años`}
        </span>
        {discount > 0 && (
          <Badge variant="secondary" className="ml-2">
            -{Math.round(discount * 100)}%
          </Badge>
        )}
      </div>
      <p className="text-xs text-slate-500 mt-2">
        Equiv. {formatEUR(perMonthEq)}/mes · pago anticipado
      </p>
    </div>
  );
}

export default function PricingPreviewSection() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  useEffect(() => {
    getPlans().then(setPlans);
  }, []);

  const sorted = useMemo(() => {
    const order = { connect: 0, woo: 1, partner: 2 } as Record<string, number>;
    return [...plans].sort((a, b) => (order[a.id] ?? 99) - (order[b.id] ?? 99));
  }, [plans]);

  const cycleLabel = useMemo(() => {
    if (cycle === "monthly") return "Mensual";
    if (cycle === "annual") return "Anual";
    if (cycle === "2y") return "2 años (-10%)";
    return "3 años (-18%)";
  }, [cycle]);

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Precios claros (promo hasta 1 julio 2027)
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Elige tu encaje: transición (Connect), recomendado (Pro) o despacho
            (Partner).
          </p>

          {/* Toggle + multi-year */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="inline-flex rounded-xl border bg-white p-1 shadow-sm">
              {(["monthly", "annual", "2y", "3y"] as BillingCycle[]).map(
                (k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setCycle(k)}
                    className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                      cycle === k
                        ? "bg-primary text-primary-foreground"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {k === "monthly"
                      ? "Mensual"
                      : k === "annual"
                        ? "Anual"
                        : k === "2y"
                          ? "2 años"
                          : "3 años"}
                  </button>
                ),
              )}
            </div>

            <div className="text-xs text-slate-500">
              Vista actual: <span className="font-medium">{cycleLabel}</span>
            </div>
          </div>
        </div>

        {/* Cards (alineadas) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {sorted.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl border p-8 shadow-sm bg-white flex flex-col h-full ${
                plan.highlight ? "ring-2 ring-primary/40" : ""
              }`}
            >
              {/* Header fijo */}
              <div className="min-h-[96px]">
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
              </div>

              {/* Precio fijo */}
              <div className="mt-6">
                <PriceLine plan={plan} cycle={cycle} />
              </div>

              {/* Features crecen igual */}
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-700">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA alineado abajo */}
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
                Promo hasta 1/07/2027. Condiciones completas en{" "}
                <Link to="/precios" className="text-primary hover:underline">
                  Precios
                </Link>
                .
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
