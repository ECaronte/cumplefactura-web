// shadcn-ui/src/pages/HowItWorks.tsx
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShoppingCart,
  Zap,
  ShieldCheck,
  FileInput,
  Send,
  Store,
  Scale,
  Briefcase,
  FileText,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function HowItWorks() {
  return (
    <MainLayout>
      <Helmet>
        <title>Cómo funciona CumpleFactura · Paso a paso</title>
        <meta
          name="description"
          content="Descubre cómo funciona CumpleFactura paso a paso: desde el pedido en WooCommerce hasta la factura, trazabilidad e integraciones para tu gestoría."
        />
        <link rel="canonical" href="https://cumplefactura.es/como-funciona" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Cómo funciona CumpleFactura · Paso a paso"
        />
        <meta
          property="og:description"
          content="Así integra CumpleFactura la facturación y la trazabilidad en un flujo sencillo, sin cambiar tu forma de trabajar."
        />
        <meta
          property="og:url"
          content="https://cumplefactura.es/como-funciona"
        />
        <meta
          property="og:image"
          content="https://cumplefactura.es/og/como-funciona.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cómo funciona CumpleFactura · Paso a paso"
        />
        <meta
          name="twitter:description"
          content="Facturación y trazabilidad en un flujo sencillo: del pedido a la exportación."
        />
        <meta
          name="twitter:image"
          content="https://cumplefactura.es/og/como-funciona.png"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                name: "Cómo funciona CumpleFactura",
                description:
                  "Descubre cómo funciona CumpleFactura paso a paso: desde el pedido en WooCommerce hasta la factura, trazabilidad e integraciones para tu gestoría.",
                url: "https://cumplefactura.es/como-funciona",
                isPartOf: {
                  "@type": "WebSite",
                  name: "CumpleFactura",
                  url: "https://cumplefactura.es",
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
                    name: "Cómo funciona",
                    item: "https://cumplefactura.es/como-funciona",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      {/* 1. Intro */}
      <section className="bg-background py-24 md:py-36">
        <div className="container text-center flex flex-col items-center">
          <img
            src="/images/AppIcon.jpg"
            alt="CumpleFactura Icon"
            className="w-24 h-24 mb-8 drop-shadow-xl hover:scale-105 transition-transform duration-300"
            loading="lazy"
            width={96}
            height={96}
          />
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl mb-6 text-primary">
            Así funciona CumpleFactura: del pedido a la factura, sin fricción.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Conecta WooCommerce y despreocúpate: CumpleFactura convierte cada
            pedido en una factura coherente, con trazabilidad e integraciones
            para tu gestoría. Tú sigues vendiendo como siempre.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="h-12 px-8 text-lg bg-accent hover:bg-accent/90 text-white"
              asChild
            >
              <Link to="/woocommerce-verifactu">
                Instalar CumpleFactura <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-lg"
              asChild
            >
              <Link to="/precios">Ver precios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 1.5 Diagrama del flujo */}
      <section className="py-14 border-b border-slate-100">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            De principio a fin, en 5 pasos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 transform -translate-y-1/2"></div>

            <div className="bg-white p-6 rounded-xl border shadow-sm flex flex-col items-center text-center h-full relative z-10">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Pedido</h3>
              <p className="text-sm text-muted-foreground">
                El cliente compra como siempre en tu WooCommerce.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border shadow-sm flex flex-col items-center text-center h-full relative z-10">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Factura</h3>
              <p className="text-sm text-muted-foreground">
                Convertimos el pedido en factura con estructura coherente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border shadow-sm flex flex-col items-center text-center h-full relative z-10">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Trazabilidad</h3>
              <p className="text-sm text-muted-foreground">
                Registro de integridad y cadena de evidencias.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border shadow-sm flex flex-col items-center text-center h-full relative z-10">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Automatización</h3>
              <p className="text-sm text-muted-foreground">
                Cero “picar datos”: reglas y series listas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border shadow-sm flex flex-col items-center text-center h-full relative z-10">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Exportación</h3>
              <p className="text-sm text-muted-foreground">
                CSV/XML listos para gestoría o integraciones.
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 max-w-3xl mx-auto leading-relaxed">
            Nota: algunos módulos avanzados (p. ej., firma cualificada /
            intercambio estructurado B2B) se incorporan progresivamente según el
            calendario técnico y normativo.
          </p>
        </div>
      </section>

      {/* 2. Pasos detallados */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-12 text-slate-800">
            Detalle del proceso paso a paso
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-7 rounded-2xl border shadow-sm">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <ShoppingCart className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Paso 1</h3>
              <p className="text-muted-foreground leading-relaxed">
                El cliente realiza un pedido en tu tienda WooCommerce.
              </p>
            </div>

            <div className="bg-background p-7 rounded-2xl border shadow-sm">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Paso 2</h3>
              <p className="text-muted-foreground leading-relaxed">
                CumpleFactura genera la factura automáticamente con numeración y
                datos coherentes.
              </p>
            </div>

            <div className="bg-background p-7 rounded-2xl border shadow-sm">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Paso 3</h3>
              <p className="text-muted-foreground leading-relaxed">
                Se registra la integridad: huellas (hash) y trazabilidad para
                auditoría y control.
              </p>
            </div>

            <div className="bg-background p-7 rounded-2xl border shadow-sm">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-6">
                <FileInput className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Paso 4</h3>
              <p className="text-muted-foreground leading-relaxed">
                Exportaciones limpias para contabilidad (CSV/XML) y opciones de
                integración según tu plan.
              </p>
            </div>

            <div className="bg-background p-7 rounded-2xl border shadow-sm">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6">
                <Send className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Paso 5</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tu gestoría recibe todo ordenado, sin perseguirte: descargas,
                envíos programados o integraciones.
              </p>
            </div>

            <div className="bg-background p-7 rounded-2xl border shadow-sm">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <Scale className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Paso 6</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cumples el flujo de forma consistente y escalable, sin depender
                de tareas manuales ni “parches”.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WooCommerce */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Store className="h-16 w-16" />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                Integración real con WooCommerce
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CumpleFactura no es un CRM externo ni un conector parcial.
                Trabaja dentro del flujo de tu tienda y transforma
                automáticamente cada pedido en documentos listos para
                contabilidad y revisión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Cumplimiento (sin “garantizado” ni promesas de XAdES/MiFacturae) */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1 flex justify-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Scale className="h-16 w-16" />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                Diseñado para cumplimiento y trazabilidad
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Numeración coherente, integridad y evidencias. CumpleFactura se
                construye para alinearse con los requisitos de software
                verificable y facturación electrónica conforme se consolidan los
                detalles técnicos.
              </p>

              <p className="text-base text-slate-600 pt-3 border-t border-slate-200">
                ¿Quieres ver el detalle de seguridad, integridad y arquitectura?{" "}
                <Link
                  to="/seguridad-y-cumplimiento"
                  className="text-primary font-medium hover:underline"
                >
                  Seguridad y Cumplimiento
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Gestoría */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Briefcase className="h-16 w-16" />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                Tu gestoría trabajará mucho más rápido
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Exportación masiva en CSV/XML y opciones de integración
                profesional según tu plan. Menos correcciones y menos tiempo
                perdido en “reconstruir” la contabilidad.
              </p>

              <p className="text-base text-slate-600 pt-3 border-t border-slate-200">
                Si trabajas con un ERP concreto, mira{" "}
                <Link
                  to="/integraciones"
                  className="text-primary font-medium hover:underline"
                >
                  Integraciones
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Final */}
      <section className="py-24 container text-center">
        <div className="bg-brand-light rounded-3xl p-12 border border-slate-100 shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            ¿Listo para automatizar este proceso?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Instala CumpleFactura y olvídate del trabajo repetitivo: facturas
            coherentes, trazabilidad y exportaciones limpias para tu gestoría.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="h-12 px-8 text-lg bg-accent hover:bg-accent/90 text-white"
              asChild
            >
              <Link to="/woocommerce-verifactu">
                Instalar CumpleFactura <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-lg"
              asChild
            >
              <Link to="/precios">Ver precios</Link>
            </Button>
          </div>
          <p className="mt-8 text-muted-foreground">
            Si te quedan dudas,{" "}
            <Link
              to="/contacto"
              className="text-primary font-medium hover:underline"
            >
              contáctanos aquí
            </Link>
            .
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
