/**
 * Created by camp-cms on 10.07.2017.
 */

"use strict";
import React, {Component} from 'react';
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
import Laanekassen from '../components/Laanekassen.js';
import Skatt from '../components/Skatt.js';
import Pensjon from '../components/Pensjon.js'
import Avgifter from '../components/Avgift.js'

class EconomicContainer extends Component {
    render(){
        <div>
            <Laanekassen/>
            <Skatt/>
            <Pensjon/>
            <Avgifter/>
        </div>
    }
}

export default EconomicContainer;