var React = require("react");
import {Card, CardHeader, CardText} from 'material-ui/Card';
// import '../../resources/static/styles/CardStyles'
require("css!./../../resources/static/styles/CardStyles.css");

class ContactInfoCard extends React.Component {

    render () {
        return (
           <Card class="Card">
                <CardHeader class="CardHeader"
                    title="Din kontaktinformasjon"
                    subtitle="Subtitle"
                />
                <CardText class="CardText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
            </Card>
        )
    }
}

module.exports = ContactInfoCard;