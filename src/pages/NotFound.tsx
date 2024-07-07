import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const NotFound: React.FC = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Text fontSize="50px">404</Text>
      <Text fontSize="24px" mt={3} mb={2}>
        Page Not Found
      </Text>
    </Box>
  );
};

export default NotFound;
