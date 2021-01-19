import { theme, extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const layerStyles = {
  link: theme.components.Link,
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '940px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1920px',
})

export default extendTheme({
  ...theme,
  breakpoints,
  layerStyles,
  fonts: {
    body: 'Roboto',
    heading: 'Roboto',
  },
  config,
  colors: {
    ...theme.colors,
    brand: '#4883FF',
    blue: {
      50: '#e5eeff',
      100: '#bed4ff',
      200: '#a7c4ff',
      300: '#8db3ff',
      400: '#6e9eff',
      500: '#4883FF',
      600: '#3868c8',
      700: '#213d76',
      800: '#1448B3',
      900: '#1448B3',
    },
    black: '#252525',
    gray: {
      50: '#f5f5f5',
      100: '#ededed',
      200: '#e1e1e1',
      300: '#d3d3d3',
      400: '#c4c4c4',
      500: '#b3b3b3',
      600: '#a0a0a0',
      700: '#898989',
      800: '#252525',
      900: '#121212',
    },
    yellow: {
      50: '#fff3dc',
      100: '#fee2b1',
      200: '#fbd282',
      300: '#f9c652',
      400: '#f8a824',
      500: '#de810c',
      600: '#ad5906',
      700: '#7c3602',
      800: '#4b1b00',
      900: '#1d0500',
    },
  },
})
