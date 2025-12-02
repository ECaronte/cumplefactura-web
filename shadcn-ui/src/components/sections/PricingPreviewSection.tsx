import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { getPlans } from '@/services/mockApi';
import { Plan } from '@/types';

export default function PricingPreviewSection() {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    getPlans().then(setPlans);
  }, []);

  return (
    <section className="py-20 bg-background" aria-labelledby="pricing-preview-title">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="pricing-preview-title" className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">
            Planes y Precios
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`flex flex-col relative ${plan.highlight ? 'border-primary shadow-xl scale-105 z-10' : 'border-border shadow-sm'}`}
              role="article"
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                  Recomendado
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  {plan.price !== 'Contactar' && <span className="text-muted-foreground">/mes</span>}
                </div>
                <ul className="space-y-3" role="list">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.highlight ? 'bg-primary hover:bg-primary/90' : ''}`} variant={plan.highlight ? 'default' : 'outline'}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
