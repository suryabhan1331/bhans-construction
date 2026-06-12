/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string; // Represent Lucide icon name
  features: string[];
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'construction' | 'interior' | 'commercial' | 'residential';
  categoryLabel: string;
  description: string;
  image: string;
  location: string;
  year: string;
  area: string;
  client: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  comment: string;
  rating: number;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}
