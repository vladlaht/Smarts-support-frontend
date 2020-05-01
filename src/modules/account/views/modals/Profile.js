import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changeField} from "../../../../global/actions/StandardActions";
import {MdLocationOn} from "react-icons/md"
import {IoIosMail, IoIosPhonePortrait} from "react-icons/io"
import {IconContext} from "react-icons";

class Profile extends Component {

    render() {
        return (
                <div className="profile">
                    <div className="profile-top">
                        <div className="profile-top-picture">
                            <img src={`${process.env.PUBLIC_URL}/img/profile-image.png`} alt="logo"/>
                        </div>
                        <div className="profile-top-contact">
                            <div className="profile-top-contact-name">Vlad Laht</div>
                            <div className="profile-top-contact-email">
                                <IconContext.Provider value={{className: "profile-top-contact-logo"}}>
                                    <IoIosMail/>
                                </IconContext.Provider>
                                vlad.laht@gmail.com
                            </div>
                            <div className="profile-top-contact-phone">
                                <IconContext.Provider value={{className: "profile-top-contact-logo"}}>
                                    <IoIosPhonePortrait/>
                                </IconContext.Provider>
                                +372 55667788
                            </div>
                            <div className="profile-top-contact-location">
                                <IconContext.Provider value={{className: "profile-top-contact-logo"}}>
                                    <MdLocationOn/>
                                </IconContext.Provider>
                                Tallinn, EE
                            </div>
                        </div>
                    </div>
                    <div className="profile-bottom">
                        <div className="profile-bottom-title">
                            Connected tickets:
                        </div>
                        <div className="profile-bottom-amount">
                            <div className="profile-bottom-amount-type">
                                <div className="count">8</div>
                                <div className="name">Finished</div>
                            </div>
                            <div className="profile-bottom-amount-type">
                                <div className="count">12</div>
                                <div className="name">In progress</div>
                            </div>
                            <div className="profile-bottom-amount-type">
                                <div className="count">20</div>
                                <div className="name">All</div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        profileDetails: state.profileDetails
    }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({
    changeField
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
