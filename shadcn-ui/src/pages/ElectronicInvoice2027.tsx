// shadcn-ui/src/pages/ElectronicInvoice2027.tsx
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  FileDigit,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Calendar,
  Server,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function ElectronicInvoice2027() {
  return (
    <MainLayout>
      <Helmet>
        <title>
          Factura electrónica obligatoria 2027 en España · CumpleFactura
        </title>
        <meta
          name="description"
          content="Guía práctica de la factura electrónica obligatoria en España (2027): plazos, a quién afecta, requisitos y cómo prepararte."
        />
        <link
          rel="canonical"
          href="https://cumplefactura.es/factura-electronica-2027"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Factura electrónica obligatoria 2027 en España · CumpleFactura"
        />
        <meta
          property="og:description"
          content="Todo lo que debes saber sobre la factura electrónica obligatoria para autónomos y pymes en 2027. Explicado sin jerga legal."
        />
        <meta
          property="og:url"
          content="https://cumplefactura.es/factura-electronica-2027"
        />
        <meta
          property="og:image"
          content="https://cumplefactura.es/og/factura-electronica-2027.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Factura electrónica obligatoria 2027 en España · CumpleFactura"
        />
        <meta
          name="twitter:description"
          content="Nuevas obligaciones de factura electrónica (2027) para autónomos y pymes, explicado en claro."
        />
        <meta
          name="twitter:image"
          content="https://cumplefactura.es/og/factura-electronica-2027.png"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline:
                  "Factura electrónica obligatoria 2027 en España: guía práctica",
                description:
                  "Guía práctica de la factura electrónica obligatoria en España (2027): plazos, a quién afecta, requisitos y cómo prepararte.",
                author: { "@type": "Organization", name: "CumpleFactura" },
                publisher: {
                  "@type": "Organization",
                  name: "CumpleFactura",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://cumplefactura.es/og/logo.png",
                  },
                },
                datePublished: "2025-01-20",
                dateModified: "2026-01-01",
                image:
                  "https://cumplefactura.es/og/factura-electronica-2027.png",
                url: "https://cumplefactura.es/factura-electronica-2027",
                keywords: [
                  "factura electrónica 2027",
                  "Ley Crea y Crece",
                  "obligación B2B",
                  "autónomos",
                  "pymes",
                  "España",
                ],
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
                    name: "Factura Electrónica 2027",
                    item: "https://cumplefactura.es/factura-electronica-2027",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/20 border-b">
        <div className="container max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary mb-6">
            Guía 2027
          </div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-slate-900 dark:text-white leading-tight">
            Factura electrónica 2027: guía práctica para llegar a tiempo
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mx-auto leading-relaxed max-w-3xl">
            Plazos, a quién afecta y qué implica en la práctica para autónomos,
            pymes y tiendas online.
          </p>
        </div>
      </section>

      <article className="container max-w-3xl py-16 space-y-16">
        {/* 1. Intro */}
        <section className="prose prose-slate dark:prose-invert lg:prose-lg mx-auto">
          <p className="lead text-xl text-slate-600 dark:text-slate-300">
            La factura electrónica B2B pasa de “recomendable” a obligatoria. Y
            el cambio no es solo enviar un PDF: hablamos de datos estructurados
            y procesos compatibles con intercambio electrónico.
          </p>
          <p>
            En 2027 se consolidan los plazos para la adopción generalizada. La
            estrategia inteligente es preparar el flujo en 2026 para llegar sin
            prisas.
          </p>
          <p>
            Si trabajas con WooCommerce, la clave es automatizar.{" "}
            <Link
              to="/como-funciona"
              className="text-primary hover:underline font-medium"
            >
              Mira el flujo de CumpleFactura
            </Link>
            .
          </p>
        </section>

        {/* 2. Qué es */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            ¿Qué se entiende por “factura electrónica”?
          </h2>
          <div className="prose prose-slate dark:prose-invert lg:prose-lg mb-8">
            <p>
              En general, un <strong>PDF no equivale</strong> a una factura
              electrónica “estructurada”. En la práctica, se habla de formatos
              de datos (habitualmente XML) para que los sistemas puedan procesar
              la factura automáticamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border text-center">
              <FileDigit className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">Datos estructurados</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Formatos legibles por máquina (p. ej., XML) para automatizar su
                tratamiento.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border text-center">
              <ShieldCheck className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">Integridad</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Controles de coherencia y evidencias para revisión y auditoría.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border text-center">
              <Server className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">Intercambio</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Capacidad de envío/recepción e interoperabilidad según el modelo
                que aplique.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Calendario */}
        <section className="bg-blue-50 dark:bg-blue-900/10 -mx-6 px-6 py-12 rounded-2xl border border-blue-100 dark:border-blue-900/30">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white flex items-center justify-center gap-3">
            <Calendar className="h-8 w-8 text-primary" />
            Calendario orientativo 2026–2027
          </h2>
          <div className="space-y-8 max-w-2xl mx-auto">
            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                2026: preparación
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Ajuste de flujos, series, exportaciones e integraciones para
                llegar sin prisas.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                2027: adopción general
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Aplicación progresiva según el calendario definitivo y el tipo
                de obligado.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white/70 dark:bg-slate-950/40 p-4 rounded-xl border text-center">
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Esta página es informativa. Para fechas exactas, se consolidan
              cuando se publican los desarrollos reglamentarios aplicables.
            </p>
          </div>
        </section>

        {/* 4. Requisitos (sin prometer XAdES/Facturae como “incluye”) */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
            Requisitos técnicos habituales
          </h2>

          <div className="grid gap-4 mb-8">
            {[
              {
                title: "Datos estructurados",
                desc: "Formatos que permitan automatizar el procesamiento.",
              },
              {
                title: "Interoperabilidad",
                desc: "Capacidad de envío/recepción según el modelo que aplique.",
              },
              {
                title: "Integridad y trazabilidad",
                desc: "Evidencias y controles para auditoría y revisión.",
              },
              {
                title: "Numeración y coherencia",
                desc: "Series y reglas consistentes para contabilidad.",
              },
              {
                title: "Conservación y acceso",
                desc: "Disponibilidad y exportación para gestoría/ERP.",
              },
            ].map((req, idx) => (
              <div
                key={idx}
                className="flex items-start p-4 bg-white dark:bg-slate-950 rounded-lg border shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {req.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {req.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-200 dark:border-red-800 flex items-center justify-center text-center">
            <p className="text-red-700 dark:text-red-300 font-bold">
              <AlertTriangle className="inline-block h-5 w-5 mr-2 mb-1" />
              Nota: un PDF por sí solo puede no cubrir los requisitos de
              intercambio estructurado.
            </p>
          </div>
        </section>

        {/* 5. FAQs */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Preguntas frecuentes
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                ¿Me afecta si tengo WooCommerce?
              </AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                Sí, si emites facturas en relaciones B2B. Lo importante es
                preparar el flujo (datos, exportación e interoperabilidad).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                ¿Tengo que cambiar de plataforma?
              </AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                No necesariamente. La idea es añadir la capa de automatización y
                exportación a tu flujo actual.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                ¿CumpleFactura estará listo?
              </AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                CumpleFactura se construye específicamente para alinearse con
                los requisitos publicados y se actualiza conforme se consolidan
                los detalles técnicos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </article>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Prepárate con tiempo</h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Automatiza el flujo en WooCommerce y mantén tus exportaciones listas
            para contabilidad.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-12 px-8 text-lg font-bold bg-white text-primary hover:bg-white/90"
          >
            <Link to="/woocommerce-verifactu">
              Instalar CumpleFactura <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}
