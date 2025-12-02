import { Check, X } from 'lucide-react';

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="comparison-title">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="comparison-title" className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">
            ¿Por qué no usar Holded, Quipu o FacturaDirecta para WooCommerce?
          </h2>
        </div>

        <div className="overflow-x-auto" role="region" aria-label="Tabla comparativa de funcionalidades">
          <table className="w-full border-collapse min-w-[800px]">
            <caption className="sr-only">Comparación de funcionalidades entre CumpleFactura y otras soluciones</caption>
            <thead>
              <tr>
                <th scope="col" className="p-4 text-left text-lg font-bold text-gray-500 bg-gray-50 rounded-tl-xl">Característica</th>
                <th scope="col" className="p-4 text-center text-lg font-bold text-white bg-primary rounded-t-xl border-b-4 border-accent w-1/4">CumpleFactura</th>
                <th scope="col" className="p-4 text-center text-lg font-bold text-gray-700 bg-gray-100 w-1/4">Holded / Quipu</th>
                <th scope="col" className="p-4 text-center text-lg font-bold text-gray-700 bg-gray-50 rounded-tr-xl w-1/4">Plugins PDF básicos</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b">
                <th scope="row" className="p-4 font-medium text-left">WooCommerce nativo</th>
                <td className="p-4 text-center bg-blue-50"><Check className="inline h-6 w-6 text-green-500" aria-hidden="true" /><span className="sr-only">Sí</span></td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" aria-hidden="true" /><span className="sr-only">No</span></td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" aria-hidden="true" /><span className="sr-only">No</span></td>
              </tr>
              <tr className="border-b">
                <th scope="row" className="p-4 font-medium text-left">Firma electrónica</th>
                <td className="p-4 text-center bg-blue-50"><Check className="inline h-6 w-6 text-green-500" aria-hidden="true" /><span className="sr-only">Sí</span></td>
                <td className="p-4 text-center text-sm text-muted-foreground"><X className="inline h-5 w-5 text-red-400 mr-1" aria-hidden="true" /><span className="sr-only">No, </span>(requiere addon)</td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" aria-hidden="true" /><span className="sr-only">No</span></td>
              </tr>
              <tr className="border-b">
                <th scope="row" className="p-4 font-medium text-left">Verifactu real</th>
                <td className="p-4 text-center bg-blue-50"><Check className="inline h-6 w-6 text-green-500" aria-hidden="true" /><span className="sr-only">Sí</span></td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" aria-hidden="true" /><span className="sr-only">No</span></td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" aria-hidden="true" /><span className="sr-only">No</span></td>
              </tr>
              <tr className="border-b">
                <th scope="row" className="p-4 font-medium text-left">MiFacturae</th>
                <td className="p-4 text-center bg-blue-50"><Check className="inline h-6 w-6 text-green-500" aria-hidden="true" /><span className="sr-only">Sí</span></td>
                <td className="p-4 text-center text-sm font-medium">Parcial</td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" aria-hidden="true" /><span className="sr-only">No</span></td>
              </tr>
              <tr className="border-b">
                <th scope="row" className="p-4 font-medium text-left">Automático total</th>
                <td className="p-4 text-center bg-blue-50"><Check className="inline h-6 w-6 text-green-500" aria-hidden="true" /><span className="sr-only">Sí</span></td>
                <td className="p-4 text-center text-sm text-muted-foreground"><X className="inline h-5 w-5 text-red-400 mr-1" aria-hidden="true" /><span className="sr-only">No, </span>(requiere sync)</td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" aria-hidden="true" /><span className="sr-only">No</span></td>
              </tr>
              <tr className="border-b">
                <th scope="row" className="p-4 font-medium text-left">Gestión para gestorías</th>
                <td className="p-4 text-center bg-blue-50"><Check className="inline h-6 w-6 text-green-500" aria-hidden="true" /><span className="sr-only">Sí</span></td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" aria-hidden="true" /><span className="sr-only">No</span></td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" aria-hidden="true" /><span className="sr-only">No</span></td>
              </tr>
              <tr>
                <th scope="row" className="p-4 font-medium text-left">Exportaciones profesionales</th>
                <td className="p-4 text-center bg-blue-50 font-bold text-primary">CSV / XML / API</td>
                <td className="p-4 text-center text-sm font-medium">Limitado</td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" aria-hidden="true" /><span className="sr-only">No</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-primary bg-brand-light inline-block px-6 py-3 rounded-full">
            CumpleFactura no es un CRM adaptado → es un sistema de facturación legal diseñado especialmente para WooCommerce.
          </p>
        </div>
      </div>
    </section>
  );
}
