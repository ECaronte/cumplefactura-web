import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileSpreadsheet, CalendarClock, Server, CheckCircle2, ArrowRight, Network, Layers, Database, Code, FileJson } from 'lucide-react';
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

      {/* 1. Explicación CSV/XML */}
      <section className="py-20 container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            Exportaciones CSV y XML pensadas para tu gestoría
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            CumpleFactura genera ficheros CSV y XML diseñados específicamente para que tu gestoría pueda importar las facturas sin pelearse con el formato. Solo incluimos los datos fiscales y contables necesarios: bases, tipos de IVA/IGIC/IPSI, cuotas, totales y retenciones, nada más.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Layers className="h-5 w-5" />
            </div>
            <h3 className="font-bold mb-2">Estructura estable</h3>
            <p className="text-sm text-slate-500">Documentada y sin cambios sorpresa.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="h-5 w-5" />
            </div>
            <h3 className="font-bold mb-2">Datos mínimos y coherentes</h3>
            <p className="text-sm text-slate-500">Solo lo que contabilidad necesita.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="h-10 w-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h3 className="font-bold mb-2">Alta compatibilidad</h3>
            <p className="text-sm text-slate-500">Compatible con la mayoría de ERP del mercado.</p>
          </div>
        </div>
      </section>

      {/* 2. Ejemplos visuales */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Ejemplo de exportación CSV</h2>
          
          <div className="bg-white rounded-lg border shadow-sm overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-100 text-slate-700 font-semibold border-b">
                  <tr>
                    <th className="px-4 py-3">SERIE</th>
                    <th className="px-4 py-3">NUMERO_FACTURA</th>
                    <th className="px-4 py-3">FECHA</th>
                    <th className="px-4 py-3 text-right">BASE_IVA_21</th>
                    <th className="px-4 py-3 text-right">TOTAL_FACTURA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-slate-600">
                  <tr>
                    <td className="px-4 py-3">A</td>
                    <td className="px-4 py-3">2026/00123</td>
                    <td className="px-4 py-3">2026-02-10</td>
                    <td className="px-4 py-3 text-right">100,00</td>
                    <td className="px-4 py-3 text-right">121,00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">A</td>
                    <td className="px-4 py-3">2026/00124</td>
                    <td className="px-4 py-3">2026-02-11</td>
                    <td className="px-4 py-3 text-right">50,00</td>
                    <td className="px-4 py-3 text-right">60,50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-slate-600 mb-12">
            Tu gestoría reconoce al instante estos campos y puede incorporarlos a su ERP sin transformaciones manuales.
          </p>

          {/* Optional XML snippet */}
          <div className="bg-slate-900 rounded-lg p-6 font-mono text-xs text-blue-100 overflow-x-auto shadow-inner">
            <div className="text-slate-400 mb-2">// Ejemplo XML simplificado</div>
            <div>&lt;Factura&gt;</div>
            <div className="pl-4">&lt;Serie&gt;A&lt;/Serie&gt;</div>
            <div className="pl-4">&lt;Numero&gt;2026/00123&lt;/Numero&gt;</div>
            <div className="pl-4">&lt;Fecha&gt;2026-02-10&lt;/Fecha&gt;</div>
            <div className="pl-4">&lt;ImporteTotal&gt;121.00&lt;/ImporteTotal&gt;</div>
            <div>&lt;/Factura&gt;</div>
          </div>
        </div>
      </section>

      {/* 3. API Opcional */}
      <section className="py-20 container max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center justify-center p-2 bg-orange-100 rounded-lg mb-4">
              <Code className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              API opcional para integraciones avanzadas
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Si tu gestoría o tu ERP necesitan automatizar al máximo el flujo, CumpleFactura puede exponer una API de solo lectura para consultar facturas, registros y exportaciones de forma segura. Está pensada para integraciones serias, con control de accesos y trazabilidad.
            </p>
            <ul className="space-y-3">
              {[
                "API de solo lectura (sin riesgo de borrado)",
                "Acceso con API Key y HTTPS",
                "Respuestas en JSON sencillas de consumir",
                "Ideal para integraciones a medida con ERP o BI"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-slate-50 p-8 rounded-2xl border shadow-sm">
            <div className="flex items-center gap-2 mb-4 border-b pb-4">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
              <span className="text-xs text-slate-400 ml-2">GET /api/v1/invoices</span>
            </div>
            <pre className="text-xs font-mono text-slate-600 overflow-x-auto">
{`{
  "data": [
    {
      "id": "inv_123",
      "number": "2026/001",
      "date": "2026-01-15",
      "total": 121.00,
      "status": "signed"
    }
  ]
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* 4. Compatibilidad ERP */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">
            Compatible con los ERP que tu gestoría ya usa
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
            No necesitas cambiar de programa contable. CumpleFactura entrega los datos en un formato que encaja con los ERP que tu gestoría ya conoce: A3, Sage, Contasol, Anfix, Holded, u otros sistemas propios. Si el ERP admite importación de CSV o XML, podemos adaptarnos.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["A3", "Sage", "Contasol", "Anfix", "Holded", "...y más"].map((erp) => (
              <span key={erp} className="px-6 py-3 bg-white rounded-full border shadow-sm font-semibold text-slate-700">
                {erp}
              </span>
            ))}
          </div>
          
          <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
            <CheckCircle2 className="h-4 w-4" />
            <span>Formatos estándar CSV y XML</span>
            <span className="mx-2">•</span>
            <CheckCircle2 className="h-4 w-4" />
            <span>Posibilidad de adaptaciones específicas</span>
          </div>
        </div>
      </section>

      {/* 5. Mensaje de confianza */}
      <section className="py-20 container max-w-4xl">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">
            Pensado desde el punto de vista de la gestoría
          </h2>
          <p className="text-lg text-blue-800 leading-relaxed">
            CumpleFactura no se ha diseñado solo para el autónomo, sino también para su gestoría. Hemos definido el modelo de datos con la perspectiva de quien tiene que cuadrar libros, presentar impuestos y revisar facturas todos los meses. Por eso las exportaciones son claras, limpias y sin ruido.
          </p>
        </div>
      </section>

      {/* 6. CTA Final Específica */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            ¿Quieres que hablemos con tu gestoría?
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Podemos coordinar directamente con tu gestoría o con tu proveedor de ERP para revisar formatos, pruebas de importación y resolver dudas técnicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="h-12 px-8 text-lg font-bold bg-white text-primary hover:bg-white/90">
              <Link to="/contacto">
                Contactar sobre integraciones
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 text-lg font-bold border-white text-white hover:bg-white/10 bg-transparent">
              <Link to="/gestorias">
                Para gestorías
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}