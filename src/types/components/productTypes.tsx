// src/types/components/productTypes.ts
import { ProductApiResponse } from '../api/productTypes';

export interface ProductProps {
  product: ProductApiResponse;
  favorite?: boolean;
  onAddToCart?: (product: ProductProps) => void;
  onFavorite?: (product: ProductProps) => void;
}

export interface ProductListProps {
  products: ProductProps[];
  onAddToCart?: (product: ProductProps) => void;
  onFavorite?: (product: ProductProps) => void;
}