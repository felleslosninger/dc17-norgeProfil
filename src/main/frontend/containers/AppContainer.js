"use strict";
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {connect} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import ContactInfoCard from '../components/ContactInfoCard';
import EID from '../components/eID';
import Reservation from '../components/Reservation.js';
import Mail from '../components/Mail.js';
import Username from '../components/Username.js';
import Feed from '../components/Feed.js';
import NavigationBar from '../components/NavigationBar.js';
import Gamification from '../components/Gamification.js';
import axios from "axios";


import { saveContactEmail, saveContactPhone } from '../utilities/actions';
import configureStore from "../utilities/store";
import injectTapEventPlugin from 'react-tap-event-plugin';


const store = configureStore();

class AppContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false,
        }
    }

    componentDidMount() {
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

export default AppContainer;