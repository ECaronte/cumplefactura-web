// shadcn-ui/src/pages/ContactPage.tsx
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: conectar con API / email
    setIsSubmitted(true);
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Contacto · CumpleFactura</title>
        <meta
          name="description"
          content="Ponte en contacto con el equipo de CumpleFactura. Resolvemos dudas sobre WooCommerce, facturación, trazabilidad e integraciones."
        />
        <link rel="canonical" href="https://cumplefactura.es/contacto" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contacto · CumpleFactura" />
        <meta
          property="og:description"
          content="Ponte en contacto con el equipo de CumpleFactura para resolver tus dudas."
        />
        <meta property="og:url" content="https://cumplefactura.es/contacto" />
        <meta
          property="og:image"
          content="https://cumplefactura.es/og/contacto.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto · CumpleFactura" />
        <meta
          name="twitter:description"
          content="Ponte en contacto con el equipo de CumpleFactura para resolver tus dudas."
        />
        <meta
          name="twitter:image"
          content="https://cumplefactura.es/og/contacto.png"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ContactPage",
                name: "Contacto - CumpleFactura",
                description:
                  "Ponte en contacto con el equipo de CumpleFactura para resolver tus dudas.",
                url: "https://cumplefactura.es/contacto",
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
                    name: "Contacto",
                    item: "https://cumplefactura.es/contacto",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4 text-primary">
              Contacto
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              ¿Dudas sobre WooCommerce, facturación o cómo encaja con tu
              gestoría? Escríbenos y te respondemos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-slate-800">
                Envíanos un mensaje
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-3">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-green-700 text-lg">
                    Te responderemos en 24-48 horas laborables.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar mensaje
                  </Button>
                </form>
              )}

              <p className="text-sm text-muted-foreground mt-4 text-center">
                Al enviar este formulario aceptas nuestra política de
                privacidad.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl border shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">
                  Email directo
                </h2>
                <p className="text-muted-foreground mb-4">
                  Si prefieres escribirnos directamente:
                </p>
                <a
                  href="mailto:hola@cumplefactura.es"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-lg"
                >
                  <Mail className="h-5 w-5" />
                  hola@cumplefactura.es
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl border shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">
                  Horario de atención
                </h2>
                <p className="text-muted-foreground">
                  Respondemos en un plazo de 24-48 horas laborables.
                </p>
                <ul className="mt-4 space-y-2 text-slate-600">
                  <li>Lunes a Viernes: 9:00 - 18:00</li>
                  <li>Sábados, Domingos y Festivos: Cerrado</li>
                </ul>
              </div>

              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
                <h2 className="text-xl font-bold mb-3 text-primary">
                  ¿Eres gestoría?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Tenemos planes especiales para gestorías con múltiples
                  clientes.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/gestorias">Ver planes para gestorías</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
