import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import { Root } from './config/router';


class Navigation extends Component {
    render() {
        return (
            <Root/>
        );
    }
}

AppRegistry.registerComponent('Navigation', () => Navigation);