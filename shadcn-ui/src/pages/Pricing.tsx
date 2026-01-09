// shadcn-ui/src/pages/Pricing.tsx
import { useEffect, useMemo, useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import FaqSection from "@/components/sections/FaqSection";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
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

type Billing = "monthly" | "annual";
type MultiYear = "1y" | "2y" | "3y";

const MULTI_DISCOUNT: Record<MultiYear, number> = {
  "1y": 0,
  "2y": 0.1, // -10%
  "3y": 0.18, // -18%
};

// Promoción (hasta 1/07/2027) vs estándar (a partir de 1/07/2027)
// Importante: 2y/3y se calcula sobre el anual del periodo seleccionado (promo/estándar).
const PRICING: Record<
  string,
  {
    promo: { monthly: number; annual: number };
    standard: { monthly: number; annual: number };
    multiYearEligible?: boolean; // Partner no
  }
> = {
  connect: {
    promo: { monthly: 4.9, annual: 49 },
    standard: { monthly: 7.9, annual: 79 },
    multiYearEligible: true,
  },
  pro: {
    promo: { monthly: 10.9, annual: 109 },
    standard: { monthly: 14.9, annual: 149 },
    multiYearEligible: true,
  },
  partner: {
    promo: { monthly: 59, annual: 0 },
    standard: { monthly: 79, annual: 0 },
    multiYearEligible: false,
  },
};

function formatEUR(n: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: n % 1 === 0 ? 0 : 2,
    maximumFractionDigits: n % 1 === 0 ? 0 : 2,
  }).format(n);
}

function getPlanBaseId(planId: string) {
  // Normaliza ids del mock a nuestros ids de pricing
  // (tu mock actual usa connect / woo / partner; aquí el plan recomendado es "pro")
  if (planId === "woo") return "pro";
  return planId;
}

