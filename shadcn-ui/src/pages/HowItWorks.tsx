import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingCart, Zap, PenTool, ShieldCheck, FileInput, Send, Store, Scale, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <MainLayout>
      {/* 1. Intro */}
      <section className="bg-background py-20 md:py-28">
        <div className="container text-center flex flex-col items-center">
          <img 
            src="/images/AppIcon.jpg" 
            alt="CumpleFactura Icon" 
            className="w-24 h-24 mb-8 drop-shadow-xl hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl mb-6 text-primary">
            Así funciona CumpleFactura: todo automático, desde el pedido hasta la factura legal.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Conecta WooCommerce y despreocúpate: CumpleFactura genera, firma y verifica cada factura sin intervención manual.
          </p>
        </div>
      </section>

      {/* 2. Pasos del proceso */}
      <section className="py-20">
        <div className="container">
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
      <section className="py-20 bg-slate-50">
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
      <section className="py-20">
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
                Todo lo que la normativa española exige para 2025–2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Módulo “Para tu gestoría” */}
      <section className="py-20 bg-slate-50">
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
            </div>
          </div>
        </div>
      </section>
      
      {/* 6. CTA Final */}
      <section className="py-20 container text-center">
        <div className="bg-brand-light rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">Instálalo hoy y deja que CumpleFactura trabaje por ti.</h2>
          <p className="text-xl text-muted-foreground mb-8">WooCommerce + Verifactu + Firma digital = facturación legal sin esfuerzo.</p>
          <Button size="lg" className="h-12 px-8 text-lg bg-accent hover:bg-accent/90 text-white" asChild>
            <Link to="/woocommerce-verifactu">
              Empezar gratis <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}