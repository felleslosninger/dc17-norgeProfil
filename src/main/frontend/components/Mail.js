var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardHeader, CardText} from 'material-ui/Card';




class Mail extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
            <Card className="Card">
                <Row>
                    <div className="HeaderRow">
                        <div className="Headline">
                            <Col md={12}><h4><img src="icons/face.svg"/> Din digitale postkasse</h4></Col>
                        </div>
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
