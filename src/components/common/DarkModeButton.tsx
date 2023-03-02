import styled from 'styled-components';
import { colors } from '../../styles/palette';
import { useRecoilState } from 'recoil';
import { themeAtom } from '../../recoil/setting/atom';

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useRecoilState(themeAtom);
  const toggleDarkMode = () => {
    setDarkMode(darkMode === 'DARK' ? 'LIGHT' : 'DARK');
  };
  return (
    <DarkButton htmlFor='dark-mode-toggle' onClick={toggleDarkMode}>
      <span />
    </DarkButton>
  );
};

const DarkButton = styled.label`
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid
    ${({ theme }) =>
      theme.name === 'LIGHT' ? colors.darkgrey : colors.solidwhite};
  border-radius: 50%;
  background: ${({ theme }) =>
    theme.name === 'LIGHT' ? colors.darkgrey : colors.solidwhite};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  & span {
    display: block;
    width: 50%;
    height: 100%;
    border-radius: 50% 0 0 50%;
    background: ${({ theme }) =>
      theme.name === 'LIGHT' ? colors.solidwhite : colors.darkgrey};
    transition: background 0.5s ease-in-out;
  }
`;

export default DarkModeButton;
