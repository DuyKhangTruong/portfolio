import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import gif from "../assets/img/astronut-gif.gif";
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text,setText] = useState('');

    const toRotate = ["Mobile Engineer","Software Engineer","Computer Geek"];
    const [delta,setDelta] = useState(200-Math.random() * 10);
    const period = 300;

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
            setDelta(300);
        }

    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md = {6} xl={7}>
                        <span className="tagline">Welcome stranger to my Portfolio</span>
                        <h1>{`Hello there, I'm `}<span className="wrap">{text}</span></h1>
                        <p>You have visited my Portfolio which I decided to make one not for a long time  ago to share my experiences and projects with recruiters. Furthermore, this portfolio will be a canvas for me to practice web development skills with different frameworks. Enjoy it - Khang Nguyen</p>
                        <button  onClick={(e) => {e.preventDefault(); window.location.replace('/#connect');}}>Let's connect<ArrowRightCircle size={30} /></button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}