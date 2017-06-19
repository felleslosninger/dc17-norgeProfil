
var React = require("react");
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import AlarmIcon from 'react-material-icons/icons/action/alarm';

class EID extends React.Component {

    render () {
        return (
            <Card>
                <AlarmIcon/>
                <CardHeader
                    title="Hallo"
                    subtitle="Subtitle"
                />
                <CardText>
                    <AlarmIcon/>
                    minID
                    bankID
                </CardText>
            </Card>
        )
    }
}


module.exports = EID;

