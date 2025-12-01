import { Check, X } from 'lucide-react';

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">
            ¿Por qué no usar Holded, Quipu o FacturaDirecta para WooCommerce?
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="p-4 text-left text-lg font-bold text-gray-500 bg-gray-50 rounded-tl-xl">Característica</th>
                <th className="p-4 text-center text-lg font-bold text-white bg-primary rounded-t-xl border-b-4 border-accent w-1/4">CumpleFactura</th>
                <th className="p-4 text-center text-lg font-bold text-gray-700 bg-gray-100 w-1/4">Holded / Quipu</th>
                <th className="p-4 text-center text-lg font-bold text-gray-700 bg-gray-50 rounded-tr-xl w-1/4">Plugins PDF básicos</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="p-4 font-medium">WooCommerce nativo</td>
                <td className="p-4 text-center bg-blue-50"><Check className="inline h-6 w-6 text-green-500" /></td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" /></td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" /></td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Firma electrónica</td>
                <td className="p-4 text-center bg-blue-50"><Check className="inline h-6 w-6 text-green-500" /></td>
                <td className="p-4 text-center text-sm text-muted-foreground"><X className="inline h-5 w-5 text-red-400 mr-1" /> (requiere addon)</td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" /></td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Verifactu real</td>
                <td className="p-4 text-center bg-blue-50"><Check className="inline h-6 w-6 text-green-500" /></td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" /></td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" /></td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">MiFacturae</td>
                <td className="p-4 text-center bg-blue-50"><Check className="inline h-6 w-6 text-green-500" /></td>
                <td className="p-4 text-center text-sm font-medium">Parcial</td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" /></td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Automático total</td>
                <td className="p-4 text-center bg-blue-50"><Check className="inline h-6 w-6 text-green-500" /></td>
                <td className="p-4 text-center text-sm text-muted-foreground"><X className="inline h-5 w-5 text-red-400 mr-1" /> (requiere sync)</td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" /></td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Gestión para gestorías</td>
                <td className="p-4 text-center bg-blue-50"><Check className="inline h-6 w-6 text-green-500" /></td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" /></td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" /></td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Exportaciones profesionales</td>
                <td className="p-4 text-center bg-blue-50 font-bold text-primary">CSV / XML / API</td>
                <td className="p-4 text-center text-sm font-medium">Limitado</td>
                <td className="p-4 text-center"><X className="inline h-6 w-6 text-red-400" /></td>
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