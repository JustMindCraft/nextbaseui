import React from 'react';
import { Text } from 'native-base';
import BackLayout from '../../layout/BackLayout';
export default class NoMatch extends React.Component{
    render(){
        return (
            <BackLayout history={this.props.history} match={this.props.match}>
                <Text>404</Text>
                
            </BackLayout>
        )
    }
} 