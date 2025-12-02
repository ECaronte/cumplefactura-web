import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, ShieldCheck, FileText, Lock, Clock, Server, ArrowRight, AlertTriangle, Store, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Verifactu() {
  return (
    <MainLayout>
      <Helmet>
        <title>VeriFactu 2026 · CumpleFactura</title>
        <meta
          name="description"
          content="Entiende qué es VeriFactu, a quién afecta y cómo puedes cumplir con la nueva obligación de registro de facturas sin volverte loco con la normativa."
        />
        <link rel="canonical" href="https://cumplefactura.es/verifactu" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="VeriFactu 2026 · CumpleFactura" />
        <meta
          property="og:description"
          content="Guía clara sobre VeriFactu 2026 para autónomos, pymes y gestorías. Qué es, a quién afecta y cómo cumplir con la norma sin cambiar todo tu sistema."
        />
        <meta property="og:url" content="https://cumplefactura.es/verifactu" />
        <meta property="og:image" content="https://cumplefactura.es/og/verifactu.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VeriFactu 2026 · CumpleFactura" />
        <meta
          name="twitter:description"
          content="Guía clara sobre VeriFactu 2026 para autónomos, pymes y gestorías. Qué es, a quién afecta y cómo cumplir con la norma sin complicaciones."
        />
        <meta name="twitter:image" content="https://cumplefactura.es/og/verifactu.png" />
      </Helmet>
      {/* 1. Hero / Header del Artículo */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-b">
        <div className="container max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mb-6">
            Guía Actualizada 2025
          </div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-slate-900 dark:text-white leading-tight">
            Qué es Verifactu y cómo prepararte para la normativa de factura electrónica 2025–2026
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mx-auto leading-relaxed max-w-3xl">
            Guía completa, clara y actualizada para autónomos, gestorías y tiendas WooCommerce sobre el nuevo reglamento de sistemas informáticos de facturación.
          </p>
        </div>
      </section>

      <article className="container max-w-3xl py-16 space-y-16">
        
        {/* 1. Introducción */}
        <section className="prose prose-slate dark:prose-invert lg:prose-lg mx-auto">
          <p className="lead text-xl text-slate-600 dark:text-slate-300">
            La facturación en España está viviendo su mayor transformación en décadas. Con la aprobación del Reglamento de Sistemas Informáticos de Facturación (conocido popularmente como <strong>Verifactu</strong>) y la inminente Ley Crea y Crece, la forma en que autónomos y empresas emiten sus facturas va a cambiar radicalmente entre 2025 y 2026.
          </p>
          <p>
            Ya no será suficiente con generar un PDF o usar un Excel. La administración busca acabar con el fraude fiscal y la economía sumergida mediante la digitalización y el control técnico de los procesos de facturación. Esto significa que tu software (o tu tienda WooCommerce) deberá cumplir una serie de requisitos técnicos estrictos para garantizar que las facturas no han sido manipuladas. Descubre más sobre la <Link to="/factura-electronica-2026" className="text-primary hover:underline font-medium">factura electrónica obligatoria 2026</Link>.
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 my-8 not-prose rounded-r-lg">
            <h3 className="text-lg font-bold text-amber-800 dark:text-amber-200 flex items-center mb-2">
              <AlertTriangle className="h-5 w-5 mr-2" />
              ¿Por qué es urgente?
            </h3>
            <p className="text-amber-700 dark:text-amber-300">
              El incumplimiento de esta normativa puede acarrear sanciones severas tanto para los desarrolladores de software como para los usuarios (autónomos y pymes) que utilicen sistemas no certificados. Prepararse ahora no es solo una ventaja competitiva, es una necesidad legal para evitar riesgos futuros.
            </p>
          </div>
        </section>

        {/* 2. Qué es Verifactu exactamente */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            ¿Qué es Verifactu exactamente?
          </h2>
          <div className="prose prose-slate dark:prose-invert lg:prose-lg mb-8">
            <p>
              En términos sencillos, <strong>Verifactu</strong> es el nombre con el que se conoce al sistema técnico que permite a la Agencia Tributaria verificar la integridad de las facturas. No es un software que debas instalar, sino un <strong>conjunto de requisitos</strong> que tu programa de facturación actual (o tu plugin de WooCommerce) debe cumplir.
            </p>
            <p>
              El concepto clave aquí es el de <strong>"Software Verificable"</strong>. Hasta ahora, podías hacer una factura, borrarla si te equivocabas y hacer otra con el mismo número. Con la nueva normativa, eso se acabó. El sistema debe garantizar la <strong>integridad, conservación, accesibilidad, legibilidad, trazabilidad e inalterabilidad</strong> de los registros.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border">
              <h3 className="font-bold text-lg mb-2 flex items-center">
                <Lock className="h-5 w-5 mr-2 text-primary" />
                Cadena Hash
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Cada factura genera una "huella digital" única basada en su contenido y en la huella de la factura anterior. Si modificas una factura pasada, la cadena se rompe y el fraude es evidente.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border">
              <h3 className="font-bold text-lg mb-2 flex items-center">
                <ShieldCheck className="h-5 w-5 mr-2 text-primary" />
                Integridad e Inmutabilidad
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Una vez emitida, una factura no se puede alterar ni borrar. Si hay un error, se debe emitir una factura rectificativa, quedando registrado todo el proceso.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Requisitos legales de Verifactu */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
            Requisitos legales: ¿Qué debe hacer tu software?
          </h2>
          <div className="grid gap-6">
            {[
              {
                title: "Registro inmediato de cada factura",
                desc: "El sistema debe generar un registro informático de alta por cada factura expedida, justo en el momento de su emisión.",
                icon: <FileText className="h-6 w-6 text-blue-500" />
              },
              {
                title: "Huella o Hash Criptográfico",
                desc: "Cada registro debe incluir un hash que lo encadene con el registro anterior, creando una secuencia inalterable.",
                icon: <Lock className="h-6 w-6 text-blue-500" />
              },
              {
                title: "Gestión de Eventos",
                desc: "Cualquier anulación o rectificación debe generar su propio registro de evento. Nada se borra, todo se documenta.",
                icon: <Clock className="h-6 w-6 text-blue-500" />
              },
              {
                title: "Sellado de Tiempo",
                desc: "Es obligatorio garantizar el momento exacto de la emisión mediante timestamps precisos y sincronizados.",
                icon: <Clock className="h-6 w-6 text-blue-500" />
              },
              {
                title: "Conservación de Datos",
                desc: "El software debe permitir la conservación y el acceso a estos registros durante el periodo de prescripción tributaria.",
                icon: <Server className="h-6 w-6 text-blue-500" />
              },
              {
                title: "Conexión con AEAT (Voluntaria/Obligatoria)",
                desc: "El sistema debe tener la capacidad de remitir estos registros a la Agencia Tributaria de forma automática (sistema 'Veri*factu').",
                icon: <ArrowRight className="h-6 w-6 text-blue-500" />
              }
            ].map((req, idx) => (
              <div key={idx} className="flex items-start p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="mr-4 mt-1 bg-blue-50 dark:bg-blue-900/20 p-2 rounded-full">
                  {req.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{req.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {req.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. A quién afecta Verifactu */}
        <section className="bg-slate-50 dark:bg-slate-900/50 -mx-6 px-6 py-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">
            ¿A quién afecta esta normativa?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-950 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Store className="h-6 w-6 mr-2 text-primary" />
                Autónomos y Tiendas WooCommerce
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Si vendes productos o servicios y emites facturas (aunque sea simplificadas), estás obligado. Esto incluye a cualquier tienda online montada sobre WooCommerce.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500"/> Obligación de usar software certificado.</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500"/> Prohibición de usar Excel o Word.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-950 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Briefcase className="h-6 w-6 mr-2 text-primary" />
                Gestorías y Asesorías
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Las gestorías juegan un papel crucial. Deben asegurarse de que los datos que reciben de sus clientes provienen de sistemas válidos.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500"/> Recepción de datos estructurados.</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500"/> Garantía de integridad fiscal.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Cómo afecta Verifactu a WooCommerce */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            El reto para las tiendas WooCommerce
          </h2>
          <div className="prose prose-slate dark:prose-invert lg:prose-lg">
            <p>
              WooCommerce, por defecto, es una plataforma de comercio electrónico, no un software de facturación certificado según la ley española. Generar un PDF simple con un plugin básico ya no será suficiente.
            </p>
            <p>
              Para que tu tienda cumpla con la ley, necesitas una capa tecnológica adicional que intercepte cada pedido y genere el registro de facturación correspondiente con su huella hash, su firma digital y su almacenamiento seguro.
            </p>
            <p>
              Aquí es donde muchos dueños de tiendas se preocupan: <em>"¿Tengo que cambiar de plataforma? ¿Tengo que contratar un ERP costoso?"</em>. La respuesta es no, si utilizas la herramienta adecuada que se integre nativamente.
            </p>
          </div>
        </section>

        {/* 6. Ventajas de usar CumpleFactura */}
        <section className="bg-primary/5 border border-primary/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">
            Ventajas de usar CumpleFactura
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-bold">Firma XAdES Automática</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Firmamos digitalmente cada factura sin que tengas que hacer nada. <Link to="/firma-xades" className="text-primary hover:underline">Más sobre firma XAdES</Link>.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-bold">Hash y Trazabilidad</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Generamos y guardamos la cadena hash obligatoria de Verifactu.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-bold">Preparado para MiFacturae</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Listo para la futura conexión directa con la plataforma pública.</p>
                </div>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-bold">Exportaciones para Gestorías</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Tu gestor puede descargar todo en CSV/XML compatible.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-bold">Integración Nativa</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Funciona dentro de tu WooCommerce, sin plataformas externas complejas.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-bold">Fácil para Autónomos</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Instalar, configurar y olvidar. Nosotros nos ocupamos de la técnica.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* 7. FAQs */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">¿Es obligatorio Verifactu ya?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                El reglamento ya ha sido aprobado, pero los plazos de implementación obligatoria para todas las empresas y autónomos se extienden hasta julio de 2025 para desarrolladores y posteriormente para usuarios. Sin embargo, es altamente recomendable adaptarse cuanto antes para evitar cuellos de botella.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">¿Cómo se implementa en WooCommerce?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                La forma más sencilla es mediante un plugin especializado como CumpleFactura. Este se encarga de interceptar los pedidos y generar las facturas cumpliendo todos los requisitos técnicos (hash, firma, formato) sin que tengas que programar nada. <Link to="/precios" className="text-primary hover:underline">Consulta nuestros planes</Link>.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">¿Qué pasa si no uso software verificable?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                Te expones a sanciones administrativas significativas. La Ley Antifraude establece multas tanto para quienes fabrican software de doble uso como para los usuarios que no utilicen sistemas certificados debidamente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">¿Cómo puedo probar que mis facturas son válidas?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                Con CumpleFactura, cada factura tiene su firma digital y su huella hash. Además, el sistema permite descargar los ficheros XML estructurados que sirven como prueba técnica ante cualquier inspección de la Agencia Tributaria.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">¿Sirve para el TicketBAI del País Vasco?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                Aunque Verifactu y TicketBAI comparten filosofía (evitar el fraude), son sistemas distintos. CumpleFactura está enfocado en la normativa estatal (territorio común). Para País Vasco, consulta la compatibilidad específica de tu provincia.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

      </article>

      {/* 8. CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            Cumple automáticamente Verifactu con CumpleFactura
          </h2>
          <p className="text-xl opacity-90 mb-8">
            No te arriesgues con soluciones a medias. Automatiza tu cumplimiento legal hoy mismo.
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