import React, { Component } from 'react';
import { Button } from 'react-native-elements'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import im from '../intentModule'

export default class BlueScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to the Blue Screen!
                </Text>
                <Button
                    raised
                    backgroundColor='#551a8b'
                    clolor='white'
                    icon={{name: 'cached'}}
                    title='Go to Purple'
                    onPress={() => this.props.navigation.navigate('PurpleScreen', {})}/>
                <Button
                    raised
                    backgroundColor='#551a8b'
                    clolor='white'
                    icon={{name: 'cached'}}
                    title='跳转到native page'
                    onPress={this._jumpNativePage}/>
            </View>
        );
    }

    _jumpNativePage(){
        im.startActivityFromJS("com.navigation.SecondActivity", null)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000ff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white',
    },
});