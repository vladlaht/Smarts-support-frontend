import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Navigation from "../global/navigation/Navigation";
import {CLIENTS_ROUTE} from "../global/constants/routes";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class ClientsLayout extends Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row>
                        <Col lg={1} md={1} sm={1}>
                            <Navigation activeRoute={CLIENTS_ROUTE}/>
                        </Col>
                        <Col lg={11} md={11} sm={1}>
                            <h1>Clients page</h1>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ClientsLayout);