import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
  VStack,
  Link,
  Collapse,
  Button,
  Box,
  Spacer,
  Flex,
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import keys from '../../i18n/keys';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useAuth } from '../../context/AuthContext';

interface MobileMenuProps {
  LogoComponent: React.ReactNode;
  menuHeight: string | number;
}

const ProductsMenuItems = ({ onClose }: { onClose: () => void }) => {
  const { t } = useTranslation();
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <Box w="100%">
      <Button
        onClick={toggleProducts}
        w="100%"
        justifyContent="space-between"
        px={0}
      >
        {t(keys.header.products.label)} {isProductsOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Button>
      <Collapse in={isProductsOpen}>
        <Box px={4}>
          <VStack spacing={4} align="start">
            <Link as={RouterLink} to="/products/men" onClick={onClose}>MEN</Link>
            <Link as={RouterLink} to="/products/women" onClick={onClose}>WOMEN</Link>
            <Link as={RouterLink} to="/products/kids" onClick={onClose}>KIDS</Link>
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
};

const ProfileMenuItems = ({ onClose }: { onClose: () => void }) => {
  const { isAuthenticated, logout } = useAuth();
  const { t } = useTranslation();
  const [isProfileOpen, setProfileOpen] = useState(false);
  const toggleProfile = () => setProfileOpen(!isProfileOpen);

  return (
    <Box w="100%">
      <Button
        onClick={toggleProfile}
        w="100%"
        justifyContent="space-between"
        px={0}
      >
        {t(keys.header.profile.label)} {isProfileOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Button>
      <Collapse in={isProfileOpen}>
        <Box px={4}>
          <VStack align="start" pl={4} pt={2}>
            {isAuthenticated
              ? (
                <>
                  <Link as={RouterLink} to="/profile" onClick={onClose}>Profile</Link>
                  <Link as={RouterLink} to="/orders" onClick={onClose}>Orders</Link>
                  <Button onClick={logout}>Logout</Button>
                </>
              )
              : (
                <>
                  <Link as={RouterLink} to="/login" onClick={onClose}>Login</Link>
                  <Link as={RouterLink} to="/register" onClick={onClose}>Register</Link>
                </>
              )}
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
};

function MobileMenu({ LogoComponent, menuHeight }: MobileMenuProps) {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <Flex w="100%" h={menuHeight} align="center" className='mobile'>
        <Spacer />
        <Link as={RouterLink} to="/">{LogoComponent}</Link>
        <Spacer />
        <IconButton
          aria-label={t(keys.header.openMenu)}
          icon={<HamburgerIcon />}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          size="2xl"
          fontSize="2xl"
        />
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{t(keys.header.menu)}</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start" h="100%">
              <Link as={RouterLink} to="/new-arrivals" onClick={onClose}>{t(keys.header.newArrival)}</Link>
              <ProductsMenuItems onClose={onClose} />
              <Link as={RouterLink} to="/styling" onClick={onClose}>{t(keys.header.styling)}</Link>
              <Link as={RouterLink} to="/cart" onClick={onClose}>{t(keys.header.cart)}</Link>
              <Link as={RouterLink} to="/favorites" onClick={onClose}>{t(keys.header.favorites)}</Link>
              <Link as={RouterLink} to="/search" onClick={onClose}>{t(keys.header.search)}</Link>
              <ProfileMenuItems onClose={onClose} />
              <Spacer />
              <ColorModeSwitcher />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileMenu;
