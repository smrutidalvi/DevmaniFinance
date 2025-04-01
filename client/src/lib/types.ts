export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  features: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Insight {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  rating: number;
}
