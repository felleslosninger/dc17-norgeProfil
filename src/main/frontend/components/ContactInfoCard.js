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

        let textfieldEmail = $('email').val();
        let textfieldPhone = $('phone').val();

        this.state = {
            open: false,
            textfieldEmail: textfieldEmail,
            textfieldPhone: textfieldPhone,
            email: '',
            phone: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    };

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({
            open: false
        });
    };

    handleChange({target}) {
        this.setState({
            [target.name]: target.value
        });

    }


    handleSave() {
        this.setState({
            open: false,
            email:  $('email').val(),
            phone:  $('phone').val(),
        });
        this.props.savedEmail = this.state.email;
        this.props.savedPhone = this.state.phone;
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
                onTouchTap={this.handleSave}
            />,
        ];


        return (
            <Card className="Card">
                <Row className="CardHeader">
                    <Col md={1} className="Icon">{<ActionInfo />}</Col>
                    <Col md={10}><h4>Kontaktinformasjon</h4></Col>
                </Row>
                <hr className="Headline"/>
                <CardText className="CardText">
                    <div className="CardInfoText">
                        ------
                    </div>
                    <List>
                        <ListItem disabled={true} primaryText="E-mail: " secondaryText={this.state.email} leftIcon={<EmailIcon />}/>
                        <ListItem disabled={true} primaryText="Mobilnummer: " secondaryText={this.state.phone}
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
                                hintText= "E-post"
                                name="textfieldEmail"
                                ref="email"
                                value={ this.state.textfieldEmail }
                                onChange={ this.handleChange }
                            />
                        </Col>
                        <Col>
                            <TextField
                                floatingLabelText="Mobilnummer"
                                hintText="Mobilnummer"
                                name="textfieldPhone"
                                ref="phone"
                                value={ this.state.textfieldPhone }
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
    handleSave: React.PropTypes.func.isRequired,
    savedEmail: React.PropTypes.string.isRequired,
    savedPhone: React.PropTypes.string.isRequired
};

export default ContactInfoCard;