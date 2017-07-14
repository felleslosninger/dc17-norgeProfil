var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import { Progress } from 'react-sweet-progress';
//import "react-sweet-progress/lib/style.css";

import React, {Component} from 'react';
import {Card, CardText} from 'material-ui/Card';
import Help from 'material-ui/svg-icons/action/help-outline';
import RaisedButton from 'material-ui/RaisedButton';


class GamificationCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            points: 0,
            percentage: 0,
            level: 0,
            maxScore: 1000,
            levelProgress: 0,
        };
        this.increaseStatus = this.increaseStatus.bind(this);
    }

    increaseStatus(){
        console.log(this.state);
        let newValue = this.state.points + 10;
        let newLevelProgress = this.state.levelProgress + 10;
        let newLevel = this.state.level;
        let newPercentage = Math.floor(100*this.state.points/this.state.maxScore);

        if(newLevelProgress == 10){
            
        }
        if(newLevelProgress > 100){
            newLevel += 1;
            newLevelProgress = 0;
        }
        this.setState({
            points: newValue,
            level: newLevel,
            percentage: newPercentage,
            levelProgress: newLevelProgress
        });
    }

    calcColor(){
        let h = Math.floor(120*this.state.levelProgress/100);
        return "hsl(" + h + ",100%, 50%)"
    }

    render(){
        return(
            <Card className = "Card">
                <Row className="CardHeader">
                    <h4>Gamification</h4>
                    <Help className="InfoBtn"/>
                </Row>
                <div className = "ProgressCircle">
                    <Progress
                        width = {200}
                        strokeWidth={10}
                        status = "active"
                        type="circle"
                        percent={this.state.levelProgress}
                        theme={{
                            active: {
                                symbol: "Level: " + this.state.level,
                                color: this.calcColor(),
                            },
                            default: {
                                symbol: "Level: " + this.state.level,
                            }
                        }}
                    />
                </div>
                <div className = "ProgressBar">
                    <Progress
                        status = "active"
                        percent={this.state.percentage}
                        theme={{
                            active: {
                                symbol: this.state.points + "/" + this.state.maxScore + "Poeng",
                                color: this.calcColor(),
                            },
                            default: {
                                symbol: this.state.points + "/" + this.state.maxScore + "Poeng",
                            }
                        }}
                    />
                </div>
                <RaisedButton label = "Increase" onClick = {this.increaseStatus}/>
            </Card>
        );
    }


}

export default GamificationCard;