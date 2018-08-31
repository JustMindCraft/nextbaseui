import React from 'react';
import { Item, Input, Label, Form, Button, Text, View } from 'native-base';
import BackLayout from '../../layout/BackLayout';
export default class RegNewUser extends React.Component{
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
                <Input  placeholder='输入您的密码' />
                </Item>
                <Item stackedLabel last>
                <Label>重复密码</Label>
                <Input placeholder='重复您的密码' />
                </Item>
                <View style={{height: 110, display: 'flex', justifyContent: 'space-between'}}>
               
                <Button full>
                    <Text>同意使用条款并注册</Text>
                </Button>
                </View>
                
            </Form>
                
                
            </BackLayout>
        )
    }
} 