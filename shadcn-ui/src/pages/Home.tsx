import MainLayout from '@/layouts/MainLayout';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ComplianceSection from '@/components/sections/ComplianceSection';
import AgencyFeatureSection from '@/components/sections/AgencyFeatureSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingPreviewSection from '@/components/sections/PricingPreviewSection';
import FaqSection from '@/components/sections/FaqSection';
import CtaSection from '@/components/sections/CtaSection';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, ShieldCheck, FileText, ShoppingBag, User, Server, Lock, ShoppingCart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <MainLayout>
      <Helmet>
        <title>CumpleFactura · Factura electrónica y VeriFactu sin complicaciones</title>
        <meta
          name="description"
          content="CumpleFactura ayuda a autónomos, pymes y gestorías a cumplir con la factura electrónica, VeriFactu y la firma con certificado digital sin dolores de cabeza ni cambios de software traumáticos."
        />
        <link rel="canonical" href="https://cumplefactura.es/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="CumpleFactura · Factura electrónica y VeriFactu sin complicaciones" />
        <meta
          property="og:description"
          content="Factura electrónica, VeriFactu y firma con certificado digital en una solución sencilla pensada para autónomos y gestorías."
        />
        <meta property="og:url" content="https://cumplefactura.es/" />
        <meta property="og:image" content="https://cumplefactura.es/og/home.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CumpleFactura · Factura electrónica y VeriFactu sin complicaciones" />
        <meta
          name="twitter:description"
          content="Factura electrónica, VeriFactu y firma con certificado digital en una solución sencilla pensada para autónomos y gestorías."
        />
        <meta name="twitter:image" content="https://cumplefactura.es/og/home.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "name": "CumpleFactura",
                "url": "https://cumplefactura.es",
                "logo": "https://cumplefactura.es/og/logo.png",
                "sameAs": []
              },
              {
                "@type": "WebSite",
                "name": "CumpleFactura",
                "url": "https://cumplefactura.es"
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Inicio",
                    "item": "https://cumplefactura.es/"
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>
      <HeroSection />
      
      {/* NUEVA SECCIÓN: ¿Para quién es CumpleFactura? */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-brand-light text-primary mb-4">
                <User className="mr-1.5 h-3.5 w-3.5" />
                Autónomos y Pymes
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900">
                ¿Para quién es CumpleFactura?
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Pensado para autónomos, tiendas online y pequeños negocios que facturan con WooCommerce. CumpleFactura automatiza toda la parte legal: <Link to="/verifactu" className="text-primary hover:underline font-medium">VeriFactu</Link>, firma digital XAdES y exportaciones limpias para tu gestoría.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Ideal para autónomos y micropymes",
                  "Diseñado para WooCommerce",
                  "Cumplimiento legal sin complicaciones"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-video bg-white rounded-xl shadow-xl border border-slate-200 p-6 flex flex-col items-center justify-center">
                 <div className="grid grid-cols-2 gap-4 w-full opacity-80">
                  <div className="bg-slate-100 h-24 rounded flex flex-col items-center justify-center text-slate-500 border border-slate-200">
                    <ShoppingBag className="h-8 w-8 mb-2 text-primary/60" />
                    <span className="font-medium">Tienda Online</span>
                  </div>
                  <div className="bg-slate-100 h-24 rounded flex flex-col items-center justify-center text-slate-500 border border-slate-200">
                    <User className="h-8 w-8 mb-2 text-primary/60" />
                    <span className="font-medium">Autónomo</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-full shadow-lg border border-slate-100">
                    <CheckCircle2 className="h-10 w-10 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Iconos de confianza */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-slate-500 uppercase tracking-wider">Confianza y tecnología profesional</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex flex-col items-center gap-2">
              <Server className="h-10 w-10 text-slate-600" />
              <span className="font-bold text-slate-700">AWS</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Lock className="h-10 w-10 text-slate-600" />
              <span className="font-bold text-slate-700">QTSP (Cualificado)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShoppingCart className="h-10 w-10 text-slate-600" />
              <span className="font-bold text-slate-700">WooCommerce</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="h-10 w-10 text-slate-600" />
              <span className="font-bold text-slate-700">Verifactu-ready</span>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <HowItWorksSection />
      <ComplianceSection />
      <AgencyFeatureSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingPreviewSection />
      <FaqSection />
      
      {/* Bloque destacado: Seguridad (Renombrado) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-emerald-900/50 text-emerald-400 border-emerald-800 mb-4">
                <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
                Confianza
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Seguridad sólida para tu negocio
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                CumpleFactura está diseñado con arquitectura segura en AWS, cifrado avanzado, firma digital XAdES y registro <Link to="/verifactu" className="text-emerald-400 hover:underline">VeriFactu</Link> con hash encadenado. Preparado para la <Link to="/factura-electronica-2026" className="text-emerald-400 hover:underline">factura electrónica obligatoria de 2026</Link>. Un sistema robusto para clientes y gestorías que necesitan máxima confianza.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Cifrado TLS + KMS",
                  "Firma XAdES por QTSP",
                  "Registro inmutable compatible con Verifactu"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link to="/seguridad-y-cumplimiento">
                  Seguridad y Cumplimiento <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-square md:aspect-video bg-slate-800 rounded-xl border border-slate-700 p-8 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 z-0"></div>
                <div className="z-10 grid gap-4 w-full max-w-xs">
                  <div className="flex items-center gap-3 bg-slate-700/50 p-3 rounded border border-slate-600">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div className="h-2 w-24 bg-slate-600 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-700/50 p-3 rounded border border-slate-600 ml-8">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div className="h-2 w-32 bg-slate-600 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-700/50 p-3 rounded border border-slate-600">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div className="h-2 w-20 bg-slate-600 rounded"></div>
                  </div>
                </div>
                <ShieldCheck className="absolute -bottom-12 -right-12 h-64 w-64 text-slate-700/20 z-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque destacado: ERP-friendly (Movido y Renombrado) */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
                <FileText className="mr-1.5 h-3.5 w-3.5" />
                Gestorías
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900">
                Tu gestoría también te lo agradecerá
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Exportaciones limpias en CSV/XML para que tu gestoría ahorre horas de trabajo. Compatible con A3, Sage, Contasol, Holded, Anfix y cualquier ERP.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Exportaciones listas para importar",
                  "Datos mínimos y 100% coherentes",
                  "Ahorro real de tiempo para gestorías"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="gap-2">
                <Link to="/gestorias">
                  Para gestorías <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-video bg-white rounded-xl shadow-xl border border-slate-200 p-6 flex flex-col items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full opacity-80">
                  <div className="bg-slate-100 h-12 rounded flex items-center justify-center font-bold text-slate-400">A3</div>
                  <div className="bg-slate-100 h-12 rounded flex items-center justify-center font-bold text-slate-400">Sage</div>
                  <div className="bg-slate-100 h-12 rounded flex items-center justify-center font-bold text-slate-400">Contasol</div>
                  <div className="bg-slate-100 h-12 rounded flex items-center justify-center font-bold text-slate-400">Anfix</div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-full shadow-lg border border-slate-100">
                    <FileText className="h-10 w-10 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </MainLayout>
  );
}