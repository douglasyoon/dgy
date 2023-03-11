import styled from 'styled-components';
import ContentsBox from '../components/common/ContentsBox';
import Layout from '../components/common/Layout';
import Section from '../components/common/Section';
import { font } from '../styles/fonts';
import { colors, shadow } from '../styles/palette';

const AboutMe = () => {
  return (
    <Layout>
      <Section>
        <ContentsBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ProfileList>
            <ProfileListItem>
              <p className='profile-title'>Profile</p>
              <div className='profile-contents'>
                profileblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
              </div>
            </ProfileListItem>
            <ProfileListItem>
              <p className='profile-title'>Skills</p>
              <div className='profile-contents'>
                blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
              </div>
            </ProfileListItem>
          </ProfileList>
        </ContentsBox>
      </Section>
    </Layout>
  );
};

const ProfileList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: ${shadow};
  transition: background 0.5s ease-in-out;
`;
const ProfileListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 72px;
  overflow: hidden;
  transition: height 0.5s ease-in-out;
  & .profile-title {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
    font: ${font.style20Regular};
    cursor: pointer;
  }
  & .profile-contents {
    width: 100%;
    padding: 20px;
    font: ${font.style20Regular};
    color: ${({ theme }) => theme.colors.text};
    word-break: break-all;
  }
  &:hover {
    height: 300px;
  }
`;

export default AboutMe;
