export interface Cake {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: CakeCategory;
  weights: string[];
  isEggless: boolean;
  isFeatured?: boolean;
}

export type CakeCategory = 'birthday' | 'anniversary' | 'bento' | 'custom' | 'wedding';

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  cakeOrdered: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface OrderFormData {
  customerName: string;
  phone: string;
  email: string;
  cakeSelection: string;
  cakeWeight: string;
  quantity: number;
  deliveryDate: string;
  messageOnCake: string;
  additionalNotes: string;
}

export interface Category {
  id: CakeCategory;
  name: string;
  image: string;
  description: string;
}
