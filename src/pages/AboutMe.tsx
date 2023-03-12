import styled from 'styled-components';
import Layout from '../components/common/Layout';
import { shadow } from '../styles/palette';

const AboutMe = () => {
  return (
    <Layout title='About me'>
      <SkillsList>
        <SkillsItem>
          <div className='skill-thumbnail'>
            <img src='/images/icons/icon_react.svg' alt='' />
          </div>
        </SkillsItem>
        <SkillsItem>
          <div className='skill-thumbnail'>
            <img src='/images/icons/icon_redux.svg' alt='' />
          </div>
        </SkillsItem>
        <SkillsItem>
          <div className='skill-thumbnail'>
            <img src='/images/icons/icon_js.svg' alt='' />
          </div>
        </SkillsItem>
        <SkillsItem>
          <div className='skill-thumbnail'>
            <img src='/images/icons/icon_html.svg' alt='' />
          </div>
        </SkillsItem>
        <SkillsItem>
          <div className='skill-thumbnail'>
            <img src='/images/icons/icon_css.svg' alt='' />
          </div>
        </SkillsItem>
        <SkillsItem>
          <div className='skill-thumbnail'>
            <img src='/images/icons/icon_sass.svg' alt='' />
          </div>
        </SkillsItem>
      </SkillsList>
    </Layout>
  );
};

const SkillsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  max-width: 640px;
  height: 100%;
  max-height: 420px;
`;
const SkillsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: ${shadow};
  transition: background 0.5s ease-in-out;
  & .skill-thumbnail {
    width: 72px;
    height: 72px;
    & img {
      width: 100%;
      height: auto;
    }
  }
`;

export default AboutMe;
