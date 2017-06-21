
var React = require("react");
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');


class Username extends React.Component {

    render () {

        return (
            <div className="User">
                <h1><img src="icons/face.svg"/> Fornavn Etternavn</h1>
            </div>
        )
    }
}


module.exports = Username;
