import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, FileText, Server, Globe, Key, AlertTriangle, CheckCircle2, HelpCircle, Mail, Layers, Database, Activity, FileSignature, Link as LinkIcon, EyeOff, HardDrive } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function SecurityAndCompliance() {
  return (
    <MainLayout>
      <Helmet>
        <title>Seguridad y cumplimiento · CumpleFactura</title>
        <meta
          name="description"
          content="Arquitectura segura en AWS, cifrado avanzado, firma digital XAdES y registro compatible con VeriFactu para proteger cada factura."
        />
        <link rel="canonical" href="https://cumplefactura.es/seguridad-y-cumplimiento" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Seguridad y cumplimiento · CumpleFactura" />
        <meta
          property="og:description"
          content="Seguridad sólida para tu negocio: cifrado TLS, firma XAdES por QTSP y registro inmutable compatible con VeriFactu."
        />
        <meta property="og:url" content="https://cumplefactura.es/seguridad-y-cumplimiento" />
        <meta property="og:image" content="https://cumplefactura.es/og/home.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seguridad y cumplimiento · CumpleFactura" />
        <meta
          name="twitter:description"
          content="Seguridad sólida para tu negocio: cifrado TLS, firma XAdES por QTSP y registro inmutable compatible con VeriFactu."
        />
        <meta name="twitter:image" content="https://cumplefactura.es/og/home.png" />
      </Helmet>
      {/* HERO */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/20 border-b">
        <div className="container text-center max-w-4xl">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mb-6">
            <Shield className="mr-2 h-4 w-4" />
            Seguridad
          </div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-slate-900 dark:text-white">
            Seguridad y cumplimiento pensados para la AEAT y tu gestoría
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mx-auto leading-relaxed max-w-3xl">
            Arquitectura en AWS, cifrado avanzado, firma digital XAdES y registro compatible con Verifactu para proteger cada factura desde el origen.
          </p>
        </div>
      </section>

      {/* SECCIÓN 1 – Arquitectura AWS */}
      <section className="py-20 container max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Arquitectura segura sobre AWS</h2>
            <p className="text-lg text-muted-foreground mb-8">
              CumpleFactura se apoya en servicios gestionados de Amazon Web Services (AWS) en la Unión Europea. Esto nos permite ofrecer una infraestructura estable, escalable y con medidas de seguridad de nivel empresarial.
            </p>
            <ul className="space-y-4">
              {[
                "API protegida con Amazon API Gateway",
                "Lógica de negocio en AWS Lambda",
                "Datos fiscales en bases de datos cifradas",
                "Documentos almacenados en S3 con cifrado y control de acceso"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Server className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="bg-slate-100 p-8 rounded-full">
              <Globe className="h-32 w-32 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 – Firma XAdES */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Firma digital XAdES mediante prestador cualificado</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Cada factura puede firmarse digitalmente mediante estándares XAdES, utilizando un Prestador Cualificado de Servicios de Confianza (QTSP). De esta manera, se garantiza la autenticidad e integridad del documento sin que tengas que preocuparte por la parte técnica.
              </p>
              <ul className="space-y-4">
                {[
                  "Firma XAdES automatizada",
                  "Sin que el usuario tenga que manipular certificados directamente",
                  "Compatible con la validación por parte de la Administración"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FileSignature className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <Key className="h-32 w-32 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 – Registro Verifactu */}
      <section className="py-20 container max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Registro compatible con Verifactu</h2>
            <p className="text-lg text-muted-foreground mb-8">
              CumpleFactura aplica un registro encadenado de las facturas, generando un hash de cada operación y vinculándolo con la anterior. Este enfoque es compatible con el modelo Verifactu y permite demostrar integridad y no manipulación de la secuencia de facturación.
            </p>
            <ul className="space-y-4">
              {[
                "Hash criptográfico de cada registro",
                "Cadena encadenada (no se puede alterar sin dejar rastro)",
                "Trazabilidad cronológica de las facturas"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <LinkIcon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 flex justify-center">
              <Layers className="h-32 w-32 text-slate-700" />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 – Minimización de datos */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Solo tratamos los datos estrictamente necesarios</h2>
              <p className="text-lg text-muted-foreground mb-8">
                El diseño de CumpleFactura sigue el principio de minimización de datos: solo tratamos la información imprescindible para emitir facturas correctas y cumplir la normativa. No almacenamos datos de pago ni información sensible innecesaria.
              </p>
              <ul className="space-y-4">
                {[
                  "Sin datos de tarjeta ni credenciales de pago",
                  "Sin datos personales superfluos en las exportaciones",
                  "Modelo de datos ajustado a la normativa de facturación"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <EyeOff className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <Database className="h-32 w-32 text-slate-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 – Cifrado */}
      <section className="py-20 container max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Cifrado en reposo y en tránsito</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Todas las comunicaciones entre tu tienda WooCommerce y CumpleFactura se realizan mediante HTTPS (TLS). Los datos almacenados en nuestros servicios utilizan cifrado gestionado por AWS, de forma que incluso en caso de acceso físico no autorizado, la información permanecería ilegible.
            </p>
            <ul className="space-y-4">
              {[
                "Conexiones cifradas (HTTPS/TLS)",
                "Cifrado en reposo mediante claves gestionadas",
                "Separación de entornos (producción, pruebas)"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Lock className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 flex justify-center">
              <HardDrive className="h-32 w-32 text-slate-700" />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 – Auditoría y registros */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Registros y auditoría tecnológica</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
            CumpleFactura registra eventos clave del sistema para poder investigar incidencias y demostrar la trazabilidad de las operaciones: generación de facturas, registros de Verifactu, exportaciones y accesos relevantes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <Activity className="h-10 w-10 text-emerald-400 mb-2 mx-auto" />
                <CardTitle className="text-lg">Eventos Clave</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm">Registro de generación y firma de facturas.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <FileText className="h-10 w-10 text-emerald-400 mb-2 mx-auto" />
                <CardTitle className="text-lg">Exportaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm">Registro de exportaciones hacia gestorías/ERP.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <Shield className="h-10 w-10 text-emerald-400 mb-2 mx-auto" />
                <CardTitle className="text-lg">Historial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm">Capacidad de reconstruir el historial técnico.</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-slate-400 text-sm">
            Si tu gestoría o tu auditor necesitan más detalle técnico, podemos proporcionar documentación ampliada bajo solicitud.
          </p>
        </div>
      </section>

      {/* SECCIÓN 7 – CTA final */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas garantías técnicas y legales?</h2>
          <p className="text-xl opacity-90 mb-8">
            Hablamos el lenguaje de tu gestoría, de tu responsable financiero y de tu auditor. Podemos explicar con detalle cómo CumpleFactura protege tus datos y cumple la normativa de facturación y antifraude.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="h-12 px-8 text-lg font-bold">
              <Link to="/contacto">
                <Mail className="mr-2 h-5 w-5" />
                Contactar sobre seguridad
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 text-lg font-bold border-white text-white hover:bg-white/10 bg-transparent">
              <Link to="/integraciones">
                Ver integraciones
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}