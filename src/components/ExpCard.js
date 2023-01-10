import { Col } from "react-bootstrap"

export const ExpCard = ({title, company, imgURL}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgURL} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{company}</span>
                </div>
            </div>
        </Col>
    )
}