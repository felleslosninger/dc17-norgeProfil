import React from 'react'
import {AppBar, Tabs, Tab} from 'material-ui'
import {MenuItem} from 'material-ui'
import Drawer from 'material-ui/Drawer';
import axios from "axios";


class NavigationBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          status: false, 
            open: false
        };
        this.isLoggedIn = this.isLoggedIn.bind(this);
    }

    handleToggle = () => this.setState({open: !this.state.open});

    componentWillMount() {
        this.isLoggedIn();
    }

    isLoggedIn = () => {
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
                <div>
                    <AppBar title="Digital Borger" onLeftIconButtonTouchTap={this.handleToggle}>
                        <Tabs>
                            <Tab label="Profil "/>
                            <Tab label="Logg ut" href="/logout"/>
                        </Tabs>
                    </AppBar>
                    <Drawer containerStyle={{height: 'calc(100% - 64px)', top: 64}} open={this.state.open}>
                        <MenuItem>Menu Item</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                    </Drawer>
                </div>
            );
        } else {
            return (
                <div>
                    <AppBar title="Digital Borger" onLeftIconButtonTouchTap={this.handleToggle}>
                        <Tabs>
                            <Tab label="Logg inn" href="/login/idporten"/>
                        </Tabs>
                    </AppBar>
                    <Drawer containerStyle={{height: 'calc(100% - 64px)', top: 64}} open={this.state.open}>
                        <MenuItem>Helsetjenester</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                    </Drawer>
                </div>
            );
        }
    }
}

module.exports = NavigationBar;
