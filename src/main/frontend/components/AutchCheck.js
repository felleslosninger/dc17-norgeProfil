import React, {Component} from 'react';
import axios from "axios";


class AuthCheck extends Component {

    componentWillMount(){
        this.authenticate();
    }


    constructor(props){
        super(props);
    }

    authenticate() {
        axios.get('/user')
            .then((response) => {
                if (response.data == "") {
                    this.props.logout();
                } else {
                    if (response.data.authenticated) {
                        //logger.info("bruker logget inn");
                        this.props.login();
                    }
                    else {
                        this.props.logout();
                    }
                }
            });
    }

    render(){
        return null;
    }
}

export default AuthCheck;