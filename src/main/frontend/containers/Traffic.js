/**
 * Created by camp-cms on 12.07.2017.
 */
"use strict"
import React, {Component} from 'react';
import DrivingLicence from "../components/DrivingLicence";
import EUControl from "../components/EUKontroll";
import Vehicle from "../components/Vehicle";
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class TakeLicence extends Component {
    render(){
        return (
            <div>
                <Card>
                    <CardMedia
                        overlay={<CardTitle title="Ta førerkortet"/>}
                    >
                        <img src="https://www.xn--billigeforbruksln-orb.no/wp-content/uploads/2016/08/bil-lan.jpg" alt=""/>
                    </CardMedia>
                    <Row>
                    </Row>
                    Har du enda ikke tatt lappen? For å få lappen stilles det krav til at du skal ha godkjent opplæring.
                    Opplæringen varierer med førerkortklassene.
                    <Row>
                        <Col sm={4}>
                            <DrivingLicence/>
                        </Col>
                        <Col sm={4}>
                            <EUControl/>
                        </Col>
                        <Col sm={4}>
                            <Vehicle/>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}


export default TakeLicence;