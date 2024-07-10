import React from 'react';
import {
  Box,
  Image,
  Badge,
  Text,
  VStack,
  Flex,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';

interface ProductProps {
  imageSrc: string;
  brandName: string;
  productName: string;
  price: number;
  isNew: boolean;
  favorite: boolean;
  onFavoriteClick?: () => void;
  onAddToCartClick?: () => void;
}

const Product: React.FC<ProductProps> = (productProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      overflow="hidden"
      position="relative"
      _hover={!isMobile ? {
        '.hover-content': { opacity: 1 },
        '.brand-name': { display: 'none' },
        '.product-name': { display: 'none' },
        '.price': { display: 'block' },
      } : undefined}
    >
      {productProps.isNew && (
        <Badge
          position="absolute"
          top="5px"
          left="5px"
          colorScheme="red"
          zIndex="2"
        >
          New
        </Badge>
      )}
      <Box position="relative">
        <Image src={productProps.imageSrc} alt={productProps.productName} width="100%" />
        <Flex
          className="hover-content"
          position="absolute"
          bottom="0px"
          width="100%"
          opacity={isMobile ? 1 : 0}
          transition="opacity 0.3s"
          zIndex="1"
          bg="gray.700"
        >
          {productProps.onAddToCartClick && (
            <IconButton
              aria-label="Add to Cart"
              icon={<FaShoppingCart />}
              flex="1"
              borderRadius="none"
              bg="gray.700"
              textColor="white"
              _hover={{ bg: "gray.900" }}
              onClick={(e) => { e.stopPropagation(); productProps.onAddToCartClick && productProps.onAddToCartClick(); }}
            />
          )}
          {productProps.onFavoriteClick && (
            <IconButton
              aria-label={productProps.favorite ? "Remove from Favorites" : "Add to Favorites"}
              icon={productProps.favorite ? <FaHeart /> : <FaRegHeart />}
              flex="1"
              borderRadius="none"
              bg="gray.700"
              textColor="white"
              _hover={{ bg: "gray.900" }}
              onClick={(e) => { e.stopPropagation(); productProps.onFavoriteClick && productProps.onFavoriteClick(); }}
            />
          )}
        </Flex>
      </Box>

      <VStack align="start" p={4} spacing={2}>
        <Text fontWeight="bold" className="brand-name">
          {productProps.brandName}
        </Text>
        <Text className="product-name">
          {productProps.productName}
        </Text>
        <Text fontWeight="bold" className="price" display={!isMobile ? "none" : "block"}>
          ${productProps.price}
        </Text>
      </VStack>
    </Box>
  );
};

export { Product };
export type { ProductProps };
