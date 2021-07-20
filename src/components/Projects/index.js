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

const MyTheme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
  },
});

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <SectionTitle>
        <h2>Projects</h2>
      </SectionTitle>
      <ProjectsDisplay>
        <ProjectItem>
          <ProjectPresentation src={project1} alt="projectPresentation1" />
          <ProjectName>Task Tracker</ProjectName>
          <ProjectDescripion>
            A todo application made with usage of react.js material UI and
            styled components
          </ProjectDescripion>
          <ThemeProvider theme={MyTheme}>
            <ProBtn
              variant="contained"
              color="primary"
              style={{ margin: '5%' }}
              href="https://domgrudnik-tasktracker.netlify.app/"
            >
              Demo{' '}
              <RiWindowFill style={{ fontSize: ' 25px', marginLeft: '4px' }} />
            </ProBtn>
            <ProBtn
              variant="contained"
              color="primary"
              style={{ margin: '5%' }}
              href="https://github.com/MagnetronASTRO/TaskTracker"
            >
              Github{' '}
              <FaCodeBranch style={{ fontSize: ' 25px', marginLeft: '4px' }} />
            </ProBtn>
          </ThemeProvider>
        </ProjectItem>
      </ProjectsDisplay>
    </ProjectsContainer>
  );
};

export default Projects;
