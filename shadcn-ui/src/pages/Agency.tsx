import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Building2, FileCheck, Download, Server, Clock, Banknote, CheckCircle2, ArrowRight, Settings, FileText, Inbox, Check, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

interface FormData {
  nombreGestoria: string;
  personaContacto: string;
  email: string;
  telefono: string;
  codigoPostal: string;
  direccion: string;
  volumen: string;
  tipoClientes: string;
  comentarios: string;
  consentimiento: boolean;
}

interface FormErrors {
  nombreGestoria?: string;
  personaContacto?: string;
  email?: string;
  telefono?: string;
  codigoPostal?: string;
  comentarios?: string;
  consentimiento?: string;
}

export default function Agency() {
  const [formData, setFormData] = useState<FormData>({
    nombreGestoria: '',
    personaContacto: '',
    email: '',
    telefono: '',
    codigoPostal: '',
    direccion: '',
    volumen: '',
    tipoClientes: '',
    comentarios: '',
    consentimiento: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToForm = () => {
    document.getElementById('gestorias-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombreGestoria.trim()) {
      newErrors.nombreGestoria = 'El nombre de la gestoría es obligatorio';
    }
    if (!formData.personaContacto.trim()) {
      newErrors.personaContacto = 'El nombre de contacto es obligatorio';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Introduce un email válido';
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio';
    }
    if (!formData.codigoPostal.trim()) {
      newErrors.codigoPostal = 'El código postal es obligatorio';
    }
    if (!formData.comentarios.trim()) {
      newErrors.comentarios = 'Cuéntanos brevemente tu caso';
    }
    if (!formData.consentimiento) {
      newErrors.consentimiento = 'Debes aceptar la política de privacidad';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // TODO: Conectar con API o enviar a gestorias@cumplefactura.es
    // Por ahora simulamos el envío
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        nombreGestoria: '',
        personaContacto: '',
        email: '',
        telefono: '',
        codigoPostal: '',
        direccion: '',
        volumen: '',
        tipoClientes: '',
        comentarios: '',
        consentimiento: false,
      });
    }, 1000);
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const isFormValid = 
    formData.nombreGestoria.trim() &&
    formData.personaContacto.trim() &&
    formData.email.trim() &&
    validateEmail(formData.email) &&
    formData.telefono.trim() &&
    formData.codigoPostal.trim() &&
    formData.comentarios.trim() &&
    formData.consentimiento;

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

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "name": "CumpleFactura para gestorías",
                "description": "Ofrece a tus clientes un cumplimiento total de factura electrónica y VeriFactu desde una única plataforma pensada para gestorías.",
                "url": "https://cumplefactura.es/gestorias",
                "isPartOf": { "@type": "WebSite", "name": "CumpleFactura", "url": "https://cumplefactura.es" }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://cumplefactura.es/" },
                  { "@type": "ListItem", "position": 2, "name": "Gestorías", "item": "https://cumplefactura.es/gestorias" }
                ]
              }
            ]
          })}
        </script>
      </Helmet>
      {/* 1. HERO */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/20">
        <div className="container flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Más clientes, menos picar datos. CumpleFactura habla el idioma de tu ERP.
            </h1>
            <p className="text-xl text-muted-foreground">
              Facturas firmadas, verificadas y trazables compatibles con <Link to="/verifactu" className="text-primary hover:underline">VeriFactu</Link> que puedes importar desde CSV/XML o conectar por API con tu software de gestoría.
            </p>
            <Button size="lg" className="h-12 px-8" onClick={scrollToForm}>
              Unirse al programa de gestorías
            </Button>
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
              "Tu equipo deja de perseguir al cliente y se centra en revisar, no en picar datos."
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

      {/* 5. Beneficios Adicionales */}
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
              <p className="text-muted-foreground">Tus clientes cumplen la normativa 2026 sin que tú tengas que configurarlo. <Link to="/precios" className="text-primary hover:underline">Ver precios</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Pricing */}
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
              <Button className="w-full" size="lg" onClick={scrollToForm}>
                Solicitar acceso
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* 7. FORMULARIO DE GESTORÍAS */}
      <section id="gestorias-form" className="py-20 bg-slate-50">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Déjanos tus datos y te contactamos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cuéntanos un poco sobre tu gestoría y te contactaremos para explicarte cómo encaja CumpleFactura en tu despacho.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                ¡Hemos recibido tu solicitud!
              </h3>
              <p className="text-green-700 text-lg">
                Te contactaremos en breve para explicarte cómo CumpleFactura puede ayudar a tu gestoría.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl border shadow-sm space-y-6">
              {/* Campos obligatorios */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nombreGestoria">
                    Nombre de la gestoría <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="nombreGestoria"
                    name="nombreGestoria"
                    type="text"
                    placeholder="Ej: Gestoría López & Asociados"
                    value={formData.nombreGestoria}
                    onChange={(e) => handleInputChange('nombreGestoria', e.target.value)}
                    aria-invalid={!!errors.nombreGestoria}
                    className={errors.nombreGestoria ? 'border-red-500' : ''}
                  />
                  {errors.nombreGestoria && (
                    <p className="text-sm text-red-500">{errors.nombreGestoria}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="personaContacto">
                    Nombre y apellidos de la persona de contacto <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="personaContacto"
                    name="personaContacto"
                    type="text"
                    placeholder="Ej: María García Pérez"
                    value={formData.personaContacto}
                    onChange={(e) => handleInputChange('personaContacto', e.target.value)}
                    aria-invalid={!!errors.personaContacto}
                    className={errors.personaContacto ? 'border-red-500' : ''}
                  />
                  {errors.personaContacto && (
                    <p className="text-sm text-red-500">{errors.personaContacto}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email profesional <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="contacto@tugestoria.es"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    aria-invalid={!!errors.email}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono">
                    Teléfono de contacto <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="Ej: 612 345 678"
                    value={formData.telefono}
                    onChange={(e) => handleInputChange('telefono', e.target.value)}
                    aria-invalid={!!errors.telefono}
                    className={errors.telefono ? 'border-red-500' : ''}
                  />
                  {errors.telefono && (
                    <p className="text-sm text-red-500">{errors.telefono}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="codigoPostal">
                    Código postal de la gestoría <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="codigoPostal"
                    name="codigoPostal"
                    type="text"
                    placeholder="Ej: 28001"
                    value={formData.codigoPostal}
                    onChange={(e) => handleInputChange('codigoPostal', e.target.value)}
                    aria-invalid={!!errors.codigoPostal}
                    className={errors.codigoPostal ? 'border-red-500' : ''}
                  />
                  {errors.codigoPostal && (
                    <p className="text-sm text-red-500">{errors.codigoPostal}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="direccion">
                    Dirección (opcional)
                  </Label>
                  <Input
                    id="direccion"
                    name="direccion"
                    type="text"
                    placeholder="Ej: Calle Gran Vía 45, 2º"
                    value={formData.direccion}
                    onChange={(e) => handleInputChange('direccion', e.target.value)}
                  />
                </div>
              </div>

              {/* Campos opcionales */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="volumen">
                    Volumen aproximado de clientes / facturas
                  </Label>
                  <select
                    id="volumen"
                    name="volumen"
                    value={formData.volumen}
                    onChange={(e) => handleInputChange('volumen', e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="hasta-50">Hasta 50 clientes</option>
                    <option value="50-200">Entre 50 y 200 clientes</option>
                    <option value="mas-200">Más de 200 clientes</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tipoClientes">
                    Tipo de clientes
                  </Label>
                  <select
                    id="tipoClientes"
                    name="tipoClientes"
                    value={formData.tipoClientes}
                    onChange={(e) => handleInputChange('tipoClientes', e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="autonomos">Autónomos</option>
                    <option value="pymes">Pymes</option>
                    <option value="ambos">Ambos</option>
                  </select>
                </div>
              </div>

              {/* Comentarios */}
              <div className="space-y-2">
                <Label htmlFor="comentarios">
                  Cuéntanos brevemente tu caso <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="comentarios"
                  name="comentarios"
                  placeholder="¿Qué problemas tienes actualmente con la facturación de tus clientes? ¿Qué ERP usas?"
                  rows={5}
                  value={formData.comentarios}
                  onChange={(e) => handleInputChange('comentarios', e.target.value)}
                  aria-invalid={!!errors.comentarios}
                  className={errors.comentarios ? 'border-red-500' : ''}
                />
                {errors.comentarios && (
                  <p className="text-sm text-red-500">{errors.comentarios}</p>
                )}
              </div>

              {/* Consentimiento */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consentimiento"
                    checked={formData.consentimiento}
                    onCheckedChange={(checked) => handleInputChange('consentimiento', checked === true)}
                    aria-invalid={!!errors.consentimiento}
                  />
                  <Label htmlFor="consentimiento" className="text-sm leading-relaxed cursor-pointer">
                    He leído y acepto la{' '}
                    <Link to="/politica-privacidad" className="text-primary hover:underline" target="_blank">
                      política de privacidad
                    </Link>{' '}
                    y consiento que CumpleFactura me contacte con información sobre sus servicios.{' '}
                    <span className="text-red-500">*</span>
                  </Label>
                </div>
                {errors.consentimiento && (
                  <p className="text-sm text-red-500 ml-7">{errors.consentimiento}</p>
                )}
              </div>

              {/* Botón de envío */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Solicitar información
                  </>
                )}
              </Button>
            </form>
          )}

          {/* Alternativa: email directo */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Si prefieres escribirnos directamente, puedes hacerlo a:{' '}
              <a
                href="mailto:gestorias@cumplefactura.es"
                className="text-primary font-medium hover:underline inline-flex items-center gap-1"
              >
                <Mail className="h-4 w-4" />
                gestorias@cumplefactura.es
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 8. CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Haz que tus clientes de WooCommerce trabajen como a tu ERP le gusta</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Te enviamos ejemplos de ficheros, te ayudamos a configurar la integración y, si quieres, conectamos por API.
          </p>
          <Button size="lg" variant="secondary" className="h-12 px-8 text-lg" onClick={scrollToForm}>
            Unirse al programa de gestorías
          </Button>
          <p className="mt-6 text-primary-foreground/80">
            ¿Tienes dudas? Escríbenos a{' '}
            <a href="mailto:gestorias@cumplefactura.es" className="underline hover:text-white">
              gestorias@cumplefactura.es
            </a>
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
