import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('blackAlpha.300', '#353535')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: "transparent",
    })
  },
  Button: {
    variants: {
      'dark': {
        bg: "whiteAlpha.200",
        color: "colorone.200",
        _hover: {
          bg: "whiteAlpha.300",
        },
      },
      'light': {
        bg: "whiteAlpha.500",
        color: "colorone.600",
        _hover: {
          bg: "whiteAlpha.600",
        },
      },
      // 'dark': {
      //   // bg: "whiteAlpha.200",
      //   color: "colorone.200",
      //   _hover: {
      //     bg: "whiteAlpha.200",
      //   },
      // },
      // 'light': {
      //   // bg: "whiteAlpha.500",
      //   color: "colorone.600",
      //   _hover: {
      //     bg: "whiteAlpha.500",
      //   },
      // },
      'hamb': {
        bg: "transparent",
        // color: "colorone.600",
        _hover: {
          bg: "whiteAlpha.500",
        },
      },
    },

  }
}

const fonts = {
  heading: "'League Spartan'"
}

const colors = {
  grassTeal: '#63B3ED',
  moon: {
    50: '#e0f6f8',
    100: '#b2e9ee',
    200: '#82dae3',
    300: '#54cad8',
    400: '#38bfcf',
    500: '#29b5c8',
    600: '#27a5b5',
    700: '#23909c',
    800: '#207c85',
    900: '#1b595b',
  },
  sun: {
    50: '#fff9e6',
    100: '#ffeec1',
    200: '#ffe499',
    300: '#ffda72',
    400: '#ffd255',
    500: '#ffcb38',
    600: '#eeba35',
    700: '#d8a52f',
    800: '#c1902b',
    900: '#9c6c23',
  },
  colorone: {
    50: '#fbebed',
    100: '#f5cdd0',
    200: '#e09a98',
    300: '#d07672',
    400: '#d75a51',
    500: '#da4e3a',
    600: '#cb4538',
    700: '#ba3d32',
    800: '#ad372c',
    900: '#9c3023',
  },
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
