export type TProduct = {
  _id: string;
  image: string[];
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  description: string;
  discount?: number;
  offer?: boolean;
  offerDiscount?: number;
  isDeleted?: boolean;
};

export type TMeta = {
  totalPage: number;
  page: number;
  limit: number;
  total: number;
};