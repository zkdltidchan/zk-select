import React from 'react';
import {
  VStack,
  Button,
  Heading,
} from '@chakra-ui/react';

import { FaInstagram } from 'react-icons/fa';
import { CustomerColorBox } from './CustomerColorBox';

const Footer: React.FC = () => {
  return (
    <CustomerColorBox as="footer">
      <VStack w="100%" maxW="container.xl" mx="auto" p={4} spacing={8}>
      <Button variant={'ghost'} leftIcon={<FaInstagram />} aria-label="instagram">Instagram</Button>
        <Heading textAlign="center">&copy; 2022 ZK-SELECT</Heading>
      </VStack>
    </CustomerColorBox>
  );
};

export default Footer;
