import { Col } from "react-bootstrap"

export const ProjCard = ({name,imgURL,gitURL}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgURL} />
                <div className="proj-txtx">
                    <h4>{name}</h4>
                    <a href={gitURL} target="_blank" rel="noopener noreferrer">Click to see more</a>
                </div>
            </div>
        </Col>
    )
}