
var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardHeader, CardText} from 'material-ui/Card';
import EidIcon from 'material-ui/svg-icons/action/extension';


class EID extends React.Component {

    render () {


        return (
            <Card className="Card">
                <Row>
                    <div className="HeaderRow">
                        <Row className="Headline">
                            <Col md={1} className="Icon">{<EidIcon />}</Col>
                            <Col md={10}><h4>eID</h4></Col>
                        </Row>
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
