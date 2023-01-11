import { useState, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Typed from 'typed.js';

export const Banner = () => {

    const el = useRef(null);
    // Create reference to store the Typed instance itself
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Mobile Engineer","Software Engineer","Computer Geek"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
            shuffle:true
        };
        
        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);
        
        return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
        }
    }, [])

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <span className="tagline">Welcome stranger to my Portfolio</span>
                        {/* <h1>{`Hello there, I'm `}<span className="wrap">{text}</span></h1> */}
                        <h1>{`Hello there, I'm `}<br/><span className="wrap" ref={el}/></h1>
                        <Col xs={12} md={6} xl={7}>
                            <p>You have visited my Portfolio which I decided to make one not for a long time  ago to share my experiences and projects with recruiters. Furthermore, this portfolio will be a canvas for me to practice web development skills with different frameworks. Enjoy it - Khang Nguyen</p>
                            {/* <button  onClick={(e) => {e.preventDefault(); window.location.replace('/#connect');}}>Let's connect<ArrowRightCircle size={30} /></button> */}
                            <button>Let's connect<ArrowRightCircle size={30} /></button>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}