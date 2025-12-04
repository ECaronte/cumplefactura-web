import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingCart, Zap, PenTool, ShieldCheck, FileInput, Send, Store, Scale, Briefcase, FileText, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HowItWorks() {
  return (
    <MainLayout>
      <Helmet>
        <title>Cómo funciona CumpleFactura · Paso a paso</title>
        <meta
          name="description"
          content="Descubre cómo funciona CumpleFactura paso a paso: conexión con tu software, registro VeriFactu, firma con certificado y panel para gestorías."
        />
        <link rel="canonical" href="https://cumplefactura.es/como-funciona" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cómo funciona CumpleFactura · Paso a paso" />
        <meta
          property="og:description"
          content="Así integra CumpleFactura la factura electrónica, VeriFactu y la firma con certificado digital sin cambiar tu forma de trabajar."
        />
        <meta property="og:url" content="https://cumplefactura.es/como-funciona" />
        <meta property="og:image" content="https://cumplefactura.es/og/como-funciona.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cómo funciona CumpleFactura · Paso a paso" />
        <meta
          name="twitter:description"
          content="Integra factura electrónica, VeriFactu y firma con certificado digital en un flujo sencillo."
        />
        <meta name="twitter:image" content="https://cumplefactura.es/og/como-funciona.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "name": "Cómo funciona CumpleFactura",
                "description": "Descubre cómo funciona CumpleFactura paso a paso: conexión con tu software, registro VeriFactu, firma con certificado y panel para gestorías.",
                "url": "https://cumplefactura.es/como-funciona",
                "isPartOf": { "@type": "WebSite", "name": "CumpleFactura", "url": "https://cumplefactura.es" }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://cumplefactura.es/" },
                  { "@type": "ListItem", "position": 2, "name": "Cómo funciona", "item": "https://cumplefactura.es/como-funciona" }
                ]
              }
            ]
          })}
        </script>
      </Helmet>
      {/* 1. Intro */}
      <section className="bg-background py-20 md:py-28">
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
            Así funciona CumpleFactura: todo automático, desde el pedido hasta la factura legal.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Conecta WooCommerce y despreocúpate: CumpleFactura genera, firma y verifica cada factura sin intervención manual.
          </p>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Diagrama del flujo */}
      <section className="py-12 border-b border-slate-100">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Así funciona CumpleFactura de principio a fin</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Line connectors for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 transform -translate-y-1/2"></div>

            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl border shadow-sm flex flex-col items-center text-center h-full relative z-10">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Pedido en WooCommerce</h3>
              <p className="text-sm text-muted-foreground">El cliente compra en tu tienda online como siempre.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl border shadow-sm flex flex-col items-center text-center h-full relative z-10">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Generación de factura</h3>
              <p className="text-sm text-muted-foreground">CumpleFactura transforma el pedido en una factura legal.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl border shadow-sm flex flex-col items-center text-center h-full relative z-10">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <PenTool className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Firma digital XAdES</h3>
              <p className="text-sm text-muted-foreground">La factura se firma automáticamente mediante un prestador de confianza.</p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-xl border shadow-sm flex flex-col items-center text-center h-full relative z-10">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Registro Verifactu</h3>
              <p className="text-sm text-muted-foreground">Se registra la operación con hash encadenado y trazabilidad.</p>
            </div>

            {/* Step 5 */}
            <div className="bg-white p-6 rounded-xl border shadow-sm flex flex-col items-center text-center h-full relative z-10">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Exportación</h3>
              <p className="text-sm text-muted-foreground">Descarga CSV/XML listos para tu gestoría o conecta por integraciones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pasos del proceso (Existing section kept as requested, just adding variety) */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-12 text-slate-800">Detalle del proceso paso a paso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Paso 1 */}
            <div className="bg-background p-6 rounded-xl border shadow-sm">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                <ShoppingCart className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Paso 1</h3>
              <p className="text-muted-foreground">
                El cliente realiza un pedido en tu tienda WooCommerce.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="bg-background p-6 rounded-xl border shadow-sm">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Paso 2</h3>
              <p className="text-muted-foreground">
                CumpleFactura genera la factura automáticamente.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="bg-background p-6 rounded-xl border shadow-sm">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                <PenTool className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Paso 3</h3>
              <p className="text-muted-foreground">
                La factura se firma digitalmente usando tu certificado XAdES.
              </p>
            </div>

            {/* Paso 4 */}
            <div className="bg-background p-6 rounded-xl border shadow-sm">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Paso 4</h3>
              <p className="text-muted-foreground">
                Se aplica el código hash y registro Verifactu, cumpliendo con el RD 1007/2023.
              </p>
            </div>

            {/* Paso 5 */}
            <div className="bg-background p-6 rounded-xl border shadow-sm">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                <FileInput className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Paso 5</h3>
              <p className="text-muted-foreground">
                Opcional: se prepara para MiFacturae y se deja lista para tu gestoría.
              </p>
            </div>

            {/* Paso 6 */}
            <div className="bg-background p-6 rounded-xl border shadow-sm">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                <Send className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Paso 6</h3>
              <p className="text-muted-foreground">
                Tu gestoría recibe todo limpio: CSV, XML o API. Tú no haces nada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Módulo “Todo ocurre en WooCommerce” */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Store className="h-16 w-16" />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-primary">Integración real con WooCommerce</h2>
              <p className="text-lg text-muted-foreground">
                CumpleFactura no es un CRM externo ni un conector parcial.
                Funciona directamente dentro de WooCommerce, escuchando cada pedido y generando los documentos legales al instante, sin sincronizaciones ni fallos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Módulo “Cumplimiento legal” */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1 flex justify-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Scale className="h-16 w-16" />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-primary">Cumplimiento legal garantizado</h2>
              <p className="text-lg text-muted-foreground">
                Incluye firma digital XAdES, cadena Verifactu, numeraciones legales, registros de integridad y compatibilidad con MiFacturae.
                Todo lo que la normativa española exige para 2026–2027.
              </p>
              {/* ENLACE AÑADIDO */}
              <p className="text-base text-slate-600 pt-2 border-t border-slate-200">
                ¿Quieres ver el detalle técnico de cómo protegemos los datos y garantizamos la integridad de cada factura? Consulta la página de <Link to="/seguridad-y-cumplimiento" className="text-primary font-medium hover:underline">Seguridad y Cumplimiento</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Módulo “Para tu gestoría” */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Briefcase className="h-16 w-16" />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-primary">Tu gestoría trabajará mucho más rápido</h2>
              <p className="text-lg text-muted-foreground">
                Exportación masiva en CSV/XML, datos perfectos para contabilidad y API opcional para integraciones profesionales.
                Tu gestoría recibirá todo sin perseguirte nunca más.
              </p>
              {/* ENLACE AÑADIDO */}
              <p className="text-base text-slate-600 pt-2 border-t border-slate-200">
                Si trabajas con una gestoría o con un ERP concreto, visita la página de <Link to="/integraciones" className="text-primary font-medium hover:underline">Integraciones</Link> para ver cómo encaja CumpleFactura en tu flujo actual.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 6. CTA Final (ACTUALIZADO) */}
      <section className="py-20 container text-center">
        <div className="bg-brand-light rounded-3xl p-12 border border-slate-100 shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-primary">¿Listo para automatizar todo este proceso?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Instalar CumpleFactura es el primer paso para olvidarte de la parte compleja de la facturación: nosotros nos encargamos de Verifactu, firma digital y exportaciones para tu gestoría.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-12 px-8 text-lg bg-accent hover:bg-accent/90 text-white" asChild>
              <Link to="/woocommerce-verifactu">
                Instalar CumpleFactura <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg" asChild>
              <Link to="/precios">
                Ver precios
              </Link>
            </Button>
          </div>
          <p className="mt-8 text-muted-foreground">
            Si todavía te quedan dudas sobre cómo funciona CumpleFactura en tu caso concreto, puedes{' '}
            <Link to="/contacto" className="text-primary font-medium hover:underline">contactar con nosotros aquí</Link>.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}