import MainLayout from '@/layouts/MainLayout';
import SecuritySection from '@/components/sections/SecuritySection';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Settings, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-background py-20 md:py-28">
        <div className="container text-center flex flex-col items-center">
          <img 
            src="/images/AppIcon.jpg" 
            alt="CumpleFactura Icon" 
            className="w-24 h-24 mb-8 drop-shadow-xl hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl mb-6 text-primary">
            El flujo de trabajo invisible
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Descubre cómo CumpleFactura se integra en tu tienda para automatizar todo el proceso legal sin interrumpir tus ventas.
          </p>
        </div>
      </section>

      {/* Detailed Flow */}
      <section className="py-20">
        <div className="container">
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="bg-background p-6 rounded-xl border shadow-sm relative">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto lg:mx-0">
                  <ShoppingCart className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">1. Venta en WooCommerce</h3>
                <p className="text-muted-foreground">
                  El cliente realiza una compra en tu tienda. Nuestro plugin detecta el pedido completado y captura los datos necesarios.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-background p-6 rounded-xl border shadow-sm relative">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto lg:mx-0">
                  <Settings className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">2. Procesamiento</h3>
                <p className="text-muted-foreground">
                  CumpleFactura recibe los datos, valida la información fiscal, asigna el número de serie y genera el registro Verifactu.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-background p-6 rounded-xl border shadow-sm relative">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto lg:mx-0">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">3. Entrega</h3>
                <p className="text-muted-foreground">
                  Se genera el PDF con QR, se envía al cliente por email (opcional) y se almacena en tu panel de control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagram Image */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/20">
        <div className="container">
          <div className="max-w-5xl mx-auto bg-white p-4 rounded-2xl shadow-xl">
            <img 
              src="/assets/how-it-works-diagram.png" 
              alt="Diagrama detallado del flujo" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      <SecuritySection />
      
      <section className="py-20 container text-center">
        <div className="bg-brand-light rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">¿Listo para empezar?</h2>
          <Button size="lg" className="h-12 px-8 text-lg bg-accent hover:bg-accent/90 text-white" asChild>
            <Link to="/woocommerce-verifactu">
              Descargar Plugin <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}