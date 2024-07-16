// DesktopMenu.tsx
import { useTranslation } from 'react-i18next';
import keys from '../../i18n/keys';
import {
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  HStack,
  Box,
  useDisclosure,
  Button,
  IconButton,
  SimpleGrid,
  GridItem,
  Flex,
  VStack,
  Badge,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaUser,
} from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { menProductItems, womenProductItems, kidsProductItems, ItemProps } from '../../components/Header/Routers';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

import { useFavorites } from '../../context/FavoriteContext';
interface DesktopMenuProps {
  LogoComponent: React.ReactNode;
  menuHeight: string | number;
}

function DesktopMenu(
  { LogoComponent, menuHeight }: DesktopMenuProps
) {
  const { t } = useTranslation();
  const { onOpen: onProductsOpen, onClose: onProductsClose, isOpen: isProductsOpen } = useDisclosure();
  const { onOpen: onProfileOpen, onClose: onProfileClose, isOpen: isProfileOpen } = useDisclosure();
  // selected men/women/kids to show products items
  const [selected, setSelected] = useState('men');

  const toggleProducts = (selected: string) => {
    setSelected(selected);
  };

  const { favorites } = useFavorites();

  return (
    <HStack w="100%" h={menuHeight} spacing={4} justify="space-between" align="center">
      <HStack spacing={4} w="100%" className='desktop'>
        <Link as={RouterLink} to="/">{LogoComponent}</Link>
        <Link as={RouterLink} to="/new-arrivals">{t(keys.header.newArrival)}</Link>
        <Box onMouseEnter={onProductsOpen} onMouseLeave={onProductsClose}>
          <Popover isOpen={isProductsOpen}>
            <PopoverTrigger>
              <Link as={RouterLink} to="#">
                {t(keys.header.products.label)}
                <ChevronDownIcon />
              </Link>
            </PopoverTrigger>
            <PopoverContent w="100vw">
              <PopoverArrow />
              <PopoverHeader>
                <HStack justify='center'>
                  <Button
                    borderBottom={selected === 'men' ? '6px solid gray' : 'none'}
                    onClick={() => toggleProducts('men')}>MEN</Button>
                  <Button
                    borderBottom={selected === 'women' ? '6px solid gray' : 'none'}
                    onClick={() => toggleProducts('women')}>WOMEN</Button>
                  <Button
                    borderBottom={selected === 'kids' ? '6px solid gray' : 'none'}
                    onClick={() => toggleProducts('kids')}>KIDS</Button>
                </HStack>
              </PopoverHeader>
              <PopoverBody paddingX={16}>
                <SimpleGrid columns={4} spacing={4}>
                  {
                    selected === 'women' &&
                    womenProductItems().map((item: ItemProps) => {
                      return (
                        <GridItem key={item.id}>
                          <Link as={RouterLink} to={item.path} key={item.id}>
                            <Flex align="center">
                              {item.icon}
                              <Box ml={2}>{t(item.label)}</Box>
                            </Flex>
                          </Link>
                        </GridItem>
                      )
                    })
                  }
                  {
                    selected === 'men' &&
                    menProductItems().map((item: ItemProps) => {
                      return (
                        <GridItem key={item.id}>
                          <Link as={RouterLink} to={item.path} key={item.id}>
                            <Flex align="center">
                              {item.icon}
                              <Box ml={2}>{t(item.label)}</Box>
                            </Flex>
                          </Link>
                        </GridItem>
                      )
                    })
                  }
                  {
                    selected === 'kids' &&
                    kidsProductItems().map((item: ItemProps) => {
                      return (
                        <GridItem key={item.id}>
                          <Link as={RouterLink} to={item.path} key={item.id}>
                            <Flex align="center">
                              {item.icon}
                              <Box ml={2}>{t(item.label)}</Box>
                            </Flex>
                          </Link>
                        </GridItem>
                      )
                    })
                  }
                </SimpleGrid>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
        <Link as={RouterLink} to="/styling">{t(keys.header.styling)}</Link>
      </HStack>

      <HStack spacing={4}>
        <Box onMouseEnter={onProfileOpen} onMouseLeave={onProfileClose}>
          <Popover isOpen={isProfileOpen}>
            <PopoverTrigger>
              <Button leftIcon={<FaUser />} aria-label={t(keys.header.profile.label)}><ChevronDownIcon /></Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>{t(keys.header.profile.label)} </PopoverHeader>
              <PopoverBody>
                <VStack>
                  <Link as={RouterLink} to="/profile/settings">{t(keys.header.profile.settings)}</Link>
                  <Link as={RouterLink} to="/logout">{t(keys.header.profile.logout)}</Link>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
        <Link as={RouterLink} to="/cart">
          <IconButton icon={<FaShoppingCart />} aria-label={t(keys.header.cart)} />
        </Link>
        <Link as={RouterLink} to="/favorites">
          <Box position="relative">
            <IconButton icon={<FaHeart />} aria-label={t(keys.header.favorites)} />
            {favorites.length > 0 && (
              <Badge
                position="absolute"
                top="0"
                right="0"
                bg="blue.400"
                color="white"
                width="15px"
                height="15px"
                fontSize="8px"
                alignItems="center"
                justifyContent="center"
                transform="translate(-15%, 25%)"
                borderRadius="full"
                display="flex"
                zIndex="1"
              >
                {favorites.length}
              </Badge>
            )}
          </Box>
        </Link>
        <Link as={RouterLink} to="/search">
          <IconButton icon={<FaSearch />} aria-label={t(keys.header.search)} />
        </Link>
        <ColorModeSwitcher />
      </HStack>
    </HStack>
  );
}

export default DesktopMenu;
