import React, {Component} from 'react';
import {connect} from "react-redux";
import axios from "axios";
import {login,logout} from '../utilities/actions';


class EnsureLoggedInContainer extends Component {

    componentWillMount(){
        this.authenticate();
    }

    authenticate() {
        axios.get('/user')
            .then((response) => {
                if (response.data == "") {
                    logout();
                    console.log("bye1");
                } else {
                    if (response.data.authenticated) {
                        login();
                        console.log("hello");
                        console.log(this.props.isLoggedIn);
                    }
                    else {
                        logout();
                        console.log("bye2");
                    }
                }
            });
    }

    render(){
        console.log(this.props);
        return(this.props.children);
    }
}

const mapStateToProps = state => {
    let {app:{isLoggedIn}} = state;

    return{
        isLoggedIn: isLoggedIn,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login()),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EnsureLoggedInContainer);
