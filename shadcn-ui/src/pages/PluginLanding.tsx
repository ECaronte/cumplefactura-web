import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Download, ArrowRight, Zap, Database, FileCheck, PenTool, ShieldCheck, Puzzle, FileCode, Clock, Lock, Briefcase, TrendingUp, Store, Gavel, Calendar, CheckSquare, FileText, X, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function PluginLanding() {
  return (
    <MainLayout>
      <Helmet>
        <title>Plugin de facturación legal para WooCommerce · CumpleFactura</title>
        <meta
          name="description"
          content="CumpleFactura es el plugin de facturación legal para WooCommerce con firma digital XAdES, VeriFactu, numeraciones legales y exportaciones profesionales."
        />
        <link rel="canonical" href="https://cumplefactura.es/woocommerce-verifactu" />

        <meta property="og:type" content="product" />
        <meta property="og:title" content="Plugin de facturación legal para WooCommerce · CumpleFactura" />
        <meta
          property="og:description"
          content="Automatiza tu facturación en WooCommerce con firma digital XAdES, VeriFactu y cumplimiento legal garantizado."
        />
        <meta property="og:url" content="https://cumplefactura.es/woocommerce-verifactu" />
        <meta property="og:image" content="https://cumplefactura.es/og/home.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plugin de facturación legal para WooCommerce · CumpleFactura" />
        <meta
          name="twitter:description"
          content="Automatiza tu facturación en WooCommerce con firma digital XAdES, VeriFactu y cumplimiento legal garantizado."
        />
        <meta name="twitter:image" content="https://cumplefactura.es/og/home.png" />
      </Helmet>
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
              <p className="text-muted-foreground">
                Las facturas se firman automáticamente usando tu certificado digital. <Link to="/seguridad-y-cumplimiento" className="text-primary hover:underline">Ver cómo protegemos tus datos</Link>.
              </p>
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
              <p className="text-muted-foreground">
                CSV y XML listos para contabilidad. <Link to="/gestorias" className="text-primary hover:underline">¿Trabajas con una gestoría?</Link>
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow">
              <FileCode className="h-10 w-10 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Compatible con MiFacturae</h3>
              <p className="text-muted-foreground">
                Deja todo preparado para envío y registro en MiFacturae. <Link to="/integraciones" className="text-primary hover:underline">Compatibilidad con ERPs</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Ahorra tiempo y evita sanciones */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900">
                Ahorra tiempo y evita sanciones
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                CumpleFactura automatiza la parte más delicada de tu facturación: registros Verifactu, firma digital XAdES y coherencia contable. Evita errores que pueden derivar en sanciones y ahorra horas cada mes con un sistema que trabaja por ti.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Cumple automáticamente con la normativa 2025–2026",
                  "Evita errores típicos en facturas manuales",
                  "Ahorro estimado: 2–5 horas al mes",
                  "Registros Verifactu sin intervención manual"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md bg-white rounded-xl shadow-xl border border-slate-200 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">Tiempo ahorrado</div>
                    <div className="text-2xl font-bold text-slate-900">5h / mes</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[85%] rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Facturación manual</span>
                    <span className="text-slate-900 font-medium">Lenta y propensa a errores</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[15%] rounded-full"></div>
                  </div>
                   <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Con CumpleFactura</span>
                    <span className="text-primary font-medium">Automática y segura</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Beneficios clave */}
      <section className="py-20 bg-white">
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

      {/* NUEVA SECCIÓN: Tabla Comparativa */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">CumpleFactura vs Hacer facturas a mano</h2>
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-100 p-4 font-semibold text-slate-700 border-b">
              <div className="col-span-1">Funcionalidad / Requisito</div>
              <div className="col-span-1 text-center text-primary">Con CumpleFactura</div>
              <div className="col-span-1 text-center text-slate-500">Hacer facturas a mano</div>
            </div>
            {[
              { label: "Verifactu automático", yes: true, manual: "No" },
              { label: "Firma digital XAdES", yes: true, manual: "No / Difícil" },
              { label: "Exportación lista para gestoría", yes: true, manual: "No" },
              { label: "Registro inmutable (hash)", yes: true, manual: "No" },
              { label: "Coherencia contable", yes: "Automática", manual: "Depende del usuario" },
              { label: "Riesgo de sanciones", yes: "Muy bajo", manual: "Alto" },
              { label: "Tiempo invertido", yes: "Muy poco", manual: "Mucho" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-4 border-b last:border-0 hover:bg-slate-50 transition-colors">
                <div className="col-span-1 font-medium text-slate-700 flex items-center">{row.label}</div>
                <div className="col-span-1 flex items-center justify-center font-semibold text-primary">
                  {row.yes === true ? <Check className="h-5 w-5" /> : row.yes}
                </div>
                <div className="col-span-1 flex items-center justify-center text-slate-500">
                  {row.manual === "No" ? <X className="h-5 w-5" /> : row.manual}
                </div>
              </div>
            ))}
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
          <h2 className="text-3xl font-bold mb-6">Empieza a automatizar tu facturación hoy</h2>
          <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
            Instalar CumpleFactura
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}