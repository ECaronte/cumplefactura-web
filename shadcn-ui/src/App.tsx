import React, { Suspense } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const HowItWorks = React.lazy(() => import('./pages/HowItWorks'));
const PluginLanding = React.lazy(() => import('./pages/PluginLanding'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Agency = React.lazy(() => import('./pages/Agency'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Blog = React.lazy(() => import('./pages/Blog'));
const LegalNotice = React.lazy(() => import('./pages/LegalNotice'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const CookiesPolicy = React.lazy(() => import('./pages/CookiesPolicy'));
const TermsAndConditions = React.lazy(() => import('./pages/TermsAndConditions'));
const LegalIndex = React.lazy(() => import('./pages/LegalIndex'));
const Verifactu = React.lazy(() => import('./pages/Verifactu'));
const ElectronicInvoice2026 = React.lazy(() => import('./pages/ElectronicInvoice2026'));
const XadesSignature = React.lazy(() => import('./pages/XadesSignature'));
const Integrations = React.lazy(() => import('./pages/Integrations'));
const SecurityAndCompliance = React.lazy(() => import('./pages/SecurityAndCompliance'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

function LoadingFallback() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="text-sm text-muted-foreground">Cargando...</p>
      </div>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/como-funciona" element={<HowItWorks />} />
            <Route path="/woocommerce-verifactu" element={<PluginLanding />} />
            <Route path="/precios" element={<Pricing />} />
            <Route path="/gestorias" element={<Agency />} />
            <Route path="/recursos" element={<Resources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/aviso-legal" element={<LegalNotice />} />
            <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
            <Route path="/politica-cookies" element={<CookiesPolicy />} />
            <Route path="/terminos-condiciones" element={<TermsAndConditions />} />
            <Route path="/legal" element={<LegalIndex />} />
            <Route path="/verifactu" element={<Verifactu />} />
            <Route path="/factura-electronica-2026" element={<ElectronicInvoice2026 />} />
            <Route path="/firma-xades" element={<XadesSignature />} />
            <Route path="/integraciones" element={<Integrations />} />
            <Route path="/seguridad-y-cumplimiento" element={<SecurityAndCompliance />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
