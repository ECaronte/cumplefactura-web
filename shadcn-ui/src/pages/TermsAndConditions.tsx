import MainLayout from '@/layouts/MainLayout';

export default function TermsAndConditions() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-b">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
            Términos y Condiciones
          </h1>
          <p className="text-xl text-muted-foreground mx-auto">
            Condiciones de uso del servicio CumpleFactura y de este sitio web.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 container max-w-3xl space-y-12 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        
        {/* Objeto del contrato */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Objeto del contrato</h2>
          <p>
            Los presentes Términos y Condiciones regulan el acceso y uso del sitio web cumplefactura.es y del servicio CumpleFactura, un plugin de facturación legal para WooCommerce que automatiza la generación, firma y verificación de facturas.
          </p>
        </div>

        {/* Aceptación del usuario */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Aceptación del usuario</h2>
          <p className="mb-4">
            Al utilizar CumpleFactura o navegar por este sitio web, el usuario acepta íntegramente estas condiciones.
          </p>
          <p>
            Si no está de acuerdo, debe abstenerse de usar el servicio.
          </p>
        </div>

        {/* Condiciones de uso del plugin */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Condiciones de uso del plugin</h2>
          <p className="mb-4">El usuario se compromete a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proporcionar datos veraces y actualizados.</li>
            <li>Utilizar correctamente su certificado digital para la firma XAdES.</li>
            <li>No manipular las facturas generadas automáticamente.</li>
            <li>No utilizar CumpleFactura para actividades ilegales o fraudulentas.</li>
            <li>Mantener la seguridad de sus credenciales de acceso.</li>
          </ul>
        </div>

        {/* Tarifas y facturación */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Tarifas y facturación</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>CumpleFactura dispone de planes gratuitos y de pago.</li>
            <li>El precio de cada plan es público y puede actualizarse con notificación previa.</li>
            <li>El usuario puede cambiar o cancelar su plan cuando lo desee.</li>
          </ul>
        </div>

        {/* Propiedad intelectual */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Propiedad intelectual</h2>
          <p className="mb-4">
            Todo el software, contenido, diseño e identidad visual del servicio CumpleFactura es propiedad del titular.
          </p>
          <p>
            El usuario no adquiere ningún derecho de propiedad intelectual por el uso del servicio.
          </p>
        </div>

        {/* Limitación de responsabilidad */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Limitación de responsabilidad</h2>
          <p className="mb-4">
            CumpleFactura realiza todos los esfuerzos razonables para garantizar la disponibilidad y correcto funcionamiento del servicio, pero no asume responsabilidad por:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Fallos técnicos externos</li>
            <li>Errores derivados del uso incorrecto por parte del usuario</li>
            <li>Uso indebido del certificado digital</li>
            <li>Problemas causados por plugins o configuraciones de terceros</li>
          </ul>
          <p>
            El usuario es responsable de cumplir las obligaciones fiscales y legales correspondientes a su actividad.
          </p>
        </div>

        {/* Soporte técnico */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Soporte técnico</h2>
          <p className="mb-4">
            El soporte incluido depende del plan contratado.
          </p>
          <p>
            El usuario puede contactar en <strong>soporte@cumplefactura.es</strong>.
          </p>
        </div>

        {/* Modificaciones del servicio */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Modificaciones del servicio</h2>
          <p className="mb-4">
            El titular puede actualizar, mejorar o modificar CumpleFactura cuando sea necesario para:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Cumplir cambios legales</li>
            <li>Mejorar la seguridad</li>
            <li>Añadir nuevas funcionalidades</li>
          </ul>
          <p>
            Las actualizaciones importantes se notificarán previamente.
          </p>
        </div>

        {/* Legislación aplicable */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Legislación aplicable</h2>
          <p className="mb-4">
            Estos términos se rigen por la legislación española.
          </p>
          <p>
            Cualquier disputa se resolverá en los tribunales del domicilio del usuario, salvo que la ley disponga lo contrario.
          </p>
        </div>

      </section>
    </MainLayout>
  );
}