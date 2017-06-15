var React = require("react");
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class ContactInfoCard extends React.Component {

    render () {
        return (
            <Card>
                <CardHeader
                    title="Din kontaktinformasjon"
                    subtitle="Subtitle"
                />
                <CardText>
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