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
import { connect } from "react-redux";
import { fetchUnusedAuthTypes, fetchPostbox, fetchMostUsedAuthTypes, fetchContactInfo, fetchRecentActivity, fetchRecentPublicActivity, fetchUsedServices, saveContactEmail, saveContactPhone, setReservation, removeReservation, setPostbox } from '../utilities/actions';
import GamificationCard from '../components/GamificationCard';

const createListItem = (description,isActive,score) =>{
    return({
        description: description,
        isActive: isActive,
        score: score
    });
};

const calcGameState = (pointList) => {
    const levelCap = 100;
    let points = 0;
    let maxScore = 0;
    if(pointList.length > 0){
        pointList.forEach(function (obj, i) {
            if(obj.isActive){
                points += obj.score;
            }
            maxScore += obj.score;
        });
    }

    let percentage = Math.ceil(100*points/maxScore);
    let levelProgress = points % levelCap;
    let level = 1 + (points - (points % levelCap)) / levelCap;
    if(levelProgress == 0  && level > 1){
        levelProgress = 100;
    }
    if(points < 0){
        points = 0;
        level = 1;
    }

    return({
        percentage: percentage,
        levelProgress: levelProgress,
        level: level,
        points: points,
        maxScore: maxScore
    });
};

class AppContainer extends Component {

    constructor(props){
        super(props);

        this.createList = this.createList.bind(this);
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

    createList(){
        let pointList = [];
        pointList.push(createListItem("Valgt postkasse",this.props.userHasPostbox,70));
        pointList.push(createListItem("Registert e-post",this.props.userHasEmail,20));
        pointList.push(createListItem("Registrert mobilnummer",this.props.userHasPhone,20));
        // pointList.push(createListItem("Bruker eID",this.props.userHasEid,90));
        pointList.push(createListItem("Ikke reservert",!this.props.activeReservation,100));
        pointList.push(createListItem("Registert nivå 3 eID",!this.props.levelThree,10));
        pointList.push(createListItem("Registert nivå 4 eID",!this.props.levelFour,30));
        return pointList;
    }

    render() {
        return (
            <div>
                <div className="BodyDiv">
                    <Row className="hr"><hr/></Row>
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
                    <Row className="hr"><hr/></Row>
                    <div className="pageheader hideFromMobile"><h3>Din profilstyrke</h3></div>
                    <GamificationCard levelCap = {100} gameState = {calcGameState(this.createList())} pointList = {this.createList()}/>
                    <Row className="hr"><hr/></Row>
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

    if (activeReservation == 'NEI'){
        activeReservation = false;
    } else{
        activeReservation = true;
    }

    let levelThree = true;
    let levelFour = true;

    for (let i = 0; i < activeEid.length; i++) {
        if (activeEid[i][1].indexOf('MinID') >= 0) {
            levelThree = false;
        }
        if(activeEid[i][1].indexOf('BankID') >= 0 || activeEid[i][1].indexOf('BankID') >= 0 || activeEid[i][1].indexOf('Commfides') >= 0 ||
            activeEid[i][1].indexOf('BuyPass') >= 0 || activeEid[i][1].indexOf('BankID mobil') >= 0) {
            levelFour = false;
        }
    }

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
        levelThree: levelThree,
        levelFour: levelFour
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
