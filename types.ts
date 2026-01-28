
import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  backgroundImage?: string;
  imageAlt?: string;
  whatsappMessage?: string;
}

export interface ServiceCategory {
  category: string;
  icon: React.ReactNode;
  items: ServiceItem[];
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Comment {
  id: string;
  name: string;
  location: string;
  text: string;
  date: string;
  rating: number;
  status: 'pending' | 'approved';
  initials: string;
}
