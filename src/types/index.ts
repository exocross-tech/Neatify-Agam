export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  startingPrice: string;
  items: string[];
  tag?: string;
  iconName: string;
}

export interface TaskPriceItem {
  service: string;
  suitableFor: string;
  startingFrom: string;
  typicalRange: string;
  custom: boolean;
  category: 'cleaning' | 'organising' | 'setup' | 'assist' | 'care' | 'special';
}

export interface HomePackage {
  name: string;
  startingPrice: string;
  tagline: string;
  features: string[];
  bestFor: string;
  highlight?: boolean;
}

export interface HomeSizeComparison {
  homeSize: string;
  setupOnly: string;
  newHomeReadyHome: string;
  teamSize: string;
  estimatedDuration: string;
}

export interface MonthlyPlan {
  name: string;
  price: string;
  visits: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

export interface SectorItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
  spaces: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  service: string;
  reviewText: string;
  customerName: string;
}
