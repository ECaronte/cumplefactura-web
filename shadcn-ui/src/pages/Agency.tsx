import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, FileCheck, Download, Server, Clock, Banknote, CheckCircle2, ArrowRight, Settings, FileText, Inbox, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Agency() {
  return (
    <MainLayout>
      <Helmet>
        <title>CumpleFactura para gestorías · Control de clientes y VeriFactu</title>
        <meta
          name="description"
          content="Ofrece a tus clientes un cumplimiento total de factura electrónica y VeriFactu desde una única plataforma pensada para gestorías."
        />
        <link rel="canonical" href="https://cumplefactura.es/gestorias" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="CumpleFactura para gestorías · Control de clientes y VeriFactu" />
        <meta
          property="og:description"
          content="Centraliza el cumplimiento de factura electrónica, VeriFactu y firma con certificado de todos tus clientes desde un único panel."
        />
        <meta property="og:url" content="https://cumplefactura.es/gestorias" />
        <meta property="og:image" content="https://cumplefactura.es/og/gestorias.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CumpleFactura para gestorías · Control de clientes y VeriFactu" />
        <meta
          name="twitter:description"
          content="Solución pensada para gestorías: panel único para controlar el cumplimiento de todos tus clientes."
        />
        <meta name="twitter:image" content="https://cumplefactura.es/og/gestorias.png" />
      </Helmet>
      {/* 1. HERO */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/20">
        <div className="container flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Más clientes, menos picar datos. CumpleFactura habla el idioma de tu ERP.
            </h1>
            <p className="text-xl text-muted-foreground">
              Facturas firmadas, verificadas y trazables que puedes importar desde CSV/XML o conectar por API con tu software de gestoría.
            </p>
            <Button size="lg" className="h-12 px-8">Unirse al programa de gestorías</Button>
          </div>
          <div className="flex-1 flex justify-center">
            <Building2 className="h-64 w-64 text-primary/20" />
          </div>
        </div>
      </section>

      {/* 2. Integración cómoda con tu ERP */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Integración cómoda con tu ERP, a tu ritmo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-xl bg-card shadow-sm">
              <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Descarga manual periódica</h3>
              <p className="text-muted-foreground">Ficheros CSV/XML listos para importar, sin campos raros y con estructuras pensadas para contabilidad y fiscalidad.</p>
            </div>
            <div className="text-center p-6 border rounded-xl bg-card shadow-sm">
              <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Exportaciones programadas</h3>
              <p className="text-muted-foreground">Recibe automáticamente los datos de facturación en tu email o servidor, reduciendo el tiempo de gestión manual.</p>
            </div>
            <div className="text-center p-6 border rounded-xl bg-card shadow-sm">
              <div className="h-16 w-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Server className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Integración vía API</h3>
              <p className="text-muted-foreground">Posibilidad de automatizar la llegada de datos directamente a tu ERP (A3, Sage, Contpaqi, etc.) mediante nuestra API.</p>
            </div>
            <div className="text-center p-6 border rounded-xl bg-card shadow-sm md:col-span-3 lg:col-span-3 bg-slate-50/50 mt-4">
              <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
                CumpleFactura no te obliga a cambiar de herramienta. Menos tiempo corrigiendo errores de facturas mal emitidas y más tiempo para asesorar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Cómo se trabaja en el día a día */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Cómo se trabaja en el día a día</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-lg font-bold mb-2">Cliente usa WooCommerce</h3>
              <p className="text-muted-foreground">El cliente usa WooCommerce con CumpleFactura instalado.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-lg font-bold mb-2">Procesamiento automático</h3>
              <p className="text-muted-foreground">Cada factura se firma (XAdES), se registra (Verifactu) y queda lista para contabilidad.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-lg font-bold mb-2">Obtención de datos</h3>
              <p className="text-muted-foreground">Tú descargas CSV/XML o configuras la integración por API.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="text-lg font-bold mb-2">Importación sin errores</h3>
              <p className="text-muted-foreground">Importas los datos en tu ERP con menos errores y menos trabajo manual.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl font-bold text-primary">
              “Tu equipo deja de perseguir al cliente y se centra en revisar, no en picar datos.”
            </p>
          </div>
        </div>
      </section>

      {/* 4. Ventajas para gestorías */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-card border rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Ventajas para gestorías</h2>
              <p className="text-lg text-muted-foreground">Optimiza tu flujo de trabajo con datos fiables.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Datos limpios y consistentes para tu ERP',
                'Facturas ya firmadas y trazables',
                'Flujo compatible con CSV, XML y API',
                'Menos horas de trabajo manual',
                'Menos riesgo de errores y sanciones para tu cliente',
                'Soporte pensado para despachos profesionales'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Beneficios (Opcional - Manteniendo estructura original si se desea, o simplificando según instrucciones. 
         Las instrucciones pedían actualizar bloques. El bloque 4 "Ventajas" reemplaza al anterior "Panel Gestoría".
         El bloque 5 original "Beneficios" puede ser redundante o puede mantenerse con textos ajustados.
         Voy a mantener el bloque de Pricing como estaba o ajustarlo mínimamente si es necesario, 
         pero las instrucciones se centraban en Hero, Bloque Principal, Día a Día, Ventajas y CTA.
         Voy a omitir la sección de Pricing y Beneficios antiguos para que encaje con la nueva narrativa si así se prefiere, 
         pero la instrucción dice "NO cambies el diseño ni muevas secciones". 
         Para cumplir estrictamente "NO muevas secciones", mantendré las secciones existentes pero actualizaré su contenido 
         para reflejar los puntos solicitados.
         
         Revisando la estructura original vs nueva:
         1. Hero -> Actualizado
         2. Por qué CumpleFactura -> Actualizado a "Integración cómoda"
         3. Cómo funciona -> Actualizado a "Día a día"
         4. Panel Gestoría -> Actualizado a "Ventajas" (usando el layout de card grande)
         5. Beneficios -> Este bloque sobra un poco con la nueva sección de Ventajas, pero lo mantendré con textos de refuerzo.
         6. Pricing -> No se mencionó cambio, lo mantengo.
         7. CTA -> Actualizado.
      */}
      
      {/* 5. Beneficios Adicionales (Manteniendo estructura) */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">¿Por qué elegir CumpleFactura?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-bold mb-2 text-primary">Datos Limpios</h3>
              <p className="text-muted-foreground">Olvídate de limpiar excels desordenados. Estructura contable nativa.</p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-bold mb-2 text-primary">Trazabilidad Total</h3>
              <p className="text-muted-foreground">Cada factura tiene su huella digital y firma, lista para inspecciones.</p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-bold mb-2 text-primary">Flexibilidad</h3>
              <p className="text-muted-foreground">Desde CSV manual hasta API automatizada, tú decides el nivel de integración.</p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-bold mb-2 text-primary">Seguridad Jurídica</h3>
              <p className="text-muted-foreground">Tus clientes cumplen la normativa 2026 sin que tú tengas que configurarlo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Pricing (Mantenido igual, no solicitado cambio explícito pero coherente) */}
      <section className="py-20">
        <div className="container max-w-lg mx-auto">
          <Card className="border-primary shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl">Plan Gestorías</CardTitle>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold">29€</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
              <CardDescription className="text-lg">
                Diseñado exclusivamente para profesionales de contabilidad y fiscalidad.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mt-4">
                {[
                  'Exportación profesional CSV y XML',
                  'Descarga masiva',
                  'API opcional',
                  'Soporte prioritario',
                  'Comisión mensual por cada cliente referido',
                  'Acceso a Panel Gestoría (cuando se lance)'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">Solicitar acceso</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Haz que tus clientes de WooCommerce trabajen como a tu ERP le gusta</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Te enviamos ejemplos de ficheros, te ayudamos a configurar la integración y, si quieres, conectamos por API.
          </p>
          <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
            Hablar con CumpleFactura
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}