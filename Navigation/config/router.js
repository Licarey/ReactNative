import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import GreenScreen from '../screens/GreenScreen';
import BlueScreen from '../screens/BlueScreen';
import PurpleScreen from '../screens/PurpleScreen';

export const Tabs = TabNavigator({
        GreenScreen: {
            screen: GreenScreen,
            navigationOptions: {
                tabBarLabel: 'GreenScreen',
                tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
            },
        },
        BlueScreen: {
            screen: BlueScreen,
            navigationOptions: {
                tabBarLabel: 'BlueScreen',
                tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
            },
        },
    },
    {
        tabBarPosition: 'top',
        showIcon: true,
        showLabel: true
    });

export const Root = StackNavigator({
        Tabs: {
            screen: Tabs,
        },
        PurpleScreen: {
            screen: PurpleScreen,
        },
    },
    {
        mode: 'modal',
        navigationOptions: {
            title: 'NavigateApp',
        },
    });