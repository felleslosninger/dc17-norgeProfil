/**
 * Created by camp-cms on 11.07.2017.
 */
"use strict"
import React, {Component} from 'react';
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Teori from '../components/Teori';
import Oppkjøring from "../components/Oppkjøring";
import Drivinglessons from "../components/Drivinglessons";

class TrafficContainer extends Component {
    render(){
        return (
            <div>
                <Card>
                    <Row>
                    <CardMedia
                        overlay={<CardTitle title="Ta førerkortet"/>}
                    >
                        <img src="https://www.xn--billigeforbruksln-orb.no/wp-content/uploads/2016/08/bil-lan.jpg" alt=""/>
                    </CardMedia>
                    </Row>
                    For å kjøre opp stilles det krav til at du skal ha godkjent opplæring. Opplæringen varierer med
                    førerkortklassene.
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


export default TrafficContainer;