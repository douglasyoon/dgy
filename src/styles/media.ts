const mediaQuery = (mediaSize: number): string =>
  `@media screen and (max-width: ${mediaSize}px)`;

const media = {
  large: mediaQuery(1200),
  medium: mediaQuery(900),
  small: mediaQuery(600),
};

export default media;
