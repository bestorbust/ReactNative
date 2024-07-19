export interface Category {
    id: string;
    name: string;
    description: string;
    price: number;
    discountedPrice?: number;
    discount?: string;
    stock: string;
    image?: string;
    quantity?: number;
    addedToCart?: boolean;
    contains?: string;
    manufacturer?: string;
    countryOfOrigin?: string;
    storage?: string;
  }
  