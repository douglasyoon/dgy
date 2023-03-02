import styled from 'styled-components';
import { font } from '../../styles/fonts';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 60px 0;
  & h2 {
    flex-shrink: 0;
    width: 100%;
    padding: 0 20px;
    font: ${font.style40Thin};
  }
`;

export default Section;
