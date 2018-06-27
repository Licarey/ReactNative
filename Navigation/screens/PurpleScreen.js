import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TextInput,
    View
} from 'react-native';

let widthOfMargin = Dimensions.get('window').width * 0.05;


export default class PurpleScreen extends Component {

    constructor() {
        super();
        console.log('PurpleScreen');
    }

    componentDidMount() {
        console.log(`The props: ${this.props.name}`);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle} placeholder={'请输入手机号'}>
                </TextInput>
                <Text style={styles.textPromptStyle} onChangeText={(text) => this.setState({text})}>
                    您的手机号:
                </Text>
                <TextInput style={styles.textInputStyle} placeholder={'请输入密码'} password={true}>
                </TextInput>
                <Text style={styles.bigTextPrompt} onPress={this.search}>
                    确定
                </Text>
            </View>
        );
    }

    search(){
        alert("您输入的内容为："+this.state.text);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    textInputStyle: {
        backgroundColor: 'gray',
        fontSize: 20,
        textAlign: 'center',
        margin: widthOfMargin,
        color: 'white',
    },
    textPromptStyle: {
        fontSize: 20,
        margin: widthOfMargin,
    },
    bigTextPrompt: {
        backgroundColor: 'gray',
        fontSize: 20,
        textAlign: 'center',
        margin: widthOfMargin,
        color: 'white',
    },
});