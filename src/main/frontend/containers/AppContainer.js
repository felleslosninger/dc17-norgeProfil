"use strict";
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ContactInfoCard from '../components/ContactInfoCard';
import EID from '../components/eID';
import Reservation from '../components/Reservation';
import Mail from '../components/Mail.js';
import Username from '../components/Username.js';
import Feed from '../components/Feed.js';
import Gamification from '../components/Gamification.js';
import { connect } from "react-redux";
import { fetchUnusedAuthTypes, fetchPostbox, fetchMostUsedAuthTypes, fetchContactInfo, fetchRecentActivity, fetchRecentPublicActivity, fetchUsedServices, saveContactEmail, saveContactPhone, setReservation, removeReservation, setPostbox } from '../utilities/actions';


class AppContainer extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        //  Fetch data from API
        this.props.fetchContactInfo();
        this.props.fetchRecentActivity();
        this.props.fetchRecentPublicActivity();
        this.props.fetchUsedServices();
        this.props.fetchUnusedAuthTypes();
        this.props.fetchMostUsedAuthTypes();
        this.props.fetchPostbox();
    }


    render() {
        return (
            <div>
                <div className="BodyDiv">
                    <Username
                        username={this.props.username}
                    />
                    <Row>
                        <Col xs={12} sm={6} lg={3} >
                            <ContactInfoCard
                                onSaveEmail={this.props.changeEmail}
                                onSavePhone={this.props.changePhone}
                                savedEmail={this.props.activeContactEmail}
                                savedPhone={this.props.activeContactPhone}
                            />
                        </Col>
                        <Col xs={12} sm={6} lg={3}>
                            <Mail
                                onSetPostbox={this.props.setActivePostbox}
                                postbox={this.props.activePostbox}
                            />
                        </Col>
                        <Col xs={12} sm={6} lg={3}>
                            <EID
                                userActiveEid={this.props.activeEid}
                                userNonActiveEid={this.props.nonActiveEid}
                            />
                        </Col>
                        <Col xs={12} sm={6} lg={3} >
                            <Reservation
                                onSetReservation={this.props.setActiveReservation}
                                onRemoveReservation={this.props.removeActiveReservation}
                                reservation={this.props.activeReservation}
                            />
                        </Col>
                    </Row>
                    <Gamification
                        hasEmail={this.props.userHasEmail}
                        hasPhone={this.props.userHasPhone}
                        hasPostbox={this.props.userHasPostbox}
                        hasEid={this.props.userHasEid}
                    />
                    <div className="pageheader hideFromMobile"><h3>Aktivitetslogg</h3></div>
                    <Feed
                        ownActivity={this.props.recentUserActivity}
                        publicSectorActivity={this.props.recentPublicActivity}
                    />
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    let {info: {username, activeContactEmail, activeContactPhone, activeReservation, activePostbox, activeEid, nonActiveEid, recentUserActivity, recentPublicActivity}} = state;

    let {userHasEmail, userHasPhone, userHasPostbox, userHasEid} = true;

    if (activeContactEmail === '') {
        userHasEmail = false;
    }else userHasEmail = typeof activeContactEmail != 'undefined';

    if (activeContactPhone === '') {
        userHasPhone = false;
    } else userHasPhone = typeof activeContactPhone != 'undefined';

    userHasPostbox = activePostbox !== '';

    userHasEid = activeEid.length > 0;

    return {
        username: username,
        activeContactEmail: activeContactEmail,
        activeContactPhone: activeContactPhone,
        activeReservation: activeReservation,
        activePostbox: activePostbox,
        activeEid: activeEid,
        nonActiveEid: nonActiveEid,
        userHasEmail: userHasEmail,
        userHasPhone: userHasPhone,
        userHasPostbox: userHasPostbox,
        userHasEid: userHasEid,
        recentUserActivity: recentUserActivity.slice(0, 10),
        recentPublicActivity: recentPublicActivity.slice(0, 10),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchContactInfo: () => dispatch(fetchContactInfo()),
        fetchRecentActivity: () => dispatch(fetchRecentActivity()),
        fetchRecentPublicActivity: () => dispatch(fetchRecentPublicActivity()),
        fetchUsedServices: () => dispatch(fetchUsedServices()),
        fetchMostUsedAuthTypes: () => dispatch(fetchMostUsedAuthTypes()),
        fetchUnusedAuthTypes: () => dispatch(fetchUnusedAuthTypes()),
        fetchPostbox: () => dispatch(fetchPostbox()),
        changeEmail: (contactEmail) => dispatch(saveContactEmail(contactEmail)),
        changePhone: (contactPhone) => dispatch(saveContactPhone(contactPhone)),
        setActiveReservation: () => dispatch(setReservation()),
        removeActiveReservation: () => dispatch(removeReservation()),
        setActivePostbox: (postbox) => dispatch(setPostbox(postbox)),
    }
};

injectTapEventPlugin();

AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default AppContainer;
