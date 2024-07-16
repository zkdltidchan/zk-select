import React from 'react';
import {
  VStack,
  Button,
  Heading,
  Box,
} from '@chakra-ui/react';

import { FaInstagram } from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <Box as="footer">
      <VStack w="100%" maxW="container.xl" mx="auto" p={4} spacing={8}>
      <Button variant={'ghost'} leftIcon={<FaInstagram />} aria-label="instagram">Instagram</Button>
        <Heading textAlign="center">&copy; 2024 ZK-SELECT</Heading>
      </VStack>
    </Box>
  );
};

export default Footer;
