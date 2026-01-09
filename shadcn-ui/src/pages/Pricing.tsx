// shadcn-ui/src/pages/Pricing.tsx
import { useEffect, useMemo, useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import FaqSection from "@/components/sections/FaqSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Briefcase, ArrowRight } from "lucide-react";
import { getPlans } from "@/services/mockApi";
import type { Plan } from "@/types";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

type BillingCycle = "monthly" | "annual" | "2y" | "3y";

const PROMO_UNTIL_LABEL = "1 julio 2027";

const DISCOUNTS: Record<BillingCycle, number> = {
  monthly: 0,
  annual: 0,
  "2y": 0.1,
  "3y": 0.18,
};

type PriceSpec = {
  promo: { monthly: number; annual: number };
  standard: { monthly: number; annual: number };
};

const PRICING: Record<string, PriceSpec | undefined> = {
  connect: {
    promo: { monthly: 4.9, annual: 55 },
    standard: { monthly: 7.9, annual: 79 },
  },
  pro: {
    promo: { monthly: 10.9, annual: 119 },
    standard: { monthly: 14.9, annual: 149 },
  },
  partner: {
    promo: { monthly: 59, annual: 0 },
    standard: { monthly: 79, annual: 0 },
  },
};

function formatEUR(n: number, decimals: 0 | 2 = 2) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(n);
}

function formatEURSmart(n: number) {
  const isInt = Math.abs(n - Math.round(n)) < 1e-9;
  return formatEUR(n, isInt ? 0 : 2);
}

