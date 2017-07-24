import React, {Component} from 'react';
import AddCircle from 'material-ui/svg-icons/content/add-circle';


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
            <AddCircle onClick = {this.toggle}/>
        );
    }
}

export default PlusButton;