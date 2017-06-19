var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardHeader, CardText} from 'material-ui/Card';
import AlarmIcon from 'react-material-icons/icons/action/alarm';


class ContactInfoCard extends React.Component {

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
                   <Col md={9}><h3>Registert kontaktinformasjon</h3></Col>
               </Row>
                <CardText className="CardText">
                    Informasjonen nedenfor lagres i et felles kontaktregister som stat og kommune skal bruke når de kontakter deg.
                </CardText>
            </Card>
        )
    }
}

module.exports = ContactInfoCard;