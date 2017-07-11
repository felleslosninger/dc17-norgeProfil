/**
 * Created by camp-cms on 11.07.2017.
 */

let React = require("react");

class Barnetrygd extends React.component{

    render(){
        return (
            <div>
                <Row>
                    <Col xs={12}> <h3> Barnetrygd </h3> </Col>
                </Row>
                <Row>
                    <Col xs={12}> <p> Du kan få foreldrepenger hvis du har vært yrkesaktiv og har hatt pensjonsgivende
                        inntekt i minst 6 av de 10 siste månedene før forelderpengeperioden begynner. Dette blir gitt
                        automatisk fra fødsel. Årsinntekten din må være minst halvparten av trygdens grunnbeløp. Om mor ikke har
                        rett på foreldrepenger eller far er alene om omsorgen kan hen få en engangsstødnad. </p> </Col>
                </Row>
                <Row>
                    <Col xs={5}> <FlatButton label="Beregn foreldrepenger"
                                             href="https://tjenester.nav.no/foreldrepengeveilederen/foreldreOgBarn;JSESSIONID-foreldrepengeveileder=siyys44XtYKAT62DPAdEBWFl?0"/> </Col>
                    <Col xs={2}/>
                    <Col xs={5}> <FlatButton label="Søk om engangstønad"
                                             href="https://www.nav.no/no/Person/Skjemaer-for-privatpersoner/Skjemaer/Familie/foreldrepenger-og-engangsstonad"/> </Col>
                </Row>
            </div>
        )
    }
}

export default Barnetrygd;