import {
  extendTheme,
  withDefaultColorScheme,
  ThemeConfig,
  ComponentStyleConfig,
  withDefaultVariant,
  withDefaultProps,
  Menu,
  MenuItem,
} from '@chakra-ui/react';

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


const componentsWithBorderRadius: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 'none',
    // menu
    button: {
      bg: 'white',
      color: 'black',
      p: 2,
      _hover: {
      },
      _focus: {
      },
    },
    list: {
      borderRadius: 'none',
      backgroundColor: 'white',
      color: 'black',
    },
    item: {
      bg: 'white',
      color: 'black',
      _hover: {
        bg: 'gray.100',
      },
      _focus: {
        bg: 'gray.200',
      },
    },

    // input, select
    field: {
      borderRadius: 0,
      ringBorderRadius: 'none',
      textColor: 'black',
      _focusWithin: {
      }
    },
    icon: {
      color: "black"
    }
  },
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
      global: (props: any) => ({
        'html, body': {
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
          bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        },
        header: {
          bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        },
        footer: {
          bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
        },
      }),
    },
    colors: {
      // ...extendColors,
      // primary: extendColors.brand,
    },
    config,
    components: {
      Button,
      Box: componentsWithBorderRadius,
      Input: componentsWithBorderRadius,
      Select: componentsWithBorderRadius,
      Menu  : componentsWithBorderRadius,
      MenuList: componentsWithBorderRadius,
      MenuButton: componentsWithBorderRadius,
      MenuItem: componentsWithBorderRadius,
    },
  },
  withDefaultColorScheme({
    colorScheme: 'gray',
    components: ['Button'],
  }),
  withDefaultVariant({
    variant: 'ghost',
    components: ['Button'],
  }),
  withDefaultProps({
    defaultProps: {
    },
    // components: ['Button', 'Input', 'Select'],
  })
);

export default theme;
