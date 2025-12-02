import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32 pb-16"
      aria-labelledby="hero-title"
    >
      <div className="container flex flex-col items-center text-center">
        <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 id="hero-title" className="text-4xl font-extrabold tracking-tight lg:text-6xl text-primary">
            Factura electrónica fácil para autónomos y negocios con WooCommerce
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Cumple la normativa 2025–2026, envía tus registros Verifactu y genera facturas firmadas XAdES sin esfuerzo. Todo desde tu tienda online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="h-12 px-8 text-lg bg-accent hover:bg-accent/90 text-white border-none" asChild>
              <Link to="/precios">
                Instalar CumpleFactura <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-primary text-primary hover:bg-brand-light hover:text-primary" asChild>
              <Link to="/como-funciona">
                <PlayCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                Cómo funciona
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground font-medium pt-2">
            Compatible con la factura electrónica obligatoria en España (2025–2026).
          </p>
        </div>
        
        <div className="mt-16 w-full max-w-5xl mx-auto rounded-xl border bg-card text-card-foreground shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-1000 delay-300">
          <img 
            src="/assets/hero-dashboard.png" 
            alt="Panel de control de CumpleFactura" 
            className="w-full h-auto object-cover"
            width={1200}
            height={675}
          />
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 z-[-1] h-full w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]" aria-hidden="true"></div>
    </section>
  );
}
