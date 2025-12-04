import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, FileDigit, ShieldCheck, Users, AlertTriangle, ArrowRight, FileX, FileCheck, Calendar, Lock, Server, FileText, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function ElectronicInvoice2026() {
  return (
    <MainLayout>
      <Helmet>
        <title>Factura electrónica obligatoria 2026 en España · CumpleFactura</title>
        <meta
          name="description"
          content="Resumen práctico de la nueva obligación de factura electrónica en España a partir de 2026. Quién está obligado, plazos y cómo prepararte sin sorpresas."
        />
        <link rel="canonical" href="https://cumplefactura.es/factura-electronica-2026" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Factura electrónica obligatoria 2026 en España · CumpleFactura" />
        <meta
          property="og:description"
          content="Todo lo que debes saber sobre la factura electrónica obligatoria para autónomos y pymes en 2026. Explicado en un lenguaje sencillo."
        />
        <meta property="og:url" content="https://cumplefactura.es/factura-electronica-2026" />
        <meta property="og:image" content="https://cumplefactura.es/og/factura-electronica-2026.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Factura electrónica obligatoria 2026 en España · CumpleFactura" />
        <meta
          name="twitter:description"
          content="Nuevas obligaciones de factura electrónica para autónomos y pymes en 2026 explicadas sin jerga legal."
        />
        <meta name="twitter:image" content="https://cumplefactura.es/og/factura-electronica-2026.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "headline": "Factura electrónica obligatoria 2026 en España: Guía completa",
                "description": "Resumen práctico de la nueva obligación de factura electrónica en España a partir de 2026. Plazos, requisitos y cómo prepararte.",
                "author": { "@type": "Organization", "name": "CumpleFactura" },
                "publisher": { "@type": "Organization", "name": "CumpleFactura", "logo": { "@type": "ImageObject", "url": "https://cumplefactura.es/og/logo.png" } },
                "datePublished": "2024-10-15",
                "dateModified": "2025-01-20",
                "image": "https://cumplefactura.es/og/factura-electronica-2026.png",
                "url": "https://cumplefactura.es/factura-electronica-2026",
                "keywords": ["factura electrónica 2026", "Ley Crea y Crece", "obligación B2B", "autónomos", "pymes", "España"]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://cumplefactura.es/" },
                  { "@type": "ListItem", "position": 2, "name": "Factura Electrónica 2026", "item": "https://cumplefactura.es/factura-electronica-2026" }
                ]
              }
            ]
          })}
        </script>
      </Helmet>
      {/* Hero / Header del Artículo */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-b">
        <div className="container max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mb-6">
            Guía Definitiva 2027
          </div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-slate-900 dark:text-white leading-tight">
            Factura electrónica 2027: Todo lo que necesitas saber (Guía completa y actualizada)
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mx-auto leading-relaxed max-w-3xl">
            La guía definitiva para autónomos, gestorías y comercios online sobre la obligación de factura electrónica en España: empresas desde enero 2027, autónomos desde julio 2027.
          </p>
        </div>
      </section>

      <article className="container max-w-3xl py-16 space-y-16">
        
        {/* 1. Introducción */}
        <section className="prose prose-slate dark:prose-invert lg:prose-lg mx-auto">
          <p className="lead text-xl text-slate-600 dark:text-slate-300">
            España está a las puertas de una revolución fiscal. La factura electrónica dejará de ser una opción para convertirse en una obligación universal para prácticamente todas las relaciones comerciales entre empresas y profesionales (B2B).
          </p>
          <p>
            Este cambio no es solo burocrático: transforma la manera en que autónomos, tiendas online y pymes gestionan su día a día. El año <strong>2027</strong> se marca en el calendario como el punto de inflexión definitivo: empresas desde el 1 de enero y autónomos desde el 1 de julio.
          </p>
          <p>
            La nueva normativa exige mucho más que enviar un email: requiere <strong>firma digital, estructura de datos XML, registro de trazabilidad y comunicación automática</strong>. Para muchos, esto suena a dolor de cabeza técnico. Sin embargo, herramientas como <strong>CumpleFactura</strong> simplifican todo este proceso, permitiendo que tu tienda WooCommerce cumpla la ley automáticamente sin que tengas que cambiar tu forma de trabajar. <Link to="/como-funciona" className="text-primary hover:underline font-medium">Descubre cómo funciona</Link>.
          </p>
        </section>

        {/* 2. ¿Qué es la factura electrónica obligatoria? */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            ¿Qué es la factura electrónica obligatoria en España?
          </h2>
          <div className="prose prose-slate dark:prose-invert lg:prose-lg mb-8">
            <p>
              Es fundamental entender que <strong>un PDF no es una factura electrónica</strong> según la nueva Ley Crea y Crece. Un PDF es solo una imagen digital de un documento.
            </p>
            <p>
              La factura electrónica real es un fichero de datos estructurados (generalmente XML) que permite que los sistemas informáticos "lean" la factura automáticamente sin intervención humana. Además, debe cumplir tres pilares:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border text-center">
              <FileDigit className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">Formato Estructurado</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Datos legibles por máquina (Facturae, XML) para automatizar su procesamiento.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border text-center">
              <ShieldCheck className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">Firma Digital</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Garantía de autenticidad e integridad mediante certificados electrónicos cualificados.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border text-center">
              <Server className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">Interconexión</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Capacidad de comunicarse con plataformas públicas (MiFacturae) o privadas.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Calendario real */}
        <section className="bg-blue-50 dark:bg-blue-900/10 -mx-6 px-6 py-12 rounded-2xl border border-blue-100 dark:border-blue-900/30">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white flex items-center justify-center gap-3">
            <Calendar className="h-8 w-8 text-primary" />
            Calendario real de entrada en vigor (2026–2027)
          </h2>
          <div className="space-y-8 max-w-2xl mx-auto">
            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Fase 1: Aprobación del Reglamento</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Ya se han definido los requisitos técnicos (Verifactu). Los desarrolladores de software tienen plazo hasta mediados de 2026 para adaptar sus soluciones.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Fase 2: Empresas (Impuesto de Sociedades) - 1 enero 2027</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Las empresas sujetas al Impuesto de Sociedades estarán obligadas a partir del 1 de enero de 2027.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary animate-pulse" />
              <h3 className="text-xl font-bold text-primary mb-2">Fase 3: Autónomos y resto - 1 julio 2027</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                Autónomos y el resto de obligados tributarios deberán cumplir desde el <strong>1 de julio de 2027</strong>. Este es el plazo definitivo para la gran mayoría del tejido empresarial español.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Requisitos técnicos */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
            Requisitos técnicos de la factura electrónica obligatoria
          </h2>
          <div className="grid gap-4 mb-8">
            {[
              { title: "Firma digital válida (XAdES)", desc: "Imprescindible para garantizar la autoría e integridad del documento." },
              { title: "Registro de integridad", desc: "Cada factura debe quedar registrada en un sistema que impida su alteración posterior." },
              { title: "Datos estructurados", desc: "El formato debe ser XML, Facturae u otros estándares admitidos, no texto plano ni imagen." },
              { title: "Trazabilidad", desc: "Encadenamiento de facturas mediante huellas digitales (hashes)." },
              { title: "Numeración legal", desc: "Series correlativas y sin saltos injustificados." },
              { title: "Comunicación electrónica", desc: "Capacidad de enviar la factura al cliente y reportar el estado (aceptada/rechazada)." },
              { title: "Interoperabilidad", desc: "Conexión con plataformas certificadas públicas o privadas." }
            ].map((req, idx) => (
              <div key={idx} className="flex items-start p-4 bg-white dark:bg-slate-950 rounded-lg border shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{req.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{req.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-200 dark:border-red-800 flex items-center justify-center text-center">
            <p className="text-red-700 dark:text-red-300 font-bold">
              <AlertTriangle className="inline-block h-5 w-5 mr-2 mb-1" />
              Recuerda: Un PDF no es una factura electrónica válida para la normativa 2027.
            </p>
          </div>
        </section>

        {/* 5. A quién afecta */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            ¿A quién afecta la obligación?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <p className="text-lg text-slate-600 dark:text-slate-400">
                La respuesta corta es: <strong>a casi todos</strong>. La ley no hace distinciones por tamaño una vez pasado el periodo transitorio.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center"><ArrowRight className="h-4 w-4 text-primary mr-2"/> <strong>Autónomos:</strong> Obligación directa en sus facturas B2B.</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 text-primary mr-2"/> <strong>Pymes:</strong> Igual que las grandes empresas.</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 text-primary mr-2"/> <strong>Tiendas Online:</strong> WooCommerce, Shopify, Prestashop, etc.</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 text-primary mr-2"/> <strong>Gestorías:</strong> Deberán recibir y procesar estos formatos.</li>
              </ul>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl flex items-center justify-center">
              <p className="text-xl font-bold text-center text-slate-700 dark:text-slate-300">
                “Ningún negocio que emita facturas quedará fuera de esta obligación.”
              </p>
            </div>
          </div>
        </section>

        {/* 6. Impacto en WooCommerce */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            Impacto en WooCommerce y tiendas online
          </h2>
          <div className="prose prose-slate dark:prose-invert lg:prose-lg mb-6">
            <p>
              Si tienes una tienda en WooCommerce, probablemente uses un plugin que genera un PDF y lo envía por correo al cliente. <strong>Esto dejará de ser legalmente suficiente.</strong>
            </p>
            <p>
              Para cumplir la normativa, tu WooCommerce necesita "superpoderes":
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {["Firma XAdES", "Registro Verifactu", "Datos Estructurados", "Control de Numeración", "Conservación", "Trazabilidad"].map((tag, i) => (
              <span key={i} className="px-3 py-2 bg-primary/10 text-primary rounded-md text-center text-sm font-bold border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            <strong>CumpleFactura</strong> automatiza todo esto. Se instala como un plugin más, pero trabaja en segundo plano interceptando los pedidos para generar facturas que cumplen el 100% de los requisitos legales, sin que tú tengas que hacer nada extra.
          </p>
        </section>

        {/* 7. Verifactu + Factura 2026 */}
        <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
            Verifactu + Factura electrónica 2026: cómo encajan
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            A veces se confunden, pero son dos caras de la misma moneda. <strong><Link to="/verifactu" className="text-primary hover:underline">VeriFactu</Link></strong> se centra en la lucha contra el fraude (que la factura no se borre ni manipule), mientras que la <strong>Factura Electrónica</strong> se centra en la digitalización de las relaciones comerciales (B2B).
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            Ambos sistemas exigen integridad, trazabilidad, firma digital y registros hash. CumpleFactura implementa ambos estándares simultáneamente, protegiéndote frente a ambas normativas con una sola herramienta.
          </p>
        </section>

        {/* 8. Ventajas */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">
            Ventajas de adaptarse a tiempo
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Evitar sanciones por incumplimiento",
              "Evitar el caos de gestión en el último momento",
              "Ahorro masivo de tiempo en contabilidad manual",
              "Transparencia total con tu gestoría",
              "Menos errores humanos en la facturación",
              "Cumplimiento automático sin esfuerzo técnico",
              "Imagen profesional y moderna ante clientes",
              "Mejor organización y seguridad de tus datos fiscales"
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 9. FAQs */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">¿Cuándo es obligatorio exactamente?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                Los plazos se han prorrogado un año: empresas (Impuesto de Sociedades) desde el 1 de enero de 2027, y autónomos y resto de obligados desde el 1 de julio de 2027. Adaptarse en 2026 es la estrategia inteligente para llegar sin prisas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">¿Por qué se habla tanto de 2027?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                Porque 2027 marca las fechas definitivas de entrada en vigor: enero para empresas y julio para autónomos. La inmensa mayoría del tejido empresarial español debe estar preparado para entonces.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">¿Qué pasa si sigo usando PDFs normales?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                Estarás incumpliendo la normativa de facturación electrónica. Tus facturas podrían ser rechazadas por clientes profesionales y podrías enfrentarte a sanciones.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">¿Necesito cambiar de plataforma de ecommerce?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                No. Si usas WooCommerce, solo necesitas un plugin como CumpleFactura que añada la capa de cumplimiento legal a tu tienda existente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">¿Qué formato será el exigido?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                Principalmente formatos estructurados como Facturae (XML), UBL o CII. El PDF dejará de ser el estándar válido para el intercambio de facturas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">¿Cómo afecta a autónomos sin tienda online?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                También les afecta. Deberán usar un software de facturación que cumpla los requisitos para emitir sus facturas de servicios o productos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-medium">¿CumpleFactura estará listo para 2027?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                Sí, CumpleFactura está diseñado específicamente para cumplir con Verifactu y la Ley Crea y Crece, actualizándose constantemente conforme se publican los reglamentos técnicos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

      </article>

      {/* 10. CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            Prepárate hoy para la factura electrónica de 2027
          </h2>
          <p className="text-xl opacity-90 mb-8">
            CumpleFactura añade automáticamente firma digital, trazabilidad, Verifactu y estructura legal a tus facturas de WooCommerce.
          </p>
          <Button asChild size="lg" variant="secondary" className="h-12 px-8 text-lg font-bold bg-white text-primary hover:bg-white/90">
            <Link to="/woocommerce-verifactu">
              Instalar CumpleFactura <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}