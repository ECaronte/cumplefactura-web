// shadcn-ui/src/pages/Agency.tsx
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Building2,
  Download,
  Server,
  Clock,
  CheckCircle2,
  Check,
  Mail,
  Send,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

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
    nombreGestoria: "",
    personaContacto: "",
    email: "",
    telefono: "",
    codigoPostal: "",
    direccion: "",
    volumen: "",
    tipoClientes: "",
    comentarios: "",
    consentimiento: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToForm = () => {
    document
      .getElementById("gestorias-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombreGestoria.trim())
      newErrors.nombreGestoria = "El nombre de la gestoría es obligatorio";
    if (!formData.personaContacto.trim())
      newErrors.personaContacto = "El nombre de contacto es obligatorio";
    if (!formData.email.trim()) newErrors.email = "El email es obligatorio";
    else if (!validateEmail(formData.email))
      newErrors.email = "Introduce un email válido";
    if (!formData.telefono.trim())
      newErrors.telefono = "El teléfono es obligatorio";
    if (!formData.codigoPostal.trim())
      newErrors.codigoPostal = "El código postal es obligatorio";
    if (!formData.comentarios.trim())
      newErrors.comentarios = "Cuéntanos brevemente tu caso";
    if (!formData.consentimiento)
      newErrors.consentimiento = "Debes aceptar la política de privacidad";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // TODO: Conectar con API o enviar a gestorias@cumplefactura.es
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        nombreGestoria: "",
        personaContacto: "",
        email: "",
        telefono: "",
        codigoPostal: "",
        direccion: "",
        volumen: "",
        tipoClientes: "",
        comentarios: "",
        consentimiento: false,
      });
    }, 1000);
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors])
      setErrors((prev) => ({ ...prev, [field]: undefined }));
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
        <title>
          CumpleFactura para gestorías · Control de clientes y colaboración ERP
        </title>
        <meta
          name="description"
          content="Programa para gestorías: estandariza la facturación de tus clientes WooCommerce y recibe exportaciones limpias para tu ERP."
        />
        <link rel="canonical" href="https://cumplefactura.es/gestorias" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="CumpleFactura para gestorías · Control de clientes y colaboración ERP"
        />
        <meta
          property="og:description"
          content="Centraliza el trabajo con clientes WooCommerce y reduce incidencias gracias a exportaciones limpias y consistentes."
        />
        <meta property="og:url" content="https://cumplefactura.es/gestorias" />
        <meta
          property="og:image"
          content="https://cumplefactura.es/og/gestorias.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CumpleFactura para gestorías · Control de clientes y colaboración ERP"
        />
        <meta
          name="twitter:description"
          content="Solución pensada para gestorías: flujo claro para datos contables, sin perseguir al cliente."
        />
        <meta
          name="twitter:image"
          content="https://cumplefactura.es/og/gestorias.png"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                name: "CumpleFactura para gestorías",
                description:
                  "Programa para gestorías: estandariza la facturación de tus clientes WooCommerce y recibe exportaciones limpias para tu ERP.",
                url: "https://cumplefactura.es/gestorias",
                isPartOf: {
                  "@type": "WebSite",
                  name: "CumpleFactura",
                  url: "https://cumplefactura.es",
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Inicio",
                    item: "https://cumplefactura.es/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Gestorías",
                    item: "https://cumplefactura.es/gestorias",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      {/* 1. HERO */}
      <section className="py-24 md:py-36 bg-slate-50 dark:bg-slate-900/20">
        <div className="container flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-7">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-brand-light text-primary">
              Programa para gestorías
            </div>

            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl text-slate-900">
              Más clientes, menos picar datos. Flujo claro para tu ERP.
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Estandariza el trabajo con tus clientes WooCommerce: datos
              coherentes, exportaciones limpias y un proceso pensado para
              despachos profesionales. Sin obligarte a cambiar de herramienta.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="h-12 px-8" onClick={scrollToForm}>
                Unirme al programa
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8">
                <Link to="/precios" className="inline-flex items-center gap-2">
                  Ver precios <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Orientado a cumplimiento (Veri*Factu / software verificable).
              Módulos avanzados se incorporan progresivamente.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-square md:aspect-[4/3] bg-white rounded-2xl shadow-xl border border-slate-200 p-10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
              <Building2 className="relative h-56 w-56 text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Integración cómoda */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 mb-4">
              Integración cómoda con tu ERP, a tu ritmo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Desde descargas manuales hasta automatización: elige el nivel de
              integración que te encaje.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-7 border rounded-2xl bg-card shadow-sm">
              <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Descarga manual periódica
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ficheros CSV/XML listos para importar, con estructura pensada
                para contabilidad y fiscalidad.
              </p>
            </div>

            <div className="text-center p-7 border rounded-2xl bg-card shadow-sm">
              <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Exportaciones programadas
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Recepción automatizada (por ejemplo por email o repositorio),
                reduciendo tareas repetitivas.
              </p>
            </div>

            <div className="text-center p-7 border rounded-2xl bg-card shadow-sm">
              <div className="h-16 w-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Server className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Integración vía API (opcional)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Opción de automatizar la llegada de datos a tu software. Ideal
                para despachos con alto volumen.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg font-medium text-primary bg-brand-light inline-block px-6 py-3 rounded-full">
              No te obligamos a cambiar de herramienta: reducimos incidencias,
              no añadimos fricción.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Día a día */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 mb-4">
              Cómo se trabaja en el día a día
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Un flujo simple: menos “persecución al cliente”, más revisión
              profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                n: 1,
                t: "Cliente usa WooCommerce",
                d: "El cliente factura desde su tienda con un flujo estandarizado.",
              },
              {
                n: 2,
                t: "Generación y orden",
                d: "Facturas con numeración coherente y trazabilidad de registros.",
              },
              {
                n: 3,
                t: "Obtención de datos",
                d: "Descargas o automatización según el nivel que elijas.",
              },
              {
                n: 4,
                t: "Importación sin caos",
                d: "Importas en tu ERP con menos errores y menos correcciones.",
              },
            ].map((s) => (
              <div key={s.n} className="flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {s.n}
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">{s.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-semibold text-primary">
              “Tu equipo deja de picar datos y se centra en revisar.”
            </p>
          </div>
        </div>
      </section>

      {/* 4. Ventajas */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-card border rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">
                Ventajas para gestorías
              </h2>
              <p className="text-lg text-muted-foreground">
                Optimiza tu flujo de trabajo con datos fiables.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Datos limpios y consistentes para tu ERP",
                "Menos trabajo manual y menos incidencias",
                "Exportación CSV/XML y opciones de automatización",
                "Flujo pensado para carteras multi-cliente",
                "Estandarización: menos “cada cliente a su manera”",
                "Soporte orientado a despachos profesionales",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-800 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing card */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-lg mx-auto">
          <Card className="border-primary shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>

            <CardHeader className="text-center pb-3">
              <CardTitle className="text-2xl text-slate-900">
                Plan Gestorías
              </CardTitle>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold text-slate-900">29€</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
              <CardDescription className="text-lg leading-relaxed">
                Para despachos que quieren estandarizar el flujo con clientes
                WooCommerce.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3 mt-4">
                {[
                  "Exportación profesional CSV/XML",
                  "Descargas por cliente o por lote (según disponibilidad)",
                  "Opciones de automatización (según nivel)",
                  "Soporte prioritario",
                  "Acceso a Panel Gestoría (cuando se lance)",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border bg-white px-4 py-3 text-sm text-slate-600 leading-relaxed">
                Nota: el programa para gestorías se adapta a tu forma de
                trabajo. Te ayudamos a definir el flujo (manual, programado o
                API) en función de tu volumen y herramientas.
              </div>
            </CardContent>

            <CardFooter>
              <Button className="w-full" size="lg" onClick={scrollToForm}>
                Solicitar información
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* 6. FORM */}
      <section id="gestorias-form" className="py-24">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-slate-900">
              Déjanos tus datos y te contactamos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Cuéntanos cómo trabajas y te proponemos un flujo realista (sin
              cambiar tu ERP).
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
                Te contactaremos en breve.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-10 rounded-2xl border shadow-sm space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nombreGestoria">
                    Nombre de la gestoría{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="nombreGestoria"
                    name="nombreGestoria"
                    type="text"
                    placeholder="Ej: Gestoría López & Asociados"
                    value={formData.nombreGestoria}
                    onChange={(e) =>
                      handleInputChange("nombreGestoria", e.target.value)
                    }
                    aria-invalid={!!errors.nombreGestoria}
                    className={errors.nombreGestoria ? "border-red-500" : ""}
                  />
                  {errors.nombreGestoria && (
                    <p className="text-sm text-red-500">
                      {errors.nombreGestoria}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="personaContacto">
                    Persona de contacto <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="personaContacto"
                    name="personaContacto"
                    type="text"
                    placeholder="Ej: María García Pérez"
                    value={formData.personaContacto}
                    onChange={(e) =>
                      handleInputChange("personaContacto", e.target.value)
                    }
                    aria-invalid={!!errors.personaContacto}
                    className={errors.personaContacto ? "border-red-500" : ""}
                  />
                  {errors.personaContacto && (
                    <p className="text-sm text-red-500">
                      {errors.personaContacto}
                    </p>
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
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono">
                    Teléfono <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="Ej: 612 345 678"
                    value={formData.telefono}
                    onChange={(e) =>
                      handleInputChange("telefono", e.target.value)
                    }
                    aria-invalid={!!errors.telefono}
                    className={errors.telefono ? "border-red-500" : ""}
                  />
                  {errors.telefono && (
                    <p className="text-sm text-red-500">{errors.telefono}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="codigoPostal">
                    Código postal <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="codigoPostal"
                    name="codigoPostal"
                    type="text"
                    placeholder="Ej: 28001"
                    value={formData.codigoPostal}
                    onChange={(e) =>
                      handleInputChange("codigoPostal", e.target.value)
                    }
                    aria-invalid={!!errors.codigoPostal}
                    className={errors.codigoPostal ? "border-red-500" : ""}
                  />
                  {errors.codigoPostal && (
                    <p className="text-sm text-red-500">
                      {errors.codigoPostal}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="direccion">Dirección (opcional)</Label>
                  <Input
                    id="direccion"
                    name="direccion"
                    type="text"
                    placeholder="Ej: Calle Gran Vía 45, 2º"
                    value={formData.direccion}
                    onChange={(e) =>
                      handleInputChange("direccion", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="volumen">Volumen aproximado</Label>
                  <select
                    id="volumen"
                    name="volumen"
                    value={formData.volumen}
                    onChange={(e) =>
                      handleInputChange("volumen", e.target.value)
                    }
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="hasta-50">Hasta 50 clientes</option>
                    <option value="50-200">Entre 50 y 200 clientes</option>
                    <option value="mas-200">Más de 200 clientes</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tipoClientes">Tipo de clientes</Label>
                  <select
                    id="tipoClientes"
                    name="tipoClientes"
                    value={formData.tipoClientes}
                    onChange={(e) =>
                      handleInputChange("tipoClientes", e.target.value)
                    }
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="autonomos">Autónomos</option>
                    <option value="pymes">Pymes</option>
                    <option value="ambos">Ambos</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comentarios">
                  Cuéntanos tu caso <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="comentarios"
                  name="comentarios"
                  placeholder="¿Qué ERP usas? ¿Cómo recibes hoy la facturación del cliente? ¿Qué te gustaría automatizar?"
                  rows={5}
                  value={formData.comentarios}
                  onChange={(e) =>
                    handleInputChange("comentarios", e.target.value)
                  }
                  aria-invalid={!!errors.comentarios}
                  className={errors.comentarios ? "border-red-500" : ""}
                />
                {errors.comentarios && (
                  <p className="text-sm text-red-500">{errors.comentarios}</p>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consentimiento"
                    checked={formData.consentimiento}
                    onCheckedChange={(checked) =>
                      handleInputChange("consentimiento", checked === true)
                    }
                    aria-invalid={!!errors.consentimiento}
                  />
                  <Label
                    htmlFor="consentimiento"
                    className="text-sm leading-relaxed cursor-pointer"
                  >
                    Acepto la{" "}
                    <Link
                      to="/politica-privacidad"
                      className="text-primary hover:underline"
                      target="_blank"
                    >
                      política de privacidad
                    </Link>{" "}
                    y consiento que CumpleFactura me contacte.{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                </div>
                {errors.consentimiento && (
                  <p className="text-sm text-red-500 ml-7">
                    {errors.consentimiento}
                  </p>
                )}
              </div>

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

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Si prefieres escribirnos directamente:{" "}
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

      {/* 7. CTA Final */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Haz que tus clientes WooCommerce trabajen como a tu ERP le gusta
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Te ayudamos a definir un flujo (manual o automatizado) que reduzca
            incidencias y te ahorre horas.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="h-12 px-8 text-lg"
            onClick={scrollToForm}
          >
            Unirse al programa
          </Button>
          <p className="mt-6 text-primary-foreground/80">
            ¿Dudas?{" "}
            <a
              href="mailto:gestorias@cumplefactura.es"
              className="underline hover:text-white"
            >
              gestorias@cumplefactura.es
            </a>
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
