import React from 'react';
import {
  Box,
  Image,
  Badge,
  Text,
  VStack,
  Flex,
  IconButton,
  useToast,

  useBreakpointValue,
} from '@chakra-ui/react';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { ProductProps } from '../types/components/productTypes';

const Product: React.FC<ProductProps> = (productProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const toast = useToast();
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (productProps.onFavorite) {
      productProps.onFavorite(productProps);
    }
    if (productProps.favorite) {
      toast({
        colorScheme: "gray",
        title: "Removed from favorites",
        description: `${productProps.product.productName}`,
        status: "success",
        duration: 1300,
        isClosable: true,
      });
    } else {
      toast({
        colorScheme: "gray",
        title: "Added to favorites",
        description: `${productProps.product.productName}`,
        status: "success",
        duration: 1300,
        isClosable: true,
      });
    }
  };

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
      {productProps.product.isNew && (
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
        <Image src={productProps.product.imageUrl} alt={productProps.product.productName} width="100%" />
        <Flex
          className="hover-content"
          // position="absolute"
          bottom="0px"
          width="100%"
          // opacity={isMobile ? 1 : 0}
          transition="opacity 0.3s"
          zIndex="1"
          bg="gray.700"
        >
          {productProps.onAddToCart && (
            <IconButton
              aria-label="Add to Cart"
              icon={<FaShoppingCart />}
              flex="1"
              borderRadius="none"
              bg="gray.700"
              textColor="white"
              _hover={{ bg: "gray.900" }}
              onClick={(e) => {
                e.stopPropagation();
                if (productProps.onAddToCart) {
                  productProps.onAddToCart(productProps);
                }
              }
              }
            />
          )}
          {productProps.onFavorite && (
            <IconButton
              aria-label={productProps.favorite ? "Remove from Favorites" : "Add to Favorites"}
              icon={productProps.favorite ? <FaHeart color='#1E90ff' /> : <FaRegHeart />}
              flex="1"
              borderRadius="none"
              bg="gray.700"
              textColor="white"
              _hover={{ bg: "gray.900" }}
              onClick={handleFavoriteClick}
            />
          )}
        </Flex>
      </Box>

      <VStack align="start" p={4} spacing={2}>
        <Text fontWeight="bold" className="brand-name">
          {productProps.product.brandName}
        </Text>
        <Text className="product-name" noOfLines={2}>
          {productProps.product.productName}
        </Text>
        <Text fontWeight="bold" className="price" display={!isMobile ? "none" : "block"}>
          ${productProps.product.price}
        </Text>
      </VStack>
    </Box>
  );
};

export { Product };
