import React from 'react'
import {AppBar, Tabs, Tab} from 'material-ui'

class NavigationBar extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {

        return (
            <AppBar title="Digital Borger">
                <Tabs>
                    <Tab label="Profil" />
                    <Tab label="Logg ut" href="/logout" />
                </Tabs>
            </AppBar>
        );
    }
}

module.exports = NavigationBar;