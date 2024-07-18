import { ProductProps } from './productTypes';

export interface CartItemProps {
  item: ProductProps & { 
    quantity: number; 
    selectedColor: string; 
    selectedSize: string;
  };
  onRemove: (id: string) => void;
}
