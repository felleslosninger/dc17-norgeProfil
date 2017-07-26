var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Grid = require('react-bootstrap/lib/Grid');

import React, {Component} from 'react';
import {Card, CardText, CardTitle} from 'material-ui/Card';
import FacebookShare from '../../components/FacebookShare';
import {Progress} from 'react-sweet-progress';


const styling = {
    marginBottom: '1em',
};

const progressCircleStyling = {
    // marginLeft: '10em',
    marginTop: '1em',
    fontSize: '100%',
};

const progressBarStyling = {
    width: '25em',
    fontSize: '100%',
};


const infoStyle = {
    padding: '3em',
    fontSize: '12pt',
};


class GamificationBox extends Component {

    constructor(props) {
        super(props);
    }


    calcBarColor(value) {
        let h = Math.floor(120 * value / 100);
        return "hsl(" + h + ",100%, 50%)";
    }

    calcCircleColor(value) {
        let s = 25 + Math.floor(0.75 * value);
        return "hsl( 192 ," + s + "%, 50%)";
    }

    render() {
        return (
            <Card className="gamification" style={styling}>
                <Row>
                    <Col lg={5}>
                        <div style={infoStyle}>
                            <h3>Digital Borger</h3>
                            <span>
                                Som digital borger vil man kunne signere og
                                motta informasjon fra staten på nett. Man kan logge
                                inn på, og ta i bruk, offentlige tjenester.
                                En fullverdig digital borger er en som ikke
                                reserverer seg mot kommunikasjon på nett.
                                <br/>
                                <br/>
                                Se mer på din profil
                            </span>
                        </div>
                    </Col>

                    <Col lg={7}>
                        <div className="gContainer">
                            <Row>
                                <Col lg={6}>
                                    <div className="ProgressCircle">
                                        <Progress
                                            width={200}
                                            strokeWidth={10}
                                            status="active"
                                            type="circle"
                                            percent={this.props.gameState.levelProgress}
                                            style={progressCircleStyling}
                                            theme={{
                                                active: {
                                                    symbol: "Nivå: " + this.props.gameState.level,
                                                    color: this.calcCircleColor(this.props.gameState.levelProgress),
                                                },
                                                default: {
                                                    symbol: "Nivå: " + this.props.gameState.level,
                                                }
                                            }}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <div className="ProgressBar">
                                <Progress
                                    status="active"
                                    percent={this.props.gameState.percentage}
                                    style={progressBarStyling}
                                    theme={{
                                        active: {
                                            symbol: this.props.gameState.points + "/" + this.props.gameState.maxScore + " Poeng",
                                            color: this.calcBarColor(this.props.gameState.percentage),
                                        },
                                        default: {
                                            symbol: this.props.gameState.points + "/" + this.props.gameState.maxScore + " Poeng",
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>
        );
    }
}


export default GamificationBox;