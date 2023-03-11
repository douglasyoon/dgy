const mediaQuery = (mediaSize: number): string =>
  `@media screen and (max-width: ${mediaSize}px)`;

const media = {
  xl: mediaQuery(1200),
  lg: mediaQuery(1024),
  m: mediaQuery(768),
  sm: mediaQuery(480),
  xs: mediaQuery(320),
};

export default media;
