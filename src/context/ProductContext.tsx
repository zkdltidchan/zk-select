// contexts/ProductContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { fetchProducts } from '../services/productService';
import { ProductProps } from '../components/Product';

interface ProductsContextProps {
  products: ProductProps[];
  loading: boolean;
  loadProducts: () => void;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
    setLoading(true);
    const fetchedProducts = await fetchProducts();
    setProducts(fetchedProducts);
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading, loadProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): ProductsContextProps => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
