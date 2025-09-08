export interface AdDetail {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  subcategory: string;
  condition: string;
  location: {
    department: string;
    province: string;
    district: string;
  };
  contact: {
    name: string;
    phone: string;
    email?: string;
  };
  images: string[];
  createdAt: string;
  featured: boolean;
  views: number;
  specifications?: Record<string, string>;
}
