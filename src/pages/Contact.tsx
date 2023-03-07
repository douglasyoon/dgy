import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContentsBox from '../components/common/ContentsBox';
import Layout from '../components/common/Layout';
import Section from '../components/common/Section';
import { font } from '../styles/fonts';
import { colors } from '../styles/palette';

const Contact = () => {
  return (
    <Layout>
      <Section>
        <ContentsBox>
          <ContactList>
            <ContactItem>
              <Link to={'https://github.com/douglasyoon'} target='_blank'>
                Come to my GitHub
              </Link>
            </ContactItem>
          </ContactList>
        </ContentsBox>
      </Section>
    </Layout>
  );
};

const ContactList = styled.ul`
  display: flex;
  gap: 20px;
`;
const ContactItem = styled.li`
  & a {
    font: ${font.style20Regular};
  }
`;

export default Contact;
