import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { ProductProps } from '../../types/components/productTypes';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ProductProps;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, item }) => {
  const [selectedColor, setSelectedColor] = useState(item.product.availableColors[0]);
  const [selectedSize, setSelectedSize] = useState(item.product.availableSizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log(`Adding to cart: ${item.product.productName}, ${selectedColor}, ${selectedSize}, Quantity: ${quantity}`);
    onClose();
  };

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW={{ base: '90%', md: '700px' }}>
        <ModalHeader fontSize={{ base: 'lg', md: 'xl' }}>Add to Cart</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} alignItems="center">
            <Image
              src={item.product.imageUrl}
              alt={item.product.productName}
              boxSize={{ base: '150px', md: "300px" }}
              objectFit="cover"
              mb={{ base: 4, md: 0 }}
              mr={{ base: 0, md: 4 }}
            />
            <Box textAlign={{ base: 'center', md: 'left' }}>
              <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }}>
                {item.product.brandName}
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }}>{item.product.productName}</Text>
              <Text fontWeight="bold" fontSize={{ base: 'lg', md: 'xl' }} mt={2}>
                ${item.product.price}
              </Text>
              <VStack>
                <Menu>
                  <MenuButton w="100%">
                    <HStack justify={"space-between"}>
                      <>{selectedColor}</>
                      <ChevronDownIcon />
                    </HStack>
                  </MenuButton>
                  <MenuList maxH="200px" overflowY="auto">
                    {item.product.availableColors.map((color) => (
                      <MenuItem key={color} onClick={() => setSelectedColor(color)}>
                        {color}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton w="100%">
                    <HStack justify={"space-between"}>
                      <>{selectedSize}</>
                      <ChevronDownIcon />
                    </HStack>
                  </MenuButton>
                  <MenuList maxH="200px" overflowY="auto">
                    {item.product.availableSizes.map((size) => (
                      <MenuItem key={size} onClick={() => setSelectedSize(size)}>
                        {size}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <HStack w="100%" justify={"flex-end"}>
                  <Button variant={"solid"} onClick={decrementQuantity}>-</Button>
                  <Button disabled bg="white" color="black" variant={"outline"} _hover={{}}>
                    {quantity}
                  </Button>
                  <Button variant={"solid"} onClick={incrementQuantity}>+</Button>
                </HStack>
              </VStack>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter display="flex" justifyContent="space-between">
          <Button variant="outline" onClick={onClose} width={{ base: '45%', md: 'auto' }}>
            Close
          </Button>
          <Button colorScheme="blue" width={{ base: '45%', md: 'auto' }} onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
