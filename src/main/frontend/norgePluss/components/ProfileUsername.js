import React, {Component} from 'react';
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import AccountIcon from 'material-ui/svg-icons/action/account-circle'
import Username from "./Username";


class ProfileUsername extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <AccountIcon/> <Username/>
            </div>
        );
    }
}


export default ProfileUsername;