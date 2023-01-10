import { Row,Col, Container, TabContainer, Nav, TabContent, Tab } from "react-bootstrap";

import alarmImg from "../assets/img/alarm-img.png";
import quokka from "../assets/img/Quokka-img.png";
import imsg from "../assets/img/imsg-img.png";
import { ExpCard } from "./ExpCard";

import colorShape2 from "../assets/img/color-sharp2.png";

export const ExpProjects = () => {
    const experiences = [
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
    const projects = []

    return (
        <section className="project" id="experiences&projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Experiences & Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br>eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                                <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                            </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorShape2}></img>
        </section>
    )
}