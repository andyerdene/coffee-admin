export type Product = {
  id: string; //user id
  imageUrl: string;
  name: string;
  price: {
    small: number;
    medium: number;
    large: number;
  };
  description: string;
  category: string; // category id
  size: "small" | "medium" | "large";
};
export type Category = {
  id: string; // category id
  name: string; //Soft Hot Coffees
};
export type User = {
  fullName: string;
  email: string;
  password: string;
  avatar: string;
  address: string;
  paymentInfo: {
    cardHolder: string;
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
  favorates: string[]; // product id
};
export type Order = {
  id: string; // order id
  products: {
    productId: string; // product id
    size: "small" | "medium" | "large";
    quantity: number;
  }[];
  user: string; // user id
  date: Date;
  state: "placed" | "in progress" | "on your way" | "delivered";
  milkAmount: number; //1-10
  promotionCode: string | null;
};

export type Promotion = {
  productId: string; // product id
  title: string;
  description: string;
};

export type PromotionCode = {
  id: string;
  code: string;
  discount: number;
  expirationDate: Date;
};
