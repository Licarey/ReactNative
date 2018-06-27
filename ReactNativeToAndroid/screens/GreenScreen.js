import React, { Component } from 'react';
import { Button } from 'react-native-elements'
import {
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter
} from 'react-native';

export default class BlueScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to the Green Screen!
                </Text>
                <Button
                    raised
                    backgroundColor='#551a8b'
                    clolor='white'
                    icon={{name: 'cached'}}
                    title='Go to Purple'
                    onPress={() => this.props.navigation.navigate('PurpleScreen', {})}/>
            </View>
        );
    }


    componentDidMount() {

        // this.deEmitter = DeviceEventEmitter.addListener('jumpRn',(msg)=> {
        //     this._jumpRNPage()
        // });
    }

    // componentWillUnmount() {
    //     this.deEmitter.remove();
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00ff38',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});