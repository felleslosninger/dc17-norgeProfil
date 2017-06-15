var React = require("react");

class EID extends React.Component {
    render () {
        const divStyle = {
            color: 'blue',
        };

        return (
            <div>
                <h1 style={divStyle}>Hello, world</h1>
            </div>
        );
    }
}

module.exports = EID;


