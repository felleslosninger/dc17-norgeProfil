import React, { Component} from 'react';
import FacebookProvider, { Share } from 'react-facebook';

export default class FacebookShare extends Component {
    render() {
        return (
            <FacebookProvider appId="1590974227639289">
                <Share href="http://www.facebook.com" />
            </FacebookProvider>
        );
    }
}