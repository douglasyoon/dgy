import styled from 'styled-components';
import ContentsBox from '../components/common/ContentsBox';
import Layout from '../components/common/Layout';
import Section from '../components/common/Section';
import { font } from '../styles/fonts';
import { colors } from '../styles/palette';

const AboutMe = () => {
  return (
    <Layout>
      <Section>
        <ContentsBox>
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
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 2px 12px 16px 0px rgba(0, 0, 0, 0.1);
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
