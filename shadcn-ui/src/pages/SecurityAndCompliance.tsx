import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, FileText, Server, Globe, Key, AlertTriangle, CheckCircle2, HelpCircle, Mail, Layers, Database, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SecurityAndCompliance() {
  return (
    <MainLayout>
      {/* HERO */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/20 border-b">
        <div className="container text-center max-w-4xl">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mb-6">
            <Shield className="mr-2 h-4 w-4" />
            Seguridad
          </div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-slate-900 dark:text-white">
            Seguridad y Cumplimiento
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mx-auto leading-relaxed max-w-3xl">
            Arquitectura sólida, cifrado avanzado y cumplimiento normativo para garantizar la integridad de cada factura.
          </p>
        </div>
      </section>

      {/* SECCIÓN 1 – Arquitectura segura */}
      <section className="py-20 container max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Construido sobre infraestructura segura en AWS</h2>
            <p className="text-lg text-muted-foreground mb-8">
              CumpleFactura utiliza servicios gestionados de AWS para proporcionar seguridad técnica de nivel profesional: cifrado, alta disponibilidad, aislamiento, monitorización y control granular de accesos.
            </p>
            <ul className="space-y-4">
              {[
                "Base de datos protegida (DynamoDB)",
                "Almacenamiento cifrado (S3 + KMS)",
                "API con permisos mínimos",
                "Monitorización continua en CloudWatch"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="bg-slate-100 p-8 rounded-full">
              <Server className="h-32 w-32 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 – Firma digital y Verifactu */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Firma XAdES y registro Verifactu</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Cada factura se firma digitalmente mediante un Prestador Cualificado de Servicios de Confianza (QTSP). Además, CumpleFactura aplica un registro con hash encadenado que garantiza integridad, trazabilidad y no alteración.
              </p>
              <ul className="space-y-4">
                {[
                  "Firma XAdES automática",
                  "Trazabilidad compatible con Verifactu",
                  "Hash encadenado para inmutabilidad"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <FileText className="h-32 w-32 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 – Mínimo dato, máxima protección */}
      <section className="py-20 container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
             <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 flex justify-center">
              <Lock className="h-32 w-32 text-slate-700" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Solo tratamos lo necesario</h2>
            <p className="text-lg text-muted-foreground mb-8">
              CumpleFactura está diseñado para minimizar la exposición de datos. Solo tratamos la información estrictamente necesaria para emitir cada factura. Nunca almacenamos datos de tarjetas, contraseñas ni información sensible.
            </p>
            <ul className="space-y-4">
              {[
                "Minimización del dato",
                "Datos personales reducidos",
                "Cumplimiento RGPD"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 – Exportaciones seguras */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Exportaciones limpias y compatibles con ERP</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
            Los ficheros CSV y XML contienen únicamente datos legales y contables necesarios. Nada más. Esto reduce riesgos y simplifica enormemente el trabajo de las gestorías.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <Database className="h-10 w-10 text-emerald-400 mb-2" />
                <CardTitle className="text-lg">Datos Estructurados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm">Formatos estándar que cualquier ERP puede procesar sin errores.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <Shield className="h-10 w-10 text-emerald-400 mb-2" />
                <CardTitle className="text-lg">Sin Basura</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm">Eliminamos metadatos innecesarios que suelen causar problemas de importación.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CheckCircle2 className="h-10 w-10 text-emerald-400 mb-2" />
                <CardTitle className="text-lg">Validación Previa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm">Verificamos la integridad de los datos antes de generar el archivo.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 – CTA final */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Transparencia y seguridad para tu negocio</h2>
          <p className="text-xl opacity-90 mb-8">
            Si tu gestoría necesita conocer el sistema en detalle, ponemos a tu disposición documentación técnica, diagrama de arquitectura y pruebas de integridad.
          </p>
          <Button asChild size="lg" variant="secondary" className="h-12 px-8 text-lg font-bold">
            <a href="mailto:soporte@cumplefactura.es">
              <Mail className="mr-2 h-5 w-5" />
              Contactar sobre seguridad
            </a>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}