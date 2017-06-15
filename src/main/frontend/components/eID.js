
var React = require("react");
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


class EID extends React.Component {

    render () {
        return (
            <Card>
                <CardHeader
                    title="eID"
                    subtitle="Subtitle"
                />
                <CardText>
                    minID
                    bankID
                </CardText>
            </Card>
        )
    }
}


module.exports = EID;


