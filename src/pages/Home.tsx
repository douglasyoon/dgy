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
        <ContentsBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
  ${media.m} {
    & p {
      font: ${font.style32Light};
    }
  }
  ${media.sm} {
    & p {
      font: ${font.style20Light};
    }
  }
`;

export default Home;
