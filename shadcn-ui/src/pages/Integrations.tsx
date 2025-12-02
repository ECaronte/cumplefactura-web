import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileSpreadsheet, CalendarClock, Server, CheckCircle2, ArrowRight, Network, Layers, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Integrations() {
  return (
    <MainLayout>
      {/* HERO */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/20 border-b">
        <div className="container text-center max-w-4xl">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mb-6">
            Conectividad
          </div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-slate-900 dark:text-white">
            Integraciones con tu ERP y herramientas de gestión
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mx-auto leading-relaxed max-w-3xl">
            CumpleFactura envía facturas firmadas y verificadas desde WooCommerce a tu gestoría y a tus sistemas contables mediante CSV, XML y, opcionalmente, API.
          </p>
        </div>
      </section>

      {/* SECCIÓN 1 – Modos de integración */}
      <section className="py-20 container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1 */}
          <Card className="bg-white dark:bg-slate-950 border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <FileSpreadsheet className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl mb-2">Descarga manual (CSV/XML)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                El modo más sencillo y universal: exporta las facturas de CumpleFactura en CSV o XML con la estructura que tu gestoría necesita para su ERP o software contable.
              </p>
            </CardContent>
          </Card>

          {/* Columna 2 */}
          <Card className="bg-white dark:bg-slate-950 border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <CalendarClock className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl mb-2">Exportaciones periódicas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                Puedes trabajar por periodos (semana, mes, trimestre) y recibir paquetes de facturas listos para importar en tus herramientas internas sin tener que ir pedido a pedido.
              </p>
            </CardContent>
          </Card>

          {/* Columna 3 */}
          <Card className="bg-white dark:bg-slate-950 border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Server className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl mb-2">Integración por API (opcional)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                Para despachos y empresas con más volumen, CumpleFactura ofrece una API opcional pensada para integraciones a medida. Tu equipo técnico puede conectar sus sistemas para consultar los datos de facturación de forma automatizada, siempre con control y seguridad.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECCIÓN 2 – Pensado para ERP de gestorías */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                Pensado para cómo ya trabajas en tu gestoría
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                CumpleFactura está pensado para adaptarse a tu flujo actual: puedes empezar con exportaciones en CSV/XML y, si tu equipo técnico lo prefiere, avanzar hacia una integración personalizada vía API.
              </p>
              <ul className="space-y-4">
                {[
                  "Campos pensados para contabilidad (base, tipos de IVA, retenciones…)",
                  "Identificadores únicos por factura y por cliente",
                  "Trazabilidad desde WooCommerce hasta el asiento contable",
                  "Posibilidad de integraciones a medida mediante API, bajo petición"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border shadow-lg rotate-3 hover:rotate-0 transition-transform duration-500">
                <Database className="h-32 w-32 text-primary/20" />
                <div className="mt-4 flex justify-center gap-4">
                  <div className="h-2 w-12 bg-slate-200 rounded"></div>
                  <div className="h-2 w-8 bg-slate-200 rounded"></div>
                </div>
                <div className="mt-2 flex justify-center gap-4">
                  <div className="h-2 w-8 bg-slate-200 rounded"></div>
                  <div className="h-2 w-12 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 – Integraciones futuras */}
      <section className="py-20 container max-w-4xl text-center">
        <div className="inline-flex items-center justify-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-6">
          <Network className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
          Un ecosistema de integraciones que crecerá contigo
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          CumpleFactura se ha diseñado con una capa de integración preparada para crecer: conectores específicos, webhooks y una API documentada para partners tecnológicos forman parte de nuestra hoja de ruta. Empezamos por CSV/XML y API genérica, y evolucionamos según las necesidades reales de las gestorías y sus sistemas.
        </p>
      </section>

      {/* SECCIÓN 4 – CTA final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            ¿Tu gestoría trabaja con ERP? Hablemos
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Cuéntanos cómo trabajas ahora y te ayudamos a adaptar la integración de CumpleFactura para que tu flujo de trabajo sea cómodo y seguro.
          </p>
          <Button asChild size="lg" variant="secondary" className="h-12 px-8 text-lg font-bold bg-white text-primary hover:bg-white/90">
            <Link to="/contacto">
              Solicitar info técnica <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}