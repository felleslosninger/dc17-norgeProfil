import React, {Component} from 'react';
import {Card, CardText, CardTitle} from 'material-ui/Card';


const styling = {
    marginBottom: '1em',
};


class GamificationBox extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Card style={styling}>
                    <CardTitle title="Card title"/>
                    <CardText>

                    </CardText>
                </Card>
            </div>
        );
    }
}


export default GamificationBox;