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
            <Card className="gamification">
                <div className="gamificationContainer">
                    <Row>
                        <Col lg={6}>
                            <div className="ProgressCircle">
                                <Progress
                                    width={200}
                                    strokeWidth={10}
                                    status="active"
                                    type="circle"
                                    percent={this.props.gameState.levelProgress}
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
                            width={200}
                            strokeWidth={10}
                            percent={this.props.gameState.percentage}
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
                    <FacebookShare className="facebook" score={this.props.gameState}/>
                </div>
            </Card>
        );
    }
}


export default GamificationBox;