// shadcn-ui/src/services/mockApi.ts
import { Plan, FaqItem } from "../types";

export const getPlans = (): Promise<Plan[]> => {
  return Promise.resolve([
    {
      id: "connect",
      name: "CumpleFactura Connect",
      price: "4,90€",
      description:
        "Entrada rápida para migraciones y perfiles rezagados (no digitales o transición). Cumplimiento claro, sin complejidad.",
      features: [
        "Veri*factu completo (hash + QR + encadenado)",
        "Envío automático de registros a AEAT",
        "Registro de eventos (evidencias de cumplimiento)",
        "Facturas ordinarias, rectificativas básicas y simplificadas",
        "Documento austero (sin plantillas, logo ni personalización)",
        "Pensado para empezar o migrar sin fricción",
      ],
      cta: "Empezar con Connect",
    },
    {
      id: "pro",
      name: "CumpleFactura Pro (WooCommerce)",
      price: "10,90€",
      description:
        "Sistema completo y defendible. Para operar cómodo a largo plazo (digital o no). Incluye plugin para WooCommerce.",
      features: [
        "Todo lo de Connect",
        "Plugin WooCommerce incluido (si vendes online)",
        "Editor de facturas + plantillas y logo",
        "Validaciones fiscales avanzadas (menos errores)",
        "Asistente de rectificativas / sustitutivas",
        "Control de series y numeración",
        "Auditoría navegable + evidencias estructuradas",
        "Panel fiscal con estados y alertas",
      ],
      cta: "Elegir Pro",
      highlight: true,
    },
    {
      id: "partner",
      name: "CumpleFactura Partner (Gestorías y asesorías)",
      price: "59€",
      description:
        "Producto B2B: panel multi-cliente, control centralizado y soporte de despacho. Activación con onboarding guiado.",
      features: [
        "Panel multi-cliente (control centralizado)",
        "Estados AEAT y trazabilidad por cliente",
        "Registro de eventos y evidencias por cliente",
        "Documentación de migración y cambio de SIF",
        "Soporte B2B especializado",
        "Condiciones variables según volumen (se explican en llamada)",
      ],
      cta: "Hablar con nosotros",
    },
  ]);
};

export const getFaqs = (): Promise<FaqItem[]> => {
  return Promise.resolve([
    {
      id: "1",
      question: "¿Hasta cuándo es la promoción?",
      answer:
        "La promoción aplica a nuevas altas hasta el 1 de julio de 2027. A partir de esa fecha, se aplican las tarifas estándar indicadas (Connect 7,90 €, Pro 14,90 €, Partner 79 €).",
    },
    {
      id: "2",
      question: "¿Qué plan me conviene si vendo con WooCommerce?",
      answer:
        "Normalmente, CumpleFactura Pro: incluye el plugin para WooCommerce, edición de factura, plantillas y un panel fiscal con evidencias y auditoría más completas.",
    },
    {
      id: "3",
      question: "¿Para qué sirve exactamente Connect?",
      answer:
        "Connect es una modalidad de entrada para migraciones o perfiles rezagados: prioriza cumplimiento y envío a AEAT con un documento austero (sin editor ni personalización) para empezar sin fricción.",
    },
    {
      id: "4",
      question: "Soy gestoría/asesoría: ¿cómo funciona Partner?",
      answer:
        "Partner es un producto B2B con panel multi-cliente y control centralizado. Las condiciones dependen del volumen y se explican en una llamada breve.",
    },
    {
      id: "5",
      question: "¿Puedo cancelar cuando quiera?",
      answer:
        "Sí. Puedes cancelar en cualquier momento. Al cancelar, debes cesar el uso del SIF o migrar a otro SIF conforme. No bloqueamos la migración.",
    },
    {
      id: "6",
      question: "¿Mensual o anual?",
      answer:
        "Puedes pagar mensual o anual. En la web puedes alternar el selector para ver el total anual.",
    },
  ]);
};
