import { Plan, FaqItem } from '../types';

export const getPlans = (): Promise<Plan[]> => {
  return Promise.resolve([
    {
      id: 'free',
      name: 'Plan Gratis',
      price: '0€',
      description: 'Ideal para empezar a usar CumpleFactura sin coste.',
      features: [
        'Factura PDF automática',
        'Integración nativa con WooCommerce',
        'Sin límite de pedidos',
        'Perfecto para probar CumpleFactura antes de activar Verifactu'
      ],
      cta: 'Empezar gratis'
    },
    {
      id: 'pro',
      name: 'Plan PRO',
      price: '9€',
      description: 'El plan necesario para cumplir la normativa española de factura electrónica y software verificable.',
      features: [
        'Firma digital XAdES automática',
        'Verifactu completo (cadena hash + inmutabilidad)',
        'Numeración y series legales',
        'Preparado para MiFacturae',
        'Exportación profesional en CSV y XML',
        'Soporte prioritario',
        '100% listo para la normativa 2025–2026'
      ],
      cta: 'Elegir Plan PRO',
      highlight: true
    },
    {
      id: 'agency',
      name: 'Plan Gestorías',
      price: '29€',
      description: 'Pensado para gestoras fiscales y contables que trabajan con clientes que usan WooCommerce.',
      features: [
        'Acceso multi-cliente',
        'Descarga masiva de facturas',
        'Exportaciones CSV/XML optimizadas para contabilidad',
        'API opcional',
        'Comisión mensual por cliente recomendado',
        'Próximo “Panel Gestoría” incluido',
        'Soporte especializado'
      ],
      cta: 'Solicitar acceso'
    }
  ]);
};

export const getFaqs = (): Promise<FaqItem[]> => {
  return Promise.resolve([
    {
      id: '1',
      question: '¿Puedo usar CumpleFactura gratis?',
      answer: 'Sí, el plan Gratis permite generar facturas PDF automáticas desde WooCommerce sin coste.'
    },
    {
      id: '2',
      question: '¿Necesito el plan PRO para cumplir la normativa?',
      answer: 'Sí. Verifactu, firma digital XAdES y compatibilidad MiFacturae solo están incluidos en PRO.'
    },
    {
      id: '3',
      question: '¿Puedo cambiar de plan cuando quiera?',
      answer: 'Sí, puedes subir o bajar de plan en cualquier momento.'
    },
    {
      id: '4',
      question: '¿Hay descuento anual?',
      answer: 'Sí, pagando el año completo te ahorras el equivalente a dos meses.'
    },
    {
      id: '5',
      question: '¿Qué incluye el Plan Gestorías?',
      answer: 'Acceso multi-cliente, exportaciones profesionales, API opcional y comisión mensual por cliente.'
    }
  ]);
};