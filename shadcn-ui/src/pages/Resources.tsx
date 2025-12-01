import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  FileText, 
  Shield, 
  Globe, 
  ListChecks, 
  Share2, 
  Download, 
  FileCheck, 
  Users,
  ArrowRight
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const articles = [
  {
    title: '¿Qué es Verifactu y por qué será obligatorio en España?',
    description: 'Guía clara para autónomos y gestorías.',
    icon: <Shield className="h-6 w-6 text-primary" />,
    type: 'Artículo'
  },
  {
    title: 'Guía definitiva sobre la factura electrónica obligatoria 2025–2026',
    description: 'Requisitos, plazos y cómo prepararse.',
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    type: 'Guía'
  },
  {
    title: 'Cómo funciona la firma digital XAdES en facturación',
    description: 'Entiende por qué es obligatoria y cómo CumpleFactura la automatiza.',
    icon: <FileText className="h-6 w-6 text-primary" />,
    type: 'Técnico'
  },
  {
    title: 'MiFacturae: qué es, para qué sirve y cómo usarlo',
    description: 'Explicación simple para autónomos y pymes.',
    icon: <Globe className="h-6 w-6 text-primary" />,
    type: 'Artículo'
  },
  {
    title: 'Cómo preparar tu WooCommerce para la nueva normativa',
    description: 'Checklist paso a paso.',
    icon: <ListChecks className="h-6 w-6 text-primary" />,
    type: 'Tutorial'
  },
  {
    title: 'Cómo funcionan las exportaciones CSV, XML y API para gestorías',
    description: 'Qué recibe tu gestoría y cómo lo usa.',
    icon: <Share2 className="h-6 w-6 text-primary" />,
    type: 'Gestoría'
  }
];

const downloads = [
  {
    title: 'Checklist para cumplir la normativa española de facturación',
    description: 'Listo para descargar.',
    icon: <FileCheck className="h-6 w-6 text-primary" />,
    type: 'PDF'
  },
  {
    title: 'Guía para instalar tu certificado digital en CumpleFactura',
    description: 'Explicado paso a paso.',
    icon: <Download className="h-6 w-6 text-primary" />,
    type: 'PDF'
  },
  {
    title: 'Manual para gestorías que trabajan con CumpleFactura',
    description: 'Explica exportaciones, formatos y Panel Gestoría.',
    icon: <Users className="h-6 w-6 text-primary" />,
    type: 'PDF'
  }
];

const faqs = [
  {
    question: "¿Cómo guarda CumpleFactura la cadena hash de Verifactu?",
    answer: "CumpleFactura genera y almacena el hash encadenado de cada factura en nuestra base de datos segura, asegurando la inmutabilidad y trazabilidad exigida por la normativa."
  },
  {
    question: "¿Qué certificados digitales son compatibles?",
    answer: "Soportamos todos los certificados digitales cualificados emitidos por autoridades de certificación reconocidas (FNMT, Camerfirma, etc.) en formato .p12 o .pfx."
  },
  {
    question: "¿Qué formato tienen las exportaciones CSV y XML?",
    answer: "Las exportaciones siguen los estándares contables más comunes. El XML cumple con el esquema Facturae y el CSV está estructurado para fácil importación en software contable."
  },
  {
    question: "¿CumpleFactura puede integrarse con ERP externos mediante API?",
    answer: "Sí, disponemos de una API RESTful completa que permite conectar CumpleFactura con cualquier ERP o sistema de gestión externo para sincronizar facturas y clientes."
  },
  {
    question: "¿Cómo funciona la trazabilidad de eventos?",
    answer: "Registramos cada evento (creación, firma, envío, anulación) con sello de tiempo y firma, creando un log de auditoría inalterable accesible desde el panel."
  },
  {
    question: "¿Qué datos recibe la gestoría automáticamente?",
    answer: "La gestoría recibe el resumen de facturación, los archivos XML/PDF de cada factura y un reporte de impuestos desglosado, todo descargable desde su acceso dedicado."
  }
];

export default function Resources() {
  return (
    <MainLayout>
      {/* 1. Hero */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
              Recursos para entender la factura electrónica y el cumplimiento legal.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Guías, artículos y documentación sobre Verifactu, MiFacturae, la normativa 2025–2026 y cómo usar CumpleFactura con WooCommerce.
            </p>
          </div>

          {/* 2. Artículos recomendados */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Artículos recomendados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-all cursor-pointer border-primary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {article.icon}
                      </div>
                      <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded-full text-slate-600">
                        {article.type}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-tight mb-2">{article.title}</CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium text-primary flex items-center">
                      Leer artículo <ArrowRight className="ml-1 h-3 w-3" />
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 3. Guías descargables */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Guías descargables</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {downloads.map((download, index) => (
                <Card key={index} className="hover:shadow-lg transition-all cursor-pointer bg-slate-50 dark:bg-slate-900/50">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                        {download.icon}
                      </div>
                      <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                        {download.type}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-tight mb-2">{download.title}</CardTitle>
                    <CardDescription>{download.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Descargar <Download className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Preguntas técnicas */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/20">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Preguntas técnicas</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full bg-background rounded-xl border px-6 py-2 shadow-sm">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 5. CTA Final */}
      <section className="py-20 container text-center">
        <div className="bg-primary rounded-3xl p-12 text-primary-foreground">
          <h2 className="text-3xl font-bold mb-6">Prepárate para la factura electrónica obligatoria.</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Todo lo que necesitas saber para cumplir la normativa y automatizar tu facturación.
          </p>
          <Button size="lg" variant="secondary" className="h-12 px-8 text-lg bg-white text-primary hover:bg-white/90" asChild>
            <Link to="/woocommerce-verifactu">
              Instalar CumpleFactura <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}