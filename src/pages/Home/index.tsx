import React, {
  useState,
} from 'react';
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
import { ProductProps } from '../../types/components/productTypes';
import CartModal from './CartModal';
import { useFavorites } from '../../context/FavoriteContext';
import { useProducts } from '../../context/ProductContext';

const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { products, loading } = useProducts();

  const handleAddToCartClick = (product: ProductProps) => {
    setSelectedProduct(product);
    onOpen();
  };

  const handleFavoriteClick = async (productProps: ProductProps) => {
    if (isFavorite(productProps.product.id)) {
      removeFromFavorites(productProps.product.id);
    } else {
      addToFavorites(productProps.product.id);
    }
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
        onAddToCart={handleAddToCartClick}
        onFavorite={handleFavoriteClick}
      />
      <Divider />
      <Heading>RANKING</Heading>
      <ProductList
        products={products}
        onAddToCart={handleAddToCartClick}
        onFavorite={handleFavoriteClick}
      />
      <Divider />
      <Heading>STYLING</Heading>
      <ProductList
        products={products}
        onAddToCart={handleAddToCartClick}
        onFavorite={handleFavoriteClick}
      />
      {selectedProduct && (
        <CartModal
          isOpen={isOpen}
          onClose={onClose}
          item={selectedProduct}
        />
      )}
    </VStack>
  );
};

export default Home;
