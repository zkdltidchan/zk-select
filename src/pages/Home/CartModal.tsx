import React from 'react';
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
} from '@chakra-ui/react';
import { ProductProps } from '../../components/Product';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductProps;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, product }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW={{ base: '90%', md: '700px' }}>
        <ModalHeader fontSize={{ base: 'lg', md: 'xl' }}>Add to Cart</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} alignItems="center">
            <Image
              src={product.imageSrc}
              alt={product.productName}
              boxSize={{ base: '150px', md: "300px" }}
              objectFit="cover"
              mb={{ base: 4, md: 0 }}
              mr={{ base: 0, md: 4 }}
            />
            <Box textAlign={{ base: 'center', md: 'left' }}>
              <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }}>
                {product.brandName}
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }}>{product.productName}</Text>
              <Text fontWeight="bold" fontSize={{ base: 'lg', md: 'xl' }} mt={2}>
                ${product.price}
              </Text>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter display="flex" justifyContent="space-between">
          <Button variant="outline" onClick={onClose} width={{ base: '45%', md: 'auto' }}>
            Close
          </Button>
          <Button colorScheme="blue" width={{ base: '45%', md: 'auto' }}>
            Add to Cart
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
