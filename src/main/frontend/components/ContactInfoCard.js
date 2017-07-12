"use strict";
let React = require("react");
let Row = require('react-bootstrap/lib/Row');
let Col = require('react-bootstrap/lib/Col');


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
            textfieldEmail: this.props.savedEmail,
            textfieldPhone: this.props.savedPhone,
            textfieldEmailError: '',
            textfieldPhoneError: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePhone = this.validatePhone.bind(this);
    };

    componentWillReceiveProps(props) {
        this.setState({
            textfieldEmail: props.savedEmail,
            textfieldPhone: props.savedPhone,
        });
    }

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({
            open: false,
            textfieldEmail: this.props.savedEmail,
            textfieldPhone: this.props.savedPhone,
        });
    };

    handleChange({target}) {
        this.setState({
            [target.name]: target.value
        });

    }


    handleSave() {
        if(this.validateEmail() && this.validatePhone()){
            this.setState({
                open: false,
            });
            this.props.onSaveEmail(this.state.textfieldEmail);
            this.props.onSavePhone(this.state.textfieldPhone);
        }

    };

    validateEmail(){
        if(typeof this.state.textfieldEmail === "undefined"){
            return true;
        }
        if(this.state.textfieldEmail!=="" && !this.state.textfieldEmail.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            this.setState({
                textfieldEmailError:"Epostadressen du har tastet inn er ikke gyldig"
            });
            return false;
        }else{
            this.setState({
                textfieldEmailError:""
            });
            return true;
        }
    }

    validatePhone(){
        if(typeof this.state.textfieldPhone === "undefined"){
            return true;
        }
        if(!this.state.textfieldPhone.match(/(^(\+?\-? *[0-9]+)([,0-9 ]*)([0-9 ])*$)|(^ *$)/)){
            this.setState({
                textfieldPhoneError:"Mobilnummeret du har tastet inn er ikke gyldig"
            });
            return false;
        }else{
            this.setState({
                textfieldPhoneError:""
            });
            return true;
        }
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


        return (
            <Card className="Card">
                <Row className="CardHeader">
                    <Col xs={3} md={2} lg={2}  className="Icon">{<ActionInfo />}</Col>
                    <Col xs={8} md={10} lg={10}><h4>Kontaktinformasjon</h4></Col>
                </Row>
                <hr className="HLine"/>
                <CardText>
                    <p className="CardText">
                        Informasjonen nedenfor lagres i et felles kontaktregister som stat og kommune skal bruke
                            når de kontakter deg.
                    </p>
                    <List>
                        <ListItem disabled={true} primaryText="E-post: " secondaryText={ this.props.savedEmail } leftIcon={<EmailIcon />}/>
                        <ListItem disabled={true} primaryText="Mobilnummer: " secondaryText={ this.props.savedPhone }
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
                                floatingLabelText="E-post"
                                defaultValue= { this.state.textfieldEmail }
                                name="textfieldEmail"
                                ref="email"
                                errorText = {this.state.textfieldEmailError}
                                onChange={ this.handleChange }
                            />
                        </Col>
                        <Col>
                            <TextField
                                floatingLabelText="Mobilnummer"
                                defaultValue={ this.state.textfieldPhone }
                                name="textfieldPhone"
                                ref="phone"
                                errorText = {this.state.textfieldPhoneError}
                                onChange={ this.handleChange }
                            />
                        </Col>
                    </Row>
                </Dialog>
            </Card>

        )
    }
}

ContactInfoCard.propTypes = {
    onSaveEmail: React.PropTypes.func.isRequired,
    onSavePhone: React.PropTypes.func.isRequired,
    savedEmail: React.PropTypes.string,
    savedPhone: React.PropTypes.string
};

export default ContactInfoCard;