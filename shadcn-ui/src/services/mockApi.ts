import { Plan, FaqItem } from '../types';

export const getPlans = (): Promise<Plan[]> => {
  return Promise.resolve([
    {
      id: 'free',
      name: 'Plan Gratis',
      price: '0€',
      description: 'Ideal para empezar',
      features: [
        'Factura PDF automática',
        'Integración WooCommerce'
      ],
      cta: 'Empezar gratis'
    },
    {
      id: 'pro',
      name: 'Plan PRO',
      price: '29€',
      description: 'Cumplimiento total',
      features: [
        'Firma digital automática',
        'Verifactu completo',
        'Cadena hash',
        'MiFacturae',
        'Envío automático al cliente',
        'Soporte prioritario',
        'Exportación CSV / XML'
      ],
      cta: 'Empezar ahora',
      highlight: true
    },
    {
      id: 'agency',
      name: 'Plan Gestorías',
      price: 'Contactar',
      description: 'Para profesionales',
      features: [
        'Panel Gestoría',
        'Acceso multi-cliente',
        'Descarga masiva',
        'API integración',
        'Alertas',
        'Comisión por cliente'
      ],
      cta: 'Contactar ventas'
    }
  ]);
};

export const getFaqs = (): Promise<FaqItem[]> => {
  return Promise.resolve([
    {
      id: '1',
      question: '¿CumpleFactura cumple la norma del software verificable?',
      answer: 'Sí. Implementa cadena hash, firma, inmutabilidad y eventos necesarios.'
    },
    {
      id: '2',
      question: '¿Necesito ser técnico para instalarlo?',
      answer: 'No. Se instala como cualquier plugin de WooCommerce.'
    },
    {
      id: '3',
      question: '¿Puedo usar mi certificado digital?',
      answer: 'Sí. Lo instalas una vez y queda protegido.'
    },
    {
      id: '4',
      question: '¿Cómo lo recibe la gestoría?',
      answer: 'Puede usar el Panel Gestoría, o recibir CSV/XML, o conectar vía API.'
    },
    {
      id: '5',
      question: '¿Es legal para 2025–2026?',
      answer: 'Sí. Está diseñado exactamente para cumplir la normativa.'
    }
  ]);
};