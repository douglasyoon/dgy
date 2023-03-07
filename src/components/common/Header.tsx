import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from '../../styles/media';
import { font } from '../../styles/fonts';
import MobileButton from './MobileButton';
import MobileNav from './MobileNav';
import DarkModeButton from './DarkModeButton';

const Header = () => {
  const [isOpenMobileNav, setIsMobileNav] = useState<boolean>(false);
  return (
    <Box>
      <h1>DGY</h1>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-list-item'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='nav-list-item'>
            <NavLink to='/projects'>Projects</NavLink>
          </li>
          <li className='nav-list-item'>
            <NavLink to='/aboutme'>About me</NavLink>
          </li>
          <li className='nav-list-item'>
            <NavLink to='/contact'>Contact</NavLink>
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
        & a {
          font: ${font.style20Light};
          &::after {
            content: '';
            display: block;
            width: 0%;
            height: 1px;
            background: ${({ theme }) => theme.colors.text};
            transition: all 0.5s ease-in-out;
          }
          &:hover,
          &.active {
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
