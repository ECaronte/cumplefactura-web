import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, FileCheck, Download, Server, Clock, Banknote, CheckCircle2, ArrowRight, Settings, FileText, Inbox, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Agency() {
  return (
    <MainLayout>
      {/* 1. HERO */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/20">
        <div className="container flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Más clientes, menos trabajo. Facturas perfectas en un clic.
            </h1>
            <p className="text-xl text-muted-foreground">
              CumpleFactura automatiza toda la facturación legal de tus clientes con WooCommerce: Verifactu, firma XAdES y exportaciones listas para importar. Tu gestoría gana tiempo, seguridad y una comisión mensual.
            </p>
            <Button size="lg" className="h-12 px-8">Solicitar acceso Gestorías</Button>
          </div>
          <div className="flex-1 flex justify-center">
            <Building2 className="h-64 w-64 text-primary/20" />
          </div>
        </div>
      </section>

      {/* 2. Por qué CumpleFactura */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Por qué CumpleFactura para gestorías</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-xl bg-card shadow-sm">
              <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Facturas correctas siempre</h3>
              <p className="text-muted-foreground">Recibes facturas perfectas, firmadas digitalmente y encadenadas según Verifactu. Sin errores manuales, sin repetidas, sin numeración incorrecta.</p>
            </div>
            <div className="text-center p-6 border rounded-xl bg-card shadow-sm">
              <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Exportación profesional</h3>
              <p className="text-muted-foreground">Descarga masiva en CSV y XML diseñados para importación directa en software de contabilidad.</p>
            </div>
            <div className="text-center p-6 border rounded-xl bg-card shadow-sm">
              <div className="h-16 w-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Server className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">API opcional</h3>
              <p className="text-muted-foreground">Integra CumpleFactura con tu sistema de gestoría o ERP sin depender del cliente.</p>
            </div>
            <div className="text-center p-6 border rounded-xl bg-card shadow-sm">
              <div className="h-16 w-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ahorra horas cada mes</h3>
              <p className="text-muted-foreground">Sin perseguir clientes, sin pedir facturas, sin ordenar nada. Todo llega solo.</p>
            </div>
            <div className="text-center p-6 border rounded-xl bg-card shadow-sm md:col-span-2 lg:col-span-1">
              <div className="h-16 w-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Banknote className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Comisión recurrente</h3>
              <p className="text-muted-foreground">Por cada cliente que recomiendas, recibes una comisión mensual. La gestoría gana por ayudar a sus clientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Cómo funciona */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Cómo funciona para tu gestoría</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-lg font-bold mb-2">El cliente instala CumpleFactura</h3>
              <p className="text-muted-foreground">En 5 minutos queda configurado en su WooCommerce.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-lg font-bold mb-2">Generación automática</h3>
              <p className="text-muted-foreground">Las facturas se generan y firman automáticamente. No tienes que depender del cliente.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-lg font-bold mb-2">Recepción de datos</h3>
              <p className="text-muted-foreground">CSV, XML o API: tú eliges cómo recibir todos los datos en tu gestoría.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="text-lg font-bold mb-2">Importación y contabilización</h3>
              <p className="text-muted-foreground">Tú solo importas y contabilizas. Sin descuadres, sin errores, sin tareas extra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Panel Gestoría */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-card border rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">El Panel Gestoría (próximamente) te permitirá trabajar aún más rápido.</h2>
              <p className="text-lg text-muted-foreground">Tu gestoría tendrá todo centralizado y listo para revisar en segundos.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Acceso multi-cliente desde un solo panel',
                'Descarga masiva de facturas',
                'Avisos y alertas',
                'Series y numeración legales visibles',
                'Historial inmutable',
                'Indicadores de cumplimiento Verifactu',
                'Notificaciones de certificados próximos a caducar'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Beneficios */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Beneficios para gestorías</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-bold mb-2 text-primary">Más clientes satisfechos</h3>
              <p className="text-muted-foreground">Los autónomos dejan de equivocarse y tú de arreglar errores.</p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-bold mb-2 text-primary">Menos horas de trabajo</h3>
              <p className="text-muted-foreground">Importas todo limpio y perfecto.</p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-bold mb-2 text-primary">Más ingresos</h3>
              <p className="text-muted-foreground">Comisión por cada cliente activo.</p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-bold mb-2 text-primary">Cero riesgos legales</h3>
              <p className="text-muted-foreground">Verifactu, firma digital y trazabilidad completa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Pricing */}
      <section className="py-20">
        <div className="container max-w-lg mx-auto">
          <Card className="border-primary shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl">Plan Gestorías</CardTitle>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold">29€</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
              <CardDescription className="text-lg">
                Diseñado exclusivamente para profesionales de contabilidad y fiscalidad.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mt-4">
                {[
                  'Exportación profesional CSV y XML',
                  'Descarga masiva',
                  'API opcional',
                  'Soporte prioritario',
                  'Comisión mensual por cada cliente referido',
                  'Acceso a Panel Gestoría (cuando se lance)'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">Solicitar acceso</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Empieza a trabajar con tus clientes de WooCommerce sin complicaciones.</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Facturas legales, firmadas, verificadas y listas para importar. Haz crecer tu gestoría ayudando a tus clientes.
          </p>
          <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
            Solicitar acceso Gestorías
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}