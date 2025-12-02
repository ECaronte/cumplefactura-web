import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { getFaqs } from "@/services/mockApi";
import { FaqItem } from "@/types";

export default function FaqSection() {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);

  useEffect(() => {
    getFaqs().then(setFaqs);
  }, []);

  return (
    <section 
      className="py-20 bg-background"
      aria-labelledby="faq-title"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 id="faq-title" className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Preguntas Frecuentes
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <AccordionTrigger className="text-left text-lg font-medium">
                <span itemProp="name">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent 
                className="text-muted-foreground"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
