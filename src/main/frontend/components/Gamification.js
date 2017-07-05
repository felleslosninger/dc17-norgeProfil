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
            hasPostbox: false,
            hasMobileNum: true,
            hasEmail: true
        };

    };

    render() {
        var calculatePercent = function(gamification){
            let totalTest = 3;
            let test = 0;

            if(gamification.state.hasPostbox){
                test++;
            }
            if(gamification.state.hasMobileNum){
                test++;
            }

            if(gamification.state.hasEmail){
                test++;
            }
            return ( Math.round((test / totalTest) * 100));
        }

        let percent = calculatePercent(this);

        const popover = (
            <Popover id="popover-positioned-bottom">
                <List>
                    <Subheader>Styrke brukerprofil: <strong>{percent} %</strong> </Subheader>
                    <ListItem
                        primaryText="E-mail"
                        leftIcon={this.state.hasEmail ? <Done /> : <Remove /> }
                        disabled={true}
                    ></ListItem>
                    <ListItem
                        primaryText="Mobilnummer"
                        leftIcon={this.state.hasMobileNum ? <Done /> : <Remove /> }
                        disabled={true}
                    />
                    <Divider/>
                    <ListItem
                        primaryText="Digital postkasse"
                        leftIcon={this.state.hasPostbox ? <Done /> : <Remove /> }
                        disabled={true}
                    />
                </List>
            </Popover>
        );

        const styles = {
            marginTop: '1.5%',
            width: '106%'
        };


        const AlignIcon = {
            left: '95px'
        };


        return (
            <Row className="Gamification">
                <Col sm={10}><LinearProgress className="ProfileProgress" style={styles} mode="determinate" value={percent}/></Col>
                <Col sm={2}>
                    <OverlayTrigger trigger={['hover', 'click']} placement="bottom" overlay={popover}>
                        <IconButton style={AlignIcon}>
                            <Info/>
                        </IconButton>
                    </OverlayTrigger>
                </Col>


            </Row>
        );
    }
}


module.exports = Gamification;