import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import {List, ListItem} from 'material-ui/List';
import {Card} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {grey400, darkBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Example from 'material-ui/svg-icons/action/account-circle'


class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        console.log(this.props.publicSectorActivity);
        const iconButtonElement = (
            <IconButton
                touch={true}
                tooltip="Mer"
                tooltipPosition="bottom-left"
            >
                <MoreVertIcon color={grey400} />
            </IconButton>
        );

        const rightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem>Rapporter</MenuItem>
            </IconMenu>
        );

        let yourActivityList = [];
        let img = '';
        if (this.props.ownActivity.length === 0) {
            yourActivityList.push (
                <div key={1}>
                    <h4>Ingen nylig aktivitet</h4>
                </div>
            )
        } else {
            for (let i = 0; i < this.props.ownActivity.length; i++) {
                if (this.props.ownActivity[i].type === 'MinID PIN') {
                    img = <img src="img/minid.png" width={52}/>;
                } else if (this.props.ownActivity[i].type === 'BankID') {
                    img = <img src="img/bankid.png" width={52}/>;
                } else if (this.props.ownActivity[i].type === 'BankID på mobil') {
                    img = <img src="img/bankid_pa_mobil.png" width={52}/>;
                } else if (this.props.ownActivity[i].type === 'Buypass ID') {
                    img = <img src="img/buypass.png" width={52}/>;
                } else if (this.props.ownActivity[i].type === 'Commfides') {
                    img = <img src="img/commfides.png" width={52}/>;
                }
                yourActivityList.push (
                    <div key={i}>
                        <ListItem
                            leftAvatar={img}
                            rightIconButton={rightIconMenu}
                            primaryText={this.props.ownActivity[i].type}
                            disabled={true}
                            secondaryText={
                                <p>
                                    <span className="Li Header">{this.props.ownActivity[i].issuer}</span><br />
                                    {this.props.ownActivity[i].dateTime}
                                </p>
                            }
                            secondaryTextLines={2}
                        />
                        <Divider/>
                    </div>
                )
            }
        }



        let publicSectorsActivityList = [];
        for (let i = 0; i < this.props.publicSectorActivity.length; i++) {
            publicSectorsActivityList.push (
                <div key={i}>
                    <ListItem
                        leftAvatar={<Example/>}
                        rightIconButton={rightIconMenu}
                        primaryText={this.props.publicSectorActivity[i].publicSector}
                        disabled={true}
                        secondaryText={
                            <p>
                                <span className="Li Header">{this.props.publicSectorActivity[i].info}</span><br />
                                {this.props.publicSectorActivity[i].time}
                            </p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider/>
                </div>
            )
        }

        return (
            <Card className="Feed">
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab label="Din aktivitet" value={0}/>
                    <Tab label="Offentlig sektors aktivitet" value={1}/>
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div className="Feed Slide">
                        <List>
                            {yourActivityList}
                        </List>
                    </div>
                    <div className="Feed Slide">
                        <List>
                            {publicSectorsActivityList}
                        </List>
                    </div>
                </SwipeableViews>
            </Card>
        );
    }
}

Feed.propTypes = {
    ownActivity: React.PropTypes.array.isRequired,
    publicSectorActivity: React.PropTypes.array.isRequired,
};

export default Feed;