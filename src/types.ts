export interface Milestone {
  year: string;
  month: string;
  event: string;
}

export interface BusinessArea {
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  category: string;
  items: string[];
  image: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}
