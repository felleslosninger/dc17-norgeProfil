"use strict";
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import NavBar from '../components/NavigationBar';
import React, {Component} from 'react';

import Username from '../components/Username.js';

import {connect} from "react-redux";

class HealthContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false,
        }
    }

    componentWillMount() {
        //  Fetch data from API
    }


    render() {
        return (
            <div>
                <NavBar/>
                <div>
                    <Username
                        username={this.props.username}
                    />

                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    let {info: {username}} = state;


    return {
        username: username,

    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

HealthContainer = connect(mapStateToProps, mapDispatchToProps)(HealthContainer);

export default HealthContainer;
