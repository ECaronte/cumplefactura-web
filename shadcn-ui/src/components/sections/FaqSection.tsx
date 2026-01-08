// shadcn-ui/src/components/sections/FaqSection.tsx
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getFaqs } from "@/services/mockApi";
import type { FaqItem } from "@/types";

export default function FaqSection() {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);

  useEffect(() => {
    getFaqs().then(setFaqs);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Preguntas Frecuentes
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Respuestas claras para negocios con WooCommerce y para gestorías.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f) => (
            <AccordionItem key={f.id} value={`item-${f.id}`}>
              <AccordionTrigger className="text-left text-base md:text-lg font-medium">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-slate-600">
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
