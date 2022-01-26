/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppProvider from './AppContext';
import React,{Component,createContext} from "react"

const WithProvider = ()=>(
    <AppProvider>
        <App/>
    </AppProvider>
)

AppRegistry.registerComponent(appName, () => WithProvider);
