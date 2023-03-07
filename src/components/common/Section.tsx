import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 52px;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.background};
  transition: background 0.5s ease-in-out;
`;

export default Section;
