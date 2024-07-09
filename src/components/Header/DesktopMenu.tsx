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
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaUser,
  FaTshirt,
  FaSuitcase,
  FaFemale,
  FaMale,
  FaBlender,
  FaRegHandPeace,
  FaWallet,
  FaClock,
  FaHatCowboy,
  FaChair,
  FaMugHot,
  FaDumbbell,
  FaWineBottle,
  FaMusic,
  FaSwimmer,
  FaBaby,
  FaEllipsisH,
  FaShoePrints,
  FaSocks,
} from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

import { ColorModeSwitcher } from '../ColorModeSwitcher';

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

  return (
    <>
      <HStack w="100%" h={menuHeight} spacing={4} justify="space-between">
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
                <PopoverHeader>{t(keys.header.products.label)}</PopoverHeader>
                <PopoverBody paddingX={16}>
                  <SimpleGrid columns={4} spacing={4}>
                    <GridItem>
                      <Link as={RouterLink} to="/category/shirt">
                        <Flex align="center">
                          <FaTshirt />
                          <Box ml={2}>{t(keys.header.products.menTops)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/suit">
                        <Flex align="center">
                          <FaSuitcase />
                          <Box ml={2}>{t(keys.header.products.menSuits)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/shirt">
                        <Flex align="center">
                          <FaFemale />
                          <Box ml={2}>{t(keys.header.products.womenTops)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/dress">
                        <Flex align="center">
                          <FaFemale />
                          <Box ml={2}>{t(keys.header.products.womenDresses)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/pants">
                        <Flex align="center">
                          <FaMale />
                          <Box ml={2}>{t(keys.header.products.womenPants)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/shirt">
                        <Flex align="center">
                          <FaTshirt />
                          <Box ml={2}>{t(keys.header.products.shirt)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/t-shirt">
                        <Flex align="center">
                          <FaTshirt />
                          <Box ml={2}>{t(keys.header.products.tshirt)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/tops">
                        <Flex align="center">
                          <FaTshirt />
                          <Box ml={2}>{t(keys.header.products.tops)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/jacket">
                        <Flex align="center">
                          <FaBlender />
                          <Box ml={2}>{t(keys.header.products.jacket)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/blouson">
                        <Flex align="center">
                          <FaRegHandPeace />
                          <Box ml={2}>{t(keys.header.products.blouson)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/coat">
                        <Flex align="center">
                          <FaRegHandPeace />
                          <Box ml={2}>{t(keys.header.products.coat)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/pants">
                        <Flex align="center">
                          <FaMale />
                          <Box ml={2}>{t(keys.header.products.pants)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/skirt">
                        <Flex align="center">
                          <FaFemale />
                          <Box ml={2}>{t(keys.header.products.skirt)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/one-piece">
                        <Flex align="center">
                          <FaFemale />
                          <Box ml={2}>{t(keys.header.products.onepiece)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/suit">
                        <Flex align="center">
                          <FaSuitcase />
                          <Box ml={2}>{t(keys.header.products.suit)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/bag">
                        <Flex align="center">
                          <FaSuitcase />
                          <Box ml={2}>{t(keys.header.products.bag)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/shoes">
                        <Flex align="center">
                          <FaShoePrints />
                          <Box ml={2}>{t(keys.header.products.shoes)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/fashiongoods">
                        <Flex align="center">
                          <FaWallet />
                          <Box ml={2}>{t(keys.header.products.fashionZakka)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/wallet">
                        <Flex align="center">
                          <FaWallet />
                          <Box ml={2}>{t(keys.header.products.wallet)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/watch">
                        <Flex align="center">
                          <FaClock />
                          <Box ml={2}>{t(keys.header.products.watch)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/hair-accessory">
                        <Flex align="center">
                          <FaHatCowboy />
                          <Box ml={2}>{t(keys.header.products.hairAccessory)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/accessory">
                        <Flex align="center">
                          <FaRegHandPeace />
                          <Box ml={2}>{t(keys.header.products.accessory)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/underwear">
                        <Flex align="center">
                          <FaRegHandPeace />
                          <Box ml={2}>{t(keys.header.products.underwear)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/legwear">
                        <Flex align="center">
                          <FaSocks />
                          <Box ml={2}>{t(keys.header.products.legwear)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/hat">
                        <Flex align="center">
                          <FaHatCowboy />
                          <Box ml={2}>{t(keys.header.products.cap)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/interior">
                        <Flex align="center">
                          <FaChair />
                          <Box ml={2}>{t(keys.header.products.interior)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/tablewear">
                        <Flex align="center">
                          <FaMugHot />
                          <Box ml={2}>{t(keys.header.products.kitchen)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/hobby">
                        <Flex align="center">
                          <FaDumbbell />
                          <Box ml={2}>{t(keys.header.products.zakka)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/cosmetics">
                        <Flex align="center">
                          <FaWineBottle />
                          <Box ml={2}>{t(keys.header.products.cosme)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/music">
                        <Flex align="center">
                          <FaMusic />
                          <Box ml={2}>{t(keys.header.products.musicBooks)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/swimwear">
                        <Flex align="center">
                          <FaSwimmer />
                          <Box ml={2}>{t(keys.header.products.swimwear)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/maternity">
                        <Flex align="center">
                          <FaBaby />
                          <Box ml={2}>{t(keys.header.products.maternity)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link as={RouterLink} to="/category/etc">
                        <Flex align="center">
                          <FaEllipsisH />
                          <Box ml={2}>{t(keys.header.products.others)}</Box>
                        </Flex>
                      </Link>
                    </GridItem>
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
            <IconButton icon={<FaHeart />} aria-label={t(keys.header.favorites)} />
          </Link>
          <Link as={RouterLink} to="/search">
            <IconButton icon={<FaSearch />} aria-label={t(keys.header.search)} />
          </Link>
          <ColorModeSwitcher />
        </HStack>
      </HStack>
    </>
  );
}

export default DesktopMenu;
