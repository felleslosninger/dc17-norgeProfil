"use strict";
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
// var comp2 = require('your/path/to/components').comp2;
// var comp1 = require('your/path/to/components').comp1;

import React, {Component} from 'react';

import Username from '../components/Username.js';

import {connect} from "react-redux";
import HealthComponents from '../components/HealthComponents';

class HealthContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //  Fetch data from API
    }


    render() {
        return (
            <div>
                <div className="BodyDiv">
                    <Username
                        username={this.props.username}/>

                    <HealthComponents/>


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
    return {}
};


HealthContainer = connect(mapStateToProps)(HealthContainer);

export default HealthContainer;

