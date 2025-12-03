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

export async function submitEarlyAccessLead(payload: EarlyAccessPayload): Promise<void> {
  if (!API_BASE) {
    console.info('Early access lead (mock):', payload);
    return;
  }

  const response = await fetch(`${API_BASE}/leads/early-access`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}

export async function submitGestoriaLead(payload: GestoriaLeadPayload): Promise<void> {
  if (!API_BASE) {
    console.info('Gestoria lead (mock):', payload);
    return;
  }

  const response = await fetch(`${API_BASE}/leads/gestorias`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}
