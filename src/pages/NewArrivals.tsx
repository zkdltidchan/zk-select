import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const NewArrivals: React.FC = () => {
    return (
        <Box textAlign="center" py={10} px={6}>
            <Text fontSize="24px" mt={3} mb={2}>
                New Arrivals
            </Text>
        </Box>
    );
};

export default NewArrivals;
