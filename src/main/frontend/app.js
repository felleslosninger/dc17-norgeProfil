var React = require('react');
var ReactDOM = require('react-dom');

var ContactInfo = require('./components/ContactInfoCard.js');

class App extends React.Component {
    render(){
        return(
            <div>
                <ContactInfo />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('react'));
