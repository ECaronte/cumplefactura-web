import MainLayout from '@/layouts/MainLayout';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, FileText, Cookie, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';

export default function LegalIndex() {
  const legalPages = [
    {
      title: "Aviso Legal",
      description: "Información sobre la titularidad del sitio, condiciones generales de uso y responsabilidades.",
      link: "/aviso-legal",
      icon: <Shield className="h-8 w-8 text-primary" />,
      buttonText: "Ver Aviso Legal"
    },
    {
      title: "Política de Privacidad",
      description: "Explicamos cómo tratamos tus datos personales según el RGPD y la LOPDGDD.",
      link: "/politica-privacidad",
      icon: <FileText className="h-8 w-8 text-primary" />,
      buttonText: "Ver Política de Privacidad"
    },
    {
      title: "Política de Cookies",
      description: "Información sobre las cookies que utilizamos y cómo puedes gestionarlas en tu navegador.",
      link: "/politica-cookies",
      icon: <Cookie className="h-8 w-8 text-primary" />,
      buttonText: "Ver Política de Cookies"
    },
    {
      title: "Términos y Condiciones",
      description: "Condiciones de uso del servicio CumpleFactura y del sitio web.",
      link: "/terminos-condiciones",
      icon: <Scale className="h-8 w-8 text-primary" />,
      buttonText: "Ver Términos y Condiciones"
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>Información legal · CumpleFactura</title>
        <meta name="description" content="Accede a las páginas legales de CumpleFactura: aviso legal, privacidad, cookies y términos de uso." />
        <link rel="canonical" href="https://cumplefactura.es/legal" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Información legal · CumpleFactura" />
        <meta property="og:description" content="Accede a las páginas legales de CumpleFactura: aviso legal, privacidad, cookies y términos de uso." />
        <meta property="og:url" content="https://cumplefactura.es/legal" />
        <meta property="og:image" content="https://cumplefactura.es/og/home.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Información legal · CumpleFactura" />
        <meta name="twitter:description" content="Accede a las páginas legales de CumpleFactura: aviso legal, privacidad, cookies y términos de uso." />
        <meta name="twitter:image" content="https://cumplefactura.es/og/home.png" />
      </Helmet>
      {/* Hero */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-b">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
            Información legal de CumpleFactura
          </h1>
          <p className="text-xl text-muted-foreground mx-auto">
            Accede desde aquí a todas las páginas legales de CumpleFactura: aviso legal, privacidad, cookies y términos de uso del servicio.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 container max-w-3xl text-center">
        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          CumpleFactura es un servicio de facturación legal para WooCommerce.
          Para garantizar la transparencia y el cumplimiento normativo, ponemos a tu disposición toda la información legal y de privacidad relacionada con el uso de este sitio web y del plugin CumpleFactura.
        </p>
      </section>

      {/* Index Cards */}
      <section className="py-8 pb-20 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {legalPages.map((page, index) => (
            <div key={index} className="bg-white dark:bg-slate-950 p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow flex flex-col items-start">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg">
                {page.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {page.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                {page.description}
              </p>
              <Button asChild variant="outline" className="group">
                <Link to={page.link}>
                  {page.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-t">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            ¿Tienes dudas legales o de privacidad?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Si necesitas más información sobre cualquiera de estas políticas o sobre cómo tratamos tus datos, puedes escribirnos a <a href="mailto:soporte@cumplefactura.es" className="text-primary font-medium hover:underline">soporte@cumplefactura.es</a>.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}