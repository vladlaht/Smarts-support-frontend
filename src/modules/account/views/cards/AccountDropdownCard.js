import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {DropdownButton, Dropdown} from "react-bootstrap";
import {IoMdLogOut, IoMdClipboard} from "react-icons/io"
import {FaUser} from "react-icons/fa"
import {MdSettings} from "react-icons/md"
import Username from "./Username";
import {OPEN_PROFILE_ACTION} from "../../constants/ReducerConstants";
import {changeField} from "../../../../global/actions/StandardActions";
import ProfileModal from "../modals/ProfileModal";

class AccountDropdownCard extends React.Component {

    toggleModal = () => {
        this.props.changeField(OPEN_PROFILE_ACTION, "modalIsOpen", !this.props.profileDetails.modalIsOpen)
    };

    render() {
        return (
            <div className="dropdown-card">
                <DropdownButton id="dropdown-basic-button" alignRight
                                title={<Username fullname={this.props.account.profileName}/>}>
                    <Dropdown.Item onClick={this.toggleModal}>
                        <FaUser className="dropdown-card__items-logo profile-icon"/>
                        My profile
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                        <IoMdClipboard className="dropdown-card__items-logo"/>
                        Tasks
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                        <MdSettings className="dropdown-card__items-logo"/>
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item href="#/authorize">
                        <IoMdLogOut className="dropdown-card__items-logo"/>
                        Log out
                    </Dropdown.Item>
                </DropdownButton>
                <ProfileModal toggle={this.toggleModal}
                              profileDetails={this.props.profileDetails}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    account: state.accountCard,
    profileDetails: state.profileDetails
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({changeField}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AccountDropdownCard);
