var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');


import {Card, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import PhoneIcon from 'material-ui/svg-icons/communication/contact-phone';
import EmailIcon from 'material-ui/svg-icons/communication/contact-mail';


class ContactInfoCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            email: '',
            phone: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.saveInfo = this.saveInfo.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    };

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };

    handleChange({target}) {
        this.setState({
            [target.name]: target.value
        });
    }


    saveInfo() {
        console.log("saved");
        console.log("Email: ", this.state.email, "Phone: ", this.state.phone);
        this.setState({modalIsOpen: false});
        //    Save email + phone to DB

    };


    render() {

        const actions = [
            <FlatButton
                label="Avbryt"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Lagre"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];

        let phoneNumber = this.state.phone; // get from DB
        let eMail = this.state.email; // get from DB


        return (
            <Card className="Card">
                <Row className="CardHeader">
                    <Col md={1} className="Icon">{<ActionInfo />}</Col>
                    <Col md={10}><h4>Kontaktinformasjon</h4></Col>
                </Row>
                <hr className="Headline"/>
                <CardText className="CardText">
                    <div className="CardInfoText">
                        <small>Informasjonen nedenfor lagres i et felles kontaktregister som stat og kommune skal bruke
                            når de kontakter deg.
                        </small>
                    </div>
                    <List>
                        <ListItem disabled={true} primaryText="E-mail: " secondaryText={eMail} leftIcon={<EmailIcon />}/>
                        <ListItem disabled={true} primaryText="Mobilnummer: " secondaryText={phoneNumber}
                                  leftIcon={<PhoneIcon/>}/>
                    </List>
                    <div className="EditBtn">
                        <FlatButton
                            label="Endre kontaktinformasjon"
                            primary={true}
                            icon={<Edit />}
                            onTouchTap={this.handleOpen}/>
                    </div>
                </CardText>
                <Dialog
                    title="Endre kontaktinformasjon"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    <Row className="EditInfo">
                        <Col>
                            <TextField
                                hintText={eMail}
                                floatingLabelText="E-post"
                                name="email"
                                value={ this.state.email }
                                onChange={ this.handleChange }
                            />
                        </Col>
                        <Col>
                            <TextField
                                hintText={phoneNumber}
                                floatingLabelText="Mobilnummer"
                                name="phone"
                                value={ this.state.phone }
                                onChange={ this.handleChange }
                            />
                        </Col>
                    </Row>
                </Dialog>
            </Card>

        )
    }
}

module.exports = ContactInfoCard;