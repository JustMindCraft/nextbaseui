import React from 'react';
import { WebView } from 'react-native';


export default class WebShow extends React.Component {
    render(){
        return (
            <WebView
                source={this.props.source}
                style={this.props.style}
            />
        )
    }

}