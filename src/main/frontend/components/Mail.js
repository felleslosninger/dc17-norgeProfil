var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');


import {Card, CardHeader, CardText} from 'material-ui/Card';
import Email from 'material-ui/svg-icons/communication/email';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import {List, ListItem} from 'material-ui/List';
import Help from 'material-ui/svg-icons/action/help-outline';
import Toggle from 'material-ui/Toggle';


class Mail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            postbox: '', //add init value either Digipost or E-boks
        };

        this.handleChange = this.handleChange.bind(this);
        this.saveInfo = this.saveInfo.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.setPostbox = this.setPostbox.bind(this);
        this.removePostbox = this.removePostbox.bind(this);
    };

    setPostbox(){
        this.setState({postbox: 'E-boks'});
    }

    removePostbox() {
        this.setState({postbox: ''});
    }

    handleChange() {
        if (this.state.postbox == 'E-boks') {
            this.setState({postbox: 'Digipost'});
        } else {
            this.setState({postbox: 'E-boks'});
        }
        this.setState({open: false});
    }

    saveInfo() {
        console.log("saved");
        console.log("Postbox: ", this.state.postbox);
        this.setState({open: false});
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
                label="Nei"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Ja"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleChange}
            />,
        ];

        const actions2 = [
            <FlatButton
                label="Lukk"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        let img = null;
        let nextPostbox = "";
        if (this.state.postbox == 'E-boks') {
            img = (<img src="img/eboks.png" className="CardPicture Medium" alt="logo til E-boks"/>)
            nextPostbox = "Digipost";
        } else {
            img = (<img src="img/digipost.png" className="CardPicture Medium" alt="logo til digipost"/>)
            nextPostbox = "E-boks";
        }

        var getcardForNewMailUser = function (mail) {
            return (
                <Card className="Card">
                    <Row className="CardHeader">
                        <Col sm={3} md={3} lg={2} className="Icon">{<Email />}</Col>
                        <Col sm={6} md={6} lg={7} ><h4>Digital postkasse</h4></Col>
                        <Col sm={3} md={3} lg={3}><Help onClick={mail.handleOpen} text="Informasjon"/> </Col>
                    </Row>
                    <Dialog
                        title="Spørsmål og svar"
                        actions={actions2} modal={false}
                        open={mail.state.open}
                        onRequestClose={mail.handleClose}
                    >
                        <List>
                            <ListItem
                                primaryText="Hva er en digital postkasse?"
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem key={1} disabled={true} className="Li Info">
                                        <p>
                                        En digital postkasse er ei sikker løsning for å få og oppbevare viktig post
                                        digitalt, slik som brev med vedtak, helseopplysningar eller annen sensitiv
                                        informasjon. Det offentlige kan ikke bruke vanlig e-post til å sende slik
                                        informasjon. Skal du kunne motta viktige brev fra det offentlige digitalt,
                                        må du ha digital postkasse.

                                        Du får ikke reklame i den digitale postkassen din. Men bedrifter som du har
                                        et kundeforhold til, som for eksempel banken eller forsikringsselskapet ditt,
                                        kan sende deg meldingar om ulike tilbud dersom du har akseptert dette.
                                        </p>
                                    </ListItem>
                                ]}
                            />
                            <ListItem
                                primaryText="Er digital postkasse det samme som E-post?"
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem key={1} disabled={true} className="Li Info">
                                        <p>
                                        Nei, en digital postkasse er sikrere enn e-post fordi både avsender og
                                        mottaker må bekrefte identiteten sin. Post som det offentlige sender til
                                        deg i den digitale postkassen din, blir sendt kryptert, som skjult tekst.
                                        For å åpne og lese posten i den digitale postkassen må du legitimere deg
                                        gjennom ID-porten. Det er bare du og de du har bevilget tilgang til, som kan
                                        lese posten din fra det offentlege.
                                        </p>
                                    </ListItem>
                                ]}
                            />
                            <ListItem
                                primaryText="Hvem kan opprette en digital postkasse?"
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem key={1} disabled={true} className="Li Info">
                                        <p>
                                            For å opprette en digital postkasse må du ha
                                            <ul>
                                                <li> norsk fødselsnummer eller D-nummer</li>
                                                <li> elektronisk ID fra BankID, BankID på mobil, Buypass eller
                                                    Commfides
                                                </li>
                                            </ul>
                                        </p>
                                    </ListItem>
                                ]}
                            />
                            <ListItem
                                primaryText="Kan jeg ha to digitale postkasser?"
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem key={1} disabled={true} className="Li Info">
                                       <p>
                                        Ja, men til post fra det offentlige må du velge en av postkassene, slik at
                                        stat og kommune vet hvor de skal sende posten din. Kontakt ID-porten sin
                                        brukerstøtte på grønt nummer 800 30 300 om du har spørsmål om dette (fra
                                        utlandet: +47 24 05 56 03).
                                       </p>
                                    </ListItem>
                                ]}
                            />
                            <ListItem
                                primaryText="Koster det noe å ha digital postkasse?"
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem key={1} disabled={true} className="Li Info">
                                        <p>
                                        Nei, digital postkasse er gratis å opprette og bruke for innbyggerene.
                                        Lastar du selv opp mange dokument eller bilde, må du betale for å få
                                        lagringsplass ut over 1GB.
                                        </p>
                                    </ListItem>
                                ]}
                            />
                        </List>
                    </Dialog>
                    <hr className="HLine"/>
                    <CardText className="Card" >
                        <div className="CardText">
                            <p>
                            Du har enda ikke valgt noen postkasse. Du må selv opprette din egen digitale postkasse
                            hos e-Boks eller Digipost for å motta og oppbevare post digitalt fra det offentlige.
                            </p>
                        <br/>
                        </div>
                        <FlatButton
                            icon={<img src="img/digipost.png" className="CardPicture Medium" alt="logo til digipost"/>}
                            primary={true}
                            label="Opprett Digipost"
                            href="https://www.digipost.no/app/registrering#/"
                        />
                        <br/>
                        <FlatButton
                            icon={<img src="img/eboks.png" className="CardPicture Medium" alt="logo til E-boks"/>}
                            primary={true}
                            label="Opprett E-boks"
                            href="https://www.e-boks.com/norge/nb/ny-bruker/"
                        />
                        <div className="ToggleBtn">
                            <Toggle
                                onToggle={mail.setPostbox}
                                defaultToggled={false}
                            />
                        </div>
                    </CardText>
                </Card> )
        };

        var getcardForExistingMailUser = function (mail, postbox) {
            return (
                <Card className="Card">
                    <Row className="CardHeader">
                        <Col md={1} className="Icon">{<Email />}</Col>
                        <Col md={10}><h4>Digital postkasse</h4></Col>
                    </Row>
                    <hr className="HLine"/>
                    <CardText>
                        <div className="CardInfoText">
                            <Row>
                                <Col md={4}> {img} </Col>
                                <Col md={8}> Du mottar i dag post fra det offentlige til din digitale postkasse hos
                                    <strong>  { postbox } </strong> </Col>
                            </Row>
                        </div>
                        <div className="EditBtn">
                            <FlatButton
                                label="Endre postkasse"
                                primary={true}
                                icon={<Edit />}
                                onTouchTap={mail.handleOpen}/>
                        </div>
                        <div className="ToggleBtn">
                            <Toggle
                                onToggle={mail.removePostbox}
                                defaultToggled={true}
                            />
                        </div>
                    </CardText>
                    <Dialog
                        title="Endre din digital postkasse"
                        actions={actions}
                        modal={false}
                        open={mail.state.open}
                        onRequestClose={mail.handleClose}
                    >
                        <p>
                            Ønsker du å endre din digitale postkasse til {nextPostbox}?
                        </p>
                    </Dialog>
                </Card>
            );
        };


        let postbox = this.state.postbox;
        if (postbox == 'Digipost' || postbox == 'E-boks') {
            return ( getcardForExistingMailUser(this, postbox) )
        } else {
            return ( getcardForNewMailUser(this) ) //if not user of digipost and E-boks
        }
    }
}


module.exports = Mail;
