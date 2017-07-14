var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Popover = require('react-bootstrap/lib/Popover');
var OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger');

import {List, ListItem} from 'material-ui/List';
import LinearProgress from 'material-ui/LinearProgress';
import Done from 'material-ui/svg-icons/action/done'
import Info from 'material-ui/svg-icons/action/info-outline'
import Remove from 'material-ui/svg-icons/content/remove'
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';

class Gamification extends React.Component {


    constructor(props) {
        super(props);
    };

    render() {
        var postBox = () => {
            let totalTest = 1;
            let test = 0;

            if (this.props.hasPostbox) {
                test++;
            }

            return ( Math.round((test / totalTest) * 100));
        };

        var phone = () => {
            let totalTest = 1;
            let test = 0;
            if (this.props.hasPhone) {
                test++;
            }
            return ( Math.round((test / totalTest) * 100));
        };

        var email = () => {
            let totalTest = 1;
            let test = 0;

            if (this.props.hasEmail) {
                test++;
            }
            return ( Math.round((test / totalTest) * 100));
        };

        var eid = () => {
            let totalTest = 1;
            let test = 0;

            if (this.props.hasEid) {
                test++;
            }
            return ( Math.round((test / totalTest) * 100));
        };

        var calculatePercent = () => {
            let totalTest = 4;
            let test = 0;

            if (this.props.hasPostbox) {
                test++;
            }

            if (this.props.hasPhone) {
                test++;
            }

            if (this.props.hasEmail) {
                test++;
            }

            if (this.props.hasEid) {
                test++;
            }
            return ( Math.round((test / totalTest) * 100));
        };

        let Postbox = postBox(this);
        let Phone = phone(this);
        let Email = email(this);
        let Eid = eid(this);
        let percent = calculatePercent(this);

        const styles = {
            marginTop: '1.5%',
            width: '100%',
            height: '10px'
        };

        const bar = [
            <LinearProgress className="ProfileProgress" style={styles} mode="determinate" value={Postbox}/>,
            <LinearProgress className="ProfileProgress" style={styles} mode="determinate" value={Phone}/>,
            <LinearProgress className="ProfileProgress" style={styles} mode="determinate" value={Email}/>,
            <LinearProgress className="ProfileProgress" style={styles} mode="determinate" value={Eid}/>
        ];
        const viewBar = [];
        var checkBar = () => {
            for (var i = 0; i < bar.length; i++) {
                if (bar[i].props.value === 100) {
                    viewBar.push(<Col key={i + 1} sm={3}>{bar[i]}</Col>);
                }
            }

            for (var i = 0; i < bar.length; i++) {
                if (bar[i].props.value === 0) {
                    viewBar.push(<Col key={i + 1} sm={3}>{bar[i]}</Col>);
                }
            }
        };

        const viewList = [];
        const list = [
            <ListItem
                primaryText="E-mail"
                leftIcon={this.props.hasEmail ? <Done /> : <Remove /> }
                disabled={true}
                value={this.props.hasEmail}
            />,
            <ListItem
                primaryText="Mobilnummer"
                leftIcon={this.props.hasPhone ? <Done /> : <Remove /> }
                disabled={true}
                value={this.props.hasPhone}
            />,
            <ListItem
                primaryText="Digital postkasse"
                leftIcon={this.props.hasPostbox ? <Done /> : <Remove /> }
                disabled={true}
                value={this.props.hasPostbox}
            />,
            <ListItem
                primaryText="eID"
                leftIcon={this.props.hasEid ? <Done /> : <Remove /> }
                disabled={true}
                value={this.props.hasEid}
            />
        ];
        var checkList = () => {
            for (var i = 0; i < list.length; i++) {
                if (list[i].props.value === true) {
                    viewList.push(<Row key={i + 1}>{list[i]}</Row>);
                }
            }

            for (var i = 0; i < list.length; i++) {
                if (list[i].props.value === false) {
                    viewList.push(<Row key={i + 1}>{list[i]}</Row>);
                }
            }
        };

        const popover = (
            <Popover id="popover-positioned-bottom">
                <List>
                    <Subheader>Styrke brukerprofil: <strong>{percent} %</strong> </Subheader>
                    {viewList}
                    {checkList()}
                </List>
            </Popover>
        );

        const overlay = (
            <OverlayTrigger trigger={['hover', 'click']} placement="bottom" overlay={popover}>
                <IconButton>
                    <Info/>
                </IconButton>
            </OverlayTrigger>);


        return (
            <div className="Gamification">
                <hr/>
                <h3 className="pageheader">Styrke brukerprofil {overlay}</h3>
                {viewBar}
                {checkBar()}
            </div>


        );


    }
}


Gamification.propTypes = {
    hasEmail: React.PropTypes.bool.isRequired,
    hasPhone: React.PropTypes.bool.isRequired,
    hasEid: React.PropTypes.bool.isRequired,
    hasPostbox: React.PropTypes.bool.isRequired,
};


export default Gamification;
