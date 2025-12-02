import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileSignature, ShieldCheck, CheckCircle2, Lock, FileCheck, Briefcase, Store, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function XadesSignature() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-b">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-slate-900 dark:text-white">
            Firma digital XAdES: qué es y por qué es necesaria en facturación electrónica
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mx-auto leading-relaxed">
            Explicación clara y práctica sobre la firma digital XAdES, su papel en la factura electrónica y cómo CumpleFactura la aplica automáticamente a tus facturas de WooCommerce.
          </p>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-16 container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            ¿Qué es la firma XAdES?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            La firma digital XAdES (XML Advanced Electronic Signatures) es un estándar europeo que garantiza la autenticidad, integridad y validez legal de una factura electrónica.
            A diferencia de un PDF tradicional, una factura firmada con XAdES contiene información criptográfica que demuestra:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-8">
            {[
              "Que el emisor es quien dice ser",
              "Que el contenido de la factura no ha sido modificado",
              "Que la factura tiene valor legal ante la Administración"
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-slate-950 p-6 rounded-xl border shadow-sm flex flex-col items-center text-center">
                <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                <p className="font-medium text-slate-700 dark:text-slate-300">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-lg font-medium text-slate-700 dark:text-slate-300">
            Es un requisito fundamental para la facturación electrónica moderna.
          </p>
        </div>
      </section>

      {/* Section 2: Why XAdES in Spain */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                Por qué se usa XAdES en España
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Es el estándar aceptado por la Administración española.",
                  "Ofrece mayor seguridad y trazabilidad que firmas simples.",
                  "Permite validar la factura automáticamente.",
                  "Facilita la interoperabilidad con MiFacturae.",
                  "Cubre los requisitos de autenticidad exigidos en la normativa de factura electrónica."
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800 inline-block">
                La factura electrónica no es solo un PDF: necesita una firma que pueda verificarse digitalmente.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <FileSignature className="h-40 w-40 text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How CumpleFactura applies it */}
      <section className="py-16 container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            CumpleFactura firma tus facturas automáticamente con XAdES
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {[
            "Cada factura generada en WooCommerce se firma automáticamente mediante XAdES.",
            "No necesitas conocimientos técnicos ni instalar certificados complejos.",
            "El proceso es totalmente automático y transparente.",
            "La firma se almacena junto con la factura para futuras verificaciones.",
            "Facilita el cumplimiento de Verifactu y de la normativa 2026."
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-white dark:bg-slate-950 rounded-xl border shadow-sm hover:border-primary/40 transition-colors">
              <Lock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-slate-700 dark:text-slate-300">{item}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-xl font-bold text-primary">
            CumpleFactura convierte tu tienda WooCommerce en un sistema de facturación legal sin cambiar tu flujo de trabajo.
          </p>
        </div>
      </section>

      {/* Section 4: Benefits */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
            Beneficios de usar firma XAdES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-slate-950 p-8 rounded-xl border shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <Store className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Para autónomos y negocios online</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Facturación 100% legal",
                  "Protección contra manipulaciones",
                  "Aceptación oficial por la Administración",
                  "Seguridad jurídica ante inspecciones",
                  "Sin necesidad de conocimientos técnicos"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 dark:text-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-slate-950 p-8 rounded-xl border shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <Briefcase className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Para gestorías</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Reciben facturas firmadas válidas",
                  "Pueden verificar integridad en segundos",
                  "Evitan errores, duplicados o facturas manipuladas",
                  "Cumplen con auditorías y revisiones legales"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 dark:text-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="py-16 container max-w-3xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 dark:text-white">
          Preguntas frecuentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>¿Necesito instalar un certificado para firmar XAdES?</AccordionTrigger>
            <AccordionContent>
              No. CumpleFactura automatiza todo el proceso.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>¿Es la firma XAdES obligatoria?</AccordionTrigger>
            <AccordionContent>
              Es el estándar exigido para garantizar autenticidad e integridad en la factura electrónica en España.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>¿Se puede manipular una factura firmada?</AccordionTrigger>
            <AccordionContent>
              No sin invalidar la firma. El sistema detecta cualquier modificación.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>¿La firma XAdES cumple la normativa 2025–2026?</AccordionTrigger>
            <AccordionContent>
              Sí, es el formato requerido para facturación electrónica y comunicación con MiFacturae.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            Activa CumpleFactura y firma tus facturas automáticamente con XAdES
          </h2>
          <p className="text-xl opacity-90 mb-8">
            WooCommerce → Factura → Firma digital → Verifactu → Exportación profesional.
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