// MobileMenu.tsx
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
  Box
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import keys from '../../i18n/keys';
import { useState } from 'react';

function MobileMenu() {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleProducts = () => setProductsOpen(!isProductsOpen);
  const toggleProfile = () => setProfileOpen(!isProfileOpen);

  return (
    <>
      <IconButton
        aria-label={t(keys.header.openMenu)}
        icon={<HamburgerIcon />}
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{t(keys.header.menu)}</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">
              <Link>{t(keys.header.newArrival)}</Link>
              <Box w="100%">
                <Button onClick={toggleProducts} w="100%" justifyContent="space-between">
                  {t(keys.header.products.label)} {isProductsOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </Button>
                <Collapse in={isProductsOpen}>
                  <VStack align="start" pl={4} pt={2}>
                    <Link>{t(keys.header.products.menTops)}</Link>
                    <Link>{t(keys.header.products.menSuits)}</Link>
                    <Link>{t(keys.header.products.womenTops)}</Link>
                    <Link>{t(keys.header.products.womenDresses)}</Link>
                    <Link>{t(keys.header.products.womenPants)}</Link>
                  </VStack>
                </Collapse>
              </Box>
              <Link>{t(keys.header.styling)}</Link>
              <Box w="100%">
                <Button onClick={toggleProfile} w="100%" justifyContent="space-between">
                  {t(keys.header.profile.label)} {isProfileOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </Button>
                <Collapse in={isProfileOpen}>
                  <VStack align="start" pl={4} pt={2}>
                    <Link>{t(keys.header.profile.settings)}</Link>
                    <Link>{t(keys.header.profile.logout)}</Link>
                  </VStack>
                </Collapse>
              </Box>
              <Link>{t(keys.header.cart)}</Link>
              <Link>{t(keys.header.favorites)}</Link>
              <Link>{t(keys.header.search)}</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileMenu;
