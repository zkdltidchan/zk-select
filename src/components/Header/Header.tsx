// Header.tsx
import React,
{
  useEffect,
  useState,
} from 'react';
import {
  Box,
  Flex,
} from '@chakra-ui/react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

import { Logo, LogoProps } from './Logo';

interface HeaderProps {
  headerHeight: string | number;
  scrolledHeaderHeight: string | number;
}

const Header: React.FC<HeaderProps> = ({ headerHeight, scrolledHeaderHeight }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logoProps: LogoProps = {
    transform: isScrolled ? "translateY(0px) scale(0.8) translateZ(0px)" : "translateY(48px) scale(1.5) translateZ(0px)",
    transition: "all 0.8s",
    boxSize: isScrolled ? "80px" : "125px",
  };

  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  //   localStorage.setItem('language', lng);
  // };

  return (
    <Box
      as="header"
      py={4}
      position="fixed"
      top="0"
      width="100%"
      opacity={isScrolled ? 0.8 : 1}
      boxShadow={isScrolled ? 'sm' : 'none'}
      transition="all 0.3s"
      height={isScrolled ? scrolledHeaderHeight : headerHeight}
      zIndex="999"
    >
      <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
        {/* <Link as={RouterLink} to="/" fontWeight="bold" size="lg">
          {t(keys.header.title)}
        </Link> */}
        <Box display={{ base: 'none', md: 'flex' }} flex="1" ml={10}>
          <DesktopMenu
            menuHeight={"10px"}
            LogoComponent={
              <Logo
                {...logoProps}
              />
            }
          />
        </Box>
        <Box display={{ base: 'flex', md: 'none' }}>
          <MobileMenu />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
