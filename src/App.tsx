import { useRecoilValue } from 'recoil';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/common/Header';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { themeAtom } from './recoil/setting/atom';
import GlobalStyles from './styles/global-styles';
import { dark, light } from './styles/theme';

const App = () => {
  const DarkMode = useRecoilValue(themeAtom);
  return (
    <>
      <ThemeProvider theme={DarkMode === 'DARK' ? dark : light}>
        <GlobalStyles />
        <Header />
        <Home />
        <Projects />
        <AboutMe />
        <Contact />
      </ThemeProvider>
    </>
  );
};

export default App;
