import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Form} from "react-bootstrap";
import {AVAILABLE_TICKET_TYPES, TICKET_TYPE_PAYMENTS, TICKET_TYPE_SOFTWARE} from "../../../constants/ticketConstants";
import {capitalizeFirstLetter} from "../../../../../global/utils/StringUpdates";
import {changeField} from "../../../../../global/actions/StandardActions";
import {CREATE_TICKET_ACTION} from "../../../constants/reducerConstants";
import Payments from "./Payments";
import Software from "./Software";

class Create extends React.Component {

    handleFieldChange(field, value) {
        this.props.changeField(CREATE_TICKET_ACTION, field, value);
    };

    renderSelection() {
        return (
            <Form.Group className="smarts-ticket-form">
                <label className="smarts-ticket-selector-label"> Type</label>
                <select className="smarts-select"
                        defaultValue="default"
                        onChange={(e) => this.handleFieldChange("ticketType", e.target.value)}>
                    <option value="default" disabled>Select ticket type</option>
                    {AVAILABLE_TICKET_TYPES.map(
                        type => <option key={type}
                                        value={type}>{capitalizeFirstLetter(type).replace(/_/, " ")}</option>)}
                </select>
            </Form.Group>
        )
    }

    renderTicketContent() {
        const {createTicket} = this.props;
        switch (createTicket.ticketType) {
            case TICKET_TYPE_PAYMENTS:
                return <Payments/>;
            case TICKET_TYPE_SOFTWARE:
                return <Software/>;
            default:
                return null;
        }
    }

    render() {
        return (
            <React.Fragment>
                <Form>
                    {this.renderSelection()}
                    {this.renderTicketContent()}
                </Form>
            </React.Fragment>

        )
    }
}

const mapStateToProps = state => ({
        createTicket: state.createTicket,
    }
);

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Create);
