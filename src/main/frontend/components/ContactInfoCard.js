var React = require("react");
import {Card, CardHeader, CardText} from 'material-ui/Card';


class ContactInfoCard extends React.Component {

    render () {

        const cardStyle = {
            height: '20em',
            width: '25em'
        };

        const cardHeaderStyle = {
            borderBottom: '1px solid lightgrey',
            marginRight: '1em',
            marginLeft: '1em'
        };


        return (
           <Card style={cardStyle} className="Card">
                <CardHeader style={cardHeaderStyle} className="CardHeader"
                    title="Din kontaktinformasjon"
                    subtitle="Subtitle"
                />
                <CardText className="CardText">
                    Mobil
                    Mail
                    Verifikasjon
                    Oppdatert
                </CardText>
            </Card>
        )
    }
}

module.exports = ContactInfoCard;