export default function Pricing() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [billing, setBilling] = useState<Billing>("monthly");
  const [years, setYears] = useState<MultiYear>("1y");

  useEffect(() => {
    getPlans().then(setPlans);
  }, []);

  const ordered = useMemo(() => {
    const order = { connect: 0, woo: 1, partner: 2 } as Record<string, number>;
    return [...plans].sort((a, b) => (order[a.id] ?? 99) - (order[b.id] ?? 99));
  }, [plans]);

  return (
    <MainLayout>
      <Helmet>
        <title>
          Precios de CumpleFactura · Planes para WooCommerce y gestorías
        </title>
        <meta
          name="description"
          content="Planes claros para cumplir con Veri*factu y operar con tranquilidad: Connect (entrada rápida), Pro (recomendado) y Partner para gestorías/asesorías."
        />
        <link rel="canonical" href="https://cumplefactura.es/precios" />

        <meta property="og:type" content="product" />
        <meta
          property="og:title"
          content="Precios de CumpleFactura · Planes para WooCommerce y gestorías"
        />
        <meta
          property="og:description"
          content="Elige el plan que encaja con tu forma de facturar. Precios promocionales hasta 1 julio 2027 y tarifas estándar a partir de esa fecha."
        />
        <meta property="og:url" content="https://cumplefactura.es/precios" />
        <meta
          property="og:image"
          content="https://cumplefactura.es/og/precios.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Precios de CumpleFactura · Planes para WooCommerce y gestorías"
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
        <div className="container text-center mb-10 md:mb-12">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-brand-light text-primary mb-5">
            Precios claros
          </div>

          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-slate-900">
            Planes transparentes
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Promoción para nuevas altas hasta el{" "}
            <strong>1 de julio de 2027</strong>. A partir de esa fecha, se
            aplican las tarifas estándar indicadas en cada plan.
          </p>

          {/* Mensual / Anual */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-3">
              <span
                className={`text-sm ${
                  billing === "monthly"
                    ? "text-slate-900 font-medium"
                    : "text-slate-500"
                }`}
              >
                Mensual
              </span>
              <Switch
                checked={billing === "annual"}
                onCheckedChange={(v) => {
                  setBilling(v ? "annual" : "monthly");
                  if (!v) setYears("1y"); // multi-año solo tiene sentido en anual
                }}
                aria-label="Cambiar a precios anuales"
              />
              <span
                className={`text-sm ${
                  billing === "annual"
                    ? "text-slate-900 font-medium"
                    : "text-slate-500"
                }`}
              >
                Anual
              </span>
              <span className="ml-2 text-xs text-slate-500">
                {billing === "annual" ? "(pago anticipado)" : ""}
              </span>
            </div>

            {/* 1y / 2y / 3y (solo si anual) */}
            {billing === "annual" && (
              <div className="inline-flex rounded-xl border bg-white p-1 shadow-sm">
                {(["1y", "2y", "3y"] as MultiYear[]).map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setYears(k)}
                    className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                      years === k
                        ? "bg-primary text-primary-foreground"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {k === "1y"
                      ? "1 año"
                      : k === "2y"
                        ? "2 años (-10%)"
                        : "3 años (-18%)"}
                  </button>
                ))}
              </div>
            )}
          </div>

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
          {ordered.map((plan) => {
            const baseId = getPlanBaseId(plan.id);
            const cfg = PRICING[baseId];
            const isPartner = baseId === "partner";

            const promo = cfg?.promo;
            const standard = cfg?.standard;

            // Precio principal (según toggle mensual/anual y multi-year)
            let priceMain = plan.price; // fallback
            let priceSuffix: string | null =
              plan.price === "Contactar" ? null : "/mes";
            let priceNote: string | null = null;
            let promoLine: string | null = null;

            // Siempre mostramos “promo vs estándar” como referencia (sin miedo)
            if (promo && standard) {
              if (billing === "monthly") {
                promoLine = `${formatEUR(promo.monthly)}/mes · después ${formatEUR(
                  standard.monthly,
                )}/mes`;
              } else {
                promoLine = `${formatEUR(promo.annual)}/año · después ${formatEUR(
                  standard.annual,
                )}/año`;
              }
            }

            if (promo && standard) {
              if (billing === "monthly") {
                priceMain = formatEUR(promo.monthly);
                priceSuffix = "/mes";
                priceNote = `Después: ${formatEUR(standard.monthly)}/mes`;
              } else {
                // anual con 1y/2y/3y (solo para Connect/Pro)
                if (!isPartner && cfg.multiYearEligible) {
                  const yearsInt = years === "1y" ? 1 : years === "2y" ? 2 : 3;
                  const discount = MULTI_DISCOUNT[years];
                  const total = promo.annual * yearsInt * (1 - discount);
                  const perMonthEq = total / (12 * yearsInt);

                  priceMain = formatEUR(total);
                  priceSuffix = yearsInt === 1 ? "/año" : `/${yearsInt} años`;
                  priceNote = `Equiv. ${formatEUR(perMonthEq)}/mes · pago anticipado`;
                } else {
                  // Partner: no auto-checkout anual aquí
                  priceMain = formatEUR(promo.monthly);
                  priceSuffix = "/mes";
                  priceNote =
                    "B2B con onboarding. Condiciones por despacho/volumen en llamada.";
                }
              }
            }

            return (
              <Card
                key={plan.id}
                className={`flex flex-col relative h-full ${
                  plan.highlight
                    ? "border-primary shadow-xl scale-[1.03] z-10"
                    : "border-border shadow-sm"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                    Más popular
                  </div>
                )}

                <CardHeader className="pb-4 min-h-[112px]">
                  <CardTitle className="text-2xl text-slate-900">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="mb-6 min-h-[98px] flex flex-col justify-end">
                    <div className="flex items-end gap-2 justify-center md:justify-start">
                      <span className="text-4xl font-bold text-slate-900">
                        {priceMain}
                      </span>
                      {priceSuffix && (
                        <span className="text-muted-foreground mb-1">
                          {priceSuffix}
                        </span>
                      )}

                      {billing === "annual" &&
                        !isPartner &&
                        years !== "1y" &&
                        cfg?.multiYearEligible && (
                          <Badge variant="secondary" className="ml-2">
                            -{Math.round(MULTI_DISCOUNT[years] * 100)}%
                          </Badge>
                        )}
                    </div>

                    {priceNote && (
                      <p className="text-xs text-slate-500 mt-2">{priceNote}</p>
                    )}

                    {promoLine && (
                      <p className="text-xs text-slate-500 mt-1">{promoLine}</p>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-600 leading-relaxed">
                    Orientado a cumplimiento y trazabilidad (Veri*Factu /
                    software verificable). Módulos avanzados se incorporan
                    progresivamente según roadmap.
                  </div>
                </CardContent>

                <CardFooter className="mt-auto">
                  <Button
                    className="w-full"
                    variant={plan.highlight ? "default" : "outline"}
                    asChild
                  >
                    <Link to={isPartner ? "/gestorias" : "/contacto"}>
                      {plan.cta}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Caja gestorías */}
        <div className="container max-w-4xl mx-auto text-center mb-8 md:mb-10">
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

        {/* Nota multi-year */}
        {billing === "annual" && (
          <div className="container max-w-3xl mx-auto text-center">
            <p className="text-sm text-slate-500 leading-relaxed">
              Descuentos por prepago disponibles en Connect y Pro:{" "}
              <span className="font-medium">2 años (-10%)</span> y{" "}
              <span className="font-medium">3 años (-18%)</span>. Pago
              anticipado no reembolsable.
            </p>
          </div>
        )}
      </section>

      <FaqSection />
    </MainLayout>
  );
}
