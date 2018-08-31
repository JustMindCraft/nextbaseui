import React from 'react';
import { Text } from 'native-base';
import MainLayout from '../../layout/MainLayout';
export default class Personal extends React.Component{
    render(){
        return (
            <MainLayout history={this.props.history}>
                <Text>个人中心</Text>
                
            </MainLayout>
        )
    }
} 