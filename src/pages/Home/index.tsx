import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  VStack,
  Divider,
  useDisclosure,
  Spinner,
} from '@chakra-ui/react';
import Carousel from './Carousel';
import ProductList from './ProductList';
import { ProductProps } from '../../components/Product';
import CartModal from './CartModal';
import { addToFavorites, removeFromFavorites } from '../../services/favoriteService';
import { fetchProducts } from '../../services/productService';

const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductProps>({} as ProductProps);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setLoading(false);
    };

    getProducts();
  }, []);

  const handleAddToCartClick = (product: ProductProps) => {
    setSelectedProduct(product);
    onOpen();
  };

  const handleFavoriteClick = (product: ProductProps) => {
    const updatedProducts = products.map(p => {
      if (p.id === product.id) {
        const updatedProduct = {
          ...p,
          favorite: !p.favorite,
        };
        if (updatedProduct.favorite) {
          addToFavorites(updatedProduct.id);
        } else {
          removeFromFavorites(updatedProduct.id);
        }
        return updatedProduct;
      }
      return p;
    });
    setProducts(updatedProducts);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <VStack w="100%" maxW="container.xl" mx="auto" p={4} spacing={8}>
      <Box w="100%">
        <Carousel />
      </Box>
      <Heading>NEW ARRIVALS</Heading>
      <ProductList
        products={products}
        onAddToCartClick={handleAddToCartClick}
        onFavoriteClick={handleFavoriteClick}
      />
      <Divider />
      <Heading>RANKING</Heading>
      <ProductList
        products={products}
        onAddToCartClick={handleAddToCartClick}
        onFavoriteClick={handleFavoriteClick}
      />
      <Divider />
      <Heading>STYLING</Heading>
      <ProductList
        products={products}
        onAddToCartClick={handleAddToCartClick}
        onFavoriteClick={handleFavoriteClick}
      />
      {selectedProduct && (
        <CartModal
          isOpen={isOpen}
          onClose={onClose}
          product={selectedProduct}
        />
      )}
    </VStack>
  );
};

export default Home;
