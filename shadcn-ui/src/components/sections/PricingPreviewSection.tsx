// shadcn-ui/src/components/sections/PricingPreviewSection.tsx
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { getPlans } from "@/services/mockApi";
import type { Plan } from "@/types";

type Billing = "monthly" | "annual";

const PRICING: Record<
  string,
  {
    promo: { monthly: string; annual: string };
    standard: { monthly: string; annual: string };
  }
> = {
  connect: {
    promo: { monthly: "4,90€", annual: "49€" },
    standard: { monthly: "7,90€", annual: "79€" },
  },
  pro: {
    promo: { monthly: "10,90€", annual: "109€" },
    standard: { monthly: "14,90€", annual: "149€" },
  },
  partner: {
    promo: { monthly: "59€", annual: "—" },
    standard: { monthly: "79€", annual: "—" },
  },
};

function PriceLine({ plan, billing }: { plan: Plan; billing: Billing }) {
  const p = PRICING[plan.id];

  const promo = p?.promo?.[billing];
  const standard = p?.standard?.[billing];

  const showAnnual = billing === "annual";
  const isPartner = plan.id === "partner";

  return (
    <div className="space-y-2">
      <div className="flex items-end gap-2">
        <span className="text-5xl font-bold text-slate-900">
          {promo || plan.price}
        </span>

        {!isPartner && (
          <span className="text-slate-600 mb-1">
            {showAnnual ? "/año" : "/mes"}
          </span>
        )}
      </div>

      {standard && standard !== "—" && (
        <p className="text-sm text-slate-500">
          Desde <span className="font-medium">1 julio 2027</span>:{" "}
          <span className="font-medium text-slate-700">
            {standard}
            {isPartner ? "/mes" : showAnnual ? "/año" : "/mes"}
          </span>
        </p>
      )}
    </div>
  );
}

export default function PricingPreviewSection() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [billing, setBilling] = useState<Billing>("monthly");

  useEffect(() => {
    getPlans().then(setPlans);
  }, []);

  const sorted = useMemo(() => {
    const order = { connect: 0, pro: 1, partner: 2 } as Record<string, number>;
    return [...plans].sort((a, b) => (order[a.id] ?? 99) - (order[b.id] ?? 99));
  }, [plans]);

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Precios (promoción hasta 1 julio 2027)
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Elige tu encaje: entrada rápida con Connect, sistema completo con
            Pro (recomendado) o control centralizado si eres gestoría/asesoría.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span
              className={`text-sm ${billing === "monthly" ? "text-slate-900 font-medium" : "text-slate-500"}`}
            >
              Mensual
            </span>
            <Switch
              checked={billing === "annual"}
              onCheckedChange={(v) => setBilling(v ? "annual" : "monthly")}
              aria-label="Cambiar a precios anuales"
            />
            <span
              className={`text-sm ${billing === "annual" ? "text-slate-900 font-medium" : "text-slate-500"}`}
            >
              Anual
            </span>
            <span className="ml-2 text-xs text-slate-500">
              (muestra el total anual)
            </span>
          </div>
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
                <PriceLine plan={plan} billing={billing} />
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
                Promoción para nuevas altas hasta el 1/07/2027. Desde esa fecha,
                se aplican las tarifas estándar indicadas.
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
