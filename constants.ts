
import { Wrench, Shield, Thermometer, Wind, Home, Zap, Cpu, Activity, ScanLine } from 'lucide-react';
import { ServiceItem, Testimonial, TeamMember, FAQItem } from './types';

export const COMPANY_NAME = "Rencon Heating & Air Conditioning";
export const TAGLINE = "Dedicated GTA HVAC Since 1977";
export const PHONE = "905-566-5780";
export const EMAIL = "info@rencon.one";
export const ADDRESS = "360 City Centre Drive, Mississauga, Ontario, L5B 0L5";

export const SERVICES: ServiceItem[] = [
  {
    id: 'smart-cooling',
    title: 'Neural Cooling Systems',
    description: 'High-efficiency AC units calibrated via AI load-calculation to perfectly match your home\'s thermal profile.',
    icon: Wind,
    rebateEligible: true
  },
  {
    id: 'adaptive-heating',
    title: 'Adaptive Heating Arrays',
    description: 'Smart furnaces and heat pumps that learn your schedule and adjust output for maximum comfort and minimum waste.',
    icon: Thermometer,
    rebateEligible: true
  },
  {
    id: 'predictive-care',
    title: 'Predictive Care Protocol',
    description: 'IoT sensors constantly monitor system health, alerting our central AI to potential failures before they occur.',
    icon: Activity,
    rebateEligible: false
  },
  {
    id: 'rapid-response',
    title: 'Algorithmic Diagnostics',
    description: 'Computer-vision aided repair diagnostics allow our technicians to identify and solve issues 3x faster.',
    icon: ScanLine,
    rebateEligible: false
  },
  {
    id: 'smart-air',
    title: 'Autonomous Air Quality',
    description: 'Active monitoring systems that detect pollutants and automatically adjust filtration and humidity levels.',
    icon: Shield,
    rebateEligible: false
  },
  {
    id: 'iot-integration',
    title: 'Smart Home Integration',
    description: 'Seamless syncing with Google Home, Alexa, and HomeKit for voice-controlled climate mastery.',
    icon: Cpu,
    rebateEligible: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Bill Dunn',
    role: 'BHD Networks',
    quote: 'Amazing work, good job! Job was quoted and completed as promised. Keep up the good work. A++++'
  },
  {
    id: '2',
    name: 'Sal Spataro',
    role: 'Salto Restaurant Bar & Cafe',
    quote: 'High standard and very efficient. From the day Rencon came in, to the end result, they were very professional. I highly recommend.'
  },
  {
    id: '3',
    name: 'Sarah Jenkins',
    role: 'Mississauga Resident',
    quote: 'The rebate calculator was spot on. We saved over $4,000 on our new Heat Pump installation. The team was clean, fast, and polite.'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Michael Rossi',
    role: 'Lead AI Diagnostics',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    certifications: ['Predictive Maint. L3', 'IoT Systems Arch.']
  },
  {
    id: '2',
    name: 'Dr. Sarah Chen',
    role: 'Smart Grid Specialist',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800',
    certifications: ['Neural Network Calibration', 'G2 Gas License']
  },
  {
    id: '3',
    name: 'James Silva',
    role: 'Automation Engineer',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
    certifications: ['Data-Driven HVAC', '313A Refrigeration']
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I qualify for the $10,500 rebate?",
    answer: "To qualify for the Home Efficiency Rebate Plus (HER+) program, you typically need to be an Enbridge Gas customer and install an eligible heat pump system. We handle the initial assessment booking and guide you through the audit process to ensure you maximize your return."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we offer flexible financing plans including 0% interest for 12 months on select high-efficiency systems. We also work with the Canada Greener Homes Loan which offers interest-free loans up to $40,000."
  },
  {
    question: "Are your technicians certified?",
    answer: "Absolutely. All our technicians hold valid G1/G2 Gas Technician licenses and 313A/313D Refrigeration certifications. We are TSSA certified, HRAI members, and fully insured."
  },
  {
    question: "What areas do you service?",
    answer: "We service the entire Greater Toronto Area, including Mississauga, Brampton, Oakville, Burlington, Milton, Etobicoke, North York, and Scarborough."
  },
  {
    question: "How often should I change my furnace filter?",
    answer: "For most homes, we recommend checking your filter every 30 days and replacing it every 1-3 months. If you have pets or allergies, you may need to change it more frequently to maintain optimal air quality."
  }
];
