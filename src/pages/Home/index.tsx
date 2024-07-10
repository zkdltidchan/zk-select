import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  Divider,
  useDisclosure,
} from '@chakra-ui/react';
// import { useTranslation } from 'react-i18next';
import Carousel from './Carousel';
import ProductList from './ProductList';
import {ProductProps} from '../../components/Product';
import CartModal from './CartModal';

const Home: React.FC = () => {
  // const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<ProductProps>({} as ProductProps);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddToCartClick = (product: ProductProps) => {
    setSelectedProduct(product);
    onOpen();
  };

  return (
    <VStack w="100%" maxW="container.xl" mx="auto" p={4} spacing={8}>
      <Box w="100%">
        <Carousel />
      </Box>
      <Heading>NEW ARRIVALS</Heading>
      <ProductList
        onAddToCartClick={handleAddToCartClick}
        onFavoriteClick={() => console.log('Favorite')}
       />
      <Divider />
      <Heading>RANKING</Heading>
      <ProductList
        onAddToCartClick={handleAddToCartClick}
        onFavoriteClick={() => console.log('Favorite')}
       />
      <Divider />
      <Heading>STYLING</Heading>
      <ProductList
        onAddToCartClick={handleAddToCartClick}
        onFavoriteClick={() => console.log('Favorite')}
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
