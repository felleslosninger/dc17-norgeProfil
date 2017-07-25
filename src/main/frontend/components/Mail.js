var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');


import {Card, CardText} from 'material-ui/Card';
import Email from 'material-ui/svg-icons/communication/email';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import {List, ListItem} from 'material-ui/List';
import Help from 'material-ui/svg-icons/action/help-outline';


class Mail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleDigipost = this.handleDigipost.bind(this);
        this.handleEboks = this.handleEboks.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    };

    handleChange() {
        this.props.onSetPostbox('');
        this.setState({open: false});
    }

    handleDigipost() {
        this.props.onSetPostbox('Digipost')
    }

    handleEboks() {
        this.props.onSetPostbox('e-Boks')
    }

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
        let postbox = this.props.postbox;

        if (postbox === 'e-Boks') {
            img = (<img src="img/eboks.png" width={100} height={'auto'} alt="logo til e-Boks"/>)
        } else {
            img = (<img src="img/digipost.png" width={100} height={'auto'} alt="logo til digipost"/>)
        }

        let mailCard = '';

        if (postbox === '') {
            mailCard = (
                <Card className="Card" containerStyle={{backgroundColor: '#f4f8ec'}}>
                    <Row className="CardHeader">
                        <Col sm={3} md={3} lg={2} className="Icon">{<Email />}</Col>
                        <Col sm={7} md={6} lg={8}><h4>Digital postkasse</h4></Col>
                        <Help onClick={this.handleOpen} className="InfoBtn"/>
                    </Row>
                    <Dialog
                        title="Spørsmål og svar"
                        actions={actions2} modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        <List>
                            <ListItem
                                primaryText="Hva er en digital postkasse?"
                                initiallyOpen={false}
                                primaryTogglesNestedList={true}
                                nestedItems={[
                                    <ListItem key={1} disabled={true} className="Li Info">
                                        <p className="CustomP">
                                            En digital postkasse er ei sikker løsning for å få og oppbevare viktig post
                                            digitalt, slik som brev med vedtak, helseopplysningar eller annen sensitiv
                                            informasjon. Det offentlige kan ikke bruke vanlig e-post til å sende slik
                                            informasjon. Skal du kunne motta viktige brev fra det offentlige digitalt,
                                            må du ha digital postkasse.

                                            Du får ikke reklame i den digitale postkassen din. Men bedrifter som du har
                                            et kundeforhold til, som for eksempel banken eller forsikringsselskapet
                                            ditt,
                                            kan sende deg meldingar om ulike tilbud dersom du har akseptert dette.
                                        </p>
                                    </ListItem>
                                ]}
                            />
                            <ListItem
                                primaryText="Er digital postkasse det samme som E-post?"
                                initiallyOpen={false}
                                primaryTogglesNestedList={true}
                                nestedItems={[
                                    <ListItem key={1} disabled={true} className="Li Info">
                                        <p className="CustomP">
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
                                primaryTogglesNestedList={true}
                                nestedItems={[
                                    <ListItem key={1} disabled={true} className="Li Info">
                                        <p className="CustomP">
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
                                primaryTogglesNestedList={true}
                                nestedItems={[
                                    <ListItem key={1} disabled={true} className="Li Info">
                                        <p className="CustomP">
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
                                primaryTogglesNestedList={true}
                                nestedItems={[
                                    <ListItem key={1} disabled={true} className="Li Info">
                                        <p className="CustomP">
                                            Nei, digital postkasse er gratis å opprette og bruke for innbyggerene.
                                            Lastar du selv opp mange dokument eller bilde, må du betale for å få
                                            lagringsplass ut over 1GB.
                                        </p>
                                    </ListItem>
                                ]}
                            />
                        </List>
                    </Dialog>
                    <CardText className="CardText"  style={{height: '19.5em'}}>
                        <p>
                            Du har enda ikke valgt noen postkasse. Du må selv opprette din egen digitale postkasse
                            hos e-Boks eller Digipost for å motta og oppbevare post digitalt fra det offentlige.
                        </p>
                        <FlatButton
                            icon={<img src="img/digipost.png" className="CardPicture Medium" alt="logo til digipost"/>}
                            primary={true}
                            label="Opprett Digipost"
                            onTouchTap={this.handleDigipost}
                        />
                        <br/>
                        <FlatButton
                            icon={<img src="img/eboks.png" className="CardPicture Medium" alt="logo til E-boks"/>}
                            primary={true}
                            label="Opprett e-Boks"
                            onTouchTap={this.handleEboks}
                        />
                    </CardText>
                </Card>
            )
        } else {
            mailCard = (
                <Card className="Card" containerStyle={{backgroundColor: '#f4f8ec'}}>
                    <Row className="CardHeader">
                        <Col sm={3} md={3} lg={2} className="Icon">{<Email />}</Col>
                        <Col  sm={7} md={6} lg={8}><h4>Digital postkasse</h4></Col>

                    </Row>
                    <CardText className="CardText"  style={{height: '19.5em'}}>
                        <div className="CardInfoText">
                            <Row>
                                <Col sm={4}> {img} </Col>
                                <Col sm={8}><p> Du mottar i dag post fra det offentlige til din digitale postkasse hos
                                    <strong>  { postbox }  </strong></p></Col>
                            </Row>
                        </div>
                        <div className="EditBtn">
                            <FlatButton
                                label="Endre postkasse"
                                primary={true}
                                icon={<Edit />}
                                onTouchTap={this.handleOpen}/>
                        </div>
                        <Dialog
                            title="Endre din digital postkasse"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            <div>
                                Ønsker du å endre din digitale postkasse?
                            </div>
                        </Dialog>
                    </CardText>
                </Card>
            )
        }


        return (
            <div>{mailCard}</div>
        )

    }
}

Mail.propTypes = {
    onSetPostbox: React.PropTypes.func.isRequired,
    postbox: React.PropTypes.string,

};


export default Mail;