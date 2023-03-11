import { DefaultTheme } from 'styled-components';
import { colors } from './palette';

export const light: DefaultTheme = {
  name: 'LIGHT',
  colors: {
    background: colors.solidwhite,
    card: colors.solidwhite,
    text: colors.gray9,
    containerBorder: colors.gray9,
    gray: colors.gray5,
  },
};

export const dark: DefaultTheme = {
  name: 'DARK',
  colors: {
    background: colors.darkgrey,
    card: colors.darkcard,
    text: colors.gray1,
    containerBorder: colors.gray1,
    gray: colors.gray5,
  },
};
