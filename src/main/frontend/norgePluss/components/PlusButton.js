import React, {Component} from 'react';

class PlusButton extends Component {

    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        console.log("hei");
    }

    render(){
        return(
            <button onClick = {this.toggle}>+</button>
        );
    }
}

export default PlusButton;