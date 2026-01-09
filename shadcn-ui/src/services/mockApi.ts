// shadcn-ui/src/services/mockApi.ts
import { Plan, FaqItem } from "../types";

export const getPlans = (): Promise<Plan[]> => {
  return Promise.resolve([
    {
      id: "connect",
      name: "CumpleFactura Connect",
      price: "4,90€",
      description:
        "Entrada rápida para migraciones y perfiles rezagados (digital o no). Cumplimiento claro, sin complejidad.",
      features: [
        "Acceso al plugin y al panel (modo Connect)",
        "Veri*factu completo (QR + hash encadenado)",
        "Envío automático de registros a AEAT",
        "Registro de eventos (evidencias de cumplimiento)",
        "Facturas ordinarias, rectificativas básicas y simplificadas",
        "Documento austero (sin plantillas, logo ni personalización)",
        "Incluye hasta 60 facturas/mes · extra: 0,06 €/factura",
      ],
      cta: "Empezar con Connect",
    },
    {
      id: "pro",
      name: "CumpleFactura Pro",
      price: "10,90€",
      description:
        "Sistema completo y defendible para operar cómodo a largo plazo (digital o no). Incluye plugin para WooCommerce.",
      features: [
        "Todo lo de Connect",
        "Plugin WooCommerce incluido (si vendes online)",
        "Editor de facturas + plantillas + logo",
        "Validaciones fiscales avanzadas (menos errores)",
        "Asistente de rectificativas / sustitutivas",
        "Control de series y numeración",
        "Auditoría navegable + evidencias estructuradas",
        "Incluye hasta 100 facturas/mes · extra: 0,04 €/factura",
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
      question: "¿Hasta cuándo están vigentes los precios promocionales?",
      answer:
        "La promoción aplica a nuevas altas hasta el 1 de julio de 2027. En la tabla puedes ver el precio promocional y el precio estándar posterior (por plan).",
    },
    {
      id: "2",
      question: "¿Qué plan necesito si vendo online con WooCommerce?",
      answer:
        "Normalmente, CumpleFactura Pro: incluye el plugin para WooCommerce, editor de facturas con plantillas/logo y validaciones avanzadas para reducir errores.",
    },
    {
      id: "3",
      question: "¿Para qué sirve CumpleFactura Connect?",
      answer:
        "Connect está pensado como entrada rápida: migraciones, perfiles rezagados o una operativa mínima. Mantiene cumplimiento (QR + hash, envío AEAT y evidencias), pero con documento austero y menos automatización.",
    },
    {
      id: "4",
      question: "Soy gestoría/asesoría: ¿qué incluye Partner?",
      answer:
        "Partner es B2B con panel multi-cliente, control centralizado y soporte especializado. La activación se hace con onboarding y condiciones ajustadas según volumen.",
    },
    {
      id: "5",
      question: "¿Puedo cancelar cuando quiera?",
      answer:
        "Sí. Puedes cancelar en cualquier momento. Al cancelar, debes cesar el uso del SIF o migrar a otro SIF conforme. No bloqueamos la migración.",
    },
    {
      id: "6",
      question: "¿Qué significa el modo anual, 2 años o 3 años?",
      answer:
        "Es pago anticipado. En 2 años se aplica un -10% y en 3 años un -18% (solo para Connect y Pro). Partner se define en llamada.",
    },
    {
      id: "7",
      question: "¿Qué cambia después del 1 de julio de 2027?",
      answer:
        "Tras esa fecha, se aplican las tarifas estándar indicadas en cada plan. En la tabla verás siempre el “después” para que sea transparente.",
    },
  ]);
};
