import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { getPlans } from "@/services/mockApi";
import { Plan } from "@/types";

export default function PricingPreviewSection() {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    getPlans().then(setPlans);
  }, []);

  return (
    <section
      className="py-24 bg-background"
      aria-labelledby="pricing-preview-title"
    >
      <div className="container">
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-brand-light text-primary mb-4">
            Modelo claro
          </div>
          <h2
            id="pricing-preview-title"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-5 text-primary"
          >
            Tres formas de cumplir, una sola plataforma
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Elige tu encaje:{" "}
            <span className="font-medium text-primary">Woo</span> si facturas
            desde tu tienda,{" "}
            <span className="font-medium text-primary">Connect</span> si ya usas
            otro sistema, o{" "}
            <span className="font-medium text-primary">Partner</span> si eres
            gestoría y quieres centralizar la cartera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col relative ${
                plan.highlight
                  ? "border-primary shadow-xl scale-[1.03] z-10"
                  : "border-border shadow-sm"
              }`}
              role="article"
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-3.5 py-1 rounded-full text-sm font-medium shadow-sm">
                  Recomendado
                </div>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="text-3xl md:text-[2rem] leading-tight font-extrabold text-primary tracking-tight">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 pt-2">
                <div className="mb-7">
                  <span className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                    {plan.price}
                  </span>
                  {plan.price !== "Contactar" && (
                    <span className="text-muted-foreground ml-2">/mes</span>
                  )}
                </div>

                <ul className="space-y-3.5" role="list">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <Check
                        className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-sm md:text-[0.95rem] text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-7">
                <Button
                  className={`w-full h-11 text-base ${
                    plan.highlight ? "bg-primary hover:bg-primary/90" : ""
                  }`}
                  variant={plan.highlight ? "default" : "outline"}
                >
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
