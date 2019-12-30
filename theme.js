import { theme as defaultTheme } from '@chakra-ui/core';

const breakpoints = ['320px', '576px', '768px', '992px', '1280px'];

// aliases
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

const colors = {
  ...defaultTheme.colors,
};

export default {
  ...defaultTheme,
  breakpoints,
  colors,
};
