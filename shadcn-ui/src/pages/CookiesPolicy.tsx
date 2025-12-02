import MainLayout from '@/layouts/MainLayout';
import { Helmet } from 'react-helmet-async';

export default function CookiesPolicy() {
  return (
    <MainLayout>
      <Helmet>
        <title>Política de cookies · CumpleFactura</title>
        <meta name="description" content="Información sobre el uso de cookies en CumpleFactura." />
        <link rel="canonical" href="https://cumplefactura.es/politica-cookies" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Política de cookies · CumpleFactura" />
        <meta property="og:description" content="Información sobre el uso de cookies en CumpleFactura." />
        <meta property="og:url" content="https://cumplefactura.es/politica-cookies" />
        <meta property="og:image" content="https://cumplefactura.es/og/home.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Política de cookies · CumpleFactura" />
        <meta name="twitter:description" content="Información sobre el uso de cookies en CumpleFactura." />
        <meta name="twitter:image" content="https://cumplefactura.es/og/home.png" />
      </Helmet>
      {/* Hero */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-b">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
            Política de Cookies
          </h1>
          <p className="text-xl text-muted-foreground mx-auto">
            Información sobre qué cookies utiliza CumpleFactura.es y cómo puedes gestionarlas.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 container max-w-3xl space-y-12 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        
        {/* ¿Qué son las cookies? */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">¿Qué son las cookies?</h2>
          <p>
            Las cookies son archivos pequeños que se almacenan en tu dispositivo cuando navegas por sitios web. Sirven para recordar tus preferencias, mejorar tu experiencia de uso y recopilar información anónima con fines estadísticos.
          </p>
        </div>

        {/* Tipos de cookies utilizadas por CumpleFactura */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Tipos de cookies utilizadas por CumpleFactura</h2>
          <p className="mb-4">El sitio cumplefactura.es utiliza las siguientes categorías de cookies:</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">✔ Cookies técnicas (necesarias)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Permiten que el sitio funcione correctamente.</li>
                <li>Incluyen: navegación, seguridad, sesión, acceso a áreas restringidas, etc.</li>
                <li>Estas cookies no requieren consentimiento.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">✔ Cookies funcionales</h3>
              <p>Permiten recordar ciertas preferencias del usuario, como idioma o ajustes opcionales del sitio.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">✔ Cookies analíticas</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Se utilizan para obtener información estadística sobre el uso del sitio y mejorar su funcionamiento.</li>
                <li>Ejemplos: Google Analytics o servicios equivalentes.</li>
              </ul>
              <p className="mt-2 text-sm text-muted-foreground">Nota: Si no se está utilizando ninguna herramienta analítica todavía, puedes dejar este apartado en modo informativo.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">✔ Cookies de terceros</h3>
              <p className="mb-2">Algunas herramientas externas pueden instalar cookies para su funcionamiento. Ejemplos habituales:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google (analítica)</li>
                <li>Proveedores de alojamiento o herramientas internas</li>
                <li>Servicios integrados externos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ¿Cómo gestionar o desactivar las cookies? */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">¿Cómo gestionar o desactivar las cookies?</h2>
          <p className="mb-4">
            Puedes configurar tu navegador para aceptar, bloquear o eliminar cookies. A continuación se indican los enlaces a las instrucciones de los navegadores principales:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Firefox
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Safari
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/es-es/help/4027947" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Edge
              </a>
            </li>
          </ul>
        </div>

        {/* Consentimiento de cookies */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Consentimiento de cookies</h2>
          <p>
            Si continúas navegando por este sitio web, se entenderá que aceptas el uso de las cookies descritas, salvo que las desactives manualmente en tu navegador.
          </p>
        </div>

        {/* Modificaciones en esta política */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Modificaciones en esta política</h2>
          <p>
            CumpleFactura podrá actualizar esta Política de Cookies cuando sea necesario, para adaptarla a cambios legales o técnicos. Se recomienda revisarla periódicamente.
          </p>
        </div>

      </section>
    </MainLayout>
  );
}