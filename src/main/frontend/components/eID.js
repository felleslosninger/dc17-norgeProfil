
var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Help from 'material-ui/svg-icons/action/help';
import CheckIcon from 'material-ui/svg-icons/action/check-circle';
import CancelIcon from 'material-ui/svg-icons/navigation/cancel';
import EidIcon from 'material-ui/svg-icons/action/extension';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

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

        const listStyle = {
            paddingTop: '0px'
        };

        const fontColorStyle = {
            color: 'black'
        };
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

                        <Row className="Headline">
                            <Col md={1} className="Icon">{<EidIcon />}</Col>
                            <Col md={10}><h4>eID</h4></Col>
                        </Row>
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
                                            For å registrere deg som MinID-brukar treng du: fødselsnummer eller D-nummer, mobiltelefonnummer eller e-postadresse, PIN-kodebrev.
                                            Skal du opprette ein digital postkasse, må du ha ein ID på høgare sikkerheitsnivå enn MinID.Meir om registrering og innlogging med MinID.
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
                <CardText style={listStyle}>
                    <div className="DivoverMeny">
                        <Menu style={listStyle} className="meny" desktop={true}>
                            <MenuItem style={fontColorStyle} primaryText="MinID" leftIcon={<CheckIcon/>} disabled={true}/>
                            <MenuItem style={fontColorStyle} primaryText="BankID på mobil" leftIcon={<CheckIcon/>} disabled={true}/>
                            <Divider />
                            <MenuItem style={fontColorStyle} primaryText="BankID" leftIcon={< CancelIcon/>} disabled={true}/>
                            <MenuItem style={fontColorStyle} primaryText="Buypass ID" leftIcon={<CancelIcon />} disabled={true}/>
                            <MenuItem style={fontColorStyle} primaryText="Commfides" leftIcon={<CancelIcon />} disabled={true}/>
                        </Menu>
                    </div>
                </CardText>
            </Card>
        );
    }
}


module.exports = EID;
