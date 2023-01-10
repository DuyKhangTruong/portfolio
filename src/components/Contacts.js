import { useState } from "react";
import { Row , Col ,Container} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";

export const Contacts = () => {
    const infoDetails = {
        firstName: "",
        lastName: "",
        email:"",
        phone: "",
        message: ""
    }

    const [formDetails, setFormDetails] = useState(infoDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }

    const handleSubmit = () => {

    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact me" />
                    </Col>
                    <Col md={6}>
                        <h2>Thank you for visiting</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}