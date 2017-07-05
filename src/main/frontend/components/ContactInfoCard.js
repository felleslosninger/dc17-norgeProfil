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
        this.setState({
            open: false,
        });

        this.props.onSaveEmail(this.state.textfieldEmail);
        this.props.onSavePhone(this.state.textfieldPhone);
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
                        Informasjonen nedenfor lagres i et felles kontaktregister som stat og kommune skal bruke
                        når de kontakter deg.
                    </div>
                    <List>
                        <ListItem disabled={true} primaryText="E-mail: " secondaryText={ this.props.savedEmail } leftIcon={<EmailIcon />}/>
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
                                hintText= { this.props.savedEmail }
                                name="textfieldEmail"
                                ref="email"
                                value={ this.state.textfieldEmail }
                                onChange={ this.handleChange }
                            />
                        </Col>
                        <Col>
                            <TextField
                                floatingLabelText="Mobilnummer"
                                hintText={ this.props.savedPhone }
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
    onSaveEmail: React.PropTypes.func.isRequired,
    onSavePhone: React.PropTypes.func.isRequired,
    savedEmail: React.PropTypes.string,
    savedPhone: React.PropTypes.string
};

export default ContactInfoCard;