import MainLayout from '@/layouts/MainLayout';
import CtaSection from '@/components/sections/CtaSection';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Download, ArrowRight, Zap, Database, FileCheck, PenTool, ShieldCheck, Puzzle, FileCode, Clock, Lock, Briefcase, TrendingUp, Store, Gavel, Calendar, CheckSquare, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PluginLanding() {
  return (
    <MainLayout>
      {/* 1. Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-slate-900">
              El plugin de facturación legal para WooCommerce.
            </h1>
            <p className="text-xl text-muted-foreground">
              CumpleFactura convierte tu WooCommerce en un sistema de facturación completo: firma digital XAdES, Verifactu, MiFacturae, numeraciones legales y exportaciones profesionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12 px-8 text-lg gap-2">
                <Download className="h-5 w-5" /> Instalar gratis
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

      {/* 2. Qué hace el plugin */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Qué hace el plugin</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow">
              <FileText className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Facturas automáticas</h3>
              <p className="text-muted-foreground">Cada pedido genera una factura al instante, sin hacer nada manual.</p>
            </div>
            <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow">
              <PenTool className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Firma digital XAdES</h3>
              <p className="text-muted-foreground">Las facturas se firman automáticamente usando tu certificado digital, cumpliendo el estándar legal.</p>
            </div>
            <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow">
              <ShieldCheck className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Verifactu integrado</h3>
              <p className="text-muted-foreground">CumpleFactura genera la cadena hash e incorpora todos los requisitos del RD 1007/2023.</p>
            </div>
            <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow">
              <Puzzle className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Integración WooCommerce nativa</h3>
              <p className="text-muted-foreground">Funciona directamente dentro de WooCommerce; no necesitas conectores ni CRMs externos.</p>
            </div>
            <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow">
              <Download className="h-10 w-10 text-teal-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Exportación profesional</h3>
              <p className="text-muted-foreground">CSV y XML listos para contabilidad y gestorías. API opcional.</p>
            </div>
            <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow">
              <FileCode className="h-10 w-10 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Compatible con MiFacturae</h3>
              <p className="text-muted-foreground">Deja todo preparado para envío y registro en MiFacturae.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Beneficios clave */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Un plugin, toda la factura electrónica.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Automatización total</h3>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Datos fiables y sin errores</h3>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Ahorro de tiempo</h3>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Seguridad legal</h3>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Optimizado para gestorías</h3>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Evoluciona contigo</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Por qué es diferente */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Por qué es diferente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="mx-auto h-12 w-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Store className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">WooCommerce-native</h3>
              <p className="text-sm text-muted-foreground">No sincroniza. No conecta. Vive dentro de WooCommerce.</p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <Gavel className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Legal desde el primer día</h3>
              <p className="text-sm text-muted-foreground">Implementa firma, hash, eventos y trazabilidad obligatoria.</p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto h-12 w-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Preparado para 2025–2026</h3>
              <p className="text-sm text-muted-foreground">La normativa llega; CumpleFactura ya está lista.</p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto h-12 w-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <CheckSquare className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Mantiene tu tienda siempre en regla</h3>
              <p className="text-sm text-muted-foreground">Olvida errores, desorden, facturas duplicadas o numeraciones erróneas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Convierte tu WooCommerce en un sistema de facturación legal.</h2>
          <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
            Instalar gratis
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}