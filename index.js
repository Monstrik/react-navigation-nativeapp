/**
 * @format
 */

import React from 'react';
import {AppRegistry,} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {name as appName} from './app.json';
import {AppStack} from "./AppStack";

const MyApp = createAppContainer(AppStack);
AppRegistry.registerComponent(appName, () => MyApp);
