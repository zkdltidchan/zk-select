import React from 'react';
import {
    Image,
    BoxProps,
    Box,
} from '@chakra-ui/react';
import logo from '../../assets/logo/500.png';

interface LogoProps extends BoxProps {
}

const Logo: React.FC<LogoProps> = ({ ...props }) => {
    return (
        <Box>
            <Image
                {...props}
                src={logo}
                alt="Logo"
                objectFit="contain"
            />
        </Box>
    );
};

export { Logo };
export type { LogoProps };
