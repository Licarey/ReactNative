import React, { Component } from 'react';
import {FlashView} from './ToolsManager';

export default class NativeViewDemo extends Component{
	render(){
		return(
			<FlashView style={{top:30,height:30,backgroundColor:'red'}} text="Hello World"
			onPress={(e)=>{
				if (e.nativeEvent.flashing) {
					this.refs.FlashView.stop();
				}else{
					this.refs.FlashView.start();
				}
			}} ref="FlashView"/>
		);
	}
}