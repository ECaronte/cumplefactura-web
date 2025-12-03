import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitEarlyAccessLead, EarlyAccessPayload } from '@/lib/api';

interface FormData {
  nombre: string;
  email: string;
  tipoUsuario: string;
  volumenFacturas: string;
  comentario: string;
  consentimiento: boolean;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  tipoUsuario?: string;
  consentimiento?: string;
}

export default function EarlyAccessSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    tipoUsuario: '',
    volumenFacturas: '',
    comentario: '',
    consentimiento: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Introduce un email válido';
    }
    if (!formData.tipoUsuario) {
      newErrors.tipoUsuario = 'Selecciona una opción';
    }
    if (!formData.consentimiento) {
      newErrors.consentimiento = 'Debes aceptar la política de privacidad';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const payload: EarlyAccessPayload = {
      nombre: formData.nombre,
      email: formData.email,
      tipoUsuario: formData.tipoUsuario,
      volumenFacturas: formData.volumenFacturas || undefined,
      comentario: formData.comentario || undefined,
      consentimiento: formData.consentimiento,
      timestamp: new Date().toISOString(),
      originPage: 'home-early-access',
    };

    try {
      await submitEarlyAccessLead(payload);
      setIsSubmitted(true);
      setFormData({
        nombre: '',
        email: '',
        tipoUsuario: '',
        volumenFacturas: '',
        comentario: '',
        consentimiento: false,
      });
    } catch (error) {
      setSubmitError('Ha ocurrido un error al enviar tus datos. Inténtalo de nuevo en unos minutos.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const goToGestorias = () => {
    navigate('/gestorias#gestorias-form');
  };

  const isFormValid =
    formData.nombre.trim() &&
    formData.email.trim() &&
    validateEmail(formData.email) &&
    formData.tipoUsuario &&
    formData.consentimiento;

  return (
    <section
      id="early-access"
      className="py-20 bg-gradient-to-b from-white to-slate-50"
      aria-labelledby="early-access-title"
    >
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2
            id="early-access-title"
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary"
          >
            Sé de los primeros en usar CumpleFactura
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos desplegando CumpleFactura para autónomos, pymes y gestorías. Déjanos tus datos y te avisamos cuando esté disponible, con prioridad para los primeros interesados.
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={goToGestorias}
            className="gap-2 border-primary text-primary hover:bg-primary/5"
          >
            <Building2 className="h-5 w-5" />
            Soy una gestoría
          </Button>
        </div>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center max-w-xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              ¡Gracias por tu interés!
            </h3>
            <p className="text-green-700 text-lg">
              Te avisaremos en cuanto CumpleFactura esté disponible.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-10 rounded-2xl border shadow-lg max-w-xl mx-auto space-y-6"
          >
            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-700 text-sm">{submitError}</p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="nombre">
                Nombre <span className="text-red-500">*</span>
              </Label>
              <Input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={(e) => handleInputChange('nombre', e.target.value)}
                aria-invalid={!!errors.nombre}
                className={errors.nombre ? 'border-red-500' : ''}
              />
              {errors.nombre && (
                <p className="text-sm text-red-500">{errors.nombre}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                aria-invalid={!!errors.email}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="tipoUsuario">
                Soy… <span className="text-red-500">*</span>
              </Label>
              <select
                id="tipoUsuario"
                name="tipoUsuario"
                value={formData.tipoUsuario}
                onChange={(e) => handleInputChange('tipoUsuario', e.target.value)}
                aria-invalid={!!errors.tipoUsuario}
                className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  errors.tipoUsuario ? 'border-red-500' : 'border-input'
                }`}
              >
                <option value="">Selecciona una opción</option>
                <option value="autonomo">Autónomo</option>
                <option value="pyme">Pyme / empresa</option>
                <option value="gestoria">Gestoría / asesoría</option>
                <option value="otro">Otro</option>
              </select>
              {errors.tipoUsuario && (
                <p className="text-sm text-red-500">{errors.tipoUsuario}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="volumenFacturas">
                Número aproximado de facturas mensuales
              </Label>
              <select
                id="volumenFacturas"
                name="volumenFacturas"
                value={formData.volumenFacturas}
                onChange={(e) => handleInputChange('volumenFacturas', e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Selecciona (opcional)</option>
                <option value="1-10">1-10 facturas</option>
                <option value="11-50">11-50 facturas</option>
                <option value="51-200">51-200 facturas</option>
                <option value="200+">Más de 200 facturas</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="comentario">
                Cuéntanos brevemente tu caso (opcional)
              </Label>
              <Textarea
                id="comentario"
                name="comentario"
                placeholder="¿Qué tipo de negocio tienes? ¿Qué necesitas resolver?"
                rows={3}
                value={formData.comentario}
                onChange={(e) => handleInputChange('comentario', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="consentimiento"
                  checked={formData.consentimiento}
                  onCheckedChange={(checked) =>
                    handleInputChange('consentimiento', checked === true)
                  }
                  aria-invalid={!!errors.consentimiento}
                />
                <Label
                  htmlFor="consentimiento"
                  className="text-sm leading-relaxed cursor-pointer"
                >
                  Acepto la{' '}
                  <Link
                    to="/politica-privacidad"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    política de privacidad
                  </Link>{' '}
                  y deseo recibir información sobre CumpleFactura.{' '}
                  <span className="text-red-500">*</span>
                </Label>
              </div>
              {errors.consentimiento && (
                <p className="text-sm text-red-500 ml-7">{errors.consentimiento}</p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? (
                <>Enviando...</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Quiero acceso anticipado
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
