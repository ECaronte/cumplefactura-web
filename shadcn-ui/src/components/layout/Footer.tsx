import { Link } from "react-router-dom";
import { ShieldCheck, FileText, Scale, Cookie, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 md:py-16 border-t border-slate-800">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-xl text-white mb-4"
            >
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                <ShieldCheck className="h-5 w-5" />
              </div>
              CumpleFactura
            </Link>
            <p className="text-slate-400 max-w-sm mb-6">
              La solución definitiva para facturar desde WooCommerce cumpliendo
              con la Ley Antifraude y la Ley Crea y Crece.
            </p>
            <div className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} CumpleFactura. Todos los
              derechos reservados.
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Producto</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/woocommerce-verifactu"
                  className="hover:text-white transition-colors"
                >
                  Plugin WooCommerce
                </Link>
              </li>
              <li>
                <Link
                  to="/precios"
                  className="hover:text-white transition-colors"
                >
                  Precios
                </Link>
              </li>
              <li>
                <Link
                  to="/como-funciona"
                  className="hover:text-white transition-colors"
                >
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link
                  to="/gestorias"
                  className="hover:text-white transition-colors"
                >
                  Gestorías
                </Link>
              </li>
              <li>
                <Link
                  to="/integraciones"
                  className="hover:text-white transition-colors"
                >
                  Integraciones
                </Link>
              </li>
              <li>
                <Link
                  to="/seguridad-y-cumplimiento"
                  className="hover:text-white transition-colors"
                >
                  Seguridad y Cumplimiento
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/recursos"
                  className="hover:text-white transition-colors"
                >
                  Centro de Recursos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/verifactu"
                  className="hover:text-white transition-colors"
                >
                  Guía Verifactu
                </Link>
              </li>
              <li>
                <Link
                  to="/factura-electronica-2027"
                  className="hover:text-white transition-colors"
                >
                  Factura Electrónica
                </Link>
              </li>
              <li>
                <Link
                  to="/firma-xades"
                  className="hover:text-white transition-colors"
                >
                  Firma XAdES
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/legal"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Scale className="h-4 w-4" /> Centro Legal
                </Link>
              </li>
              <li>
                <Link
                  to="/aviso-legal"
                  className="hover:text-white transition-colors"
                >
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link
                  to="/politica-privacidad"
                  className="hover:text-white transition-colors"
                >
                  Privacidad
                </Link>
              </li>
              <li>
                <Link
                  to="/politica-cookies"
                  className="hover:text-white transition-colors"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  to="/terminos-condiciones"
                  className="hover:text-white transition-colors"
                >
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>Hecho con seguridad y cumplimiento en mente.</p>
          <div className="flex gap-6">
            <Link to="/aviso-legal" className="hover:text-slate-300">
              Legal
            </Link>
            <Link to="/politica-privacidad" className="hover:text-slate-300">
              Privacidad
            </Link>
            <Link to="/contacto" className="hover:text-slate-300">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
