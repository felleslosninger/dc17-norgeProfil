/**
 * Created by camp-cms on 10.07.2017.
 */

"use strict";
import React, {Component} from 'react';
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
import Laanekassen from '../components/Laanekassen.js';
import Uføretrygd from '../components/Uføretrygd.js';
import Pensjon from '../components/Pensjon.js'
import Dagpenger from '../components/Dagpenger.js'
import Barnetrygd from '../components/Barnetrygd.js';
import Kontantstøtte from '../components/Kontantstøtte.js';
import NavigationBar from '../components/NavigationBar';
import Bank from 'material-ui/svg-icons/action/account-balance';


class EconomicContainer extends Component {
    render(){
        return (
            <div>
                <NavigationBar/>
                <Row>
                    <Col xs={3} lg={2} className="Icon">{<Bank />}</Col>
                    <Col xs={9} lg={10}> <h2> Lån og stønader </h2> </Col>
                </Row>
                <Row>
                    <Col xs={6}> <Laanekassen/> </Col>
                    <Col xs={6}> <Pensjon/> </Col>
                </Row>
                <Row>
                    <Col xs={6}> <Uføretrygd/> </Col>
                    <Col xs={6}> <Dagpenger/> </Col>
                </Row>
                <Row>
                    <Col xs={6}> <Barnetrygd/> </Col>
                    <Col xs={6}> <Kontantstøtte/> </Col>
                </Row>
            </div>
    )

    }
}

export default EconomicContainer;