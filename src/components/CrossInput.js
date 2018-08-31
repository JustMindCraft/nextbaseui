import React from 'react';
import {Input } from 'native-base';
import { Platform } from 'react-native';

export default class CrossInput extends React.Component{
    constructor(props){
        super(props);
    }
    onFocus = (e) => {
        
       if(Platform.OS === "web"){
           if(this.props.password){
                e.target.type = "password"
           }
           if(this.props.email){
                e.target.type = "email"
           }
       }
    }

    render(){
        
        return (
            <Input 
            password={this.props.password}
            value={this.props.value}
            secureTextEntry={this.props.secureTextEntry}
            onFocus={e => this.onFocus(e)} 
            textContentType={this.props.textContentType}
            placeholder={this.props.placeholder} 
            onChangeText={this.props.onChangeText}/>

        )
    }
}