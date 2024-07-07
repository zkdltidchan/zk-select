import React from 'react';
import {
  Box,
  Image,
  Badge,
  Text,
  VStack,
  Button,
} from '@chakra-ui/react';

interface ProductProps {
  imageSrc: string;
  brandName: string;
  productName: string;
  price: number;
  isNew: boolean;
}

const Product: React.FC<ProductProps> = ({ imageSrc, brandName, productName, price, isNew }) => {
  return (
    <Box
      overflow="hidden"
      position="relative"
      _hover={{
        '.hover-content': { opacity: 1 },
        '.brand-name': { display: 'none' },
        '.product-name': { display: 'none' },
        '.price': { display: 'block' },
      }}
    >
      {isNew && (
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
        <Image src={imageSrc} alt={productName} width={"100%"} />
        <Button
          bg="gray.700"
          textColor={"white"}
          className="hover-content"
          position="absolute"
          borderRadius="none"
          bottom="0px"
          width="100%"
          opacity="0"
          transition="opacity 0.3s"
          zIndex="1"
          _hover={{ 
            bg: "gray.900",
           }}
        >
          + Cart
        </Button>
      </Box>

      <VStack align="start" p={4} spacing={2}>
        
          <Text fontWeight="bold" className="brand-name">
            {brandName}
          </Text>
          <Text className="product-name">
            {productName}
          </Text>
          <Text fontWeight="bold" className="price" display="none">
            ${price}
          </Text>
        
      </VStack>
    </Box>
  );
};

export { Product };
export type { ProductProps };
