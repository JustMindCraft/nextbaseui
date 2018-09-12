import React from 'react';
import SessionLayout from '../../../layout/SessionLayout';
import { Keyboard } from 'react-native';
import { Item, Input, Label, Form, Button, Text, View, Tab, Tabs, Toast } from 'native-base';

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            loading: false,
        }
        
    }

    handleInputChange = (text, field) => {
        let obj = this.state;
        obj[field] = text;
        this.setState({
            ...obj
        })
        
    }
   

    render(){

        const {  loading } = this.state;
        
        return (
            
            <SessionLayout history={ this.props.history} match={this.props.match}>
            <Tabs >
                <Tab heading="登录" style={{alignItems: "center"}}>
                    <Form style={{padding: "8%", maxWidth: 600, width: '100%'}}>
                        <Item stackedLabel  onPress={e=>e.target.focus()}>
                        <Label>用户名</Label>
                        <Input   editable={!loading} keyboardType="username" textContentType="username"  placeholder='请输入您的用户名' onChangeText={text => this.handleInputChange(text, 'username')}/>
                        </Item>
                        <Item stackedLabel last  onPress={e=>e.target.focus()}>
                            <Label>密码</Label>
                            <Input editable={!loading} onChangeText={text => this.handleInputChange(text, 'password')} textContentType="password" secureTextEntry={true} placeholder='请输入您的密码' password={true} />
                        </Item>
                        <View style={{height: 110, display: 'flex', marginTop: 30, justifyContent: 'space-between'}}>
                        <Button disabled={loading} full danger onPress={this.handleLoginBtn}>
                            <Text>登录</Text>
                        </Button>
                        </View>
                    
                    </Form>
                </Tab>
                <Tab heading="注册"  style={{alignItems: "center"}}>
                    <Form style={{padding: "8%", maxWidth: 600, width: '100%'}}>
                        <Item stackedLabel  onPress={e=>e.target.focus()}>
                        <Label>用户名</Label>
                        <Input   editable={!loading} keyboardType="username" textContentType="username"  placeholder='请输入您的用户名' onChangeText={text => this.handleInputChange(text, 'username')}/>
                        </Item>
                        <Item stackedLabel last  onPress={e=>e.target.focus()}>
                            <Label>密码</Label>
                            <Input editable={!loading} onChangeText={text => this.handleInputChange(text, 'password')} textContentType="password" secureTextEntry={true} placeholder='请输入您的密码' password={true} />
                        </Item>
                        <Item stackedLabel last  onPress={e=>e.target.focus()}>
                            <Label>重复密码</Label>
                            <Input editable={!loading} onChangeText={text => this.handleInputChange(text, 'password')} textContentType="password" secureTextEntry={true} placeholder='重复密码您的密码' password={true} />
                        </Item>
                        <View style={{height: 110, display: 'flex', marginTop: 30, justifyContent: 'space-between'}}>
                        <Button disabled={loading} full danger onPress={this.handleRegBtn}>
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