import MainLayout from '@/layouts/MainLayout';
import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
  return (
    <MainLayout>
      <Helmet>
        <title>Política de privacidad · CumpleFactura</title>
        <meta name="description" content="Cómo tratamos tus datos personales en CumpleFactura." />
        <link rel="canonical" href="https://cumplefactura.es/politica-privacidad" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Política de privacidad · CumpleFactura" />
        <meta property="og:description" content="Cómo tratamos tus datos personales en CumpleFactura." />
        <meta property="og:url" content="https://cumplefactura.es/politica-privacidad" />
        <meta property="og:image" content="https://cumplefactura.es/og/home.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Política de privacidad · CumpleFactura" />
        <meta name="twitter:description" content="Cómo tratamos tus datos personales en CumpleFactura." />
        <meta name="twitter:image" content="https://cumplefactura.es/og/home.png" />
      </Helmet>
      {/* Hero */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-b">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
            Política de Privacidad
          </h1>
          <p className="text-xl text-muted-foreground mx-auto">
            Cómo tratamos tus datos personales según el RGPD y la LOPDGDD.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 container max-w-3xl space-y-12 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        
        {/* Responsable del tratamiento */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Responsable del tratamiento</h2>
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border mb-6">
            <p><strong>Titular:</strong> [Nombre o razón social]</p>
            <p><strong>NIF:</strong> [XXXXXXX]</p>
            <p><strong>Email de contacto:</strong> soporte@cumplefactura.es</p>
            <p><strong>Domicilio:</strong> [Dirección]</p>
          </div>
          <p>
            El presente documento explica cómo tratamos los datos personales recopilados a través del sitio web cumplefactura.es y del servicio CumpleFactura.
          </p>
        </div>

        {/* Datos personales que tratamos */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Datos personales que tratamos</h2>
          <p className="mb-4">Tratamos únicamente los datos necesarios para prestar nuestros servicios:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Datos de contacto (nombre, email)</li>
            <li>Datos de facturación del usuario</li>
            <li>Datos legales relacionados con la generación de facturas (hash Verifactu, firma XAdES, timestamps)</li>
            <li>Información técnica necesaria para funcionamiento y seguridad</li>
            <li>Logs internos de actividad del software (cumplimiento normativo)</li>
          </ul>
          <p>No solicitamos datos innecesarios ni excesivos.</p>
        </div>

        {/* Finalidad del tratamiento */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Finalidad del tratamiento</h2>
          <p className="mb-4">Usamos los datos para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Prestar el servicio CumpleFactura</li>
            <li>Cumplir las obligaciones legales de facturación</li>
            <li>Generar, firmar y registrar facturas según normativa</li>
            <li>Proporcionar soporte técnico</li>
            <li>Gestionar cuentas de usuario</li>
            <li>Mejorar el funcionamiento del software</li>
            <li>Enviar comunicaciones estrictamente necesarias sobre el servicio</li>
          </ul>
        </div>

        {/* Legitimación */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Legitimación</h2>
          <p className="mb-4">Tratamos los datos en base a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>La ejecución del contrato (uso del plugin CumpleFactura)</li>
            <li>El cumplimiento de obligaciones legales (factura electrónica, Verifactu, RD 1007/2023)</li>
            <li>El interés legítimo para seguridad y prevención de fraude</li>
            <li>El consentimiento cuando sea necesario</li>
          </ul>
        </div>

        {/* Conservación de datos */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Conservación de datos</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Los datos de facturación se conservan un mínimo de 5 años, según la normativa fiscal española.</li>
            <li>Los registros técnicos (hash, firma, logs) se conservan según exige la normativa de software verificable (Verifactu).</li>
            <li>Los datos de contacto se conservan mientras el usuario mantenga su cuenta o hasta que solicite su supresión.</li>
          </ul>
        </div>

        {/* Destinatarios */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Destinatarios</h2>
          <p className="mb-4">
            No vendemos ni cedemos datos a terceros. Solo se comparten con proveedores tecnológicos bajo contratos de tratamiento (hosting, almacenamiento cifrado, sistemas de soporte).
          </p>
          <p>
            En ningún caso se comparten datos con terceros con fines comerciales.
          </p>
        </div>

        {/* Derechos del usuario */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Derechos del usuario</h2>
          <p className="mb-4">El usuario puede:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Acceder a sus datos</li>
            <li>Rectificar datos inexactos</li>
            <li>Solicitar la supresión</li>
            <li>Oponerse al tratamiento</li>
            <li>Solicitar la limitación</li>
            <li>Solicitar la portabilidad</li>
            <li>Presentar una reclamación ante la AEPD</li>
          </ul>
          <p>Para ejercer derechos: <strong>soporte@cumplefactura.es</strong></p>
        </div>

        {/* Seguridad */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Seguridad</h2>
          <p className="mb-4">CumpleFactura implementa medidas técnicas avanzadas:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Cifrado</li>
            <li>Firma digital XAdES</li>
            <li>Hash Verifactu</li>
            <li>Registros de integridad</li>
            <li>Control de acceso</li>
            <li>Protocolos seguros</li>
            <li>Copias de seguridad internas</li>
          </ul>
          <p>Protección de datos conforme al RGPD y LOPDGDD</p>
        </div>

        {/* Cambios en esta política */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Cambios en esta política</h2>
          <p>
            La presente política puede actualizarse cuando sea necesario para cumplir cambios legales o mejorar nuestra forma de proceder. Notificaremos cualquier modificación importante.
          </p>
        </div>

      </section>
    </MainLayout>
  );
}