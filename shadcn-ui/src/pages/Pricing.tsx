// shadcn-ui/src/pages/Pricing.tsx
import { useEffect, useMemo, useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import FaqSection from "@/components/sections/FaqSection";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
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
import { Plan } from "@/types";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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

export default function Pricing() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [billing, setBilling] = useState<Billing>("monthly");

  useEffect(() => {
    getPlans().then(setPlans);
  }, []);

  const ordered = useMemo(() => {
    const order = { connect: 0, pro: 1, partner: 2 } as Record<string, number>;
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
        <div className="container text-center mb-14 md:mb-16">
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

          <div className="mt-7 flex items-center justify-center gap-3">
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
              onCheckedChange={(v) => setBilling(v ? "annual" : "monthly")}
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
            <span className="ml-2 text-xs text-slate-500">(total anual)</span>
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
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-14 md:mb-16">
          {ordered.map((plan) => {
            const p = PRICING[plan.id];
            const promo = p?.promo?.[billing] || plan.price;
            const standard = p?.standard?.[billing] || "";
            const isPartner = plan.id === "partner";

            return (
              <Card
                key={plan.id}
                className={`flex flex-col relative ${
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

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-slate-900">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="mb-3">
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-slate-900">
                        {promo}
                      </span>
                      {!isPartner && (
                        <span className="text-muted-foreground">
                          {billing === "annual" ? "/año" : "/mes"}
                        </span>
                      )}
                    </div>

                    {standard && standard !== "—" && (
                      <div className="mt-1 text-sm text-slate-500">
                        Desde <span className="font-medium">1 julio 2027</span>:{" "}
                        <span className="font-medium text-slate-700">
                          {standard}
                          {isPartner
                            ? "/mes"
                            : billing === "annual"
                              ? "/año"
                              : "/mes"}
                        </span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mt-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Nota legal-safe */}
                  <div className="mt-6 rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-600 leading-relaxed">
                    Cumplimiento y trazabilidad orientados a Veri*factu /
                    software verificable. Algunas capacidades avanzadas se
                    incorporan progresivamente según el calendario técnico.
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    className="w-full"
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    <Link to="/contacto">{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Caja gestorías */}
        <div className="container max-w-4xl mx-auto text-center mb-10 md:mb-14">
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
