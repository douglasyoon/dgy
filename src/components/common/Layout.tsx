import { useRecoilValue } from 'recoil';
import GlobalStyles from '../../styles/global-styles';
import { themeName } from '../../types/theme';
import { dark, light } from '../../styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import { themeAtom } from '../../recoil/setting/atom';
import Header from './Header';
import MobileNav from './MobileNav';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FadeInDiv from './FadeInDiv';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
  const DarkMode = useRecoilValue<themeName>(themeAtom);
  const [isOpenMobileNav, setIsMobileNav] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('resize', () => setIsMobileNav(false));
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>{title} - Donggyu Yoon</title>
      </Helmet>
      <ThemeProvider theme={DarkMode === 'DARK' ? dark : light}>
        <GlobalStyles />
        <Page>
          <Header
            isOpenMobileNav={isOpenMobileNav}
            setIsMobileNav={setIsMobileNav}
          />
          <MobileNav isOpenMobileNav={isOpenMobileNav} />
          <FadeInDiv>
            <div className='contents-box'>{children}</div>
          </FadeInDiv>
        </Page>
      </ThemeProvider>
    </>
  );
};

const Page = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  transition: background 0.5s ease-in-out;
  & .contents-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 72px 20px 20px 20px;
  }
`;

export default Layout;
