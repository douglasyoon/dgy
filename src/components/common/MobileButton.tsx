import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import media from '../../styles/media';

interface MobileButtonProps {
  isOpenMobileNav: boolean;
  setIsMobileNav: Dispatch<SetStateAction<boolean>>;
}

const MobileButton = ({
  isOpenMobileNav,
  setIsMobileNav,
}: MobileButtonProps) => {
  return (
    <Box>
      <div
        className={`hamburger-menu ${isOpenMobileNav ? 'hamburger-close' : ''}`}
        onClick={() => setIsMobileNav(!isOpenMobileNav)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  & .hamburger-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 26px;
    height: 18px;
    cursor: pointer;
    z-index: 1;
    & span {
      display: block;
      width: 26px;
      height: 1px;
      background: ${({ theme }) => theme.colors.text};
      transition: all 0.5s ease-in-out;
    }
  }
  & .hamburger-close {
    span:nth-child(1) {
      transform: translateY(9px) rotate(-45deg);
    }
    span:nth-child(2) {
      transform: rotate(45deg);
    }
    span:nth-child(3) {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export default MobileButton;
