var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
import { Progress } from 'react-sweet-progress';

import React, {Component} from 'react';
import {Card, CardText} from 'material-ui/Card';
import GameLog from './GameLog';

class GamificationCard extends Component {

    constructor(props){
        super(props);
    }


    calcBarColor(value){
        let h = Math.floor(120*value/100);
        return "hsl(" + h + ",100%, 50%)";
    }
    calcCircleColor(value){
        let s = 50 + Math.floor(value/200);
        return "hsl( 192 ,"+ s +"%, 50%)";
    }

    render(){
        return(
            <div className="gamification">
                <Card>
                    <Row className="CardHeader">
                    </Row>
                    <div className = "ProgressCircle">
                        <Progress
                            width = {200}
                            strokeWidth={10}
                            status = "active"
                            type="circle"
                            percent={this.props.gameState.levelProgress}
                            theme={{
                                active: {
                                    symbol: "Level: " + this.props.gameState.level,
                                    color: this.calcCircleColor(this.props.gameState.levelProgress),
                                },
                                default: {
                                    symbol: "Level: " + this.props.gameState.level,
                                }
                            }}
                        />
                    </div>
                    <div className = "ProgressBar">
                        <Progress
                            status = "active"
                            width = {200}
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
                    <GameLog pointList = {this.props.pointList}/>
                </Card>
            </div>
        );
    }


}

export default GamificationCard;