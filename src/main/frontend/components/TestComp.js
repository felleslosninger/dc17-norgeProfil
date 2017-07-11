import React, {Component} from 'react';


function printer(props) {
    console.log("hello");
    console.log(props);
    console.log(props.isLoggedIn);
}

class TestComp extends Component {

    constructor(props){
        console.log(props)
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Hello</h1>
                <button onClick={()=>printer(this.props)}>Click me</button>
                <button onClick={this.props.login}>Log In</button>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        );
    }
}


export default TestComp;