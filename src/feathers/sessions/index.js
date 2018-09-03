import React from 'react';
import { Item, Input, Label, Form, Button, Text, View } from 'native-base';
import BackLayout from '../../layout/BackLayout';

import firebase from '../../firebase';


export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            loading: false,
            isLogined: false,
        }
        this.firebase = firebase;
    }
    handleInputChange = (text, field) => {
        let obj = this.state;
        obj[field] = text;
        this.setState({
            ...obj
        })
        
    }
    handleToRegBtn = () =>{
        this.props.history.push('/register');
    }
    render(){
        const {loading, isLogined} = this.state;
        console.log(isLogined);
        return (
            <BackLayout history={ this.props.history} match={this.props.match}>
            <Form style={{padding: "11%"}}>
                <Item stackedLabel>
                <Label>邮箱</Label>
                <Input editable={!loading} keyboardType="email-address" textContentType="emailAddress" email={true}  placeholder='输入您的邮箱' onChangeText={text => this.handleInputChange(text, 'email')}/>
                </Item>
                <Item stackedLabel last>
                    <Label>密码</Label>
                    <Input editable={!loading} onChangeText={text => this.handleInputChange(text, 'password')} textContentType="password" secureTextEntry={true} placeholder='重复您的密码' password={true} />
                </Item>
                <View style={{height: 110, display: 'flex', justifyContent: 'space-between'}}>
                <Button full danger>
                    <Text>登录</Text>
                </Button>
                <Button full onPress={this.handleToRegBtn}>
                    <Text>注册</Text>
                </Button>
                </View>
                
            </Form>
                
                
            </BackLayout>
        )
    }
} 