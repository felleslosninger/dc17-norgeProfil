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
            hasPostbox: true,
            hasMobileNum: false,
            hasEmail: true,
            hasReservation: true
        };

    };

    render() {
        var postBox = function(gamification){
            let totalTest = 1;
            let test = 0;

            if(gamification.state.hasPostbox){
                test++;
            }

            return ( Math.round((test / totalTest) * 100));
        };

        var mobileNum = function(gamification){
            let totalTest = 1;
            let test = 0;

            if(gamification.state.hasMobileNum){
                test++;
            }
            return ( Math.round((test / totalTest) * 100));
        };

        var email = function(gamification){
            let totalTest = 1;
            let test = 0;

            if(gamification.state.hasEmail){
                test++;
            }
            return ( Math.round((test / totalTest) * 100));
        };

        var reservation = function(gamification){
            let totalTest = 1;
            let test = 0;

            if(gamification.state.hasReservation){
                test++;
            }
            return ( Math.round((test / totalTest) * 100));
        };

        var calculatePercent = function(gamification){
            let totalTest = 4;
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

            if(gamification.state.hasPostbox){
                test++;
            }
            return ( Math.round((test / totalTest) * 100));
        };

        let Postbox = postBox(this);
        let Mobilenum = mobileNum(this);
        let Email = email(this);
        let Reservation = reservation(this);
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
                    <ListItem
                        primaryText="Reservasjon"
                        leftIcon={this.state.hasReservation ? <Done /> : <Remove /> }
                        disabled={true}
                    />
                </List>
            </Popover>
        );

        const styles = {
            marginTop: '1.5%',
            width: '100%',
            height: '10px'
        };


        const overlay = (
            <OverlayTrigger trigger={['hover', 'click']} placement="bottom" overlay={popover}>
                <IconButton>
                    <Info/>
                </IconButton>
            </OverlayTrigger>);

        const bar = [
            <LinearProgress className="ProfileProgress" style={styles} mode="determinate" value={Postbox}/>,
            <LinearProgress className="ProfileProgress" style={styles} mode="determinate" value={Mobilenum}/>,
            <LinearProgress className="ProfileProgress" style={styles} mode="determinate" value={Email}/>,
            <LinearProgress className="ProfileProgress" style={styles} mode="determinate" value={Reservation}/>
        ];

        const viewBar = [];

        var checkBar = function () {
            for(var i = 0; i < bar.length; i++) {
                if(bar[i].props.value == 100) {
                    viewBar.push(<Col key={i+1} md={3}>{bar[i]}</Col>);
                }
            }

            for(var i = 0; i < bar.length; i++) {
                if(bar[i].props.value == 0) {
                    viewBar.push(<Col key={i+1} md={3}>{bar[i]}</Col>);
                }
            }
        };



        return (
            <Row className="Gamification">
                <Col md={11}><div className="page-header"><h3>Din profilstyrke {overlay}</h3></div></Col>
                {viewBar}
                {checkBar()}
            </Row>


        );


    }
}


export default Gamification;
