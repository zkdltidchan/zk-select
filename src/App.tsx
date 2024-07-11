import React from 'react';
import {
  ChakraProvider,
  Box,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import theme from './styles/theme';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Styling from './pages/Styling';
import Ranking from './pages/Ranking';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import NewArrivals from './pages/NewArrivals';

import NotFound from './pages/NotFound';
import { AuthProvider } from './context/AuthContext';


const RouterContainer: React.FC = () => {
  const scrolledHeaderHeightPx = "50px";
  const headerHeightPx = "80px";
  const headerHeight = useBreakpointValue(
    { base: '70px', 
      md: headerHeightPx,
    }) || headerHeightPx;
  const scrolledHeaderHeight = useBreakpointValue(
    { base: '50px',
      md: scrolledHeaderHeightPx,
    }) || scrolledHeaderHeightPx;
  
  const headerPt = useBreakpointValue(
    { base: '80px',
      md: '150px',
    }) || '150px';

  return (
    <Router basename="/zk-select">
      <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header headerHeight={headerHeight} scrolledHeaderHeight={scrolledHeaderHeight} />
        <Divider/>
        <Box as="main" flex="1" py={8} pt={headerPt}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/styling" element={<Styling />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />

            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
          </Routes>
        </Box>
        <Divider/>
        <Footer />
      </Box>
    </Router>
  );
}

const App: React.FC = () => {
  return (
    <AuthProvider>
    <ChakraProvider theme={theme}>
      <RouterContainer />
    </ChakraProvider>
    </AuthProvider>
  );
}

export { App };
