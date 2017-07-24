"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./utilities/store";
import NorgePlussContainer from './norgePluss/containers/NorgePlussContainer';
import HeaderContainer from './norgePluss/containers/HeaderContainer';

const store =
    configureStore();


const norgePluss = () => {

    ReactDOM.render(
        <HeaderContainer store = {store}/>,
        document.getElementById('header')
    );

    ReactDOM.render(
        <NorgePlussContainer store = {store}/>,
        document.getElementById('boxList')
    );
}

norgePluss();