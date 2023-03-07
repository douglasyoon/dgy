import styled from 'styled-components';
import ContentsBox from '../components/common/ContentsBox';
import Layout from '../components/common/Layout';
import Section from '../components/common/Section';
import { font } from '../styles/fonts';
import media from '../styles/media';
import { colors } from '../styles/palette';

const Projects = () => {
  return (
    <Layout>
      <Section>
        <ContentsBox>
          <ProjectList>
            <ProjectListItem>
              <div className='project-thumbnail'>
                <img src='/images/img_burgerwang.webp' alt='burgerwang' />
              </div>
              {/* <div className='project-contents'>
            <p className='project-title'>버거왕</p>
            <p className='project-desc'>배달 서비스 - 1차 팀 프로젝트</p>
          </div> */}
            </ProjectListItem>
            <ProjectListItem>
              <div className='project-thumbnail'>
                <img src='/images/img_culturebudget.webp' alt='burgerwang' />
              </div>
              {/* <div className='project-contents'>
            <p className='project-title'>감성비</p>
            <p className='project-desc'>가계부 - 2차 팀 프로젝트</p>
          </div> */}
            </ProjectListItem>
          </ProjectList>
        </ContentsBox>
      </Section>
    </Layout>
  );
};

const ProjectList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  width: auto;
  height: 100%;
  ${media.small} {
    flex-direction: column;
  }
`;

const ProjectListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  max-width: 320px;
  height: auto;
  max-height: 320px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 2px 12px 16px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  filter: grayscale(1);
  transition: all 0.5s ease-in-out;
  scroll-snap-align: start;
  &:hover {
    filter: grayscale(0);
    & .project-contents {
      opacity: 1;
    }
  }
  & .project-thumbnail {
    padding: 20%;
    & img {
      width: 100%;
      height: auto;
    }
  }
  & .project-contents {
    width: 100%;
    padding: 20px;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    & .project-title {
      font: ${font.style20Light};
      color: ${colors.gray9};
    }
    & .project-desc {
      margin-top: 8px;
      font: ${font.style16Light};
      color: ${colors.gray9};
    }
  }
  ${media.small} {
    width: 100%;
  }
`;

export default Projects;
