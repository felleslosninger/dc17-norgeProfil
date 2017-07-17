import React ,{Component} from 'react';
import NavigationBar from '../components/NavigationBar.js';
import {connect} from "react-redux";

class NavBarContainer extends Component {

    render(){
        return(
            <NavigationBar isLoggedIn = {this.props.isLoggedIn}/>
        );
    }
}

const mapStateToProps = state => {
    let {app:{isLoggedIn}} = state;

    return{
        isLoggedIn: isLoggedIn,
    }
}

export default connect(mapStateToProps)(NavBarContainer);