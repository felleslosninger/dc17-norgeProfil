
var React = require("react");
import {Card, CardHeader, CardText} from 'material-ui/Card';


class EID extends React.Component {

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
                    title="eID"
                    subtitle="Subtitle"
                />
                <CardText className="CardText">
                    minID
                    bankID
                </CardText>
            </Card>
        )
    }
}


module.exports = EID;


