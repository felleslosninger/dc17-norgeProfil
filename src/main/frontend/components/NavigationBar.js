import React from 'react'
import {AppBar, Tabs, Tab} from 'material-ui'
import axios from "axios";

class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          status: false,
        };
        this.isLoggedIn = this.isLoggedIn.bind(this);
    }


    componentWillMount() {
        this.isLoggedIn();
    }

    isLoggedIn = () => {
        let stat = false;
        axios.get('/user')
            .then((response) => {
                if (response.data == "") {
                    this.setState({
                        status: false
                    });
                } else {
                    if (response.data.authenticated == true) {
                        this.setState({
                            status: true
                        });
                    }
                    else {
                        this.setState({
                            status: false
                        });
                    }
                }
            });
    };

    render() {

        if (this.state.status) {
            return (
                <AppBar title="Digital Borger">
                    <Tabs>
                        <Tab label="Profil "/>
                        <Tab label="Logg ut" href="/logout"/>
                    </Tabs>
                </AppBar>
            );
        } else {
            return (
                <AppBar title="Digital Borger">
                    <Tabs>
                        <Tab label="Logg inn" href="/login/idporten"/>
                    </Tabs>
                </AppBar>
            );
        }
    }
}

module.exports = NavigationBar;