
import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  rebateEligible?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  certifications: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export enum RebateType {
  HeatPump = 'Heat Pump',
  Furnace = 'Furnace',
  Insulation = 'Insulation'
}
