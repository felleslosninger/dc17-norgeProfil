/**
 * Created by camp-cms on 10.07.2017.
 */

let React = require("react");

class Uføretrygd extends React.component{

    render(){
        return (
            <div>
            <Row>
            <Col xs={12}> <h3> Uføretrygd  </h3> </Col>
            </Row>
            <Row>
            <Col xs={12}> <p> Har du varig sykdom eller skade sikre din inntekt ved å søke om uføretrygd. Uføretrygden er 66
            prosent av gjennomsnittsinntekta din i de 3 beste av de 5 siste årene før du blei ufør. Alle har
            rett på en grunninntekt. </p> </Col>
            </Row>
            <Row>
            <Col xs={5}> <FlatButton label="Søk om uføretrygd"
            href="https://www.nav.no/no/Person/Skjemaer-for-privatpersoner/Skjemaer/Arbeid%2C+helse+og+sykdom/uforetrygd"/> </Col>
                <Col xs={7} />
                </Row>
                </div>
        )
    }
}

export default Uføretrygd;