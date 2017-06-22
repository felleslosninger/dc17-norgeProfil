
var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Glyphicon} from "react-bootstrap";

class EID extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    };

    handleOpen(){
        this.setState({open: true});
    };

    handleClose(){
        this.setState({open: false});
    };

    render () {
        const actions = [
            <FlatButton
                label="Lukk"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <Card className="Card">
                <Row>
                    <div className="HeaderRow">
                        <div className="Headline">
                            <Col md={4}><h4><img src="icons/face.svg"/> eID</h4></Col>
                            <Col md={4}><button type="button" className="btn btn-secondary" onClick={this.handleOpen}><Glyphicon glyph="glyphicon glyphicon-pencil"/></button></Col>
                        </div>
                        <Dialog
                            title="Elektronisk ID"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            <List>
                                <ListItem
                                    primaryText="MinID"
                                    initiallyOpen={false}
                                    nestedItems={[
                                        <ListItem key={1} disabled={true}>
                                            MinID er ein personleg, elektronisk ID som gir tilgang til offentlege tenester på mellomhøgt sikkerheitsnivå, nivå 3.
                                            Direktoratet for forvaltning og IKT (Difi) er ansvarleg for MinID. MinID kan bestillast frå det året du fyller 13.
                                            For å registrere deg som MinID-brukar treng du
                                        </ListItem>

                                    ]}
                                />
                                <ListItem
                                    primaryText="BankID"
                                    initiallyOpen={false}
                                    nestedItems={[
                                        <ListItem key={1} disabled={true}>
                                            BankID er ein personleg, elektronisk ID som gir tilgang til offentlege tenester på høgaste sikkerheitsnivå, nivå 4.
                                            BankID blir levert av banken din og kan bli gitt til personar som har fylt 15 år. Men dei enkelte bankane opererer med eigne aldersgrenser.
                                            For å bestille BankID må du kontakte banken din.Meir om aktivering og innlogging med BankID.

                                        </ListItem>
                                    ]}
                                />
                                <ListItem
                                    primaryText="BankID på mobil"
                                    initiallyOpen={false}
                                    nestedItems={[
                                        <ListItem key={1} disabled={true}>
                                            BankID på mobil er ein personleg, elektronisk ID som gir tilgang til offentlege tenester på høgaste sikkerheitsnivå, nivå 4.
                                            For å kunne ta i bruk BankID på mobil må du ha ein nettbankavtale med BankID og ein kodebrikke.
                                            Du kan berre aktivere BankID på mobil frå banken som gav deg BankID.For å aktivere BankID på mobil må du
                                            logge inn i nettbanken din.Meir om aktivering og innlogging med BankID på mobil


                                        </ListItem>
                                    ]}
                                />
                                <ListItem
                                    primaryText="Buypass ID"
                                    initiallyOpen={false}
                                    nestedItems={[
                                        <ListItem key={1} disabled={true}>
                                            Buypass ID er ein personleg, elektronisk ID som gir tilgang til offentlege tenester på høgaste sikkerheitsnivå, nivå 4.
                                            Han blir utskriven av Buypass AS og blir levert som Buypass ID på smartkort og Buypass ID i mobil.
                                            Alle som har smartkort frå Buypass, kan ta i bruk Buypass ID i mobil.  Buypass ID opererer ikkje med aldersgrense,
                                            men krev legitimering og personleg underskrift ved utskriving.Meir om bestilling og innlogging med Buypass ID.


                                        </ListItem>
                                    ]}
                                />
                                <ListItem
                                    primaryText="Commfides"
                                    initiallyOpen={false}
                                    nestedItems={[
                                        <ListItem key={1} disabled={true}>
                                            Commfides er ein personleg, elektronisk ID som gir tilgang til offentlege tenester på høgaste sikkerheitsnivå, nivå 4.
                                            Commfides blir levert av Commfides Norge AS som elektronisk ID på ein sikker USB-pinne. Commfides opererer ikkje med aldersgrense,
                                            men krev legitimering og personleg underskrift ved utskriving. For å bestille Commfides e-ID må du kontakte Commfides.
                                            Meir om bestilling og innlogging med Commfides.

                                        </ListItem>
                                    ]}
                                />
                            </List>
                        </Dialog>
                    </div>
                </Row>
                <CardText className="CardText">
                    <div>
                        Hei
                    </div>
                </CardText>

            </Card>
        );
    }
}


module.exports = EID;
