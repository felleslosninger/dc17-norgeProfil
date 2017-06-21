
var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import {Card, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

class EID extends React.Component {

    render () {


        return (
            <Card className="EidCard">
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
                            <ListItem
                                primaryText="MinID"
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem
                                        key={1}
                                        secondaryText="MinID er ein personleg, elektronisk ID som gir tilgang til offentlege tenester på mellomhøgt sikkerheitsnivå, nivå 3.Direktoratet for forvaltning og IKT (Difi) er ansvarleg for MinID. MinID kan bestillast frå det året du fyller 13. For å registrere deg som MinID-brukar treng du"
                                    />
                                ]}
                            />
                            <ListItem
                                primaryText="BankID"
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem
                                        key={1}
                                        secondaryText="BankID er ein personleg, elektronisk ID som gir tilgang til offentlege tenester på høgaste sikkerheitsnivå, nivå 4.BankID blir levert av banken din og kan bli gitt til personar som har fylt 15 år. Men dei enkelte bankane opererer med eigne aldersgrenser. For å bestille BankID må du kontakte banken din."
                                    />
                                ]}
                            />
                            <ListItem
                                primaryText="BankID på mobil"
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem
                                        key={1}
                                        secondaryText="BankID på mobil er ein personleg, elektronisk ID som gir tilgang til offentlege tenester på høgaste sikkerheitsnivå, nivå 4.For å kunne ta i bruk BankID på mobil må du ha ein nettbankavtale med BankID og ein kodebrikke. Du kan berre aktivere BankID på mobil frå banken som gav deg BankID.For å aktivere BankID på mobil må du logge inn i nettbanken din."
                                    />
                                ]}
                            />
                            <ListItem
                                primaryText="Buypass ID"
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem
                                        key={1}
                                        primaryText="Starred"
                                    />
                                ]}
                            />
                            <ListItem
                                primaryText="Commfides"
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem
                                        key={1}
                                        primaryText="Starred"
                                    />
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
