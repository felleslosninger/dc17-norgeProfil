import React, {Component} from 'react';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Arrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

class PlusButton extends Component {

    constructor(props){
        super(props);
    }

    icon(){
        if(this.props.isClicked){
            return(
                <Arrow className = "spinIconDown"/>
            );
        }
        else{
            return(
                <Arrow className = "spinIcon"/>
            );
        }
    }


    render(){
        return(
            <p className="pluss" onClick = {this.props.toggle}>
                {this.props.text}
                {this.icon()}
            </p>
        );
    }
}

export default PlusButton;