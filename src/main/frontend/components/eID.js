
var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

class EID extends React.Component {

    render () {


        return (
            <Card className="Card">
                <Row>
                    <div className="HeaderRow">
                        <div className="Headline">
                            <Col md={12}><h4><img src="icons/face.svg"/> eID</h4></Col>
                        </div>
                    </div>
                </Row>
                <CardText className="CardText">
                    <div>
                        <List>
                            <ListItem primaryText="Sent mail" />
                            <ListItem primaryText="Drafts" />
                            <ListItem
                                primaryText="Inbox"
                                initiallyOpen={true}
                                primaryTogglesNestedList={true}
                                nestedItems={[
                                    <ListItem
                                        key={1}
                                        primaryText="Starred"
                                    />,
                                    <ListItem
                                        key={2}
                                        primaryText="Sent Mail"
                                    />,
                                    <ListItem
                                        key={3}
                                        primaryText="Inbox"
                                    />,
                                ]}
                            />
                        </List>
                    </div>
                </CardText>
            </Card>
        )
    }
}


module.exports = EID;
