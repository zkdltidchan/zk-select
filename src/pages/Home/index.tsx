import React from 'react';
import {
  Box,
  Heading,
  VStack,
  Divider,
} from '@chakra-ui/react';
// import { useTranslation } from 'react-i18next';
import Carousel from './Carousel';
import ProductList from './ProductList';

const Home: React.FC = () => {
  // const { t } = useTranslation();

  return (
    <VStack w="100%" maxW="container.xl" mx="auto" p={4} spacing={8}>
      <Box w="100%">
        <Carousel />
      </Box>
      <Heading>NEW ARRIVALS</Heading>
      <ProductList />
      <Divider />
      <Heading>RANKING</Heading>
      <ProductList />
      <Divider />
      <Heading>STYLING</Heading>
      <ProductList />
    </VStack>
  );
};

export default Home;
