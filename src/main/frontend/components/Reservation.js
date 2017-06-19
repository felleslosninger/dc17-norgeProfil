var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardHeader, CardText} from 'material-ui/Card';
import AlarmIcon from 'react-material-icons/icons/action/alarm';


class Reservation extends React.Component {

    render () {
        const cardStyle = {
            height: '20em',
            width: '25em'
        };

        const cardHeaderStyle = {
            borderBottom: '1px solid lightgrey',
            marginRight: '1em',
            marginLeft: '1em'
        };

        return (
            <Card style={cardStyle} className="Card">
                <Row style={cardHeaderStyle}>
                    <Col md={1}><AlarmIcon/></Col>
                    <Col md={9}><h3>Reservasjon mot kommunaikasjon på nett.</h3></Col>
                </Row>
                <CardText className="CardText">
                    Om du reserverer deg mot kommunikasjon på nett vil du motta viktige brev fra det offentlige kun på papir. Stat og kommune kan likevel sende deg annen informasjon på e-post, sms eller som brev digitalt.
                </CardText>
            </Card>
        )
    }
}


module.exports = Reservation;
