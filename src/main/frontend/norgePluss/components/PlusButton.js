import React, {Component} from 'react';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Arrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down';


const Icon = (clicked) =>{
    console.log(clicked);

}

class PlusButton extends Component {

    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            clicked:false
        }
    }

    toggle(){
        this.setState({
            clicked: !this.state.clicked
        })
    }

    icon(){
        if(this.state.clicked){
            console.log("Ja");
            return(
                <Arrow className = "spinIconDown"/>
            );
        }
        else{
            console.log("Nei");
            return(
                <Arrow className = "spinIcon"/>
            );
        }
    }



    render(){
        return(
            <p className="pluss" onClick = {this.toggle}>
                {this.props.text}
                {this.icon()}
            </p>
        );
    }
}

export default PlusButton;