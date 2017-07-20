import React from 'react'
import {AppBar, FlatButton} from 'material-ui'
import {MenuItem} from 'material-ui'
import Drawer from 'material-ui/Drawer';


class NavigationBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            status: false,
            open: false
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    componentWillMount() {
    }


    render() {
        let title = <div><img src="img/norgeno.png" className="HeaderImg"/> Digital Borger </div>;

        if (this.props.isLoggedIn) {
            return (
                <div>
                    <AppBar className={'Nav'}
                            title={title}
                            onLeftIconButtonTouchTap={this.handleToggle}
                            iconElementRight={<FlatButton label="Logg ut" href="/logout"/>}/>
                    <Drawer containerStyle={{height: 'calc(100% - 64px)', top: 150}} open={this.state.open}>
                        <MenuItem href="/#/" onTouchTap={this.handleToggle}>Din profil</MenuItem>
                        <MenuItem href="/#/health" onTouchTap={this.handleToggle}>Helsetjenester</MenuItem>
                    </Drawer>
                </div>
            );
        } else {
            return (
                <div>
                    <AppBar className={'Nav'}
                            title={title}
                            onLeftIconButtonTouchTap={this.handleToggle}
                            /* iconElementRight={<FlatButton label="Logg inn" href="/login/idporten"/>}
                             enable this shit when you have find a better way to log in*/
                            showMenuIconButton={false}
                    />
                </div>
            );
        }
    }
}

module.exports = NavigationBar;