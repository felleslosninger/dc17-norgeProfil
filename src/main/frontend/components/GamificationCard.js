var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Grid = require('react-bootstrap/lib/Grid');

import {Progress} from 'react-sweet-progress';
import FacebookShare from '../components/FacebookShare';
import React, {Component} from 'react';
import {Card} from 'material-ui/Card';
import GameLog from './GameLog';

const calcGameState = (pointList) => {
    const levelCap = 100;
    let points = 0;
    let maxScore = 0;
    if(pointList.length > 0){
        pointList.forEach(function (obj, i) {
            if(obj.isActive){
                points += obj.score;
            }
            maxScore += obj.score;
        });
    }

    let percentage = Math.ceil(100*points/maxScore);
    let levelProgress = points % levelCap;
    let level = 1 + (points - (points % levelCap)) / levelCap;
    if(levelProgress == 0  && level > 1){
        levelProgress = 100;
    }
    if(points < 0){
        points = 0;
        level = 1;
    }

    return({
        percentage: percentage,
        levelProgress: levelProgress,
        level: level,
        points: points,
        maxScore: maxScore
    });
};

class GamificationCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            percentage: 0,
            levelprogress: 0,
            circleProgress1: 0,
            circleProgress2: 0,
            level: 0,
            points: 0,
            maxScore: 0,
            onTop: 1,
        }
    }

    componentDidMount(){
        this.setState({
            circle1:document.getElementsByClassName("ProgressCircle")[0],
            circle2: document.getElementsByClassName("ProgressCircle2")[0]
        });

        //const background = document.querySelector(".react-sweet-progress-circle> path:first-of-type");
        //background.style.stroke = this.calcLevelColor(this.state.level-1);
    }

    componentDidUpdate(){
        //const background = document.querySelector(".react-sweet-progress-circle> path:first-of-type");
        //background.style.stroke = this.calcLevelColor(this.state.level-1);
    }

    calcBarColor(value) {
        let h = Math.floor(120 * value / 100);
        return "hsl(" + h + ",100%, 50%)";
    }

    calcCircleColor(value) {
        let s = 25 + Math.floor(0.75 * value);
        return "hsl( 192 ," + s + "%, 50%)";
    }

    calcLevelColor(value){
        let h = Math.floor(30*value);
        return "hsl(" + h + ",100%, 50%)";
    }

    swapCircles(){
        this.state.circle1.style.setProperty("z-index", "1", "important");
        this.state.circle2.style.setProperty("z-index", "2", "important");

        this.setState({
            circle1: this.state.circle2,
            circle2: this.state.circle1,
        });

        if(this.state.onTop === 1){
            this.setState({
                onTop:2
            });
        }
        else{
            this.setState({
                onTop:1
            });
        }
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.pointList != this.props.pointList){
            const gameState = calcGameState(nextProps.pointList);

            if(gameState.level > this.state.level){
                if(this.state.onTop === 1){
                    this.setState({
                        circleProgress1:100,
                        circleProgress2: 0,
                    });

                    setTimeout(()=>{
                        this.swapCircles();
                        this.setState({
                            circleProgress1:0,
                            circleProgress2: gameState.levelProgress
                        });
                    },500);
                }
                else{
                    this.setState({
                        circleProgress1:0,
                        circleProgress2: 100,
                    });

                    setTimeout(()=>{
                        this.swapCircles();
                        this.setState({
                            circleProgress1:gameState.levelProgress,
                            circleProgress2: 0,
                        });
                    },500);
                }
            }
            else if(gameState.level < this.state.level){
                if(this.state.onTop === 1){
                    this.setState({
                        circleProgress1:1,
                        circleProgress2: 100,
                    });

                    setTimeout(()=>{
                        this.swapCircles();
                        this.setState({
                            circleProgress2: gameState.levelProgress
                        });
                    },500);
                }
                else{
                    this.setState({
                        circleProgress1:100,
                        circleProgress2: 1,
                    });

                    setTimeout(()=>{
                        this.swapCircles();
                        this.setState({
                            circleProgress1:gameState.levelProgress,
                        });
                    },600);
                }
            }
            else{
                if(this.state.onTop===1){
                    this.setState({
                        circleProgress1: gameState.levelProgress
                    });
                }
                else{
                    this.setState({
                        circleProgress2: gameState.levelProgress
                    });
                }
            }
            this.setState(gameState);
        }
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
                                    percent={this.state.circleProgress1}
                                    theme={{
                                        active: {
                                            symbol: "Nivå: " + this.state.level,
                                            color: this.calcLevelColor(this.state.level),
                                        },
                                        default: {
                                            symbol: "Nivå: " + this.state.level,
                                        }
                                    }}
                                />
                            </div>
                            <div className="ProgressCircle2">
                                <Progress
                                    width={200}
                                    strokeWidth={10}
                                    status="active"
                                    type="circle"
                                    percent={this.state.circleProgress2}
                                    theme={{
                                        active: {
                                            symbol: "Nivå: " + this.state.level,
                                            color: this.calcLevelColor(this.state.level),
                                        },
                                        default: {
                                            symbol: "Nivå: " + this.state.level,
                                        }
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <GameLog pointList={this.props.pointList}/>
                        </Col>
                    </Row>
                    <div className="ProgressBar">
                        <Progress
                            status="active"
                            width={200}
                            strokeWidth={10}
                            percent={this.state.percentage}
                            theme={{
                                active: {
                                    symbol: this.state.points + "/" + this.state.maxScore + " Poeng",
                                    color: this.calcBarColor(this.state.percentage),
                                },
                                default: {
                                    symbol: this.state.points + "/" + this.state.maxScore + " Poeng",
                                }
                            }}
                        />
                    </div>
                    <FacebookShare className="facebook" score={this.state}/>
                </div>
            </Card>
        );
    }


}

export default GamificationCard;