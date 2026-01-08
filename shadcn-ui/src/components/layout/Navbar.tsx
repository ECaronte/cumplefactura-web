import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/types";
import Logo from "@/components/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const navLinks: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Cómo funciona", href: "/como-funciona" },
  { label: "Plugin", href: "/woocommerce-verifactu" },
  { label: "Precios", href: "/precios" },
  { label: "Gestorías", href: "/gestorias" },
];

const resourcesLinks = [
  { label: "Artículos y Guías", href: "/recursos" },
  { label: "Verifactu", href: "/verifactu" },
  { label: "Factura Electrónica 2027", href: "/factura-electronica-2027" },
  { label: "Firma XAdES", href: "/firma-xades" },
  { label: "Integraciones", href: "/integraciones" },
  { label: "Seguridad y Cumplimiento", href: "/seguridad-y-cumplimiento" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isResourceActive = resourcesLinks.some(
    (link) => location.pathname === link.href,
  );

  const handleEmpezarClick = () => {
    if (location.pathname === "/") {
      document
        .getElementById("early-access")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#early-access");
    }
    setIsOpen(false);
  };

  return (
    <header className="md:sticky md:top-0 z-50">
      <nav
        className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:shadow-sm"
        aria-label="Navegación principal"
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="mr-6">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Recursos Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center text-sm font-medium transition-colors hover:text-primary outline-none ${isResourceActive ? "text-primary" : "text-muted-foreground"}`}
              >
                Recursos{" "}
                <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {resourcesLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      to={link.href}
                      className={`w-full cursor-pointer ${location.pathname === link.href ? "text-primary font-medium" : ""}`}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              size="sm"
              className="bg-primary hover:bg-brand-secondary text-white"
              onClick={handleEmpezarClick}
            >
              Empezar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={
              isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
            }
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden border-t bg-background p-4 max-h-[calc(100vh-4rem)] overflow-y-auto"
            aria-label="Navegación móvil"
          >
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`text-sm font-medium transition-colors hover:text-primary block ${
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* Mobile Recursos Submenu */}
              <li>
                <Collapsible
                  open={isResourcesOpen}
                  onOpenChange={setIsResourcesOpen}
                  className="w-full"
                >
                  <CollapsibleTrigger
                    className={`flex w-full items-center justify-between text-sm font-medium transition-colors hover:text-primary ${isResourceActive ? "text-primary" : "text-muted-foreground"}`}
                    aria-expanded={isResourcesOpen}
                  >
                    Recursos{" "}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-2 pl-4">
                    <ul className="flex flex-col space-y-3">
                      {resourcesLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            to={link.href}
                            className={`text-sm transition-colors hover:text-primary block ${
                              location.pathname === link.href
                                ? "text-primary font-medium"
                                : "text-muted-foreground"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              </li>

              <li>
                <Button
                  className="w-full bg-primary hover:bg-brand-secondary text-white"
                  size="sm"
                  onClick={handleEmpezarClick}
                >
                  Empezar
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </nav>
    </header>
  );
}
