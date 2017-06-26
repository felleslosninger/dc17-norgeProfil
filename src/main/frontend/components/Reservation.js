var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardText} from 'material-ui/Card';
import NotificationsOff from 'material-ui/svg-icons/social/notifications-off';
import Help from 'material-ui/svg-icons/action/help';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Reservation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    };

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };

    render() {

        const actions = [
            <FlatButton
                label="Lukk"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <Card className="Card">
                <Row className="CardHeader">
                    <Col md={1} className="Icon">{<NotificationsOff />}</Col>
                    <Col md={10}><h4>Reservasjon</h4></Col>
                    <Col mdOffset={10}><Help onClick={this.handleOpen}/></Col>
                </Row>
                <Dialog
                    title="Brev fra stat og kommune"
                    actions={actions} modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    <div>
                        Reservasjon mot kommunikasjon på nett innebærer at du vil motta vedtak og
                        andre viktige brev fra det offentlige på papir.
                        <br/><br/>
                        Har du registrert kontaktinformasjon, kan du fremdeles få servicemeldinger og
                        informasjon fra det offentlige, for eksempel et varsel om midlertidig stenging av
                        vann på SMS eller informasjon på e-post eller i den digitale postkassen.
                        <br/><br/>
                        Du kan logge inn på offentlige tjenester via ID-porten selv om du er reservert.
                        <br/><br/>
                        Reservasjonen din kan du enkelt oppheve ved å trykke Opphev reservasjon.
                    </div>
                </Dialog>
                <hr className="Headline"/>
                <CardText className="CardText">
                    Om du reserverer deg mot kommunikasjon på nett vil du motta viktige brev fra det offentlige kun på
                    papir.
                    Stat og kommune kan likevel sende deg annen informasjon på e-post, sms eller som brev digitalt.<a
                    href="http://eid.difi.no/nb/reserver-deg-mot-kommunikasjon-pa-nett"> Les mer</a>
                </CardText>
            </Card>)
    }
}


module.exports = Reservation;
