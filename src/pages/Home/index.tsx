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
import { ProductProps } from '../../components/Product';
import CartModal from './CartModal';
import { useFavorites } from '../../context/FavoriteContext';
import { useProducts } from '../../context/ProductContext';

const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductProps>({} as ProductProps);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { products, loading } = useProducts();

  const handleAddToCartClick = (product: ProductProps) => {
    setSelectedProduct(product);
    onOpen();
  };

  const handleFavoriteClick = async (product: ProductProps) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product.id);
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
