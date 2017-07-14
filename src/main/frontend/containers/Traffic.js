/**
 * Created by camp-cms on 12.07.2017.
 */
"use strict"
import React, {Component} from 'react';
import DrivingLicence from "../components/DrivingLicence";
import EUControl from "../components/EUKontroll";
import Vehicle from "../components/Vehicle";
import DrivingLessons from "../components/Drivinglessons";
import Oppkjøring from "../components/Oppkjøring";
import Teori from "../components/Teori";
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Traffic extends Component {
    render(){
        return (
            <div>
                <Card>
                    <CardMedia
                        overlay={<CardTitle title="Førerkort og kjøretøy"/>}
                    >
                    </CardMedia>
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
                    <Row>
                        <Col sm={4}>
                            <Teori/>
                        </Col>
                        <Col sm={4}>
                            <Drivinglessons/>
                        </Col>
                        <Col sm={4}>
                            <Oppkjøring/>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}


export default Traffic;