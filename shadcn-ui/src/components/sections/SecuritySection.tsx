// shadcn-ui/src/components/sections/SecuritySection.tsx
import { Lock, Shield, Server, FileKey } from "lucide-react";

export default function SecuritySection() {
  return (
    <section
      className="py-24 bg-slate-50 dark:bg-slate-900/50"
      aria-labelledby="security-title"
    >
      <div className="container">
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-brand-light text-primary mb-4">
            Confianza
          </div>

          {/* ✅ Mejor contraste + jerarquía + (opcional) naranja en dark */}
          <h2
            id="security-title"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-5 text-primary dark:text-accent"
          >
            Seguridad sólida para tu negocio
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tus datos y los de tus clientes son una prioridad absoluta:
            seguridad por diseño, trazabilidad y controles orientados a
            cumplimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          <div className="space-y-9">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Lock className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-50">
                  Cifrado en almacenamiento
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Documentos y registros se almacenan cifrados, con canales
                  seguros en tránsito.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FileKey className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-50">
                  Trazabilidad y auditoría
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Controles de integridad y trazabilidad sobre los registros
                  generados. Diseñado para evidenciar consistencia y detectar
                  anomalías.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Server className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-50">
                  Disponibilidad y copias de seguridad
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Operativa estable, copias de seguridad y recuperación pensadas
                  para continuidad de servicio.
                </p>
              </div>
            </div>
          </div>

          {/* ✅ Card con contraste + aire */}
          <div className="bg-white dark:bg-slate-800/80 p-9 md:p-10 rounded-2xl shadow-lg border flex flex-col items-center justify-center text-center">
            <Shield className="h-24 w-24 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-50">
              Datos protegidos
            </h3>
            <p className="text-muted-foreground mb-7 leading-relaxed">
              Enfoque RGPD y separación de accesos: lo necesario para operar y
              lo necesario para inspección/soporte, sin exponer datos ajenos.
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
              Controles de seguridad activos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
