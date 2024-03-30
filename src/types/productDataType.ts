export interface ProductDataType {
  id: number;
  src: string;
  store: string | null;
  brand: string | null;
  name: string;
  subtitle: string | null;
  price: number;
  sale: number | null;
  salePrice: number | null;
  reviewRating: number;
  reviewCount: number;
}