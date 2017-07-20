import React, {Component} from 'react';
import axios from 'axios';

class NorgePlussContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            norgeno: ''
        }
    }

    fetchFromServer() {
        axios.get({
            url: 'https://www.norge.no',
            method: 'get',
            responseType: 'html'
        })
            .then(function (response){
               console.log(response);
            });
    }

    componentWillMount(){
        this.fetchFromServer();
        this.setState({
            norgeno: ''
        });
    }

    render(){
        return(
            <h1>Hello</h1>
        );
    }
}

export default NorgePlussContainer;