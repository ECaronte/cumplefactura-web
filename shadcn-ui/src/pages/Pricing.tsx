// shadcn-ui/src/pages/Pricing.tsx
import { useEffect, useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import FaqSection from "@/components/sections/FaqSection";
import { Button } from "@/components/ui/button";
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

export default function Pricing() {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    getPlans().then(setPlans);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>
          Precios de CumpleFactura · Planes para WooCommerce y gestorías
        </title>
        <meta
          name="description"
          content="Planes claros para facturación desde WooCommerce y colaboración con gestorías. Empieza simple y escala sólo si lo necesitas."
        />
        <link rel="canonical" href="https://cumplefactura.es/precios" />

        <meta property="og:type" content="product" />
        <meta
          property="og:title"
          content="Precios de CumpleFactura · Planes para WooCommerce y gestorías"
        />
        <meta
          property="og:description"
          content="Elige el plan que mejor encaje con tu volumen de facturación y tu forma de trabajar con tu gestoría."
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

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                name: "CumpleFactura",
                description:
                  "Facturación para WooCommerce orientada a cumplimiento y colaboración con gestorías",
                category: "Software de facturación / cumplimiento",
                url: "https://cumplefactura.es/precios",
                brand: { "@type": "Brand", name: "CumpleFactura" },
                offers: {
                  "@type": "AggregateOffer",
                  priceCurrency: "EUR",
                  lowPrice: "0",
                  highPrice: "99",
                  offerCount: "3",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Inicio",
                    item: "https://cumplefactura.es/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Precios",
                    item: "https://cumplefactura.es/precios",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <section className="py-24 md:py-36 bg-background">
        {/* Header */}
        <div className="container text-center mb-14 md:mb-16">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-brand-light text-primary mb-5">
            Planes claros
          </div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-slate-900">
            Planes transparentes
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Elige el plan que mejor se adapte a tu volumen de facturación. Sin
            costes ocultos.{" "}
            <Link
              to="/como-funciona"
              className="text-primary hover:underline font-medium"
            >
              Ver cómo funciona
            </Link>
            .
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="h-12 px-8">
              <Link to="/empezar" className="inline-flex items-center gap-2">
                Empezar <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8">
              <Link to="/gestorias" className="inline-flex items-center gap-2">
                Soy gestoría <Briefcase className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Planes */}
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-14 md:mb-16">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col relative ${
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
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-slate-900">
                  {plan.name}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  {plan.price !== "Contactar" && (
                    <span className="text-muted-foreground">/mes</span>
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

                {/* Nota legal-safe */}
                <div className="mt-6 rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-600 leading-relaxed">
                  Orientado a cumplimiento y trazabilidad (Veri*Factu / software
                  verificable). Algunos módulos avanzados se incorporan
                  progresivamente según el calendario técnico.
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.highlight ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Caja gestorías */}
        <div className="container max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 inline-flex flex-col sm:flex-row items-center gap-3 text-slate-700">
            <Briefcase className="h-5 w-5 text-primary" />
            <span className="leading-relaxed">
              ¿Eres una gestoría y quieres recomendar CumpleFactura a tus
              clientes?{" "}
              <Link
                to="/gestorias"
                className="text-primary font-medium hover:underline"
              >
                Ver programa para gestorías
              </Link>
              .
            </span>
          </div>
        </div>

        {/* Sección valor (sin XAdES / Facturae) */}
        <div className="container max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 border shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 text-center">
              ¿Por qué pagar una cuota si tu WooCommerce factura poco?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-center leading-relaxed max-w-3xl mx-auto">
              Aunque factures poco, sigues necesitando orden, numeración
              coherente y exportaciones limpias para tu contabilidad.
              CumpleFactura reduce trabajo manual y fricción con tu gestoría:
              menos correcciones, menos dudas y más tranquilidad.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {[
                "Orden y coherencia contable desde el origen",
                "Menos errores y menos trabajo de revisión",
                "Exportación limpia para gestoría y ERP",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-medium text-slate-700 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button asChild size="lg" className="h-12 px-8">
                <Link to="/empezar">Empezar</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Ayuda */}
        <div className="container max-w-2xl mx-auto mt-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            ¿Dudas sobre qué plan elegir?{" "}
            <Link
              to="/contacto"
              className="text-primary font-medium hover:underline"
            >
              Escríbenos
            </Link>{" "}
            y te ayudamos a encontrar la mejor opción para tu caso.
          </p>
        </div>
      </section>

      <FaqSection />
    </MainLayout>
  );
}
