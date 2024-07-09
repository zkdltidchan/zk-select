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
import NotFound from './pages/NotFound';

const RouterContainer: React.FC = () => {
  const scrolledHeaderHeightPx = "50px";
  const headerHeightPx = "80px";
  const headerHeight = useBreakpointValue({ base: '40px', md: headerHeightPx }) || headerHeightPx;
  const scrolledHeaderHeight = useBreakpointValue({ base: '20px', md: scrolledHeaderHeightPx }) || scrolledHeaderHeightPx;
  
  return (
    <Router basename="/zk-select">
      <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header headerHeight={headerHeight} scrolledHeaderHeight={scrolledHeaderHeight} />
        <Divider/>
        <Box as="main" flex="1" py={8} pt={"150px"}>
          <Routes>
            <Route path="/" element={<Home />} />
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
    <ChakraProvider theme={theme}>
      <RouterContainer />
    </ChakraProvider>
  );
}

export { App };
