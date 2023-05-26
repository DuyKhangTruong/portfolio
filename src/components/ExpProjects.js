import { Row,Col, Container, TabContainer, Nav, TabContent, Tab } from "react-bootstrap";

import alarmImg from "../assets/img/alarm-img.png";
import quokka from "../assets/img/Quokka-img.png";
import imsg from "../assets/img/imsg-img.png";
import vectorworks from "../assets/img/vectorworks.png";
import asu from "../assets/img/ASU-img.png";
import messageApp from "../assets/img/message-app.png";
import weatherApp from "../assets/img/weather-app.png";
import newsApp from "../assets/img/news-app.png";
import mlProjects from "../assets/img/ml-projects.png";

import { ExpCard } from "./ExpCard";

import colorShape2 from "../assets/img/color-sharp2.png";
import { ProjCard } from "./ProjCard";

export const ExpProjects = () => {
    const experiences = [
        {
            title:"Software Engineer Intern",
            company:"Vectorworks",
            imgURL: vectorworks
        },
        {
            title:"Swift Developer",
            company:"Arizona State University",
            imgURL: asu
        },

        {
            title:"Software Engineer Intern",
            company: "Alarm.com",
            imgURL: alarmImg
        },

        {
            title:"Junior Mobile Engineer Intern",
            company: "Quokka",
            imgURL: quokka
        },

        {
            title:"Software Engineer Intern",
            company: "IMSG.Inc",
            imgURL: imsg
        }
    ]
    const projects = [
        {
            name:"iOS Weather App",
            imgURL: weatherApp,
            gitURL: "https://github.com/DuyKhangTruong/IOS_Udemy_Study/tree/master/Modified_Clima_iOS13"
        },

        {
            name:"Message App",
            imgURL: messageApp,
            gitURL: "https://github.com/DuyKhangTruong/IOS_Udemy_Study/tree/master/Flash-Chat-iOS13"
        },

        {
            name:"News App",
            imgURL: newsApp,
            gitURL: "https://github.com/DuyKhangTruong/NewsApp"
        },
        {
            name:"Machine Learning Projects",
            imgURL: mlProjects,
            gitURL: "https://github.com/DuyKhangTruong/machineLearning_Projects"
        }
    ]

    return (
        <section className="project" id="experiences&projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Experiences & Projects</h2>
                        <p>The following is my internships from the past in software engineering<br></br>Each of the project has a github link to it.</p>
                        <TabContainer id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Experiences</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Projects</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <TabContent>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            experiences.map((exp,id) => {
                                                return(
                                                    <ExpCard key={id}
                                                    {...exp} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <Row>
                                        {
                                            projects.map((proj,id) => {
                                                return(
                                                    <ProjCard key={id}
                                                    {...proj} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorShape2}></img>
        </section>
    )
}