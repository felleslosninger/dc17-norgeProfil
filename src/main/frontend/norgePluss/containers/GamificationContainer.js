import React, {Component} from 'react';
import GamificationBox from '../components/GamificationBox'
import GamificationCard from '../../components/GamificationCard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {login,logout} from '../../utilities/actions';
import {connect} from "react-redux";

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: 'rgb(10, 79, 117)',
        alternateTextColor: 'rgb(246, 170, 111)',
    }
});

const createListItem = (description,isActive,score) =>{
    return({
        description: description,
        isActive: isActive,
        score: score
    });
};

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

class GamificationContainer extends Component {

    constructor(props){
        super(props);

        this.createList = this.createList.bind(this);

    }

    createList(){
        let pointList = [];
        pointList.push(createListItem("Valgt postkasse",this.props.userHasPostbox,70));
        pointList.push(createListItem("Registert e-post",this.props.userHasEmail,20));
        pointList.push(createListItem("Registrert mobilnummer",this.props.userHasPhone,20));
        // pointList.push(createListItem("Bruker eID",this.props.userHasEid,90));
        pointList.push(createListItem("Ikke reservert",!this.props.activeReservation,100));
        pointList.push(createListItem("Registert nivå 3 eID",!this.props.levelThree,10));
        pointList.push(createListItem("Registert nivå 4 eID",!this.props.levelFour,30));
        return pointList;
    }

    render() {
        if(this.props.isLoggedIn){
            return(
                <MuiThemeProvider muiTheme = {muiTheme}>
                    <div>
                        <GamificationBox levelCap = {100} gameState = {calcGameState(this.createList())} pointList = {this.createList()}/>
                    </div>
                </MuiThemeProvider>
            );
        }
        return(
            <div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    let {app:{isLoggedIn}} = state;

    return{
        isLoggedIn: isLoggedIn,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login()),
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(GamificationContainer);