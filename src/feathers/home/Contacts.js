import React from 'react';
import { Text } from 'native-base';
import MainLayout from '../../layout/MainLayout';
export default class Contacts extends React.Component{
    render(){
        return (
            <MainLayout history={this.props.history} match={this.props.match}>
                <Text>联系人</Text>
                
            </MainLayout>
        )
    }
} 