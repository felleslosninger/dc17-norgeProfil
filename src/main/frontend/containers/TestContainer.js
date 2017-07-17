import React, {Component} from 'react';
import GamificationCard from '../components/GamificationCard';

const createListItem = (description,isActive,score) =>{
    return({
        description: description,
        isActive: isActive,
        score: score
    });
};

class TestContainer extends Component {

    constructor(props){
        super(props);

        let pointList = [];
        pointList.push(createListItem("postBox",false,50));
        pointList.push(createListItem("email",false,10));
        pointList.push(createListItem("hei",true,100));
        pointList.push(createListItem("telefon",true,30));
        pointList.push(createListItem("reservasjon",false,100));
        this.state  = {
            pointList: pointList
        }
    }

    render(){
        return(
            <GamificationCard levelCap = {100} pointList = {this.state.pointList}/>
        );
    }
}

export default TestContainer;