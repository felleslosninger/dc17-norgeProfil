/**
 * Created by camp-cms on 18.07.2017.
 */
"use strict"
import React, {Component} from 'react';
import xmlText from "../XML/førerkort";

class Trafikk extends Component {
    render(){
        var XMLParser = require('react-xml-parser');
        var xml = new XMLParser().parseFromString(xmlText);    // Assume xmlText contains the example XML
        console.log(xml);
        console.log(xml.getElementsByTagName('beskrivelse'));
    }
}

export default Trafikk;