import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    __gaLoaded?: boolean;
  }
}

export default function AnalyticsLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check for consent
    const consent = localStorage.getItem("cookieConsent");
    
    // Only proceed if explicitly accepted
    if (consent !== "accepted") return;

    // Prevent double injection
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;

    const GA_ID = "G-XXXXXXXXXX"; // TODO: Replace with your actual GA4 ID

    // Main gtag script
    const scriptTag = document.createElement("script");
    scriptTag.async = true;
    scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(scriptTag);

    // Configuration for dataLayer and gtag
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return null;
}