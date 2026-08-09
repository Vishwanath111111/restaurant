export type SpiceLevel = 1 | 2 | 3 | 4 | 5;

export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  category: 
    | "North Indian"
    | "South Indian"
    | "Punjabi"
    | "Maharashtrian"
    | "Gujarati"
    | "Rajasthani"
    | "Hyderabadi"
    | "Biryani"
    | "Tandoor"
    | "Street Food"
    | "Vegetarian"
    | "Jain Menu"
    | "Desserts"
    | "Indian Beverages"
    | "Festival Specials"
    | "Chef's Signature";
  description: string;
  price: number;
  image: string;
  ingredients: string[];
  spiceLevel: SpiceLevel;
  isVeg: boolean;
  isJainAvailable?: boolean;
  isChefSpecial?: boolean;
  isPopular?: boolean;
  calories?: string;
}

export interface Chef {
  id: string;
  name: string;
  title: string;
  experience: string;
  bio: string;
  image: string;
  awards: string[];
  signatureDishes: string[];
  cookingPhilosophy: string;
}

export interface EventPackage {
  id: string;
  title: string;
  category: "Birthday" | "Anniversary" | "Corporate" | "Wedding" | "Festival" | "Live Music";
  description: string;
  image: string;
  capacity: string;
  features: string[];
  priceRange: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
  source: "Google Reviews" | "TripAdvisor" | "Zomato Gold" | "VIP Patron";
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Reservations" | "Dietary & Jain" | "Events & Catering" | "Dress Code & Ambience";
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  options?: { label: string; action: string }[];
  deepLink?: string;
  whatsappHandoff?: boolean;
}
