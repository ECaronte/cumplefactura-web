import MainLayout from '@/layouts/MainLayout';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ComplianceSection from '@/components/sections/ComplianceSection';
import AgencyFeatureSection from '@/components/sections/AgencyFeatureSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingPreviewSection from '@/components/sections/PricingPreviewSection';
import FaqSection from '@/components/sections/FaqSection';
import CtaSection from '@/components/sections/CtaSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ComplianceSection />
      <AgencyFeatureSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingPreviewSection />
      <FaqSection />
      <CtaSection />
    </MainLayout>
  );
}