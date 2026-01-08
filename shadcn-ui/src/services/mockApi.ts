// shadcn-ui/src/services/mockApi.ts
import { Plan, FaqItem } from "../types";

/**
 * Precios (marketing) — oferta hasta 1 julio 2027
 * Ajusta aquí si cambias la estrategia.
 */
const PRICING = {
  offerUntilLabel: "Oferta hasta 1 julio 2027",
  free: { now: "0€", later: "0€" },
  pro: { now: "19€", later: "29€" },
  agency: { now: "59€", later: "79€" },
};

export const getPlans = (): Promise<Plan[]> => {
  return Promise.resolve([
    {
      id: "free",
      name: "Plan Gratis",
      price: PRICING.free.now,
      description:
        "Ideal para empezar a usar CumpleFactura sin coste. Facturación básica y preparación del entorno.",
      features: [
        "Factura PDF automática",
        "Integración nativa con WooCommerce",
        "Sin límite de pedidos",
        "Panel básico de facturas y exportación simple",
      ],
      cta: "Empezar gratis",
    },
    {
      id: "pro",
      name: "Plan PRO",
      price: PRICING.pro.now,
      description: `Cumplimiento completo para WooCommerce. ${PRICING.offerUntilLabel}. Después: ${PRICING.pro.later}/mes.`,
      features: [
        "VeriFactu (hash encadenado + trazabilidad)",
        "Numeración y series legales",
        "Registro de integridad y auditoría",
        "Exportación profesional CSV/XML para gestoría",
        "Conservación y evidencias de cumplimiento",
        "Soporte prioritario",
        "Preparado para la normativa 2026–2027",
      ],
      cta: "Elegir Plan PRO",
      highlight: true,
    },
    {
      id: "agency",
      name: "Plan Gestorías",
      price: PRICING.agency.now,
      description: `Para gestorías con múltiples clientes. ${PRICING.offerUntilLabel}. Después: ${PRICING.agency.later}/mes.`,
      features: [
        "Acceso multi-cliente",
        "Descarga masiva de facturas",
        "Exportaciones CSV/XML optimizadas para contabilidad",
        "API opcional para integraciones profesionales",
        "Panel gestoría (roadmap)",
        "Soporte especializado",
      ],
      cta: "Solicitar acceso",
    },
  ]);
};

export const getFaqs = (): Promise<FaqItem[]> => {
  return Promise.resolve([
    {
      id: "1",
      question: "¿Puedo usar CumpleFactura gratis?",
      answer:
        "Sí. El plan Gratis te permite generar facturas PDF automáticas desde WooCommerce y empezar a preparar tu entorno de facturación.",
    },
    {
      id: "2",
      question: "¿Necesito el plan PRO para cumplir la normativa 2026–2027?",
      answer:
        "Sí. El plan PRO incluye el núcleo de cumplimiento: VeriFactu (trazabilidad con hash), numeración/series legales, evidencias de integridad y exportaciones profesionales para gestoría.",
    },
    {
      id: "3",
      question: "¿Los precios cambian el 1 de julio de 2027?",
      answer:
        "Sí. Aplicamos una oferta de lanzamiento hasta el 1 de julio de 2027. En la página de precios verás el precio actual y el precio posterior.",
    },
    {
      id: "4",
      question: "¿Puedo cambiar de plan cuando quiera?",
      answer:
        "Sí, puedes subir o bajar de plan en cualquier momento. Tu suscripción se ajusta al momento del cambio.",
    },
    {
      id: "5",
      question: "¿Qué incluye el Plan Gestorías?",
      answer:
        "Acceso multi-cliente, descarga masiva, exportaciones optimizadas y opción de API para integraciones. Además, el Panel Gestoría está en roadmap.",
    },
  ]);
};
