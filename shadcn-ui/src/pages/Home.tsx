import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ComplianceSection from "@/components/sections/ComplianceSection";
import AgencyFeatureSection from "@/components/sections/AgencyFeatureSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingPreviewSection from "@/components/sections/PricingPreviewSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  FileText,
  ShoppingBag,
  User,
  Server,
  Lock,
  ShoppingCart,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useHashScroll } from "@/hooks/useHashScroll";

export default function Home() {
  useHashScroll();

  return (
    <MainLayout>
      <Helmet>
        <title>
          CumpleFactura · Factura electrónica y VeriFactu sin complicaciones
        </title>
        <meta
          name="description"
          content="CumpleFactura simplifica el cumplimiento Veri*factu: plugin WooCommerce, integración Connect y programa Partner para gestorías. Facturas con QR, hash, registro y exportaciones limpias."
        />
        <link rel="canonical" href="https://cumplefactura.es/" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="CumpleFactura · Factura electrónica y VeriFactu sin complicaciones"
        />
        <meta
          property="og:description"
          content="Plugin WooCommerce, integración Connect y Partner para gestorías. Facturas con QR, hash, registro y exportaciones limpias para contabilidad."
        />
        <meta property="og:url" content="https://cumplefactura.es/" />
        <meta
          property="og:image"
          content="https://cumplefactura.es/og/home.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CumpleFactura · Factura electrónica y VeriFactu sin complicaciones"
        />
        <meta
          name="twitter:description"
          content="Plugin WooCommerce, integración Connect y Partner para gestorías. Facturas con QR, hash, registro y exportaciones limpias para contabilidad."
        />
        <meta
          name="twitter:image"
          content="https://cumplefactura.es/og/home.png"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "CumpleFactura",
                url: "https://cumplefactura.es",
                logo: "https://cumplefactura.es/og/logo.png",
                sameAs: [],
              },
              {
                "@type": "WebSite",
                name: "CumpleFactura",
                url: "https://cumplefactura.es",
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
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <HeroSection />

      {/* NUEVA SECCIÓN: 3 productos (Woo / Connect / Partner) */}
      <section
        className="py-16 bg-white border-b border-slate-100"
        aria-labelledby="solutions-title"
      >
        <div className="container">
          <div className="text-center mb-10">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-brand-light text-primary mb-4">
              <ShieldCheck className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
              Modelo claro
            </div>
            <h2
              id="solutions-title"
              className="text-3xl font-bold tracking-tight text-slate-900 mb-3"
            >
              Tres formas de cumplir, una sola plataforma
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Elige tu encaje:{" "}
              <span className="font-medium text-slate-900">Woo</span> si
              facturas desde tu tienda,
              <span className="font-medium text-slate-900"> Connect</span> si ya
              usas otro software, o
              <span className="font-medium text-slate-900"> Partner</span> si
              eres una gestoría y quieres centralizar la cartera.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Woo */}
            <div className="group relative rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-11 w-11 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center">
                    <ShoppingCart
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      CumpleFactura Woo
                    </p>
                    <p className="text-sm text-slate-500">
                      Plugin nativo para WooCommerce
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-5">
                  Emite facturas desde Woo con capa de cumplimiento (QR + hash +
                  frase legal) y exportaciones limpias. Ideal para ecommerce y
                  negocios digitales.
                </p>

                <ul className="space-y-2 mb-6">
                  {[
                    "Integración real con pedidos Woo",
                    "PDFs con capa de cumplimiento",
                    "Exportación CSV/XML para gestoría",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-slate-700"
                    >
                      <CheckCircle2
                        className="h-4.5 w-4.5 text-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild size="lg" className="w-full gap-2">
                  <Link to="/woocommerce-verifactu">
                    Ver CumpleFactura Woo <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Connect */}
            <div className="group relative rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-11 w-11 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center">
                    <Server
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      CumpleFactura Connect
                    </p>
                    <p className="text-sm text-slate-500">
                      Para ERP, software o facturación propia
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-5">
                  Si ya usas otro sistema, no lo cambies: conecta por
                  exportación o API y mantén el cumplimiento y la trazabilidad
                  sin fricción.
                </p>

                <ul className="space-y-2 mb-6">
                  {[
                    "Entrada por CSV/XML o API",
                    "Datos coherentes para contabilidad",
                    "Pensado para trabajar con gestorías",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-slate-700"
                    >
                      <CheckCircle2
                        className="h-4.5 w-4.5 text-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="w-full gap-2"
                >
                  <Link to="/integraciones">
                    Ver CumpleFactura Connect <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Partner */}
            <div className="group relative rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-11 w-11 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center">
                    <FileText
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      CumpleFactura Partner
                    </p>
                    <p className="text-sm text-slate-500">
                      Programa para gestorías
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-5">
                  Centraliza clientes, controla estados y exporta por lotes. Un
                  estándar único para tu cartera, sin depender de lo que instale
                  cada cliente.
                </p>

                <ul className="space-y-2 mb-6">
                  {[
                    "Panel multi-cliente",
                    "Exportaciones masivas",
                    "Estandarización y control",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-slate-700"
                    >
                      <CheckCircle2
                        className="h-4.5 w-4.5 text-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full gap-2"
                >
                  <Link to="/gestorias">
                    Ver Programa Partner <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link to="/precios">
                Ver planes y precios <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link to="/como-funciona">
                Ver cómo funciona <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECCIÓN: ¿Para quién es CumpleFactura? (ajustada a Woo/Connect/Partner) */}
      <section
        className="py-16 bg-slate-50 border-y border-slate-200"
        aria-labelledby="para-quien-title"
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-brand-light text-primary mb-4">
                <User className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                Negocios y gestorías
              </div>
              <h2
                id="para-quien-title"
                className="text-3xl font-bold tracking-tight mb-4 text-slate-900"
              >
                Diseñado para cumplir sin cambiar tu operativa
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Si facturas en WooCommerce, usa{" "}
                <Link
                  to="/woocommerce-verifactu"
                  className="text-primary hover:underline font-medium"
                >
                  CumpleFactura Woo
                </Link>
                . Si ya tienes otro software, conecta con{" "}
                <Link
                  to="/integraciones"
                  className="text-primary hover:underline font-medium"
                >
                  Connect
                </Link>
                . Y si eres gestoría, estandariza toda tu cartera con{" "}
                <Link
                  to="/gestorias"
                  className="text-primary hover:underline font-medium"
                >
                  Partner
                </Link>
                .
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Ecommerce WooCommerce y negocios digitales",
                  "Empresas con ERP o facturación propia (sin migraciones)",
                  "Gestorías que quieren control y estandarización",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-slate-700"
                  >
                    <CheckCircle2
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 flex justify-center">
              <div
                className="relative w-full max-w-md aspect-video bg-white rounded-xl shadow-xl border border-slate-200 p-6 flex flex-col items-center justify-center"
                aria-hidden="true"
              >
                <div className="grid grid-cols-3 gap-3 w-full opacity-80">
                  <div className="bg-slate-100 h-24 rounded flex flex-col items-center justify-center text-slate-500 border border-slate-200">
                    <ShoppingCart className="h-8 w-8 mb-2 text-primary/60" />
                    <span className="font-medium">Woo</span>
                  </div>
                  <div className="bg-slate-100 h-24 rounded flex flex-col items-center justify-center text-slate-500 border border-slate-200">
                    <Server className="h-8 w-8 mb-2 text-primary/60" />
                    <span className="font-medium">Connect</span>
                  </div>
                  <div className="bg-slate-100 h-24 rounded flex flex-col items-center justify-center text-slate-500 border border-slate-200">
                    <FileText className="h-8 w-8 mb-2 text-primary/60" />
                    <span className="font-medium">Partner</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-full shadow-lg border border-slate-100">
                    <CheckCircle2 className="h-10 w-10 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Iconos de confianza */}
      <section
        className="py-12 bg-white border-b border-slate-100"
        aria-labelledby="trust-title"
      >
        <div className="container">
          <div className="text-center mb-8">
            <h3
              id="trust-title"
              className="text-lg font-semibold text-slate-500 uppercase tracking-wider"
            >
              Confianza y tecnología profesional
            </h3>
          </div>
          <ul
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
            role="list"
          >
            <li className="flex flex-col items-center gap-2">
              <Server className="h-10 w-10 text-slate-600" aria-hidden="true" />
              <span className="font-bold text-slate-700">AWS</span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <Lock className="h-10 w-10 text-slate-600" aria-hidden="true" />
              <span className="font-bold text-slate-700">
                QTSP (Cualificado)
              </span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <ShoppingBag
                className="h-10 w-10 text-slate-600"
                aria-hidden="true"
              />
              <span className="font-bold text-slate-700">Integraciones</span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <ShieldCheck
                className="h-10 w-10 text-slate-600"
                aria-hidden="true"
              />
              <span className="font-bold text-slate-700">Veri*factu-ready</span>
            </li>
          </ul>
        </div>
      </section>

      <FeaturesSection />
      <HowItWorksSection />
      <ComplianceSection />
      <AgencyFeatureSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingPreviewSection />
      <FaqSection />

      {/* Bloque destacado: Seguridad */}
      <section
        className="py-20 bg-slate-900 text-white"
        aria-labelledby="security-title"
      >
        <div className="container">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-emerald-900/50 text-emerald-400 border-emerald-800 mb-4">
                <ShieldCheck
                  className="mr-1.5 h-3.5 w-3.5"
                  aria-hidden="true"
                />
                Confianza
              </div>
              <h2
                id="security-title"
                className="text-3xl font-bold tracking-tight mb-4"
              >
                Seguridad sólida para tu negocio
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                CumpleFactura está diseñado con arquitectura segura en AWS,
                cifrado avanzado, firma digital XAdES y trazabilidad preparada
                para{" "}
                <Link
                  to="/verifactu"
                  className="text-emerald-400 hover:underline"
                >
                  Veri*factu
                </Link>
                . Un sistema robusto para negocios y gestorías que necesitan
                máxima confianza.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Cifrado TLS + KMS",
                  "Firma XAdES por QTSP",
                  "Trazabilidad y registro (según plan)",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-slate-200"
                  >
                    <CheckCircle2
                      className="h-5 w-5 text-emerald-500"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link to="/seguridad-y-cumplimiento">
                  Seguridad y Cumplimiento <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-square md:aspect-video bg-slate-800 rounded-xl border border-slate-700 p-8 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 z-0"></div>
                <div className="z-10 grid gap-4 w-full max-w-xs">
                  <div className="flex items-center gap-3 bg-slate-700/50 p-3 rounded border border-slate-600">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div className="h-2 w-24 bg-slate-600 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-700/50 p-3 rounded border border-slate-600 ml-8">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div className="h-2 w-32 bg-slate-600 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-700/50 p-3 rounded border border-slate-600">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div className="h-2 w-20 bg-slate-600 rounded"></div>
                  </div>
                </div>
                <ShieldCheck
                  className="absolute -bottom-12 -right-12 h-64 w-64 text-slate-700/20 z-0"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque destacado: Gestorías */}
      <section
        className="py-16 bg-slate-50 border-y border-slate-200"
        aria-labelledby="erp-title"
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
                <FileText className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                Partner
              </div>
              <h2
                id="erp-title"
                className="text-3xl font-bold tracking-tight mb-4 text-slate-900"
              >
                La gestoría gana control, el cliente gana tranquilidad
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Exportaciones limpias y operativa estandarizada. CumpleFactura
                ayuda a que tu despacho trabaje más rápido y reduzca incidencias
                en la cartera.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Exportaciones listas para importar",
                  "Estandarización por cliente y por periodo",
                  "Menos incidencias, más control",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-slate-700"
                  >
                    <CheckCircle2
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="gap-2">
                <Link to="/gestorias">
                  Ver CumpleFactura Partner <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex-1 flex justify-center">
              <div
                className="relative w-full max-w-md aspect-video bg-white rounded-xl shadow-xl border border-slate-200 p-6 flex flex-col items-center justify-center"
                aria-hidden="true"
              >
                <div className="grid grid-cols-2 gap-4 w-full opacity-80">
                  <div className="bg-slate-100 h-12 rounded flex items-center justify-center font-bold text-slate-400">
                    A3
                  </div>
                  <div className="bg-slate-100 h-12 rounded flex items-center justify-center font-bold text-slate-400">
                    Sage
                  </div>
                  <div className="bg-slate-100 h-12 rounded flex items-center justify-center font-bold text-slate-400">
                    Holded
                  </div>
                  <div className="bg-slate-100 h-12 rounded flex items-center justify-center font-bold text-slate-400">
                    Anfix
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-full shadow-lg border border-slate-100">
                    <FileText className="h-10 w-10 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </MainLayout>
  );
}
