import React, {
  useEffect,
  useState,
} from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,
  Box,
  VStack,
  Flex,
  Divider,
} from '@chakra-ui/react';
import { ProductProps } from '../../types/components/productTypes';
import { Selecter } from '../../components/Selecter';
import { Counter } from '../../components/Counter';
import { useCart } from '../../context/CartContext'; // 导入 useCart

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ProductProps;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, item }) => {
  const [selectedColor, setSelectedColor] = useState(item.product.availableColors[0]);
  const [selectedSize, setSelectedSize] = useState(item.product.availableSizes[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // 使用 useCart

  const handleAddToCart = () => {
    addToCart({
      ...item,
      quantity,
      selectedColor,
      selectedSize,
    });
    onClose();
  };

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  useEffect(() => {
    setSelectedColor(item.product.availableColors[0]);
    setSelectedSize(item.product.availableSizes[0]);
    setQuantity(1);
  }, [item]);


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius={0} maxW={{ base: '90%', md: '700px' }}>
        <ModalCloseButton borderRadius={0} />
        <ModalBody py={6}>
          <Flex flexDirection={{ base: 'column', md: 'row' }} align="center">
            <Image
              src={item.product.imageUrl}
              alt={item.product.productName}
              boxSize={{ base: '150px', md: "300px" }}
              objectFit="cover"
              mb={{ base: 4, md: 0 }}
              mr={{ base: 0, md: 4 }}
            />
            <Flex flexDirection="column" textAlign={{ base: 'center', md: 'left' }}>
              <Box>
                <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }}>
                  {item.product.brandName}
                </Text>
                <Text fontSize={{ base: 'sm', md: 'md' }}>{item.product.productName}</Text>
                <Text fontWeight="bold" fontSize={{ base: 'lg', md: 'xl' }} mt={2} textAlign="end">
                  ${item.product.price}
                </Text>
              </Box>
              <Divider my={4} />
              <Box w="120px" alignSelf={'center'}>
                <VStack>
                  <Selecter
                    maxH="200px"
                    options={item.product.availableColors}
                    value={selectedColor}
                    onChange={setSelectedColor}
                  />
                  <Selecter
                    maxH="200px"
                    options={item.product.availableSizes}
                    value={selectedSize}
                    onChange={setSelectedSize}
                  />
                  <Counter
                    count={quantity}
                    onIncrement={incrementQuantity}
                    onDecrement={decrementQuantity}
                  />
                </VStack>
              </Box>
            </Flex>
          </Flex>
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
