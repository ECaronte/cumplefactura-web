import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, Tag, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const featuredArticles = [
  {
    title: "Guía completa sobre Verifactu (2025): qué es, cómo funciona y por qué será obligatorio",
    category: "Verifactu",
    date: "Oct 2024"
  },
  {
    title: "Factura electrónica obligatoria 2025–2026: requisitos, plazos y cómo prepararte",
    category: "Normativa",
    date: "Oct 2024"
  },
  {
    title: "Qué es la firma digital XAdES y por qué será obligatoria",
    category: "Tecnología",
    date: "Sep 2024"
  },
  {
    title: "WooCommerce + Verifactu: checklist de preparación",
    category: "WooCommerce",
    date: "Sep 2024"
  },
  {
    title: "Exportaciones CSV, XML y API para gestorías: cómo funcionan y cómo importarlas",
    category: "Gestorías",
    date: "Ago 2024"
  }
];

const categories = [
  "Verifactu",
  "Factura electrónica 2026",
  "MiFacturae",
  "Firma digital XAdES",
  "WooCommerce Legal",
  "Guías para Gestorías",
  "Exportaciones CSV/XML/API",
  "Normativa fiscal española"
];

const recentPosts = [
  {
    title: "Calendario real de implantación de la factura electrónica en España",
    excerpt: "Fechas clave que todo autónomo y empresa debe conocer para evitar sanciones.",
    date: "Hace 2 días"
  },
  {
    title: "Cómo funciona la cadena hash de Verifactu paso a paso",
    excerpt: "Explicación técnica simplificada sobre la inmutabilidad de las facturas.",
    date: "Hace 5 días"
  },
  {
    title: "Los errores más comunes de los autónomos al facturar (y cómo evitarlos)",
    excerpt: "Repaso de los fallos frecuentes que pueden derivar en problemas con Hacienda.",
    date: "Hace 1 semana"
  },
  {
    title: "Cómo conectar tu certificado digital en CumpleFactura",
    excerpt: "Tutorial rápido para configurar tu firma electrónica en minutos.",
    date: "Hace 2 semanas"
  },
  {
    title: "Cómo importar facturas de WooCommerce sin perder tiempo (especial gestorías)",
    excerpt: "Mejora el flujo de trabajo entre tienda online y asesoría fiscal.",
    date: "Hace 3 semanas"
  }
];

export default function Blog() {
  return (
    <MainLayout>
      <Helmet>
        <title>Blog sobre factura electrónica y VeriFactu · CumpleFactura</title>
        <meta
          name="description"
          content="Artículos, guías y recursos prácticos sobre factura electrónica, VeriFactu, firma con certificado digital y normativa para autónomos y gestorías."
        />
        <link rel="canonical" href="https://cumplefactura.es/blog" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog sobre factura electrónica y VeriFactu · CumpleFactura" />
        <meta
          property="og:description"
          content="Mantente al día con las novedades sobre factura electrónica, VeriFactu y obligaciones fiscales."
        />
        <meta property="og:url" content="https://cumplefactura.es/blog" />
        <meta property="og:image" content="https://cumplefactura.es/og/recursos.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog sobre factura electrónica y VeriFactu · CumpleFactura" />
        <meta
          name="twitter:description"
          content="Artículos y guías para entender y aplicar la normativa sin perder tiempo."
        />
        <meta name="twitter:image" content="https://cumplefactura.es/og/recursos.png" />
      </Helmet>
      {/* 1. Hero */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-b">
        <div className="container text-center max-w-4xl">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-6">
            Blog & Recursos
          </div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
            Guías, análisis y recursos sobre factura electrónica y cumplimiento legal.
          </h1>
          <p className="text-xl text-muted-foreground mx-auto">
            Artículos claros y prácticos para autónomos, gestorías y negocios con WooCommerce. Todo sobre Verifactu, MiFacturae, firma digital XAdES, RD 1007/2023 y la nueva factura electrónica 2025–2026.
          </p>
        </div>
      </section>

      <div className="container py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content Column */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* 2. Featured Articles */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <BookOpen className="mr-2 h-6 w-6 text-primary" />
              Artículos destacados
            </h2>
            <div className="grid gap-6">
              {featuredArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-md transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Calendar className="mr-1 h-3 w-3" /> {article.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* 4. Recent Posts */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Publicaciones recientes</h2>
            <div className="grid gap-8">
              {recentPosts.map((post, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start border-b pb-8 last:border-0">
                  <div className="w-full md:w-48 h-32 bg-slate-200 dark:bg-slate-800 rounded-lg flex-shrink-0 animate-pulse" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                      <User className="h-3 w-3" /> Redacción
                      <span>•</span>
                      <Calendar className="h-3 w-3" /> {post.date}
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-primary cursor-pointer transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <Button variant="link" className="p-0 h-auto font-semibold">
                      Leer más <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4 space-y-12">
          
          {/* 3. Categories */}
          <section className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Tag className="mr-2 h-5 w-5 text-primary" />
              Categorías
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1.5 bg-white dark:bg-slate-800 border rounded-md text-sm font-medium hover:border-primary hover:text-primary cursor-pointer transition-colors"
                >
                  {category}
                </span>
              ))}
            </div>
          </section>

          {/* Newsletter / Promo Box */}
          <div className="bg-primary text-primary-foreground p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">¿Eres gestoría?</h3>
            <p className="mb-6 opacity-90">
              Descubre cómo automatizar la recepción de facturas de tus clientes con WooCommerce.
            </p>
            <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/gestorias">Ver solución para gestorías</Link>
            </Button>
          </div>

        </div>
      </div>

      {/* 5. CTA Medio */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-y">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">
            Automatiza tu facturación y cumple la ley sin esfuerzo.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Verifactu, firma digital XAdES y exportaciones profesionales. Todo en WooCommerce.
          </p>
          <Button size="lg" className="px-8" asChild>
            <Link to="/woocommerce-verifactu">
              Instalar CumpleFactura <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* 6. CTA Final */}
      <section className="py-24 container text-center">
        <div className="bg-primary rounded-3xl p-12 text-primary-foreground relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Preparado para automatizar tu facturación? Empieza hoy.
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              WooCommerce → Firma digital → Verifactu → Exportación profesional.
            </p>
            <Button size="lg" variant="secondary" className="h-12 px-8 text-lg bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/precios">
                Empezar gratis <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
        </div>
      </section>
    </MainLayout>
  );
}