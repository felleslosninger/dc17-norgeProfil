var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardHeader, CardText} from 'material-ui/Card';
import Email from 'material-ui/svg-icons/communication/email';


class Mail extends React.Component {

    render () {
        return (
            <Card className="Card">
                <Row>
                    <div className="HeaderRow">
                        <Row className="Headline">
                            <Col md={1} className="Icon">{<Email />}</Col>
                            <Col md={10}><h4>Digital postkasse</h4></Col>
                        </Row>
                    </div>
                </Row>
                <CardText className="CardText">
                    Du mottar idag post fra det offentlige til din digitale postkasse hos Digipost...
                </CardText>
            </Card>
        )
    }
}


module.exports = Mail;
