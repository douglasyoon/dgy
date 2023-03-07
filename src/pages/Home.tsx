import ContentsBox from '../components/common/ContentsBox';
import styled from 'styled-components';
import { font } from '../styles/fonts';
import Section from '../components/common/Section';
import Layout from '../components/common/Layout';
import media from '../styles/media';

const Home = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

const Block = styled.div`
  & p {
    font: ${font.style40Light};
  }
  ${media.small} {
    & p {
      font: ${font.style20Regular};
    }
  }
`;

export default Home;
