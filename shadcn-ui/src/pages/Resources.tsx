import MainLayout from '@/layouts/MainLayout';
import FaqSection from '@/components/sections/FaqSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, BookOpen, HelpCircle } from 'lucide-react';

const resources = [
  {
    title: 'Guía Verifactu 2025',
    description: 'Todo lo que necesitas saber sobre la nueva normativa antifraude.',
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    type: 'Guía PDF'
  },
  {
    title: 'Checklist de Implementación',
    description: 'Pasos para asegurar que tu eCommerce cumple con la ley.',
    icon: <FileText className="h-6 w-6 text-primary" />,
    type: 'Checklist'
  },
  {
    title: 'Manual del Plugin',
    description: 'Documentación técnica detallada de VerifactuWoo.',
    icon: <HelpCircle className="h-6 w-6 text-primary" />,
    type: 'Documentación'
  }
];

export default function Resources() {
  return (
    <MainLayout>
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">Centro de Recursos</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Aprende, configura y optimiza tu facturación con nuestras guías y tutoriales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-all cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {resource.icon}
                    </div>
                    <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded-full text-slate-600">
                      {resource.type}
                    </span>
                  </div>
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-primary">Leer más &rarr;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
    </MainLayout>
  );
}