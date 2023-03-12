import { useState } from 'react';
import styled from 'styled-components';
import { font } from '../../styles/fonts';
import media from '../../styles/media';
import { shadow } from '../../styles/palette';
import { IProject } from '../../types/project';

interface ProjectListItemProps {
  project: IProject;
  onClickEvent: (id: string) => void;
  isActive: (id: string) => boolean;
}

const ProjectListItem = ({
  project,
  onClickEvent,
  isActive,
}: ProjectListItemProps) => {
  // const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <Box
      className={isActive(project.id) ? 'active' : ''}
      onClick={() => onClickEvent(project.id)}
    >
      <div className='project-tab'>
        <div className='project-info'>
          <div className='project-thumbnail'>
            <img src={project.img} alt={project.title} />
          </div>
          <p className='project-title'>{project.title}</p>
        </div>
        <span className='fold-icon'></span>
      </div>
      <div className='project-contents'>
        <div className='project-desc'>
          <p>프로젝트 기간 : {project.date}</p>
          <p>{project.desc}</p>
          <p className='desc-title'>기술 스택</p>
          <p>{project.skills}</p>
          <p className='desc-title'>구현한 기능</p>
          <p>{project.whatido}</p>
        </div>
        <ul className='project-link'>
          <li></li>
        </ul>
      </div>
    </Box>
  );
};

const Box = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 92px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: ${shadow};
  overflow: hidden;
  filter: grayscale(1);
  transition: all 0.5s ease-in-out;
  & .project-tab {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    cursor: pointer;
    & .project-info {
      display: flex;
      align-items: center;
      gap: 16px;
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
        font: ${font.style32Regular};
      }
    }
    & .fold-icon {
      display: block;
      width: 20px;
      height: 20px;
      background: ${({ theme }) =>
          theme.name === 'LIGHT'
            ? `url('/images/icons/icon_arrow_black.svg')`
            : `url('/images/icons/icon_arrow_white.svg')`}
        no-repeat center;
      background-size: 20px 20px;
      transform: rotate(0deg);
      transition: all 0.5s ease-in-out;
    }
  }
  & .project-contents {
    display: flex;
    justify-content: flex-start;
    cursor: default;
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
  &.active {
    height: 340px;
    filter: grayscale(0);
    & .project-tab {
      & .project-info {
        & .project-title {
          color: ${({ theme }) => theme.colors.text};
        }
      }
      & .fold-icon {
        transform: rotate(-180deg);
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
    & .project-tab {
      cursor: default;
      & .project-info {
        & .project-thumbnail {
          & img {
          }
        }
        & .project-title {
          color: ${({ theme }) => theme.colors.text};
        }
      }
      & .fold-icon {
        display: none;
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
    &.active {
      height: auto;
    }
  }
`;

export default ProjectListItem;
