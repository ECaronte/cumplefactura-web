import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Building2, Users, Download, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Agency() {
  return (
    <MainLayout>
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/20">
        <div className="container flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Soluciones para Gestorías y Asesorías
            </h1>
            <p className="text-xl text-muted-foreground">
              Simplifica la gestión de tus clientes con eCommerce. Accede a todos sus datos de facturación desde un único panel.
            </p>
            <Button size="lg" className="h-12 px-8">Quiero ser Partner</Button>
          </div>
          <div className="flex-1 flex justify-center">
            <Building2 className="h-64 w-64 text-primary/20" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Ventajas para Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Panel Multi-cliente</h3>
              <p className="text-muted-foreground">Gestiona todas las cuentas de tus clientes desde un solo acceso. Sin tener que pedir claves.</p>
            </div>
            <div className="text-center p-6">
              <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Exportación Masiva</h3>
              <p className="text-muted-foreground">Descarga facturas en ZIP, listados en CSV/Excel compatibles con tu software contable.</p>
            </div>
            <div className="text-center p-6">
              <div className="h-16 w-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <PieChart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Programa de Comisiones</h3>
              <p className="text-muted-foreground">Obtén ingresos recurrentes por cada cliente que traigas a CumpleFactura.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Únete a nuestra red de partners</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Ofrece un valor añadido a tus clientes y moderniza tu despacho.
          </p>
          <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
            Solicitar alta como Partner
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}