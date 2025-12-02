import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, FileDigit, ShieldCheck, Users, AlertTriangle, ArrowRight, FileX, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ElectronicInvoice2026() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-b">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-slate-900 dark:text-white">
            Factura electrónica obligatoria 2026: lo que debes saber
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mx-auto leading-relaxed">
            Guía completa sobre la nueva obligación de factura electrónica en España, cómo afectará a autónomos y negocios online, y cómo CumpleFactura te prepara para cumplirla sin esfuerzo.
          </p>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-16 container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            La factura electrónica será obligatoria para la mayoría de negocios en 2026
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            La normativa española avanza hacia un sistema digital de facturación totalmente trazable.
            A partir de 2026, autónomos, pymes y comercios online deberán emitir facturas electrónicas con requisitos técnicos específicos, además de garantizar la integridad, firma y registro de cada operación.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            CumpleFactura integra estos requisitos de forma automática en WooCommerce, sin que el usuario tenga que aprender nada técnico.
          </p>
        </div>
      </section>

      {/* Section 2: Requirements */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 dark:text-white">
            Qué exige la factura electrónica obligatoria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Emisión de factura en formato electrónico estructurado",
              "Firma digital válida (XAdES)",
              "Registro de integridad y trazabilidad",
              "Conservación de datos durante el periodo legal",
              "Comunicación o disponibilidad de la información para la Administración",
              "Uso de software verificable compatible con los requisitos técnicos",
              "Posible necesidad de interoperabilidad con MiFacturae"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white dark:bg-slate-950 rounded-lg border shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
              La factura electrónica deja de ser “un PDF enviado por email” para convertirse en un sistema digital auditado y verificado.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Who is affected */}
      <section className="py-16 container max-w-4xl">
        <div className="bg-white dark:bg-slate-950 p-8 md:p-12 rounded-2xl border shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                ¿A quién afecta esta obligación?
              </h2>
              <p className="mb-6 text-slate-600 dark:text-slate-400">Afectará a:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Autónomos",
                  "Comercios online (incluyendo WooCommerce)",
                  "Profesionales liberales",
                  "Pymes",
                  "Tiendas que vendan productos o servicios",
                  "Negocios que emitan facturas a consumidores o empresas"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span className="text-slate-800 dark:text-slate-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-500 italic border-t pt-4">
                Esta obligación se aplicará progresivamente según tipo de contribuyente y facturación anual.
              </p>
            </div>
            <div className="hidden md:block w-1/3 flex justify-center">
              <FileDigit className="h-32 w-32 text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How CumpleFactura prepares you */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
            CumpleFactura automatiza todo lo que exige la nueva normativa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Firma digital XAdES", desc: "En cada factura" },
              { title: "Hash criptográfico", desc: "Trazabilidad (Verifactu)" },
              { title: "Preparación MiFacturae", desc: "Listo para el futuro" },
              { title: "Registros de integridad", desc: "Eventos auditables" },
              { title: "Numeración legal", desc: "Automatizada y secuencial" },
              { title: "Exportaciones profesionales", desc: "Para gestorías" },
              { title: "Gestión integrada", desc: "Directamente desde WooCommerce" }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-slate-950 p-6 rounded-xl border hover:border-primary/50 transition-colors">
                <ShieldCheck className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-lg font-medium text-slate-700 dark:text-slate-300">
            CumpleFactura elimina el riesgo de errores, sanciones o incumplimientos: todo se hace de manera automática en segundo plano.
          </p>
        </div>
      </section>

      {/* Section 5: PDF vs Electronic Invoice */}
      <section className="py-16 container max-w-4xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 dark:text-white">
          Diferencias entre PDF y factura electrónica real
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-50 dark:bg-red-900/10 p-8 rounded-xl border border-red-100 dark:border-red-900/30">
            <div className="flex items-center gap-3 mb-4 text-red-600 dark:text-red-400">
              <FileX className="h-8 w-8" />
              <h3 className="text-xl font-bold">PDF Simple</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-medium mb-4">Un PDF NO es una factura electrónica válida.</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Carece de estructura de datos procesable, firma digital cualificada y trazabilidad técnica requerida por la normativa.
            </p>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/10 p-8 rounded-xl border border-green-100 dark:border-green-900/30">
            <div className="flex items-center gap-3 mb-4 text-green-600 dark:text-green-400">
              <FileCheck className="h-8 w-8" />
              <h3 className="text-xl font-bold">Factura Electrónica</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-medium mb-4">La factura electrónica exige:</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Estructura digital, firma, hash, trazabilidad y compatibilidad con los sistemas estatales.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl font-bold text-primary">
            CumpleFactura convierte WooCommerce en un sistema de facturación legal real.
          </p>
        </div>
      </section>

      {/* Section 6: FAQs */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 dark:text-white">
            Preguntas frecuentes
          </h2>
          <Accordion type="single" collapsible className="w-full bg-white dark:bg-slate-950 p-6 rounded-xl border shadow-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Cuándo será obligatoria la factura electrónica?</AccordionTrigger>
              <AccordionContent>
                A partir de 2026, con implantación progresiva según tipo de contribuyente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Afecta a tiendas WooCommerce?</AccordionTrigger>
              <AccordionContent>
                Sí. Todos los comercios online deberán emitir facturas electrónicas con requisitos técnicos específicos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>¿Necesito cambiar de plataforma?</AccordionTrigger>
              <AccordionContent>
                No. CumpleFactura añade toda la capa legal a WooCommerce automáticamente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>¿CumpleFactura será compatible con la normativa 2026?</AccordionTrigger>
              <AccordionContent>
                Sí. Ya incorpora firma XAdES, Verifactu y preparación para MiFacturae.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>¿Tengo que enviar las facturas manualmente?</AccordionTrigger>
              <AccordionContent>
                No. Todo queda automatizado desde la generación hasta la exportación para la gestoría.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            Prepárate para la factura electrónica obligatoria desde hoy
          </h2>
          <p className="text-xl opacity-90 mb-8">
            WooCommerce + CumpleFactura = facturación legal, firma digital y Verifactu sin complicaciones.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-primary font-bold">
            <Link to="/woocommerce-verifactu">
              Instalar CumpleFactura
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}