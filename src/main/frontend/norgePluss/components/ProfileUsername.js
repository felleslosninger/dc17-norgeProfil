import React, {Component} from 'react';

import AccountIcon from 'material-ui/svg-icons/action/account-circle'

class ProfileUsername extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <AccountIcon/>
            </div>
        );
    }
}


export default ProfileUsername;