import { useRecoilValue } from 'recoil';
import GlobalStyles from '../../styles/global-styles';
import { themeName } from '../../types/theme';
import { dark, light } from '../../styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import { themeAtom } from '../../recoil/setting/atom';
import Header from './Header';
import MobileNav from './MobileNav';
import { useEffect, useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const DarkMode = useRecoilValue<themeName>(themeAtom);
  const [isOpenMobileNav, setIsMobileNav] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('resize', () => setIsMobileNav(false));
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);
  return (
    <ThemeProvider theme={DarkMode === 'DARK' ? dark : light}>
      <GlobalStyles />
      <MobileNav isOpenMobileNav={isOpenMobileNav} />
      <Header
        isOpenMobileNav={isOpenMobileNav}
        setIsMobileNav={setIsMobileNav}
      />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
