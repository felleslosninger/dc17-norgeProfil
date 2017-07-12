"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './utilities/Routes';
import configureStore from "./utilities/store";

const store = configureStore();

ReactDOM.render(
    <Routes store = {store}/>,
    document.getElementById('app')
);