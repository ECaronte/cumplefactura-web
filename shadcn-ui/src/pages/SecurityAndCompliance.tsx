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
            Seguridad y cumplimiento en CumpleFactura
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mx-auto leading-relaxed max-w-3xl">
            Diseñado para proteger los datos de tus clientes, minimizar el riesgo de brechas y cumplir las obligaciones legales de facturación.
          </p>
        </div>
      </section>

      {/* SECCIÓN 1 – Nuestra filosofía de seguridad */}
      <section className="py-20 container max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Nuestra filosofía de seguridad</h2>
            <p className="text-lg text-muted-foreground mb-6">
              CumpleFactura se diseña con una idea clara: recoger solo los datos necesarios, protegerlos en cada punto del flujo y hacer que cualquier acceso o cambio deje rastro.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Aplicamos principios de ‘seguridad por diseño’ y ‘mínimo privilegio’: menos superficie de ataque, menos datos expuestos y más trazabilidad.
            </p>
            <ul className="space-y-4">
              {[
                "Seguridad pensada desde la arquitectura, no añadida al final.",
                "Datos mínimos para cumplir la normativa y prestar el servicio.",
                "Trazabilidad y registros de operaciones relevantes.",
                "Transparencia con autónomos y gestorías."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <Shield className="h-48 w-48 text-primary/10" />
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 – Capas de seguridad */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Capas de seguridad</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-background">
              <CardHeader>
                <Globe className="h-10 w-10 text-blue-500 mb-2" />
                <CardTitle className="text-xl">Datos en tránsito</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Todas las comunicaciones entre WooCommerce, CumpleFactura y nuestras APIs se realizan siempre cifradas mediante HTTPS (TLS).
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <Database className="h-10 w-10 text-green-500 mb-2" />
                <CardTitle className="text-xl">Datos en reposo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Los datos sensibles se almacenan en servidores seguros en la UE, con medidas de cifrado y control de acceso interno.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <Lock className="h-10 w-10 text-purple-500 mb-2" />
                <CardTitle className="text-xl">Control de acceso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cada usuario solo ve los datos que le corresponden. Aplicamos el principio de mínimo privilegio y restringimos accesos internos y externos.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <FileText className="h-10 w-10 text-orange-500 mb-2" />
                <CardTitle className="text-xl">Registro y trazabilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Operaciones importantes (generación de facturas, firma, registros técnicos) quedan anotadas para facilitar auditorías y análisis en caso de incidencia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 – Seguridad en el plugin de WooCommerce */}
      <section className="py-20 container max-w-4xl">
        <div className="bg-card border rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <Layers className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold">Seguridad en el plugin de WooCommerce</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
              <p>No gestionamos datos de tarjetas ni credenciales de pago.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
              <p>El plugin solo accede a los datos necesarios del pedido para poder emitir la factura.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
              <p>Respetamos los roles y capacidades de WordPress para evitar exposiciones innecesarias.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
              <p>Se liberan actualizaciones cuando es necesario para mejorar seguridad y compatibilidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 – Seguridad en la API e integraciones */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Seguridad en la API e integraciones</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Las APIs son uno de los puntos más sensibles de cualquier plataforma. Por eso, el diseño de la API de CumpleFactura sigue principios de seguridad claros y conservadores.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Autenticación controlada",
                desc: "Acceso mediante claves de API (tokens) generadas de forma segura y revocables.",
                icon: Key
              },
              {
                title: "Mínimo privilegio",
                desc: "Cada clave de API puede limitarse a un conjunto concreto de datos y permisos, sin exponer más información de la necesaria.",
                icon: Lock
              },
              {
                title: "Transporte cifrado",
                desc: "Todas las llamadas a la API se realizan siempre sobre HTTPS (TLS), evitando que los datos se puedan leer en tránsito.",
                icon: Globe
              },
              {
                title: "Límites de uso (rate limiting)",
                desc: "Protección frente a abusos e intentos de fuerza bruta mediante límites de peticiones y monitorización.",
                icon: Activity
              },
              {
                title: "Registro de uso",
                desc: "Las operaciones relevantes realizadas a través de la API quedan registradas para poder auditar y analizar accesos.",
                icon: FileText
              },
              {
                title: "Sin datos de pago",
                desc: "La API no expone datos de tarjetas ni credenciales de pago; CumpleFactura no gestiona cobros, solo datos de facturación.",
                icon: Shield
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <item.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 – Gestión del riesgo y brechas de seguridad */}
      <section className="py-20 container max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Gestión del riesgo y brechas de seguridad</h2>
        <div className="bg-white dark:bg-slate-950 border rounded-xl p-8">
          <p className="text-lg text-muted-foreground mb-6">
            Ningún sistema es 100% invulnerable, pero reducimos el riesgo al máximo:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Actualizaciones de seguridad regulares.",
              "Revisión y actualización de dependencias técnicas.",
              "Separación de entornos (pruebas y producción).",
              "Copias de seguridad internas.",
              "Monitorización de comportamiento inusual."
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-100 dark:border-amber-900/50">
            <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Respuesta a incidentes
            </h3>
            <p className="text-amber-700 dark:text-amber-300">
              En caso de incidente, el compromiso es: detectar, contener, analizar el alcance y comunicar de forma transparente a los clientes afectados siguiendo la normativa aplicable.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 – FAQ de seguridad */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas frecuentes sobre seguridad</h2>
          <div className="space-y-6">
            {[
              {
                q: "¿Dónde se almacenan los datos?",
                a: "Los datos se almacenan en servidores ubicados dentro de la Unión Europea, cumpliendo con la normativa GDPR."
              },
              {
                q: "¿Se cifra la información?",
                a: "Sí, utilizamos cifrado TLS para datos en tránsito y cifrado estándar para datos sensibles en reposo."
              },
              {
                q: "¿El plugin guarda datos de pago?",
                a: "No. CumpleFactura nunca accede, procesa ni almacena números de tarjeta ni credenciales bancarias."
              },
              {
                q: "¿Qué pasa si alguien accede a mi tienda WooCommerce?",
                a: "La seguridad de tu tienda depende de tu hosting y gestión. CumpleFactura protege los datos una vez llegan a nuestra plataforma, pero recomendamos asegurar tu WordPress con 2FA y contraseñas fuertes."
              },
              {
                q: "¿Qué ocurre si hay una brecha en el proveedor de hosting?",
                a: "Nuestros proveedores de infraestructura cuentan con certificaciones de seguridad avanzadas. En caso de incidente en origen, tenemos protocolos de respuesta y backup."
              },
              {
                q: "¿Cómo se controla el acceso a la API?",
                a: "El acceso se realiza mediante tokens seguros que puedes revocar en cualquier momento si sospechas que han sido comprometidos."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-lg mb-2 flex items-start gap-2">
                  <HelpCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-muted-foreground pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">¿Tienes dudas sobre seguridad o cumplimiento?</h2>
          <p className="text-xl opacity-90 mb-8">
            Si eres gestoría, responsable técnico o simplemente quieres más detalles sobre cómo protegemos los datos, escríbenos a soporte@cumplefactura.es.
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