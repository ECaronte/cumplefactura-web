import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-primary">CumpleFactura</span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Facturación legal automática para WooCommerce: Verifactu, firma XAdES y MiFacturae.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Producto</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/como-funciona" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link to="/woocommerce-verifactu" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  Plugin para WooCommerce
                </Link>
              </li>
              <li>
                <Link to="/precios" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link to="/gestorias" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  Para Gestorías
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Recursos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/blog" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/recursos" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  Recursos y Guías
                </Link>
              </li>
              <li>
                <Link to="/woocommerce-verifactu" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  Verifactu
                </Link>
              </li>
              <li>
                <a href="mailto:soporte@cumplefactura.es" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/legal" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  Centro Legal
                </Link>
              </li>
              <li>
                <Link to="/aviso-legal" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link to="/politica-privacidad" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/politica-cookies" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link to="/terminos-condiciones" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-500 text-center md:text-left">
            © {currentYear} CumpleFactura. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}