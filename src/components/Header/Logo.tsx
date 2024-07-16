import React from 'react';
import {
    Image,
    BoxProps,
    Box,
    useColorModeValue,


} from '@chakra-ui/react';
// import logo from '../../assets/logo/500.png';
import svgLogo from '../../assets/logo/logo.svg';
interface LogoProps extends BoxProps {
}

// const Logo: React.FC<LogoProps> = ({ ...props }) => {
//     return (
//         <Box>
//             <Image
//                 {...props}
//                 src={logo}
//                 alt="Logo"
//                 objectFit="contain"
//             />
//         </Box>
//     );
// };

const Logo: React.FC<LogoProps> = ({ ...props }) => {
    const fillColor = useColorModeValue('black', 'white');
    const opacity = useColorModeValue(1, 0.7);
    return (
        <Box>
            <Image
                {...props}
                src={svgLogo}
                alt="Logo"
                objectFit="contain"
                fill={fillColor}
                opacity={opacity}
            />
        </Box>
    );
};

export { Logo };
export type { LogoProps };
