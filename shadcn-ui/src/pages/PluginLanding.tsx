import MainLayout from '@/layouts/MainLayout';
import CtaSection from '@/components/sections/CtaSection';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Download, ArrowRight, Zap, Database, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PluginLanding() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-blue-100 text-blue-800">
              v2.0 Disponible
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-slate-900">
              VerifactuWoo — Verifactu para WooCommerce
            </h1>
            <p className="text-xl text-muted-foreground">
              El plugin definitivo para conectar tu tienda online con la normativa española. Ligero, seguro y fácil de configurar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12 px-8 text-lg gap-2">
                <Download className="h-5 w-5" /> Descargar Plugin
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg" asChild>
                <Link to="/como-funciona">Ver documentación</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-[600px]">
            <img 
              src="/assets/plugin-ui-mockup.png" 
              alt="VerifactuWoo Plugin Interface" 
              className="w-full h-auto rounded-xl shadow-2xl border"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow">
              <Zap className="h-10 w-10 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Instalación Express</h3>
              <p className="text-muted-foreground">Se instala como cualquier plugin de WordPress. Activar, pegar API Key y listo.</p>
            </div>
            <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow">
              <Database className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Sincronización Real</h3>
              <p className="text-muted-foreground">Envía datos de pedidos completados a CumpleFactura en tiempo real.</p>
            </div>
            <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow">
              <FileCheck className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Retorno Automático</h3>
              <p className="text-muted-foreground">Recibe el PDF y el QR de vuelta y lo adjunta al pedido en WooCommerce.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Instalación en 3 pasos</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Descarga y sube el plugin</h3>
                <p className="text-muted-foreground">Descarga el .zip de VerifactuWoo y súbelo a tu WordPress en Plugins {'>'} Añadir nuevo.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Configura la API Key</h3>
                <p className="text-muted-foreground">Ve a Ajustes {'>'} VerifactuWoo e introduce la clave API que encontrarás en tu panel de CumpleFactura.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">¡Listo!</h3>
                <p className="text-muted-foreground">Realiza un pedido de prueba para ver cómo se genera la factura automáticamente.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </MainLayout>
  );
}