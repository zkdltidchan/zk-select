

import React from 'react';
import { 
  Box, 
  Heading, 
  VStack, 
  Button,
 } from '@chakra-ui/react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const CartList: React.FC = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <Box textAlign="center" mt={10}>
        <Heading as="h2" size="xl">Your Cart is Empty</Heading>
      </Box>
    );
  }

  return (
    <Box maxW="container.lg" mx="auto" p={4}>
      <Heading as="h1" size="xl" mb={6}>Your Shopping Cart</Heading>
      <VStack spacing={4} align="stretch">
        {cartItems.map((item) => (
          <CartItem key={item.product.id} item={item} onRemove={removeFromCart} />
        ))}
      </VStack>
      <Button colorScheme="red" mt={6} onClick={clearCart}>Clear Cart</Button>
    </Box>
  );
};



const Cart: React.FC = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CartList />
    </Box>
  );
};

export default Cart;
