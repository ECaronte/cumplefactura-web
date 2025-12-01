export interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface NavLink {
  label: string;
  href: string;
}