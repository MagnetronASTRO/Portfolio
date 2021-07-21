import {
  ProjectsContainer,
  ProjectsDisplay,
  ProjectItem,
  ProjectPresentation,
  ProjectDescripion,
  ProjectName,
  ProBtn,
} from './ProjectsElements.js';
import project1 from '../../images/TaskTrackerPresentation.jpg';
import { FaCodeBranch } from 'react-icons/fa';
import { RiWindowFill } from 'react-icons/ri';
import grey from '@material-ui/core/colors/grey';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { SectionTitle } from '../Stack/Stackelements.js';
import { useTranslation } from 'react-i18next';

const MyTheme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
  },
});

const Projects = () => {
  const { t } = useTranslation();

  return (
    <ProjectsContainer id="projects">
      <SectionTitle>
        <h2>{t('projects_section')}</h2>
      </SectionTitle>
      <ProjectsDisplay>
        <ProjectItem>
          <ProjectPresentation src={project1} alt="projectPresentation1" />
          <ProjectName>{t('project_1_name')}</ProjectName>
          <ProjectDescripion>{t('p_1_description')}</ProjectDescripion>
          <ThemeProvider theme={MyTheme}>
            <ProBtn
              variant="contained"
              color="primary"
              style={{ margin: '5%', fontWeight: 'bold' }}
              href="https://domgrudnik-tasktracker.netlify.app/"
            >
              {t('p_1_btn_demo')}{' '}
              <RiWindowFill style={{ fontSize: ' 25px', marginLeft: '4px' }} />
            </ProBtn>
            <ProBtn
              variant="contained"
              color="primary"
              style={{ margin: '5%', fontWeight: 'bold' }}
              href="https://github.com/MagnetronASTRO/TaskTracker"
            >
              {t('p_1_btn_code')}{' '}
              <FaCodeBranch style={{ fontSize: ' 25px', marginLeft: '4px' }} />
            </ProBtn>
          </ThemeProvider>
        </ProjectItem>
      </ProjectsDisplay>
    </ProjectsContainer>
  );
};

export default Projects;
