var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardHeader, CardText} from 'material-ui/Card';
import NotificationsOff from 'material-ui/svg-icons/social/notifications-off';

//function

class Reservation extends React.Component {

    render () {
        return (
            <Card className="Card">
                <Row >
                    <div className="HeaderRow">
                        <Row className="Headline">
                            <Col md={1} className="Icon">{<NotificationsOff />}</Col>
                            <Col md={10}><h4>Reservasjon</h4></Col>
                        </Row>
                    </div>
                </Row>
                <CardText className="CardText">
                    Om du reserverer deg mot kommunikasjon på nett vil du motta viktige brev fra det offentlige kun på papir. Stat og kommune kan likevel sende deg annen informasjon på e-post, sms eller som brev digitalt.
                </CardText>
            </Card>
        )
    }
}


module.exports = Reservation;
