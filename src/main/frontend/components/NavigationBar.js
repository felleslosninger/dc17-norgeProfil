import React from 'react'
import {AppBar, Tabs, Tab} from 'material-ui'
import {MenuItem} from 'material-ui'
import Drawer from 'material-ui/Drawer';

class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});


    render() {

        return (
            <div>
                <AppBar title="Digital Borger" onLeftIconButtonTouchTap={this.handleToggle}>
                    <Tabs>
                        <Tab label="Profil" />
                        <Tab label="Logg ut" href="/logout" />
                    </Tabs>
                </AppBar>
                <Drawer containerStyle={{height: 'calc(100% - 64px)', top: 64}} open={this.state.open}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>


        );
    }
}

module.exports = NavigationBar;