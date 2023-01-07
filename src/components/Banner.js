import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text,setText] = useState('');

    const toRotate = ["Mobile Engineer","Software Engineer","Computer Geek"];
    const [delta,setDelta] = useState(300-Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval( () =>{
            tick()
        },delta);

        return  () =>  {clearInterval(ticker)};
    }, [text])
    
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length + 1);

        setText(updateText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);

        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md = {6} xl={7}>
                        <span className="tagline">Welcome stranger to my Portfolio</span>
                        <h1>{`Hello there, I'm `}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et. Odio ut sem nulla pharetra diam sit amet. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. At lectus urna duis convallis convallis tellus.</p>
                        <button onClick={() => console.log("Connect")}>Let's connect<ArrowRightCircle size={30} /></button>
                    </Col>
                    <Col xs={12} md = {6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}