"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./utilities/store";
import NorgePlussContainer from './norgePluss/containers/NorgePlussContainer';
import HeaderContainer from './norgePluss/containers/HeaderContainer';
import GamificationContainer from './norgePluss/containers/GamificationContainer'
import TestContainer from './norgePluss/containers/TestContainer';
import TestContainer2 from './norgePluss/containers/TestContainer2';
import {Provider} from "react-redux";

const store = configureStore();

const testPluss = () => {
    ReactDOM.render(
        <Provider store = {store}>
            <TestContainer/>
        </Provider>,
        document.getElementById('boxList')
        );

    ReactDOM.render(
        <Provider store = {store}>
            <TestContainer2/>
        </Provider>,
        document.getElementById('header')
    );
}

const norgePluss = () => {

    ReactDOM.render(
        <Provider store = {store}>
            <HeaderContainer/>
        </Provider>,
        document.getElementById('header')
    );



    ReactDOM.render(
        <Provider store = {store}>
            <NorgePlussContainer/>
        </Provider>,
        document.getElementById('boxList')
    );
};

norgePluss();
//testPluss();