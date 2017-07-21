import React, {Component} from 'react';
import http from 'http';
import axios from "axios";


class NorgePlussContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            norgeno: ''
        }
    }

    fetchFromServer() {
        axios.get("http://localhost:8080/data/fastlege").then( (response) => {
            console.log(response);
            this.setState({norgeno: response.data})
        })
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
                {$("div").html = this.state.norgeno}

            </div>
        );
    }
}

export default NorgePlussContainer;