import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function CtaSection() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-white">
          Empieza hoy y despreocúpate de la factura electrónica.
        </h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
          WooCommerce + Verifactu + Firma digital = Todo automático.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="default" className="bg-accent text-white hover:bg-accent/90 h-12 px-8 text-lg border-none" asChild>
            <Link to="/precios">Instalar ahora</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-primary bg-white hover:bg-blue-50 h-12 px-8 text-lg" asChild>
            <Link to="/como-funciona">Ver demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}