import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-white" aria-labelledby="comparison-title">
      <div className="container">
        <div className="text-center mb-14 md:mb-18">
          <h2
            id="comparison-title"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-5 text-primary"
          >
            ¿Por qué no usar Holded, Quipu o FacturaDirecta para WooCommerce?
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Porque no están pensados para facturación automática desde pedidos
            Woo ni para una capa de cumplimiento consistente (QR + hash + frase
            legal) integrada en tu flujo real de ecommerce.
          </p>
        </div>

        <div
          className="overflow-x-auto"
          role="region"
          aria-label="Tabla comparativa de funcionalidades"
        >
          <table className="w-full border-collapse min-w-[860px]">
            <caption className="sr-only">
              Comparación de funcionalidades entre CumpleFactura y otras
              soluciones
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="p-4 text-left text-lg font-bold text-gray-500 bg-gray-50 rounded-tl-xl"
                >
                  Característica
                </th>
                <th
                  scope="col"
                  className="p-4 text-center text-lg font-bold text-white bg-primary rounded-t-xl border-b-4 border-accent w-1/4"
                >
                  CumpleFactura
                </th>
                <th
                  scope="col"
                  className="p-4 text-center text-lg font-bold text-gray-700 bg-gray-100 w-1/4"
                >
                  Holded / Quipu
                </th>
                <th
                  scope="col"
                  className="p-4 text-center text-lg font-bold text-gray-700 bg-gray-50 rounded-tr-xl w-1/4"
                >
                  Plugins PDF básicos
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <tr className="border-b">
                <th scope="row" className="p-4 font-medium text-left">
                  WooCommerce nativo
                </th>
                <td className="p-4 text-center bg-blue-50">
                  <Check
                    className="inline h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Sí</span>
                </td>
                <td className="p-4 text-center">
                  <X
                    className="inline h-6 w-6 text-red-400"
                    aria-hidden="true"
                  />
                  <span className="sr-only">No</span>
                </td>
                <td className="p-4 text-center">
                  <X
                    className="inline h-6 w-6 text-red-400"
                    aria-hidden="true"
                  />
                  <span className="sr-only">No</span>
                </td>
              </tr>

              <tr className="border-b">
                <th scope="row" className="p-4 font-medium text-left">
                  Firma digital (fase posterior)
                </th>
                <td className="p-4 text-center bg-blue-50">
                  <span className="text-sm font-medium text-muted-foreground">
                    Roadmap
                  </span>
                </td>
                <td className="p-4 text-center text-sm text-muted-foreground">
                  <span className="font-medium">Variable</span>
                </td>
                <td className="p-4 text-center">
                  <X
                    className="inline h-6 w-6 text-red-400"
                    aria-hidden="true"
                  />
                  <span className="sr-only">No</span>
                </td>
              </tr>

              <tr className="border-b">
                <th scope="row" className="p-4 font-medium text-left">
                  Capa de cumplimiento (QR + hash + frase legal)
                </th>
                <td className="p-4 text-center bg-blue-50">
                  <Check
                    className="inline h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Sí</span>
                </td>
                <td className="p-4 text-center">
                  <X
                    className="inline h-6 w-6 text-red-400"
                    aria-hidden="true"
                  />
                  <span className="sr-only">No</span>
                </td>
                <td className="p-4 text-center">
                  <X
                    className="inline h-6 w-6 text-red-400"
                    aria-hidden="true"
                  />
                  <span className="sr-only">No</span>
                </td>
              </tr>

              <tr className="border-b">
                <th scope="row" className="p-4 font-medium text-left">
                  Automático total (sin “sync” manual)
                </th>
                <td className="p-4 text-center bg-blue-50">
                  <Check
                    className="inline h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Sí</span>
                </td>
                <td className="p-4 text-center text-sm text-muted-foreground">
                  <X
                    className="inline h-5 w-5 text-red-400 mr-1"
                    aria-hidden="true"
                  />
                  <span className="sr-only">No, </span>(requiere sincronización)
                </td>
                <td className="p-4 text-center">
                  <X
                    className="inline h-6 w-6 text-red-400"
                    aria-hidden="true"
                  />
                  <span className="sr-only">No</span>
                </td>
              </tr>

              <tr className="border-b">
                <th scope="row" className="p-4 font-medium text-left">
                  Gestión para gestorías
                </th>
                <td className="p-4 text-center bg-blue-50">
                  <Check
                    className="inline h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Sí</span>
                </td>
                <td className="p-4 text-center">
                  <X
                    className="inline h-6 w-6 text-red-400"
                    aria-hidden="true"
                  />
                  <span className="sr-only">No</span>
                </td>
                <td className="p-4 text-center">
                  <X
                    className="inline h-6 w-6 text-red-400"
                    aria-hidden="true"
                  />
                  <span className="sr-only">No</span>
                </td>
              </tr>

              <tr>
                <th scope="row" className="p-4 font-medium text-left">
                  Exportaciones profesionales
                </th>
                <td className="p-4 text-center bg-blue-50 font-bold text-primary">
                  CSV / XML / API
                </td>
                <td className="p-4 text-center text-sm font-medium">
                  Limitado
                </td>
                <td className="p-4 text-center">
                  <X
                    className="inline h-6 w-6 text-red-400"
                    aria-hidden="true"
                  />
                  <span className="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg font-medium text-primary bg-brand-light inline-block px-7 py-3.5 rounded-full">
            CumpleFactura no es un CRM adaptado → es un sistema diseñado para
            cumplir desde WooCommerce, con trazabilidad y exportación limpia.
          </p>
        </div>
      </div>
    </section>
  );
}
