import styled from 'styled-components';
import ContentsBox from '../components/common/ContentsBox';
import Layout from '../components/common/Layout';
import Section from '../components/common/Section';
import { font } from '../styles/fonts';
import { shadow } from '../styles/palette';
import { Link } from 'react-router-dom';
import media from '../styles/media';

const Projects = () => {
  return (
    <Layout>
      <Section>
        <ContentsBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ProjectList>
            <ProjectListItem>
              <div className='project-info'>
                <div className='project-thumbnail'>
                  <img src='/images/img_culturebudget.webp' alt='burgerwang' />
                </div>
                <p className='project-title'>문화비</p>
              </div>
              <div className='project-contents'>
                <div className='project-desc'>
                  <p>프로젝트 기간 : 2023.02.06 ~ 2023.03.02</p>
                  <p>
                    프론트엔드 2명, 백엔드 4명 구성의 팀으로 진행한 문화 생활
                    비용을 기록하는 가계부 프로젝트입니다.
                  </p>
                  <p className='desc-title'>기술 스택</p>
                  <p>
                    React.js, JavaScript, TypeScript, Redux Toolkit, Axios,
                    styled-components
                  </p>
                  <p className='desc-title'>구현한 기능</p>
                  <p>
                    기본 UI, 회원가입, 로그인, 기록 목록, 달력형 목록, 기록
                    작성, 기록 상세 보기
                  </p>
                </div>
                <ul className='project-link'>
                  <li></li>
                </ul>
              </div>
            </ProjectListItem>
            <ProjectListItem>
              <div className='project-info'>
                <div className='project-thumbnail'>
                  <img src='/images/img_burgerwang.webp' alt='burgerwang' />
                </div>
                <p className='project-title'>버거왕</p>
              </div>
              <div className='project-contents'>
                <div className='project-desc'>
                  <p>프로젝트 기간 : 2023.01.11 ~ 2023.02.05</p>
                  <p>
                    프론트엔드 3명, 백엔드 4명 구성의 팀으로 진행한 버거킹
                    딜리버리 구현 배달 서비스 프로젝트입니다.
                  </p>
                  <p className='desc-title'>기술 스택</p>
                  <p>
                    React.js, JavaScript, Redux Toolkit, Axios, Tailwind CSS
                  </p>
                  <p className='desc-title'>구현한 기능</p>
                  <p>메뉴, 장바구니, 주문하기, 주문 내역, 주소 관리</p>
                </div>
                <ul className='project-link'>
                  <li></li>
                </ul>
              </div>
            </ProjectListItem>
          </ProjectList>
        </ContentsBox>
      </Section>
    </Layout>
  );
};

const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

const ProjectListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 92px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: ${shadow};
  overflow: hidden;
  cursor: pointer;
  filter: grayscale(1);
  transition: all 0.5s ease-in-out;
  & .project-info {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    padding: 20px;
    & .project-thumbnail {
      width: 52px;
      height: 52px;
      & img {
        width: 100%;
        height: auto;
      }
    }
    & .project-title {
      color: ${({ theme }) => theme.colors.gray};
      font: ${font.style32Light};
    }
  }
  & .project-contents {
    display: flex;
    justify-content: flex-start;
    & .project-desc {
      flex-grow: 1;
      width: 100%;
      padding: 20px;
      opacity: 0;
      transition: opacity 1.2s ease-in-out;
      & .desc-title {
        margin-top: 8px;
        font: ${font.style20Regular};
        line-height: 1.6;
      }
      & p {
        font: ${font.style16Light};
        line-height: 1.6;
      }
    }
    & .project-link {
      flex-shrink: 1;
      padding: 20px;
    }
  }
  &:hover {
    height: 340px;
    filter: grayscale(0);
    & .project-info {
      & .project-title {
        color: ${({ theme }) => theme.colors.text};
      }
    }
    & .project-contents {
      & .project-desc {
        opacity: 1;
      }
    }
  }
  ${media.m} {
    height: auto;
    filter: grayscale(0);
    & .project-info {
      & .project-thumbnail {
        & img {
        }
      }
      & .project-title {
      }
    }
    & .project-contents {
      & .project-desc {
        opacity: 1;
        & .desc-title {
          font: ${font.style20Regular};
        }
        & p {
          font: ${font.style16Light};
        }
      }
      & .project-link {
      }
    }
    &:hover {
      height: auto;
    }
  }
`;

export default Projects;
