import React from 'react';
import { Item, Input, Label, Form, Button, Text, View, Tab, Tabs } from 'native-base';
import SessionLayout from '../../layout/SessionLayout';

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
            
            <SessionLayout history={ this.props.history} match={this.props.match}>
            <Tabs>
                <Tab heading="手机登录">
                    <Form style={{padding: "11%"}}>
                    <Item stackedLabel>
                    <Label>手机号</Label>
                    <Input editable={!loading} keyboardType="email-address" textContentType="emailAddress" email={true}  placeholder='输入您的手机号' onChangeText={text => this.handleInputChange(text, 'email')}/>
                    </Item>
                    <Item stackedLabel style={{display: "flex", flexDirection: "row"}}>
                        
                        <Input editable={!loading} onChangeText={text => this.handleInputChange(text, 'password')} textContentType="password" secureTextEntry={true} placeholder='输入手机验证码' password={true} />
                        <Button>
                         <Text>获取验证码</Text>
                        </Button>
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
                </Tab>
                <Tab heading="密码登录">
                <Form style={{padding: "11%"}}>
                    <Item stackedLabel>
                    <Label>用户名</Label>
                    <Input editable={!loading} keyboardType="email-address" textContentType="emailAddress" email={true}  placeholder='用户名/手机号' onChangeText={text => this.handleInputChange(text, 'email')}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>密码</Label>
                        <Input editable={!loading} onChangeText={text => this.handleInputChange(text, 'password')} textContentType="password" secureTextEntry={true} placeholder='输入您的密码' password={true} />
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
                </Tab>
            
            </Tabs>
            
                
                
            </SessionLayout>
        )
    }
} 