# CumpleFactura Marketing Website

## Overview
Marketing website for CumpleFactura - a solution for electronic invoicing (factura electrónica), VeriFactu compliance, and XAdES digital signatures for WooCommerce stores in Spain.

**Domain:** cumplefactura.es  
**Target audience:** Autónomos (freelancers), small businesses, and gestorías (accounting firms) who need to comply with 2026-2027 Spanish invoicing regulations (empresas desde enero 2027, autónomos desde julio 2027).

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
│   │   ├── sections/    # Page sections (Hero, EarlyAccess, etc.)
│   │   └── ui/          # shadcn/ui components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities and API client
│   ├── layouts/         # MainLayout wrapper
│   └── main.tsx         # App entry with HelmetProvider
├── public/              # Static assets
└── index.html           # HTML template with fallback SEO
```

## Lead Capture System

### Early Access Form (Homepage)
- **Location:** `src/components/sections/EarlyAccessSection.tsx`
- **Anchor:** `#early-access`
- **Required fields:** nombre, email, tipoUsuario, consentimiento
- **Optional fields:** volumenFacturas, comentario
- **CTA "Quiero CumpleFactura"** in hero scrolls to this form
- **"Empezar" button** in Navbar also scrolls to this form
- **"Soy una gestoría"** button redirects to /gestorias#gestorias-form

### Gestorías Form (/gestorias)
- **Anchor:** `#gestorias-form`
- **Required fields:** nombreGestoria, personaContacto, email, telefono, codigoPostal, comentarios, consentimiento
- **Optional fields:** direccion, volumen, tipoClientes
- **Alternative contact:** gestorias@cumplefactura.es

### API Client
- **Location:** `src/lib/api.ts`
- **Endpoints prepared:**
  - `POST /leads/early-access` (homepage form)
  - `POST /leads/gestorias` (gestorías form)
- **Environment variable:** `VITE_API_BASE`
- **Fallback:** Mock mode with console.info when VITE_API_BASE is not set

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

**December 4, 2025:**
- Updated all invoicing deadline references from 2025-2026 to 2026-2027:
  - New deadlines: Companies (IS) from January 1, 2027; Freelancers from July 1, 2027
  - Updated HeroSection, ComplianceSection, Verifactu page, ElectronicInvoice2026 page
  - Updated PluginLanding, Blog, HowItWorks, Resources, XadesSignature pages
  - Updated SEO meta tags and Schema.org structured data
- Modified Navbar for desktop-only sticky header:
  - Sticky positioning (lg:sticky lg:top-0) only applies on desktop (≥1024px)
  - Mobile: header scrolls normally with content
  - Added subtle shadow on desktop (lg:shadow-sm)

**December 3, 2025:**
- Implemented homepage lead capture system:
  - Created EarlyAccessSection component with full form
  - Hero CTA "Quiero CumpleFactura" scrolls to #early-access
  - Navbar "Empezar" button scrolls to #early-access (from any page)
  - "Soy una gestoría" button links to /gestorias#gestorias-form
  - Created useHashScroll hook for cross-page navigation with hash
- Created API client (src/lib/api.ts):
  - Prepared for AWS Lambda backend (API Gateway + Lambda + DynamoDB)
  - Uses VITE_API_BASE environment variable
  - Falls back to mock mode when not configured
- Form validation and UX:
  - Client-side validation with error messages
  - Loading, success, and error states
  - Disabled submit until form is valid
  - Privacy consent checkbox required
- Added lead capture form to Gestorías page (/gestorias):
  - Form section with id="gestorias-form" for scroll targeting
  - Mandatory fields: nombreGestoria, personaContacto, email, telefono, codigoPostal, comentarios, consentimiento
  - Optional fields: direccion, volumen, tipoClientes
  - Client-side validation with error messages
  - Success message after submission
  - Alternative email contact: gestorias@cumplefactura.es
- Added "Contacto" link to Footer (Producto column)

**December 2, 2025:**
- Implemented react-helmet-async across all 17 marketing pages
- Added HelmetProvider in main.tsx
- Added fallback SEO meta tags in index.html
- All pages now have title, description, canonical, OG tags, and Twitter cards
- Created /public/sitemap.xml with all 17 public routes
- Updated /public/robots.txt with sitemap reference
- Added strategic internal linking (interlinking SEO) across key pages
- Added Schema.org structured data (JSON-LD) to major pages

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

## Next Steps
1. Configure VITE_API_BASE environment variable when AWS backend is ready
2. Connect forms to AWS Lambda endpoints
3. Add hreflang tags for multi-language support (if needed)
4. Add phone/postal code format validation (optional enhancement)
