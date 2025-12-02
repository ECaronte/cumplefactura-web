import { useEffect, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import FaqSection from '@/components/sections/FaqSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Briefcase } from 'lucide-react';
import { getPlans } from '@/services/mockApi';
import { Plan } from '@/types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Pricing() {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    getPlans().then(setPlans);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>Precios de CumpleFactura · Planes para autónomos y gestorías</title>
        <meta
          name="description"
          content="Consulta los planes y precios de CumpleFactura para autónomos, pymes y gestorías. Empieza con un plan sencillo y escala sólo si lo necesitas."
        />
        <link rel="canonical" href="https://cumplefactura.es/precios" />

        <meta property="og:type" content="product" />
        <meta property="og:title" content="Precios de CumpleFactura · Planes para autónomos y gestorías" />
        <meta
          property="og:description"
          content="Elige el plan de CumpleFactura que mejor se adapte a tu volumen de facturas y a tus necesidades de gestión."
        />
        <meta property="og:url" content="https://cumplefactura.es/precios" />
        <meta property="og:image" content="https://cumplefactura.es/og/precios.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Precios de CumpleFactura · Planes para autónomos y gestorías" />
        <meta
          name="twitter:description"
          content="Planes claros y sin letra pequeña para cumplir con factura electrónica, VeriFactu y firma con certificado."
        />
        <meta name="twitter:image" content="https://cumplefactura.es/og/precios.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "name": "CumpleFactura",
                "description": "Software de factura electrónica y VeriFactu para WooCommerce",
                "category": "Software de factura electrónica / VeriFactu",
                "url": "https://cumplefactura.es/precios",
                "brand": { "@type": "Brand", "name": "CumpleFactura" },
                "offers": {
                  "@type": "AggregateOffer",
                  "priceCurrency": "EUR",
                  "lowPrice": "0",
                  "highPrice": "49",
                  "offerCount": "3",
                  "availability": "https://schema.org/InStock"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://cumplefactura.es/" },
                  { "@type": "ListItem", "position": 2, "name": "Precios", "item": "https://cumplefactura.es/precios" }
                ]
              }
            ]
          })}
        </script>
      </Helmet>
      <section className="py-20 md:py-32 bg-background">
        <div className="container text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">Planes transparentes</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu volumen de facturación. Sin costes ocultos. <Link to="/como-funciona" className="text-primary hover:underline">Ver cómo funciona</Link>.
          </p>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`flex flex-col relative ${plan.highlight ? 'border-primary shadow-xl scale-105 z-10' : 'border-border shadow-sm'}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Más popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== 'Contactar' && <span className="text-muted-foreground">/mes</span>}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.highlight ? 'default' : 'outline'}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* 1. Enlace para gestorías */}
        <div className="container max-w-4xl mx-auto text-center mb-20">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 inline-flex flex-col sm:flex-row items-center gap-2 text-slate-600">
            <Briefcase className="h-5 w-5 text-primary" />
            <span>
              ¿Eres una gestoría y quieres recomendar CumpleFactura a tus clientes?{' '}
              <Link to="/gestorias" className="text-primary font-medium hover:underline">
                Mira nuestro programa asociativo.
              </Link>
            </span>
          </div>
        </div>

        {/* 2. Nueva sección: ¿Por qué cobrar menos...? */}
        <div className="container max-w-4xl mx-auto mb-10">
          <div className="bg-white rounded-2xl p-8 md:p-12 border shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">
              ¿Por qué cobrar menos si tu WooCommerce factura poco?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
              Aunque tu tienda facture poco cada mes, estás obligado igualmente a cumplir la normativa de facturación. 
              CumpleFactura automatiza Verifactu, la firma digital XAdES y la generación de archivos para tu gestoría, 
              evitando errores que pueden acabar en sanciones. La cuota mensual se amortiza en tiempo ahorrado y tranquilidad jurídica.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <span className="font-medium text-slate-700">Cumplimiento legal aunque factures poco</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <span className="font-medium text-slate-700">Evita sanciones por facturas incorrectas</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <span className="font-medium text-slate-700">Ahorra tiempo en cada trimestre fiscal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
    </MainLayout>
  );
}