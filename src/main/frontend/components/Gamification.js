var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Popover = require('react-bootstrap/lib/Popover');
var OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger');

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import LinearProgress from 'material-ui/LinearProgress';
import Done from 'material-ui/svg-icons/action/done'
import Info from 'material-ui/svg-icons/action/info-outline'
import Remove from 'material-ui/svg-icons/content/remove'
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';

class Gamification extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            percent: 84,
        };

    };


    render() {

        let percent = this.state.percent;

        const popover = (
            <Popover id="popover-positioned-bottom">
                <List>
                    <Subheader>Styrke brukerprofil: <strong>{percent} %</strong> </Subheader>
                    <ListItem
                        primaryText="E-mail"
                        leftIcon={<Done />}
                        disabled={true}
                    />
                    <ListItem
                        primaryText="Mobilnummer"
                        leftIcon={<Done />}
                        disabled={true}
                    />
                    <Divider/>
                    <ListItem
                        primaryText="Digital postkasse"
                        leftIcon={<Remove />}
                        disabled={true}
                    />
                </List>
            </Popover>
        );

        const styles = {
            marginTop: '1.5%'
        }


        return (
            <Row className="Gamification">
                <Col md={11}><LinearProgress className="ProfileProgress" style={styles} mode="determinate" value={this.state.percent}/></Col>
                <Col md={1}>
                    <OverlayTrigger trigger={['hover', 'click']} placement="bottom" overlay={popover}>
                        <IconButton>
                            <Info/>
                        </IconButton>
                    </OverlayTrigger>
                </Col>


            </Row>
        );
    }
}


module.exports = Gamification;