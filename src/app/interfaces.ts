export interface Product {
  id: number;
  brand: string;
  name: string;
  alt: string;
  images: string[];
  price: number;
  description: string;
  qualities: string[];
}

export interface ProductState { 
  products: Product[];
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface ShoppingCart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
}


