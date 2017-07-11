/**
 * Created by camp-cms on 11.07.2017.
 */

let React = require("react");

class Kontantstøtte extends React.component{

    render(){
        return (
            <div>
            <Row>
            <Col xs={12}> <h3> Kontantstøtte </h3> </Col>
            </Row>
            <Row>
            <Col xs={12}> <p> Du kan få kontantstøtte hvis du har barn mellom 13 måneder og 23 måneder som ikke går i barnehage med
            offentlig tilskudd. Om barnet ditt har deltidsplass vil du kunne få 50% kontantstøtte. Hvis barnet ditt
            er adoptert, kan barnet være opptil skolealder.  </p> </Col>
            </Row>
            <Row>
                <Col xs={3}/>
                <Col xs={6}> <FlatButton label="Søk om kontantstøtte"
                                           href="https://www.nav.no/no/Person/Skjemaer-for-privatpersoner/skjemaveileder/vedlegg?key=235029&languagecode=53&veiledertype=privatperson"/>  </Col>
                <Col xs={3}/>
                </Row>
                </div>
        )
    }
}

export default Kontantstøtte;