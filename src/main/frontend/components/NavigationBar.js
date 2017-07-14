import React from 'react'
import {AppBar, FlatButton} from 'material-ui'
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
        let title = <div><img src="img/norgeno.png" height='80' width='auto'/> Digital Borger</div>;

        if (this.state.status) {
            return (
                <div>
                    <AppBar className={'Nav'} title={title} onLeftIconButtonTouchTap={this.handleToggle} iconElementRight={<FlatButton label="Logg ut" href="/logout"/>}/>
                    <Drawer containerStyle={{height: 'calc(100% - 64px)', top: 64}} open={this.state.open}>
                        <MenuItem href="/#/health">Helsetjenester</MenuItem>
                        {/*<MenuItem>Menu Item 2</MenuItem>*/}
                    </Drawer>
                </div>
            );
        } else {
            return (
                <div>
                    <AppBar className={'Nav'} title={title} onLeftIconButtonTouchTap={this.handleToggle} iconElementRight={<FlatButton label="Logg inn" href="/login/idporten"/>}/>
                    <Drawer containerStyle={{height: 'calc(100% - 64px)', top: 64}} open={this.state.open}>
                        <MenuItem className={'NavTab'}>Helsetjenester</MenuItem>
                        {/*<MenuItem>Menu Item 2</MenuItem>*/}
                    </Drawer>
                </div>
            );
        }
    }
}

module.exports = NavigationBar;
