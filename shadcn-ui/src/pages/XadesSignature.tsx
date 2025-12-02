import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileSignature, ShieldCheck, CheckCircle2, Lock, FileCheck, Briefcase, Store, ArrowRight, AlertTriangle, Key, FileCode } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function XadesSignature() {
  return (
    <MainLayout>
      {/* Hero / Header del Artículo */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-b">
        <div className="container max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mb-6">
            Guía Técnica Simplificada
          </div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-slate-900 dark:text-white leading-tight">
            Firma XAdES explicada para no técnicos: guía clara y completa
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mx-auto leading-relaxed max-w-3xl">
            Qué es la firma XAdES, por qué es obligatoria en facturación electrónica y cómo CumpleFactura la aplica automáticamente en WooCommerce.
          </p>
        </div>
      </section>

      <article className="container max-w-3xl py-16 space-y-16">
        
        {/* 1. Introducción */}
        <section className="prose prose-slate dark:prose-invert lg:prose-lg mx-auto">
          <p className="lead text-xl text-slate-600 dark:text-slate-300">
            La factura electrónica no es solo un cambio de papel a digital; es un cambio de paradigma basado en la confianza matemática. En este nuevo ecosistema, la <strong>firma digital</strong> es el pilar fundamental que sostiene la validez de cada documento.
          </p>
          <p>
            Aquí entra en juego un término que verás repetido en todas las normativas: <strong>XAdES</strong>. Aunque suena a tecnicismo complejo, es simplemente el estándar que ha elegido España y Europa para garantizar que una factura es auténtica y no ha sido manipulada.
          </p>
          <p>
            Emitir facturas sin firma digital verificable es como enviar contratos firmados con lápiz: cualquiera podría borrarlos o alterarlos sin dejar rastro. Con la nueva normativa 2025-2026, esto ya no es una opción. Afortunadamente, herramientas como <strong>CumpleFactura</strong> eliminan esta complejidad técnica, aplicando firmas XAdES válidas automáticamente a cada venta de tu tienda WooCommerce.
          </p>
        </section>

        {/* 2. ¿Qué es la firma digital XAdES? */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            ¿Qué es la firma digital XAdES? (Explicación sencilla)
          </h2>
          <div className="prose prose-slate dark:prose-invert lg:prose-lg mb-8">
            <p>
              XAdES (siglas de <em>XML Advanced Electronic Signatures</em>) es una forma avanzada de firma electrónica diseñada específicamente para documentos XML, como las facturas electrónicas.
            </p>
            <p>
              No pienses en ella como un garabato visual al pie de la página. Es un bloque de código criptográfico que viaja "dentro" o "junto" al archivo de la factura y garantiza tres cosas fundamentales:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border text-center">
              <Key className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">Autenticidad</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Certifica sin lugar a dudas quién es el emisor de la factura.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border text-center">
              <Lock className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">Integridad</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Asegura que ni una sola coma ha sido cambiada desde que se firmó.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border text-center">
              <ShieldCheck className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">Validez Legal</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Tiene plena validez ante la Agencia Tributaria y tribunales.
              </p>
            </div>
          </div>
        </section>

        {/* 3. ¿Por qué España requiere XAdES? */}
        <section className="bg-slate-50 dark:bg-slate-900/50 -mx-6 px-6 py-12 rounded-2xl border">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            ¿Por qué España requiere XAdES para facturación electrónica?
          </h2>
          <div className="prose prose-slate dark:prose-invert lg:prose-lg mb-6">
            <p>
              La Administración española ha apostado por XAdES por su robustez y su capacidad de contener información sobre el momento de la firma y el estado del certificado en ese instante. Esto es vital para:
            </p>
            <ul className="list-none pl-0 space-y-2">
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2"/> Evitar manipulaciones y fraudes fiscales.</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2"/> Garantizar la interoperabilidad entre diferentes plataformas de software.</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2"/> Permitir la conexión directa con el sistema público MiFacturae.</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2"/> Fortalecer el ecosistema de "software verificable" (Verifactu).</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-l-4 border-primary shadow-sm">
            <p className="text-lg font-medium text-slate-800 dark:text-slate-200 italic">
              “Una factura puede parecer válida en PDF, pero sin firma XAdES no tiene garantías legales de integridad.”
            </p>
          </div>
        </section>

        {/* 4. Cómo funciona XAdES paso a paso */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            Cómo funciona XAdES paso a paso (para no técnicos)
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Imagina que envías una carta importante. Para asegurarte de que nadie la lee ni la cambia por el camino, haces lo siguiente:
            </p>
            <div className="grid gap-4">
              {[
                { step: "1. El Documento", desc: "Generas la factura con todos sus datos (importes, impuestos, cliente)." },
                { step: "2. El Hash (Huella)", desc: "El sistema calcula una 'huella digital' única de ese documento. Si cambias un solo número, la huella cambia totalmente." },
                { step: "3. El Sellado", desc: "Cifras esa huella con tu Certificado Digital (tu llave privada). Esto es la firma." },
                { step: "4. El Envío", desc: "Envías la factura junto con ese sello cifrado (el paquete XAdES)." },
                { step: "5. La Verificación", desc: "El receptor usa tu llave pública para descifrar el sello y comprobar que la huella coincide con el documento recibido." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start p-4 bg-white dark:bg-slate-950 rounded-lg border shadow-sm">
                  <div className="bg-primary/10 text-primary font-bold px-3 py-1 rounded mr-4 text-sm whitespace-nowrap mt-1">
                    Paso {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">{item.step.split('. ')[1]}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-600 dark:text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
              “Es como sellar un sobre con un precinto único: si alguien lo abre o manipula, se nota inmediatamente.”
            </p>
          </div>
        </section>

        {/* 5. Tipos de XAdES */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            Tipos de XAdES (de forma comprensible)
          </h2>
          <div className="prose prose-slate dark:prose-invert lg:prose-lg mb-6">
            <p>
              Existen varios "sabores" de XAdES según cuánta información extra contienen. No necesitas memorizarlos, pero es bueno saber que existen:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
              <li className="bg-slate-50 dark:bg-slate-900 p-3 rounded border"><strong className="text-primary">XAdES-BES:</strong> La forma básica. Firma simple.</li>
              <li className="bg-slate-50 dark:bg-slate-900 p-3 rounded border"><strong className="text-primary">XAdES-EPES:</strong> Incluye políticas de firma.</li>
              <li className="bg-slate-50 dark:bg-slate-900 p-3 rounded border"><strong className="text-primary">XAdES-T:</strong> Añade un sello de tiempo (Timestamp) para probar cuándo se firmó.</li>
              <li className="bg-slate-50 dark:bg-slate-900 p-3 rounded border"><strong className="text-primary">XAdES-X-L:</strong> Incluye datos de revocación para validación a largo plazo.</li>
            </ul>
            <p>
              <strong>CumpleFactura</strong> selecciona y aplica automáticamente la variante adecuada (generalmente EPES o T) según lo que exija la normativa vigente en cada momento.
            </p>
          </div>
        </section>

        {/* 6. ¿Por qué es obligatoria? */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            ¿Por qué es obligatoria la firma XAdES en facturación?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-bold">Cumplimiento Legal</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Es el único modo de garantizar la autenticidad exigida por el Reglamento de Facturación.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-bold">Prevención de Fraude</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Impide la modificación retroactiva de facturas (borrado de ventas).</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-bold">Interoperabilidad</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Permite que el software de tu cliente "entienda" y valide tu factura automáticamente.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl flex items-center justify-center">
              <FileSignature className="h-24 w-24 text-slate-300 dark:text-slate-600" />
            </div>
          </div>
        </section>

        {/* 7. Problemas de no usar firma digital */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            Problemas de no usar firma digital en WooCommerce
          </h2>
          <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-100 dark:border-red-900/30 mb-6">
            <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4 flex items-center">
              <AlertTriangle className="h-6 w-6 mr-2" />
              El riesgo de los PDFs simples
            </h3>
            <ul className="space-y-2 text-red-800 dark:text-red-300">
              <li>• Tus facturas son fácilmente manipulables.</li>
              <li>• No cumplen con la normativa de software verificable 2026.</li>
              <li>• Tu gestoría no puede validar técnicamente la integridad de los datos.</li>
              <li>• Te expones a sanciones en caso de inspección tributaria.</li>
            </ul>
          </div>
          <p className="text-center text-lg font-bold text-slate-800 dark:text-slate-200">
            “WooCommerce genera PDFs, pero no genera facturas electrónicas firmadas.”
          </p>
        </section>

        {/* 8. Cómo CumpleFactura aplica XAdES */}
        <section className="bg-primary/5 border border-primary/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">
            Cómo CumpleFactura aplica XAdES automáticamente
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-bold">Firma Invisible</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Se genera en segundo plano para cada pedido completado.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-bold">Integración con Certificado</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Usamos tu certificado digital de forma segura para firmar.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-bold">Hash + Verifactu</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Además de firmar, generamos el registro de alta y la huella hash.</p>
                </div>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-bold">Exportación Válida</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Descarga XMLs firmados listos para tu gestoría o la AEAT.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-bold">Cero Complejidad</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Tú sigues vendiendo, nosotros nos encargamos de la criptografía.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-bold">Preparado para 2026</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Tu tienda lista para la obligación B2B universal.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* 9. FAQs */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">¿Necesito saber criptografía para usar XAdES?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                No. CumpleFactura se encarga de toda la parte técnica. Tú solo necesitas tu certificado digital estándar.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">¿Puedo firmar facturas en WooCommerce sin plugin?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                No. WooCommerce por defecto no tiene capacidad de firma digital criptográfica. Necesitas una extensión especializada como CumpleFactura.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">¿Qué pasa si modifico una factura firmada?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                La firma se rompería y la factura perdería su validez. Por eso, cualquier cambio debe hacerse mediante una factura rectificativa, como exige la ley.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">¿XAdES es lo mismo que una firma manuscrita en PDF?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                No. Una imagen de tu firma en un PDF no tiene valor criptográfico ni garantiza la integridad del documento. XAdES es un estándar técnico avanzado.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">¿CumpleFactura cumple XAdES + Verifactu + 2026?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                Sí. Nuestra solución está diseñada para cubrir todo el espectro de la nueva normativa de facturación.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">¿Qué certificado necesito?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                Cualquier certificado digital cualificado válido (FNMT, Camerfirma, etc.) emitido a nombre del autónomo o representante de la empresa.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-medium">¿Las gestorías pueden validar firmas XAdES?</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-400">
                Sí. Existen herramientas públicas (como VALIDe) y software profesional que permiten a las gestorías verificar la validez de tus facturas firmadas al instante.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

      </article>

      {/* 10. CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            Firma XAdES automática en WooCommerce con CumpleFactura
          </h2>
          <p className="text-xl opacity-90 mb-8">
            CumpleFactura genera y firma tus facturas electrónicamente con XAdES, añade trazabilidad Verifactu y te prepara para la normativa 2025–2026.
          </p>
          <Button asChild size="lg" variant="secondary" className="h-12 px-8 text-lg font-bold bg-white text-primary hover:bg-white/90">
            <Link to="/woocommerce-verifactu">
              Instalar CumpleFactura <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}