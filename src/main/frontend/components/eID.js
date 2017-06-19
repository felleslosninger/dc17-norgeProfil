
var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardHeader, CardText} from 'material-ui/Card';
import AlarmIcon from 'react-material-icons/icons/action/alarm';


class EID extends React.Component {

    render () {
        const cardStyle = {
            height: '20em',
            width: '25em'
        };

        const rowCardHeaderStyle = {
            borderBottom: '1px solid lightgrey',
            paddingTop: '15px',
            paddingBottom: '15px',
            marginRight: '1em',
            marginLeft: '1em'
        };

        const cardHeaderStyle = {
            padding: '0px' ,
            marginRight: '1em',
            marginLeft: '1em'
        };

        const colIconStyle = {
            marginLeft: '-15px'
        };

        return (
            <Card style={cardStyle} className="Card">
                <Row style={rowCardHeaderStyle}>
                    <Col style={colIconStyle} md={1}><AlarmIcon/></Col>
                    <Col md={4}><CardHeader style={cardHeaderStyle}
                        title="eID"
                        subtitle="Subtitle"
                    /></Col>
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
