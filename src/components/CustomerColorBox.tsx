import React from 'react';
import { Box, BoxProps } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

export const CustomerColorBox: React.FC<BoxProps> = ({ children, ...props }) => {
    const { colorMode } = useColorMode();

    return (
        <Box
            bg={colorMode === "light" ? "gray.100" : "gray.900"}
            p={4}
            fontWeight="bold"
            {...props}
        >
            {children}
        </Box>
    );
};
