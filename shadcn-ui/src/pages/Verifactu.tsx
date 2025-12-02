import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, ShieldCheck, FileText, Lock, Clock, Server, ArrowRight, Briefcase, Store } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Verifactu() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-b">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-slate-900 dark:text-white">
            ¿Qué es Verifactu y cómo te ayuda CumpleFactura a cumplirlo?
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mx-auto leading-relaxed">
            Explicación clara de Verifactu, por qué será obligatorio y cómo CumpleFactura lo implementa automáticamente en WooCommerce.
          </p>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-16 container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            Verifactu: el nuevo estándar de software verificable en España
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            Verifactu es el sistema definido por la Administración española para garantizar que los programas de facturación sean verificables, íntegros y trazables.
            Su objetivo es evitar la manipulación de facturas y garantizar que todos los ingresos se declaren correctamente.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Afecta a autónomos, pymes y negocios que emiten facturas mediante un software de facturación, incluyendo tiendas online que venden con WooCommerce.
          </p>
        </div>
      </section>

      {/* Section 2: Requirements */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 dark:text-white">
            ¿Qué exige Verifactu?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {[
              { icon: <FileText className="h-6 w-6" />, text: "Registro de cada factura y cada evento" },
              { icon: <ShieldCheck className="h-6 w-6" />, text: "Imposibilidad de borrar facturas sin dejar rastro" },
              { icon: <Lock className="h-6 w-6" />, text: "Cadena hash que garantice la integridad de los datos" },
              { icon: <Clock className="h-6 w-6" />, text: "Registros de tiempo (timestamps) fiables" },
              { icon: <Server className="h-6 w-6" />, text: "Conservación de la información durante varios años" },
              { icon: <ArrowRight className="h-6 w-6" />, text: "Posible envío de la información a la AEAT" },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white dark:bg-slate-950 rounded-xl border shadow-sm">
                <div className="text-primary mt-1">{item.icon}</div>
                <p className="font-medium text-slate-700 dark:text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg font-medium text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Cumplir Verifactu no es solo generar un PDF: implica trazabilidad técnica, seguridad y registro.
          </p>
        </div>
      </section>

      {/* Section 3: How CumpleFactura implements it */}
      <section className="py-16 container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
              CumpleFactura ya viene preparado para Verifactu
            </h2>
            <ul className="space-y-4 mb-8">
              {[
                "Cada factura generada desde WooCommerce se registra con un hash único.",
                "Se mantiene una cadena de registros inmutable, que cumple los requisitos de software verificable.",
                "Cada operación relevante (emisión, modificación permitida, etc.) queda registrada con fecha y hora.",
                "Los datos se conservan durante el periodo legal exigido."
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium bg-primary/5 p-4 rounded-lg border border-primary/10">
              Todo esto ocurre de forma automática, sin que tengas que saber nada de hash, criptografía o registros técnicos.
            </p>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
             {/* Placeholder for an illustration if needed, using an icon for now */}
             <ShieldCheck className="h-32 w-32 text-primary/20" />
          </div>
        </div>
      </section>

      {/* Section 4: Advantages */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
            Ventajas para autónomos y gestorías
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-slate-950 p-8 rounded-xl border shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <Store className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Para autónomos y tiendas online</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Cumplimiento legal sin líos técnicos",
                  "Menos riesgo de inspecciones y sanciones",
                  "Facturación transparente y ordenada",
                  "WooCommerce listo para la nueva normativa"
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
                  "Reciben datos limpios y verificables",
                  "Pueden demostrar la integridad de las facturas ante Hacienda",
                  "Ahorran tiempo en controles y revisiones",
                  "Menos errores del cliente"
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
          Preguntas frecuentes sobre Verifactu
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>¿Verifactu es ya obligatorio para todos?</AccordionTrigger>
            <AccordionContent>
              Verifactu forma parte del marco de software verificable definido por la normativa reciente. Su entrada en vigor se hace de forma progresiva según desarrollos reglamentarios y tipo de contribuyente.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>¿Necesito entender la parte técnica para cumplirlo?</AccordionTrigger>
            <AccordionContent>
              No. La idea de CumpleFactura es que el usuario no tenga que lidiar con hash, firmas o registros. El sistema se encarga de la parte técnica.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>¿Qué pasa si no uso un software compatible?</AccordionTrigger>
            <AccordionContent>
              Podrías exponerte a riesgos de incumplimiento, errores en facturación y posibles sanciones en caso de inspección.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>¿Cómo ayuda CumpleFactura a mi gestoría?</AccordionTrigger>
            <AccordionContent>
              Entrega datos íntegros, trazables y exportables, que pueden justificarse ante la Administración si es necesario.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            Activa CumpleFactura y olvídate de la parte técnica de Verifactu
          </h2>
          <p className="text-xl opacity-90 mb-8">
            WooCommerce → factura → firma → hash → registro.
            <br />
            Cumples Verifactu sin cambiar tu forma de trabajar.
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