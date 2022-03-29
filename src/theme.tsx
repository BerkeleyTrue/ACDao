import { extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

const fonts = { mono: `'Menlo', monospace` };

const theme = extendTheme(
  {
    colors: {
      black: '#16161D',
    },
    fonts,
    config: {
      initialColorMode: 'dark',
    },
  },
  withProse(),
);

export default theme;
