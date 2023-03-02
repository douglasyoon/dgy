import React from 'react';
import styled from 'styled-components';
import { font } from '../../styles/fonts';

interface MobileNavProps {
  isOpenMobileNav: boolean;
}

const MobileNav = ({ isOpenMobileNav }: MobileNavProps) => {
  return (
    <Box>
      <nav className={`mobile-nav ${isOpenMobileNav && 'mobile-nav-open'}`}>
        <ul className='mobile-nav-list'>
          <li className='mobile-nav-list-item'>
            <span>Home</span>
          </li>
          <li className='mobile-nav-list-item'>
            <span>Projects</span>
          </li>
          <li className='mobile-nav-list-item'>
            <span>About me</span>
          </li>
          <li className='mobile-nav-list-item'>
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </Box>
  );
};

const Box = styled.div`
  position: absolute;
  left: 0;
  top: 52px;
  width: 100%;
  & .mobile-nav {
    position: absolute;
    left: 100%;
    width: 100%;
    height: calc(100vh - 52px);
    padding: 20px 0px;
    background: ${({ theme }) => theme.colors.background};
    transition: all 0.5s ease-in-out;
    & .mobile-nav-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      & .mobile-nav-list-item {
        padding: 0px 20px;
        span {
          display: block;
          width: 100%;
          font: ${font.style20Light};
          &.active {
            ::after {
              content: '';
              display: block;
              width: 100%;
              height: 1px;
              background: ${({ theme }) => theme.colors.text};
              transition: background 0.5s ease-in-out;
            }
          }
          ::after {
            content: '';
            display: block;
            width: 0%;
            height: 1px;
            background: ${({ theme }) => theme.colors.text};
            transition: width 0.3s ease-in-out;
          }
        }
        &:hover span {
          ::after {
            width: 100%;
          }
        }
      }
    }
  }
  .mobile-nav-open {
    left: 0;
  }
`;

export default MobileNav;
