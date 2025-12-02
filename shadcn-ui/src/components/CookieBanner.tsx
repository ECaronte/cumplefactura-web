import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            Utilizamos cookies técnicas y analíticas para mejorar tu experiencia. Puedes aceptarlas o rechazarlas. Para más información consulta nuestra{' '}
            <Link to="/politica-cookies" className="text-primary font-medium hover:underline underline-offset-4">
              Política de Cookies
            </Link>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Button 
            variant="outline" 
            onClick={handleReject}
            className="w-full sm:w-auto border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Rechazar cookies
          </Button>
          <Button 
            onClick={handleAccept}
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white"
          >
            Aceptar cookies
          </Button>
        </div>
      </div>
    </div>
  );
}