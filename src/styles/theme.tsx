import { extendTheme, withDefaultColorScheme, ThemeConfig, ComponentStyleConfig, withDefaultVariant } from '@chakra-ui/react';

// const extendColors = {
//   brand: {
//     50: '#e3f2f9',
//     100: '#c5e4f3',
//     200: '#a2d4ec',
//     300: '#7ac1e4',
//     400: '#47a9da',
//     500: '#0088cc',
//     600: '#007ab8',
//     700: '#006ba1',
//     800: '#005885',
//     900: '#003f5e',
//   },
// };

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false,
};


const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'none',
  },
  // variants: {
  //   solid: (props) => ({
  //     bg: props.colorMode === 'dark' ? 'primary.300' : 'primary.500',
  //     _hover: {
  //       bg: props.colorMode === 'dark' ? 'primary.400' : 'primary.600',
  //     },
  //   }),
  //   outline: (props) => ({
  //     borderColor: props.colorMode === 'dark' ? 'primary.300' : 'primary.500',
  //     color: props.colorMode === 'dark' ? 'primary.300' : 'primary.500',
  //     _hover: {
  //       bg: props.colorMode === 'dark' ? 'primary.400' : 'primary.600',
  //     },
  //   }),
  // },
};


const theme = extendTheme(
  {
    styles: {
      global: {
        'html, body': {
          // fontSize: 'sm',
          // color: 'gray.600',
          // lineHeight: 'tall',
          // background: 'gray.50',
        },
      },
    },
    colors: {
      // ...extendColors,
      // primary: extendColors.brand,
    },
    config,
    components: {
      Button,
    },
  },
  withDefaultColorScheme({
    colorScheme: 'gray',
    components: ['Button'],
  }),
  withDefaultVariant({
    variant: 'ghost',
    components: ['Button'],
  })
);

export default theme;
