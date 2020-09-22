import React from "react";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import Navigation from "../global/navigation/Navigation";
import {CLIENTS_ROUTE, TICKETS_ROUTE} from "../global/constants/routes";
import {changeField} from "../global/actions/StandardActions";
import {bindActionCreators} from "redux";
import {fetchTicketsAction} from "../modules/tickets/actions/FetchTicketsAction";
import TicketDetails from "../modules/ticketDetails/views/TicketDetails";
import {LoopCircleLoading} from "react-loadingg";


class TicketDetailsLayout extends React.Component {

    componentDidMount() {
        //this.props.fetchTicketsAction();
    }

    render() {
        const selectedTicket = this.props.tickets.data.filter(ticket => ticket.id === this.props.match.params.id)[0];

        return (
            <React.Fragment>
                <div className="layout">
                    <div className="layout-header">
                        <Container>
                            <Navigation activeRoute={CLIENTS_ROUTE}/>
                        </Container>
                    </div>
                    <div className="layout-content">
                        <Container>
                            <div className="layout-content__title">
                                <h3>Ticket details</h3>


                            </div>
                            <div className="layout-content__subtitle">
                                <h6>{selectedTicket && selectedTicket.ticketName}</h6>
                            </div>
                            <div className="layout-content__body">
                                {/*{selectedTicket ? <TicketDetails selectedTicket={selectedTicket ? selectedTicket : ""}/> : <LoopCircleLoading/>}*/}
                                <TicketDetails selectedTicket={selectedTicket ? selectedTicket : ""}/>
                            </div>
                        </Container>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
        tickets: state.tickets,
    }
);

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField,
    fetchTicketsAction,
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetailsLayout);