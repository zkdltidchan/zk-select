// Header.tsx
import React from 'react';
import {
  Box,
  Flex,
  Link,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import keys from '../../i18n/keys';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

import { Link as RouterLink } from 'react-router-dom';
import { CustomerColorBox } from '../CustomerColorBox';

const Header: React.FC = () => {
  const { t,
    //  i18n,
  } = useTranslation();

  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  //   localStorage.setItem('language', lng);
  // };

  return (
    <CustomerColorBox as="header" py={4}>
      <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
        <Link as={RouterLink} to="/" fontWeight="bold" size="lg">
          {t(keys.header.title)}
        </Link>
        <Box display={{ base: 'none', md: 'flex' }} flex="1" ml={10}>
          <DesktopMenu />
        </Box>
        <Box display={{ base: 'flex', md: 'none' }}>
          <MobileMenu />
        </Box>
      </Flex>
    </CustomerColorBox>
  );
};

export default Header;
