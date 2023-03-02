import ContentsBox from '../components/common/ContentsBox';
import styled from 'styled-components';
import { font } from '../styles/fonts';
import Section from '../components/common/Section';

const Home = () => {
  return (
    <Section>
      <ContentsBox>
        <Block>
          <p>
            안녕하세요. <br />
            프론트엔드 개발자 윤동규입니다.
          </p>
        </Block>
      </ContentsBox>
    </Section>
  );
};

const Block = styled.div`
  & p {
    font: ${font.style40Light};
  }
`;

export default Home;
