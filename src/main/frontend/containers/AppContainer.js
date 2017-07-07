"use strict";
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ContactInfoCard from '../components/ContactInfoCard';
import EID from '../components/eID';
import Reservation from '../components/Reservation.js';
import Mail from '../components/Mail.js';
import Username from '../components/Username.js';
import Feed from '../components/Feed.js';
import Gamification from '../components/Gamification.js';
import {connect} from "react-redux";
import { saveContactEmail, saveContactPhone } from '../utilities/actions';


const mapStateToProps = state => {
    let {info: {activeContactEmail, activeContactPhone}} = state;

    return {
        activeContactEmail: activeContactEmail,
        activeContactPhone: activeContactPhone,
    }


};

const mapDispatchToProps = dispatch => {
    return {
        changeEmail: (contactEmail) => dispatch(saveContactEmail(contactEmail)),
        changePhone: (contactPhone) => dispatch(saveContactPhone(contactPhone)),
    }
};

class AppContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false,
        }
    }

    componentWillMount() {
    //  Fetch data from API
    }


    render() {
        return (
            <div>
                <Username/>
                <Row>
                    <Col sm={6} md={3} >
                        <ContactInfoCard
                            onSaveEmail={this.props.changeEmail}
                            onSavePhone={this.props.changePhone}
                            savedEmail={this.props.activeContactEmail}
                            savedPhone={this.props.activeContactPhone}
                        />
                    </Col>
                    <Col sm={6} md={3} >
                        <Mail/>
                    </Col>
                    <Col sm={6} md={3} >
                        <EID/>
                    </Col>
                    <Col sm={6} md={3} >
                        <Reservation/>
                    </Col>
                </Row>
                <Gamification/>
                <div className="page-header"><h3>Aktivitetslogg</h3></div>
                <Feed/>
            </div>
        );
    }
}

AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default AppContainer;
