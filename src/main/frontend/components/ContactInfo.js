var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardHeader, CardText} from 'material-ui/Card';
import AlarmIcon from 'react-material-icons/icons/action/alarm';


class ContactInfoCard extends React.Component {

    constructor(props) {
        super(props);
    }

    // changePhone = () => {
    //     console.log("hei")
    // };

    render () {

        let phoneNumer = "12345678";

        let eMail = "ola.normann@gmail.com";


        return (
           <Card className="Card">
               <div className="Card2">
               <Row >
                   <Col md={1}><AlarmIcon/></Col>
                   <Col md={9}><h3>Registert kontaktinformasjon</h3></Col>
               </Row>
                <CardText className="CardText">
                    <div className="CardInfoText">Informasjonen nedenfor lagres i et felles kontaktregister som stat og kommune skal bruke når de kontakter deg.</div>
                    <div className="phone">Mobilnummer: {phoneNumer}</div>
                    <div className="email">E-post: {eMail}</div>
                    <button type="button" className="btn btn-primary" onClick={this.props.changePhone}>edit</button>
                </CardText>
               </div>
            </Card>

        )
    }
}

module.exports = ContactInfoCard;