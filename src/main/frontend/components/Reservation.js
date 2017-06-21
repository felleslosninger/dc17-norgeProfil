var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardHeader, CardText} from 'material-ui/Card';
import AlarmIcon from 'react-material-icons/icons/action/alarm';

//function

class Reservation extends React.Component {

    render () {
        return (
            <Card className="Card">
                <Row >
                    <div className="HeaderRow">
                        <div className="Headline">
                            <Col md={12}><h4><img src="icons/face.svg"/> Reservasjon mot kommunikasjon på nett</h4></Col>
                        </div>
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
