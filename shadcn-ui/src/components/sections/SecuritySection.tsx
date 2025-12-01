import { Lock, Shield, Server, FileKey } from 'lucide-react';

export default function SecuritySection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Seguridad de Grado Bancario</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tus datos y los de tus clientes son nuestra prioridad absoluta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Lock className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cifrado S3</h3>
                <p className="text-muted-foreground">
                  Todos los documentos PDF y registros se almacenan en buckets S3 con cifrado AES-256 en reposo y TLS en tránsito.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FileKey className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Registros Inalterables</h3>
                <p className="text-muted-foreground">
                  Implementamos logs de auditoría inmutables para garantizar la trazabilidad de cada factura generada, cumpliendo con Verifactu.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Server className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Infraestructura Redundante</h3>
                <p className="text-muted-foreground">
                  Servidores distribuidos para asegurar una disponibilidad del 99.9% y backups automáticos diarios.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border flex flex-col items-center justify-center text-center">
            <Shield className="h-24 w-24 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Datos Protegidos</h3>
            <p className="text-muted-foreground mb-6">
              Cumplimos estrictamente con el RGPD y las normativas de seguridad de la información. Tus claves API nunca se exponen.
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              Auditoría de seguridad aprobada
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}