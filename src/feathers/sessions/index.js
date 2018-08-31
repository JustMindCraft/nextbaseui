import React from 'react';
import { Item, Input, Label, Form, Button, Text, View } from 'native-base';
import BackLayout from '../../layout/BackLayout';
export default class Login extends React.Component{
    handleToRegBtn = () =>{
        this.props.history.push('/register');
    }
    render(){
        return (
            <BackLayout history={ this.props.history} match={this.props.match}>
            <Form style={{padding: "11%"}}>
                <Item stackedLabel>
                <Label>邮箱</Label>
                <Input placeholder='输入您的邮箱'/>
                </Item>
                <Item stackedLabel last>
                <Label>密码</Label>
                <Input placeholder='输入您的密码' />
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