function CycleToggle({
  cycle,
  onChange,
}: {
  cycle: BillingCycle;
  onChange: (v: BillingCycle) => void;
}) {
  const items: Array<{ key: BillingCycle; label: string; badge?: string }> = [
    { key: "monthly", label: "Mensual" },
    { key: "annual", label: "Anual" },
    { key: "2y", label: "2 años", badge: "-10%" },
    { key: "3y", label: "3 años", badge: "-18%" },
  ];

  return (
    <div className="mt-8 flex items-center justify-center gap-3">
      <div className="inline-flex rounded-xl border bg-white p-1 shadow-sm">
        {items.map((it) => (
          <button
            key={it.key}
            type="button"
            onClick={() => onChange(it.key)}
            className={`relative px-4 py-2 text-sm rounded-lg transition-colors ${
              cycle === it.key
                ? "bg-primary text-primary-foreground"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {it.label}
            {it.badge &&
              cycle !== "monthly" &&
              cycle !== "annual" &&
              it.key === cycle && (
                <span className="ml-2 inline-flex items-center rounded-full bg-white/15 px-2 py-0.5 text-[11px]">
                  {it.badge}
                </span>
              )}
          </button>
        ))}
      </div>

      <span className="hidden sm:inline text-sm text-slate-500">
        Vista actual:{" "}
        {cycle === "monthly"
          ? "Mensual"
          : cycle === "annual"
            ? "Anual"
            : cycle === "2y"
              ? "2 años (-10%)"
              : "3 años (-18%)"}
      </span>
    </div>
  );
}

function PriceBlock({
  planId,
  cycle,
}: {
  planId: string;
  cycle: BillingCycle;
}) {
  const spec = PRICING[planId];

  // Partner: B2B, se queda “desde…”
  if (planId === "partner") {
    const promo = PRICING.partner!.promo.monthly;
    const later = PRICING.partner!.standard.monthly;

    return (
      <div className="min-h-[92px] flex flex-col justify-end">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold text-slate-900">
            {formatEURSmart(promo)}
          </span>
          <span className="text-slate-600">/mes</span>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Después: {formatEURSmart(later)}/mes · condiciones por volumen en
          llamada
        </p>
      </div>
    );
  }

  if (!spec) {
    return (
      <div className="min-h-[92px] flex flex-col justify-end">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold text-slate-900">—</span>
        </div>
      </div>
    );
  }

  const promoMonthly = spec.promo.monthly;
  const promoAnnual = spec.promo.annual;
  const standardMonthly = spec.standard.monthly;
  const standardAnnual = spec.standard.annual;

  // Mensual: muestra €/mes + “Después…”
  if (cycle === "monthly") {
    return (
      <div className="min-h-[92px] flex flex-col justify-end">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold text-slate-900">
            {formatEURSmart(promoMonthly)}
          </span>
          <span className="text-slate-600">/mes</span>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Después: {formatEURSmart(standardMonthly)}/mes
        </p>
      </div>
    );
  }

  // Anual / 2y / 3y: total + equivalente mensual + “Después…”
  const years = cycle === "annual" ? 1 : cycle === "2y" ? 2 : 3;
  const discount = DISCOUNTS[cycle];
  const total = promoAnnual * years * (1 - discount);
  const perMonthEq = total / (12 * years);

  const afterTotal = standardAnnual * years; // sin descuento en estándar (referencia clara)

  return (
    <div className="min-h-[92px] flex flex-col justify-end">
      <div className="flex items-baseline gap-2 flex-wrap">
        <span className="text-5xl font-bold text-slate-900">
          {formatEURSmart(total)}
        </span>
        <span className="text-slate-600">
          {years === 1 ? "/año" : `/${years} años`}
        </span>

        {cycle !== "annual" && (
          <Badge variant="secondary" className="ml-1">
            -{Math.round(discount * 100)}%
          </Badge>
        )}
      </div>

      <p className="mt-2 text-xs text-slate-500">
        Equiv. {formatEURSmart(perMonthEq)}/mes · pago anticipado
        {" · "}
        Después: {formatEURSmart(afterTotal)}
        {years === 1 ? "/año" : `/${years} años`}
      </p>
    </div>
  );
}

export default function Pricing() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  useEffect(() => {
    getPlans().then(setPlans);
  }, []);

  // Orden psicológico: Pro al centro (recomendado)
  const ordered = useMemo(() => {
    const order = { connect: 0, pro: 1, partner: 2 } as Record<string, number>;
    return [...plans].sort((a, b) => (order[a.id] ?? 99) - (order[b.id] ?? 99));
  }, [plans]);

  return (
    <MainLayout>
      <Helmet>
        <title>
          Precios de CumpleFactura · Planes para autónomos y gestorías
        </title>
        <meta
          name="description"
          content="Planes claros para cumplir con Veri*factu: Connect (entrada rápida), Pro (recomendado) y Partner para gestorías/asesorías."
        />
        <link rel="canonical" href="https://cumplefactura.es/precios" />

        <meta property="og:type" content="product" />
        <meta
          property="og:title"
          content="Precios de CumpleFactura · Planes para autónomos y gestorías"
        />
        <meta
          property="og:description"
          content="Elige el plan que encaja con tu forma de facturar. Promoción hasta 1 julio 2027 y tarifas estándar después."
        />
        <meta property="og:url" content="https://cumplefactura.es/precios" />
        <meta
          property="og:image"
          content="https://cumplefactura.es/og/precios.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Precios de CumpleFactura · Planes para autónomos y gestorías"
        />
        <meta
          name="twitter:description"
          content="Planes claros y sin letra pequeña para cumplir con las próximas obligaciones de facturación."
        />
        <meta
          name="twitter:image"
          content="https://cumplefactura.es/og/precios.png"
        />
      </Helmet>

      <section className="py-24 md:py-36 bg-background">
        {/* Header */}
        <div className="container text-center mb-12 md:mb-14">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-brand-light text-primary mb-5">
            Precios claros
          </div>

          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-5 text-slate-900">
            Planes transparentes
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Promoción para nuevas altas hasta el{" "}
            <strong>{PROMO_UNTIL_LABEL}</strong>.
            <br className="hidden sm:block" />
            En cada plan verás también el precio estándar “después” (sin
            sorpresas).
          </p>

          <CycleToggle cycle={cycle} onChange={setCycle} />

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="h-12 px-8">
              <Link to="/contacto" className="inline-flex items-center gap-2">
                Hablar con nosotros <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8">
              <Link to="/gestorias" className="inline-flex items-center gap-2">
                Soy gestoría/asesoría <Briefcase className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Planes */}
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 md:mb-14 items-stretch">
          {ordered.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col relative h-full ${
                plan.highlight
                  ? "border-primary shadow-xl scale-[1.03] z-10"
                  : "border-border shadow-sm"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                  Recomendado
                </div>
              )}

              <CardHeader className="pb-4 min-h-[132px]">
                <CardTitle className="text-2xl text-slate-900">
                  {plan.name}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <PriceBlock planId={plan.id} cycle={cycle} />

                <ul className="mt-7 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-600 leading-relaxed">
                  Diseñado como SIF orientado a cumplimiento y trazabilidad
                  (Veri*Factu). Algunos módulos avanzados se incorporan
                  progresivamente según roadmap.
                </div>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button
                  className="w-full"
                  variant={plan.highlight ? "default" : "outline"}
                  asChild
                >
                  <Link to={plan.id === "partner" ? "/contacto" : "/empezar"}>
                    {plan.cta}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Caja gestorías */}
        <div className="container max-w-4xl mx-auto text-center">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 inline-flex flex-col sm:flex-row items-center gap-3 text-slate-700">
            <Briefcase className="h-5 w-5 text-primary" />
            <span className="leading-relaxed">
              Partner es para gestorías y asesorías (B2B): panel multi-cliente y
              control centralizado.
              <Link
                to="/gestorias"
                className="text-primary font-medium hover:underline ml-1"
              >
                Ver programa Partner
              </Link>
              .
            </span>
          </div>
        </div>
      </section>

      <FaqSection />
    </MainLayout>
  );
}
