export interface ProgramItem {
  id: string;
  title: string;
  category: 'strength' | 'cardio' | 'mind_body' | 'specialized';
  description: string;
  image: string;
  intensity: 'Medium' | 'High' | 'All Levels' | 'High Intensity';
  focus: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TrainerItem {
  id: string;
  role: string;
  specialization: string;
  image: string;
  experience: string;
  quote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'strength' | 'cardio' | 'group' | 'yoga_dance' | 'interiors';
  image: string;
  caption: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  isPopular?: boolean;
  tagline: string;
  features: string[];
}

export interface ScheduleClass {
  id: string;
  name: string;
  category: string;
  instructorPlaceholder: string;
  timingNote: string;
  room: string;
}

export interface TestimonialItem {
  id: string;
  authorPlaceholder: string;
  programPlaceholder: string;
  durationPlaceholder: string;
  rating: number;
  text: string;
}
