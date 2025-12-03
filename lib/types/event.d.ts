export interface EventType {
  id: string | number;
  title: string;
  description: string;
  category: string;
  price: number;
  images: string[];
  thumbnail: string;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
}

export interface EventListResponse {
  products: EventType[];
  total: number;
  skip: number;
  limit: number;
}
