import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-brand-light">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Columna 1 - Marca */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed">
              CumpleFactura es una solución privada que ayuda a autónomos y pymes a cumplir la normativa española de facturación. No forma parte de la Agencia Tributaria.
            </p>
          </div>

          {/* Columna 2 - Producto */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary">Producto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link to="/como-funciona" className="hover:text-primary transition-colors">Cómo funciona</Link></li>
              <li><Link to="/woocommerce-verifactu" className="hover:text-primary transition-colors">WooCommerce / VerifactuWoo</Link></li>
              <li><Link to="/precios" className="hover:text-primary transition-colors">Precios</Link></li>
              <li><Link to="/gestorias" className="hover:text-primary transition-colors">Gestorías</Link></li>
            </ul>
          </div>

          {/* Columna 3 - Recursos */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary">Recursos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/recursos" className="hover:text-primary transition-colors">Recursos</Link></li>
              <li><Link to="/recursos" className="hover:text-primary transition-colors">Guías</Link></li>
              <li><Link to="/recursos" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/recursos" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Columna 4 - Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">Aviso legal</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Privacidad</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Cookies</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Términos</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} CumpleFactura. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}