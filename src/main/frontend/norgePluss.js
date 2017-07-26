"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./utilities/store";
import NorgePlussContainer from './norgePluss/containers/NorgePlussContainer';
import HeaderContainer from './norgePluss/containers/HeaderContainer';
import GamificationContainer from './norgePluss/containers/GamificationContainer'
import {Provider} from "react-redux";

const store = configureStore();

const norgePluss = () => {

    ReactDOM.render(
        <Provider store = {store}>
            <HeaderContainer/>
        </Provider>,
        document.getElementById('header')
    );

    let boxList = document.getElementById('boxList');
    let gamification = document.getElementById('gamificationBox');

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
};

norgePluss();
//testPluss();