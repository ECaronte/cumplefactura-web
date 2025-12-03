export interface EarlyAccessPayload {
  nombre: string;
  email: string;
  tipoUsuario: string;
  volumenFacturas?: string;
  comentario?: string;
  consentimiento: boolean;
  timestamp: string;
  originPage: string;
}

export interface GestoriaLeadPayload {
  nombreGestoria: string;
  personaContacto: string;
  email: string;
  telefono: string;
  codigoPostal: string;
  direccion?: string;
  volumen?: string;
  tipoClientes?: string;
  comentarios: string;
  consentimiento: boolean;
  timestamp: string;
  originPage: string;
}

const API_BASE = import.meta.env.VITE_API_BASE;

console.log('[CumpleFactura] VITE_API_BASE =', API_BASE || '(NO DEFINIDO)');

function ensureApiBase(): string {
  if (!API_BASE) {
    const error = new Error('VITE_API_BASE no está definido. El formulario no puede enviar leads.');
    console.error('[CumpleFactura] ERROR:', error.message);
    throw error;
  }
  return API_BASE;
}

function normalizeUrl(base: string, path: string): string {
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}

export async function submitEarlyAccessLead(payload: EarlyAccessPayload): Promise<void> {
  const apiBase = ensureApiBase();
  const url = normalizeUrl(apiBase, '/leads/early-access');

  console.log('[CumpleFactura] Enviando lead early-access...');
  console.log('[CumpleFactura] POST URL:', url);
  console.log('[CumpleFactura] Payload:', JSON.stringify(payload, null, 2));

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();

  console.log('[CumpleFactura] Response status:', response.status);
  console.log('[CumpleFactura] Response body:', responseText);

  if (!response.ok) {
    console.error('[CumpleFactura] ERROR en la petición:');
    console.error('  - Status:', response.status);
    console.error('  - URL:', url);
    console.error('  - Response:', responseText);
    console.error('  - Headers enviados:', { 'Content-Type': 'application/json' });
    throw new Error(`Error HTTP ${response.status}: ${responseText}`);
  }

  console.log('[CumpleFactura] Lead enviado correctamente');
}

export async function submitGestoriaLead(payload: GestoriaLeadPayload): Promise<void> {
  const apiBase = ensureApiBase();
  const url = normalizeUrl(apiBase, '/leads/gestorias');

  console.log('[CumpleFactura] Enviando lead gestoría...');
  console.log('[CumpleFactura] POST URL:', url);
  console.log('[CumpleFactura] Payload:', JSON.stringify(payload, null, 2));

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();

  console.log('[CumpleFactura] Response status:', response.status);
  console.log('[CumpleFactura] Response body:', responseText);

  if (!response.ok) {
    console.error('[CumpleFactura] ERROR en la petición:');
    console.error('  - Status:', response.status);
    console.error('  - URL:', url);
    console.error('  - Response:', responseText);
    console.error('  - Headers enviados:', { 'Content-Type': 'application/json' });
    throw new Error(`Error HTTP ${response.status}: ${responseText}`);
  }

  console.log('[CumpleFactura] Lead enviado correctamente');
}
