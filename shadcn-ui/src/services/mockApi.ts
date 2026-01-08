import { Plan, FaqItem } from "../types";

export const getPlans = (): Promise<Plan[]> => {
  return Promise.resolve([
    {
      id: "woo",
      name: "Plan Woo",
      price: "0€",
      description:
        "Para tiendas WooCommerce que quieren empezar ya con facturación básica y dejar el terreno preparado.",
      features: [
        "Factura PDF automática",
        "Integración nativa con WooCommerce",
        "Sin límite de pedidos",
        "Panel básico de facturas y exportación simple",
        "Base preparada para activar VeriFactu cuando toque",
      ],
      cta: "Empezar gratis",
    },
    {
      id: "connect",
      name: "Plan Connect",
      price: "19€",
      description:
        "Cumplimiento completo para WooCommerce. Oferta hasta 1 julio 2027. Después: 29€/mes.",
      features: [
        "VeriFactu (hash encadenado + trazabilidad)",
        "Numeración y series legales",
        "Registro de integridad y auditoría",
        "Exportación profesional CSV/XML para gestoría",
        "Conservación y evidencias de cumplimiento",
        "Soporte prioritario",
        "Preparado para la normativa 2026–2027",
      ],
      cta: "Elegir Plan Connect",
      highlight: true,
    },
    {
      id: "partner",
      name: "Plan Partner",
      price: "59€",
      description:
        "Para gestorías con múltiples clientes. Oferta hasta 1 julio 2027. Después: 79€/mes.",
      features: [
        "Acceso multi-cliente",
        "Descarga masiva de facturas",
        "Exportaciones CSV/XML optimizadas para contabilidad",
        "Flujos de revisión y control (roadmap)",
        "Alertas y avisos (roadmap)",
        "Integraciones avanzadas / API (fase 2 – en desarrollo)",
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
        "Sí. El Plan Woo permite generar facturas PDF automáticas desde WooCommerce sin coste.",
    },
    {
      id: "2",
      question:
        "¿Qué plan necesito para cumplir con VeriFactu y la normativa 2026–2027?",
      answer:
        "Para el cumplimiento completo (trazabilidad VeriFactu, numeración legal, auditoría y evidencias) necesitas el Plan Connect o superior.",
    },
    {
      id: "3",
      question: "¿Qué significa “oferta hasta 1 julio 2027”?",
      answer:
        "Hasta esa fecha aplican precios promocionales. Después, el Plan Connect pasa a 29€/mes y el Plan Partner a 79€/mes.",
    },
    {
      id: "4",
      question: "¿La API para gestorías está incluida?",
      answer:
        "La API e integraciones avanzadas están previstas como Fase 2 (en desarrollo). En Partner lo indicamos como roadmap, no como funcionalidad ya disponible.",
    },
    {
      id: "5",
      question: "¿Puedo cambiar de plan cuando quiera?",
      answer: "Sí. Puedes subir o bajar de plan cuando lo necesites.",
    },
  ]);
};
