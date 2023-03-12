import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { font } from '../../styles/fonts';

interface MobileNavProps {
  isOpenMobileNav: boolean;
}

const MobileNav = ({ isOpenMobileNav }: MobileNavProps) => {
  return (
    <NavBox isOpen={isOpenMobileNav}>
      <ul className='mobile-nav-list'>
        <li className='mobile-nav-list-item'>
          <NavLink to='/projects'>Projects</NavLink>
        </li>
        <li className='mobile-nav-list-item'>
          <NavLink to='/aboutme'>About me</NavLink>
        </li>
        <li className='mobile-nav-list-item'>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </NavBox>
  );
};

const NavBox = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  left: ${({ isOpen }) => (isOpen ? 0 : '100%')};
  top: 52px;
  width: 100%;
  height: calc(100vh - 52px);
  padding: 20px 0px;
  background: ${({ theme }) =>
    theme.name === 'LIGHT'
      ? `rgba(253, 254, 255, 0.5)`
      : `rgba(18, 18, 18, 0.5)`};
  backdrop-filter: blur(12px);
  transition: all 0.5s ease-in-out;
  z-index: 1;
  & .mobile-nav-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    & .mobile-nav-list-item {
      padding: 0px 20px;
      a {
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
          transition: width 0.5s ease-in-out;
        }
      }
      &:hover a {
        ::after {
          width: 100%;
        }
      }
    }
  }
`;

export default MobileNav;
