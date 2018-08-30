
import React from "react";
import { Root } from "native-base";
import MainLayout from "../layout/MainLayout";
import { Platform } from 'react-native';

export default class HomeRoot extends React.Component{
    componentDidMount(){
        if(Platform.OS === 'web'){
            document.getElementById('root').firstChild.lastChild.style.display = 'none'
        }
    }
    render(){
        return (
            <Root>  
                <MainLayout />
            </Root>
        )
    }
}