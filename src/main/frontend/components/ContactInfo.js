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
            email: 'olanordmann@gmail.com',
            phone: '12345678',
            textfieldEmail: 'olanordmann@gmail.com',
            textfieldPhone: '12345678',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
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


    handleSave() {
        this.setState({
            open: false,
            email: this.state.textfieldEmail,
            phone: this.state.textfieldPhone
        });

    };

    handleEnter(event) {
        if (event.key == 'Enter') {
            event.preventDefault();
            this.handleSave()
        }
        return false;
    }

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
                onTouchTap={this.handleSave}
            />,
        ];

        let phoneNumber = this.state.phone; // get from DB
        let eMail = this.state.email; // get from DB


        return (
            <Card className="Card">
                <Row className="CardHeader">
                    <Col md={3} lg={2}  className="Icon">{<ActionInfo />}</Col>
                    <Col md={6} lg={7}><h4>Kontaktinformasjon</h4></Col>
                </Row>
                <hr className="HLine"/>
                <CardText>
                    <div className="CardText">
                        Informasjonen nedenfor lagres i et felles kontaktregister som stat og kommune skal bruke
                            når de kontakter deg.
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
                                name="textfieldEmail"
                                defaultValue = {this.state.email}
                                value={ this.state.textfieldEmail }
                                onChange={ this.handleChange }
                                onKeyPress={this.handleEnter}
                            />
                        </Col>
                        <Col>
                            <TextField
                                hintText={phoneNumber}
                                floatingLabelText="Mobilnummer"
                                name="textfieldPhone"
                                defaultValue = {this.state.phone}
                                value={ this.state.textfieldPhone }
                                onChange={ this.handleChange }
                                onKeyPress={this.handleEnter }
                            />
                        </Col>
                    </Row>
                </Dialog>
            </Card>

        )
    }
}

module.exports = ContactInfoCard;