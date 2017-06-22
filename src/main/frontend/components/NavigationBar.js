import React from 'react'
import {AppBar, Tabs, Tab} from 'material-ui'

class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 3,
        };
    }

    handleChange (event, index, value) {
        this.setState({value});
    }

    render() {

        let username = "Fornavn Etternavn";

        return (
            <AppBar title="Digtal Borger">
                <Tabs>
                    <Tab label="Profil" />
                </Tabs>
            </AppBar>
        );
    }
}

module.exports = NavigationBar;