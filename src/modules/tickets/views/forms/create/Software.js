import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Col, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";


class Software extends React.Component {


    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <Form.Group className="smarts-ticket-form">
                            <br/>
                            <select className="smarts-select">
                                <option disabled>Assignee</option>
                                <option>Kristo Truu</option>
                                <option>Ilja Andrejev</option>
                                <option>Vladislav Lahtarin</option>
                            </select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="smarts-ticket-form">
                            <br/>
                            <input type="text" className="smarts-input" required/>
                            <label className="smarts-ticket-label"> Ticket name</label>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="smarts-ticket-form">
                            <br/>
                            <input type="text" className="smarts-input" required/>
                            <label className="smarts-ticket-label"> Client name</label>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="smarts-ticket-form">
                            <br/>
                            <textarea rows="3" className="smarts-textarea" required/>
                            <label className="smarts-ticket-label"> Description</label>
                        </Form.Group>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch));

export default connect(null, mapDispatchToProps)(Software);