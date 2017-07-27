"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./utilities/store";
import NorgePlussContainer from './norgePluss/containers/NorgePlussContainer';
import LoginContainer from './norgePluss/containers/LoginContainer';
import GamificationContainer from './norgePluss/containers/GamificationContainer'
import {Provider} from "react-redux";
import UserContainer from './norgePluss/containers/UserContainer'
import ProfileUsernameContainer from "./norgePluss/containers/ProfileUsernameContainer";


const store = configureStore();

const norgePluss = () => {

    let boxList = document.getElementById('boxList');
    let gamification = document.getElementById('gamificationBox');
    let user = document.getElementById('userheader');
    let profileUsername = document.getElementById('profileUsername');

    ReactDOM.render(
        <Provider store = {store}>
            <LoginContainer/>
        </Provider>,
        document.getElementById('login')
    );

    if(boxList){
        ReactDOM.render(
            <Provider store = {store}>
                <NorgePlussContainer/>
            </Provider>,
            boxList
        );
    }

    if(gamification){
        ReactDOM.render(
            <Provider store = {store}>
                <GamificationContainer/>
            </Provider>,
            gamification
        );
    }

    if(user){
        ReactDOM.render(
            <Provider store = {store}>
                <UserContainer/>
            </Provider>,
            user
        );
    }

    if(profileUsername){
        ReactDOM.render(
            <Provider store = {store}>
                <ProfileUsernameContainer/>
            </Provider>,
            profileUsername
        );
    }


};

norgePluss();
//testPluss();