import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import { font } from '../styles/fonts';
import { colors } from '../styles/palette';

const Contact = () => {
  return (
    <Layout title='Contact'>
      <ContactList>
        <ContactItem>
          <Link to={'https://github.com/douglasyoon'} target='_blank'>
            GitHub
          </Link>
        </ContactItem>
      </ContactList>
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
