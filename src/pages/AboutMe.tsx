import styled from 'styled-components';
import Layout from '../components/common/Layout';
import { font } from '../styles/fonts';
import { shadow } from '../styles/palette';

const AboutMe = () => {
  return (
    <Layout title='About me'>
      <ProfileList>
        <ProfileListItem>
          <p className='profile-title'>Skills</p>
          <div className='profile-contents'>
            blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
          </div>
        </ProfileListItem>
      </ProfileList>
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
