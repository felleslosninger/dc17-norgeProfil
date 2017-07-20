import React, {Component} from 'react';
import http from 'http';

class NorgePlussContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            norgeno: ''
        }
    }

    fetchFromServer() {
        http.get({
            hostname: 'www.norge.no',
            port: 80,
            path: '/',
            agent: false  // create a new agent just for this one request
        }, (res) => {
            console.log(res);
            // Do stuff with response
        });
    }

    componentWillMount() {
        this.fetchFromServer();
        this.setState({
            norgeno: ''
        });
    }

    render() {
        return (
            <div>
        hei
            </div>
        );
    }
}

export default NorgePlussContainer;