import { useRecoilValue } from 'recoil';
import GlobalStyles from '../../styles/global-styles';
import { themeName } from '../../types/theme';
import { dark, light } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';
import { themeAtom } from '../../recoil/setting/atom';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const DarkMode = useRecoilValue<themeName>(themeAtom);
  return (
    <ThemeProvider theme={DarkMode === 'DARK' ? dark : light}>
      <GlobalStyles />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
