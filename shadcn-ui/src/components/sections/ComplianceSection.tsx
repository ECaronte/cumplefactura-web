import { CheckCircle2 } from 'lucide-react';

const requirements = [
  'Software Verificable',
  'Cadena hash inmutable',
  'Registro de eventos',
  'Firma digital XAdES',
  'MiFacturae compatible',
  'Conservación de 5 años',
  'Numeración legal y series automáticas',
  'Auditoría de integridad'
];

export default function ComplianceSection() {
  return (
    <section className="py-20 bg-gray-50" aria-labelledby="compliance-title">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 id="compliance-title" className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">
              Cumple hoy la normativa que será obligatoria mañana.
            </h2>
            <p className="text-lg text-muted-foreground">
              CumpleFactura implementa todo lo que exige la normativa española de factura electrónica y software verificable: cadena hash e inmutabilidad (Verifactu), firma digital XAdES, registros de integridad, conservación mínima de 5 años, numeración legal y compatibilidad con MiFacturae.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-brand-light/50 transition-colors">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" aria-hidden="true" />
                <span className="text-lg font-medium text-gray-700">{req}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center pt-8 border-t">
            <p className="text-lg font-medium text-primary">
              Tu negocio queda actualizado para 2025–2026 sin depender de tu gestoría ni de plugins incompletos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
