
var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardHeader, CardText} from 'material-ui/Card';


class EID extends React.Component {

    render () {


        return (
            <Card className="Card">
                <Row>
                    <div className="HeaderRow">
                        <div className="Headline">
                            <Col md={12}><h4><img src="icons/face.svg"/> eID</h4></Col>
                        </div>
                    </div>
                </Row>
                <CardText className="CardText">
                    minID
                    bankID
                </CardText>
            </Card>
        )
    }
}


module.exports = EID;
