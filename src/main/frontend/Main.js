"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './utilities/Routes';
import configureStore from "./utilities/store";
import NorgePlussContainer from './norgePluss/containers/NorgePlussContainer';

const store = configureStore();

const norgeProfil = () => {
    ReactDOM.render(
        <Routes store = {store}/>,
        document.getElementById('app')
    );
}

const norgePluss = () => {
    ReactDOM.render(
        <NorgePlussContainer/>,
        document.getElementById('boxList')
    );
}

norgePluss();
