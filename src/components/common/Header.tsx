import { useState } from 'react';
import styled from 'styled-components';
import { font } from '../../styles/fonts';
import media from '../../styles/media';
import DarkModeButton from './DarkModeButton';
import MobileButton from './MobileButton';
import MobileNav from './MobileNav';

const Header = () => {
  const [isOpenMobileNav, setIsMobileNav] = useState<boolean>(false);
  return (
    <Box>
      <h1>DGY</h1>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-list-item'>
            <span>Home</span>
          </li>
          <li className='nav-list-item'>
            <span>Projects</span>
          </li>
          <li className='nav-list-item'>
            <span>About me</span>
          </li>
          <li className='nav-list-item'>
            <span>Contact</span>
          </li>
        </ul>
        <DarkModeButton />
      </nav>
      <MobileButton
        isOpenMobileNav={isOpenMobileNav}
        setIsMobileNav={setIsMobileNav}
      />
      <MobileNav isOpenMobileNav={isOpenMobileNav} />
    </Box>
  );
};

const Box = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 0 20px;
  z-index: 1;
  background: ${({ theme }) =>
    theme.name === 'LIGHT'
      ? `rgba(253, 254, 255, 0.5)`
      : `rgba(18, 18, 18, 0.5)`};
  backdrop-filter: blur(12px);
  transition: background 0.5s ease-in-out;
  & h1 {
    cursor: pointer;
    font: ${font.style20Light};
  }
  & .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    & .nav-list {
      display: flex;
      gap: 100px;
      margin-right: 100px;
      & .nav-list-item {
        display: flex;
        align-items: center;
        cursor: pointer;
        & span {
          font: ${font.style20Light};
          &::after {
            content: '';
            display: block;
            width: 0%;
            height: 1px;
            background: ${({ theme }) => theme.colors.text};
            transition: width 0.3s ease-in-out;
          }
          &:hover {
            &::after {
              width: 100%;
            }
          }
        }
      }
    }
  }

  ${media.medium} {
    & .nav {
      display: none !important;
    }
  }
`;

export default Header;
