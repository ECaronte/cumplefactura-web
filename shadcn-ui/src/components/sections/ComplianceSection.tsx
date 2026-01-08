import { CheckCircle2 } from "lucide-react";

const requirements = [
  "Software Verificable",
  "Cadena hash inmutable",
  "Registro de eventos",
  "Capa de cumplimiento (QR + hash + frase legal)",
  "Conservación de 5 años",
  "Numeración legal y series automáticas",
  "Auditoría de integridad",
  "Firma digital (fase posterior)",
];

export default function ComplianceSection() {
  return (
    <section className="py-24 bg-gray-50" aria-labelledby="compliance-title">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border p-9 md:p-14">
          <div className="text-center mb-11">
            <h2
              id="compliance-title"
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-5 text-primary"
            >
              Cumple hoy la normativa que será obligatoria mañana.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              CumpleFactura implementa lo esencial del software verificable:
              trazabilidad con cadena hash, capa de cumplimiento en la factura
              (QR + huella) y exportaciones limpias para gestorías. Las
              funcionalidades avanzadas (p. ej. firma digital) forman parte del
              roadmap.
            </p>
          </div>

          <ul
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
            role="list"
          >
            {requirements.map((req, index) => (
              <li
                key={index}
                className="flex items-center space-x-3.5 p-3.5 rounded-lg hover:bg-brand-light/50 transition-colors"
              >
                <CheckCircle2
                  className="h-6 w-6 text-accent flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-lg font-medium text-gray-700">{req}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center pt-9 border-t">
            <p className="text-lg font-medium text-primary">
              Tu negocio queda preparado para el cambio normativo sin depender
              de plugins incompletos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
