export interface Movie {
  id: string;
  title: string;
  price: number;
  stock: number;
  imageUrl: string;
  description: string;
  discount?: number;
}

export interface CartMovie extends Movie {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'customer';
}

export interface Purchase {
  id: string;
  userId: string;
  items: CartMovie[];
  totalAmount: number;
  date: string;
  status: 'pending' | 'completed' | 'cancelled';
}