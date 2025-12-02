import MainLayout from '@/layouts/MainLayout';
import { Helmet } from 'react-helmet-async';

export default function LegalNotice() {
  return (
    <MainLayout>
      <Helmet>
        <title>Aviso legal · CumpleFactura</title>
        <meta name="description" content="Información legal y datos del titular de CumpleFactura." />
        <link rel="canonical" href="https://cumplefactura.es/aviso-legal" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aviso legal · CumpleFactura" />
        <meta property="og:description" content="Información legal y datos del titular de CumpleFactura." />
        <meta property="og:url" content="https://cumplefactura.es/aviso-legal" />
        <meta property="og:image" content="https://cumplefactura.es/og/home.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Aviso legal · CumpleFactura" />
        <meta name="twitter:description" content="Información legal y datos del titular de CumpleFactura." />
        <meta name="twitter:image" content="https://cumplefactura.es/og/home.png" />
      </Helmet>
      {/* Hero */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-b">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
            Aviso Legal
          </h1>
          <p className="text-xl text-muted-foreground mx-auto">
            Información sobre la titularidad, uso y condiciones del sitio web CumpleFactura.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 container max-w-3xl space-y-12 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        
        {/* Identidad del Titular */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Identidad del Titular</h2>
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border">
            <p><strong>CumpleFactura.es</strong></p>
            <p><strong>Titular:</strong> [Nombre de tu sociedad o autónomo]</p>
            <p><strong>NIF:</strong> [XXXXXXX]</p>
            <p><strong>Domicilio fiscal:</strong> [Dirección completa]</p>
            <p><strong>Email de contacto:</strong> soporte@cumplefactura.es</p>
          </div>
        </div>

        {/* Objeto del sitio web */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Objeto del sitio web</h2>
          <p>
            El sitio web cumplefactura.es ofrece información y acceso al servicio CumpleFactura, un plugin de facturación legal para WooCommerce que implementa Verifactu, firma digital XAdES y automatización de facturación.
          </p>
        </div>

        {/* Condiciones de uso */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Condiciones de uso</h2>
          <p className="mb-4">
            El acceso y navegación por este sitio web implica la aceptación de las presentes condiciones. El usuario se compromete a utilizar el sitio web, sus servicios y contenidos de conformidad con la legislación vigente, la buena fe y el orden público.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Acceso y navegación:</strong> El acceso al sitio es libre y gratuito, salvo en lo relativo al coste de conexión.</li>
            <li><strong>Obligaciones del usuario:</strong> El usuario se obliga a usar los contenidos de forma diligente, correcta y lícita.</li>
            <li><strong>Prohibiciones:</strong> Queda prohibido utilizar el sitio con fines ilícitos, lesivos o que puedan dañar o impedir el normal funcionamiento del sitio.</li>
            <li><strong>Responsabilidad:</strong> El usuario es el único responsable de las infracciones en las que pueda incurrir o de los perjuicios que pueda causar por el uso inadecuado del sitio.</li>
            <li><strong>Uso del plugin:</strong> El uso del software CumpleFactura se regirá por sus propias condiciones de contratación y licencia.</li>
          </ul>
        </div>

        {/* Propiedad intelectual */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Propiedad intelectual</h2>
          <p className="mb-4">
            La marca “CumpleFactura” y su logotipo son propiedad del titular.
          </p>
          <p className="mb-4">
            Todo el contenido del sitio (textos, imágenes, diseño, código fuente) está protegido por derechos de propiedad intelectual e industrial.
          </p>
          <p>
            No se permite su reproducción, distribución, comunicación pública o transformación sin autorización expresa y por escrito del titular.
          </p>
        </div>

        {/* Responsabilidad del titular */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Responsabilidad del titular</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>No se garantiza la disponibilidad permanente del sitio ni la inexistencia de virus u otros elementos lesivos.</li>
            <li>El titular no se hace responsable del uso indebido del plugin por parte del usuario ni de los errores en la configuración del mismo.</li>
            <li>No se asume responsabilidad por fallos técnicos ajenos al software, cortes de internet o problemas derivados de servicios de terceros.</li>
          </ul>
        </div>

        {/* Legislación aplicable */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Legislación aplicable</h2>
          <p>
            Esta página se rige por la legislación española. Cualquier disputa o controversia relacionada con este sitio web se resolverá en los tribunales del domicilio del usuario, salvo que la ley aplicable disponga imperativamente lo contrario.
          </p>
        </div>

      </section>
    </MainLayout>
  );
}