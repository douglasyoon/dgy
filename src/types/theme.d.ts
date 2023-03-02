import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: themeName;
    colors: {
      background: string;
      text: string;
      containerBorder: string;
      gray: string;
    };
  }
}

declare type themeName = 'LIGHT' | 'DARK';
