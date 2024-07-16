// src/RouterContainer.tsx
import React from 'react';
import {
  ChakraProvider,
  Box,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import theme from './styles/theme';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Styling from './pages/Styling';
import Ranking from './pages/Ranking';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import NewArrivals from './pages/NewArrivals';
import LoginPage from './pages/LoginPage';

import NotFound from './pages/NotFound';
import { AuthProvider } from './context/AuthContext';
import { ProductsProvider } from './context/ProductContext';
import { FavoritesProvider } from './context/FavoriteContext';

const RouterContainer: React.FC = () => {
  const location = useLocation();
  const scrolledHeaderHeightPx = "50px";
  const headerHeightPx = "80px";
  const headerHeight = useBreakpointValue(
    {
      base: '70px',
      md: headerHeightPx,
    }) || headerHeightPx;
  const scrolledHeaderHeight = useBreakpointValue(
    {
      base: '50px',
      md: scrolledHeaderHeightPx,
    }) || scrolledHeaderHeightPx;

  const headerPt = useBreakpointValue(
    {
      base: '80px',
      md: '150px',
    }) || '150px';

  const isLoginPage = location.pathname === '/zk-select/login';

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header headerHeight={headerHeight} scrolledHeaderHeight={scrolledHeaderHeight} />
      <Divider />
      <Box as="main" flex="1" py={8} pt={!isLoginPage ? headerPt : 0}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/styling" element={<Styling />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
      </Box>
      {!isLoginPage && <Footer />}
    </Box>
  );
}

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <FavoritesProvider>
          <ChakraProvider theme={theme}>
            <Router basename='zk-select'>
              <RouterContainer />
            </Router>
          </ChakraProvider>
        </FavoritesProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}

export { App };
