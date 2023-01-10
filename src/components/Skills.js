import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import swift from "../assets/img/swift-icon.svg";
import python from "../assets/img/python-icon.svg";
import rjs from "../assets/img/reactjs-icon.svg";
import c from "../assets/img/c-icon.svg";
import cpp from "../assets/img/cplus-icon.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }
    
    return (
        <section className="skill" id="skills">
            <Container>
                <div className="skill-bx">
                    <h2>
                        Skills
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br>eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} partialVisbile={false} className="skill-slider">
                        <div className="item">
                            <img src={swift} alt="Swift icon"/>
                            <h5>Swift</h5>
                        </div>
                        <div className="item">
                            <img src={rjs} alt="ReactJS"/>
                            <h5>ReactJS</h5>
                        </div>
                        <div className="item">
                            <img src={python} alt="Python icon"/>
                            <h5>Python</h5>
                        </div>
                        <div className="item">
                            <img src={c} alt="C icon"/>
                            <h5>C</h5>
                        </div>
                        <div className="item">
                            <img src={cpp} alt="C++ icon"/>
                            <h5>C plus plus</h5>
                        </div>
                    </Carousel>
                </div>
            </Container>
            <img className="background-image-left" src= {colorSharp} />
        </section>
    )
}