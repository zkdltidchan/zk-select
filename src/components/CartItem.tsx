import React from 'react';
import { Box, Text, Image, Button, HStack } from '@chakra-ui/react';
import { CartItemProps } from '../types/components/cartTypes';

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <Box display="flex" alignItems="center" p={4} borderBottom="1px solid #e2e8f0">
      <Image src={item.product.imageUrl} alt={item.product.productName} boxSize="100px" objectFit="cover" />
      <Box flex="1" ml={4}>
        <Text fontWeight="bold">{item.product.productName}</Text>
        <Text>{item.product.brandName}</Text>
        <Text>Color: {item.selectedColor}</Text>
        <Text>Size: {item.selectedSize}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <Text fontWeight="bold" mt={2}>${item.product.price}</Text>
      </Box>
      <Button colorScheme="red" onClick={() => onRemove(item.product.id)}>Remove</Button>
    </Box>
  );
};

export default CartItem;
