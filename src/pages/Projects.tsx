import styled from 'styled-components';
import Layout from '../components/common/Layout';
import { font } from '../styles/fonts';
import projects from '../contents/projects/projects.json';
import ProjectListItem from '../components/projects/ProjectListItem';
import { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>('');
  const onClickTab = (id: string) => {
    id === activeTab ? setActiveTab('') : setActiveTab(id);
  };
  const isActive = (id: string) => {
    return activeTab === id;
  };
  return (
    <Layout title='Projects'>
      <ProjectList>
        {projects.map((project) => (
          <ProjectListItem
            key={project.id}
            project={project}
            onClickEvent={onClickTab}
            isActive={isActive}
          />
        ))}
      </ProjectList>
    </Layout>
  );
};

const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding-bottom: 52px;
  & .project-type {
    font: ${font.style32Light};
  }
`;

export default Projects;
