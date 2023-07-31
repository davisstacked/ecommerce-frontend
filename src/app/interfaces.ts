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

export interface ShoppingCartItem {
  product: Product;
  quantity: number;
}

export interface ShoppingCart {
  items: ShoppingCartItem[];
}


