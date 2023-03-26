import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import jungle from "../assets/projects_img/Jungle.png";
import Schedueler from "../assets/projects_img/Scheduler.png";
import smart_todo from "../assets/projects_img/Smart_ToDo.jpg";
import tinyApp from "../assets/projects_img/tinyURLs_page.png";
import tweeter from "../assets/projects_img/tweeter.png";
import dashboard from "../assets/projects_img/Schedueler_dashboard.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import SchoolIcon from '@mui/icons-material/School';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Jungle",
      description: "Design & Development",
      imgUrl: jungle,
    },
    {
      title: "Schedueler",
      description: "Design & Development",
      imgUrl: Schedueler,
    },
    {
      title: "Smart Task Manager",
      description: "Design & Development",
      imgUrl: smart_todo,
    },
    {
      title: "Tweeter",
      description: "Design & Development",
      imgUrl: tweeter,
    },
    {
      title: "Simple Dashboard",
      description: "Design & Development",
      imgUrl: dashboard,
    },
    {
      title: "Tiny Url Maker",
      description: "Design & Development",
      imgUrl: tinyApp,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects And Education</h2>
                <p>These are some sample projects. you can find more my works on my <a href="https://github.com/SinaSS77" target="_blank">GitHub</a></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Random Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projects Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="projectList">
                      <ul className="list">
                        <li><a href="https://github.com/SinaSS77/Jungle" target="_blank">Jungle</a></li>
                        <li><a href="https://github.com/SinaSS77/SmartToDoList" target="_blank">Smart Task manager</a></li>
                        <li><a href="https://github.com/SinaSS77/tweeter" target="_blank">Tweeter Messanger</a></li>
                        <li><a href="https://github.com/SinaSS77/scheduler" target="_blank">Schedueler (appointment maker)</a></li>
                        <li><a href="https://github.com/SinaSS77/tinyapp" target="_blank">Tiny URL maker</a></li>
                        </ul>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      
                      <div className="Education">
                      <div className="school">
                      <SchoolIcon className="schoolIcon"/>
                      <SchoolIcon className="schoolIcon"/>
                      <SchoolIcon className="schoolIcon"/>
                      </div>
                      <h2 className="EducationTitle">Diploma/Full-Stack Web Development</h2>
                      <h4 className="EduSchool"><a href="https://www.lighthouselabs.ca/" target="_blank">LightHouse Labs</a></h4>
                      <h5 className="EduDate">January,2023 - April,2023</h5>
                      <br/>
                      <div className="school">
                      <SchoolIcon className="schoolIcon"/>
                      <SchoolIcon className="schoolIcon"/>
                      <SchoolIcon className="schoolIcon"/>
                      </div>
                      <h2 className="EducationTitle">Associate of Applied Science/Web Development</h2>
                      <h4 className="EduSchool"><a href="https://www.bcit.ca/programs/applied-web-development-associate-certificate-part-time-6957acert/" target="_blank">British Columbia Institute of Technology (BCIT)</a></h4>
                      <h5 className="EduDate">January,2022 - Present</h5>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
