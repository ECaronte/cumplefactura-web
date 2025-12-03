# CumpleFactura Marketing Website

## Overview
Marketing website for CumpleFactura - a solution for electronic invoicing (factura electrónica), VeriFactu compliance, and XAdES digital signatures for WooCommerce stores in Spain.

**Domain:** cumplefactura.es  
**Target audience:** Autónomos (freelancers), small businesses, and gestorías (accounting firms) who need to comply with 2025-2026 Spanish invoicing regulations.

## Tech Stack
- **Framework:** React + Vite
- **UI Library:** shadcn/ui components
- **Styling:** Tailwind CSS
- **Package Manager:** pnpm
- **Port:** 5000

## Project Structure
```
shadcn-ui/
├── src/
│   ├── pages/           # All marketing pages
│   ├── components/      # Reusable UI components
│   │   ├── layout/      # Navbar, Footer
│   │   └── ui/          # shadcn/ui components
│   ├── layouts/         # MainLayout wrapper
│   └── main.tsx         # App entry with HelmetProvider
├── public/              # Static assets
└── index.html           # HTML template with fallback SEO
```

## Pages with SEO
All pages implement react-helmet-async with:
- Dynamic title tags with brand suffix
- Meta descriptions
- Canonical URLs (cumplefactura.es)
- Open Graph tags (og:type, og:title, og:description, og:url, og:image)
- Twitter card tags (twitter:card, twitter:title, twitter:description, twitter:image)

### Marketing Pages:
- Home (/)
- VeriFactu (/verifactu)
- Factura Electrónica 2026 (/factura-electronica-2026)
- Firma XAdES (/firma-xades)
- Cómo Funciona (/como-funciona)
- Gestorías (/gestorias)
- Precios (/precios)
- Recursos (/recursos)
- Blog (/blog)
- Plugin Landing (/woocommerce-verifactu)
- Integraciones (/integraciones)
- Seguridad y Cumplimiento (/seguridad-y-cumplimiento)

### Legal Pages:
- Legal Index (/legal)
- Aviso Legal (/aviso-legal)
- Política de Privacidad (/politica-privacidad)
- Política de Cookies (/politica-cookies)
- Términos y Condiciones (/terminos-condiciones)

## Recent Changes
**December 2, 2025:**
- Implemented react-helmet-async across all 17 marketing pages
- Added HelmetProvider in main.tsx
- Added fallback SEO meta tags in index.html
- All pages now have title, description, canonical, OG tags, and Twitter cards
- Created /public/sitemap.xml with all 17 public routes
- Updated /public/robots.txt with sitemap reference
- Added strategic internal linking (interlinking SEO) across key pages:
  - Home: Links to /verifactu and /factura-electronica-2026
  - Verifactu: Links to /factura-electronica-2026, /firma-xades, /precios
  - Factura Electrónica 2026: Links to /verifactu, /como-funciona
  - Precios: Links to /como-funciona, /gestorias
  - Gestorías: Links to /verifactu, /precios
  - Firma XAdES: Links to /verifactu, /factura-electronica-2026
- Added Schema.org structured data (JSON-LD) to major pages:
  - Home: Organization + WebSite + BreadcrumbList
  - Verifactu, Factura Electrónica 2026, Firma XAdES: Article + BreadcrumbList
  - Precios: Product (AggregateOffer) + BreadcrumbList
  - Cómo funciona, Gestorías: WebPage + BreadcrumbList

**Performance Optimizations:**
- React.lazy code splitting for all 19 pages with Suspense fallback
- Preload for critical hero image (/assets/hero-dashboard.png)
- Lazy loading with explicit width/height attributes on secondary images
- Named imports from lucide-react for optimal tree-shaking

**Accessibility (WCAG Compliance):**
- Semantic HTML landmarks: header, nav, main, footer structure
- aria-labelledby on all major sections with matching heading ids
- FaqSection: Schema.org FAQPage microdata with Question/Answer entities
- Navbar: Semantic nav/ul/li structure, aria-expanded for collapsible menus
- Mobile menu: Descriptive aria-labels on icon-only buttons
- Tables: Proper scope="col"/scope="row", caption, sr-only text for icons
- Decorative elements marked with aria-hidden="true"

## Known Issues to Fix
- "Empezar" button in Navbar needs destination URL

## Recent Changes
**December 3, 2025:**
- Added lead capture form to Gestorías page (/gestorias):
  - Form section with id="gestorias-form" for scroll targeting
  - Mandatory fields: nombreGestoria, personaContacto, email, telefono, codigoPostal, comentarios, consentimiento
  - Optional fields: direccion, volumen, tipoClientes
  - Client-side validation with error messages
  - Privacy consent checkbox with link to /politica-privacidad
  - Success message after submission
  - Alternative email contact: gestorias@cumplefactura.es
  - All CTA buttons scroll smoothly to the form
  - TODO: Connect to backend API when ready
- Added "Contacto" link to Footer (Producto column)

## Next Steps
1. Connect gestorías form to backend API or email service
2. Add hreflang tags for multi-language support (if needed)
3. Add phone/postal code format validation (optional enhancement)
