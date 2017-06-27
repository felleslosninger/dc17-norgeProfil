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
import injectTapEventPlugin from 'react-tap-event-plugin';


class ContactInfoCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.handleSave = this.handleSave.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    };

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };


    handleSave(value) {
        this.setState({modalIsOpen: false});
        this.props.onSave(value);

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
                        <ListItem disabled={true} primaryText="E-mail: " secondaryText={this.props.placeholderEmail} leftIcon={<EmailIcon />}/>
                        <ListItem disabled={true} primaryText="Mobilnummer: " secondaryText={this.props.placeholderPhone}
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
                                searchText={this.props.savedEmail}
                                hintText={this.props.placeholderEmail}
                                floatingLabelText="E-post"
                                name="email"
                            />
                        </Col>
                        <Col>
                            <TextField
                                searchText={this.props.savedPhone}
                                hintText={this.props.placeholderPhone}
                                floatingLabelText="Mobilnummer"
                                name="phone"
                            />
                        </Col>
                    </Row>
                </Dialog>
            </Card>

        )
    }
}

ContactInfoCard.propTypes = {
    onSave: React.PropTypes.func.isRequired,
    placeholderPhone: React.PropTypes.string,
    placeholderEmail: React.PropTypes.string,
    savedPhone: React.PropTypes.string.isRequired,
    savedEmail: React.PropTypes.string.isRequired,

};

export default ContactInfoCard;