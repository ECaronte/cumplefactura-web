import { ReactNode } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/CookieBanner';
import AnalyticsLoader from '@/components/AnalyticsLoader';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CookieBanner />
      <AnalyticsLoader />
    </div>
  );
}