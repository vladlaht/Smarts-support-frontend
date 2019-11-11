import React, {Component} from "react";
import {Button} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {CREATE_TICKET_ACTION} from "../../constants/ReducerConstants";
import {changeField} from "../../../../global/actions/StandardActions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AccountCard from "../../../account/views/cards/AccountDropdownCard";

class CreateTicketButton extends Component {

    toggleModal = () => {
        const {createTicket} = this.props;
        this.props.changeField(CREATE_TICKET_ACTION, "modalIsOpen", !createTicket.modalIsOpen )
    };

    render() {
        return (
            <div className="tickets-top-component">
               <Row>
                   <Col>
                       <Button className="smarts-button ticket-new-button" onClick={this.toggleModal}>
                           New ticket
                       </Button>
                   </Col>
                   <Col>
                       <AccountCard/>
                   </Col>
               </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        createTicket: state.createTicket
    }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({changeField }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(CreateTicketButton);