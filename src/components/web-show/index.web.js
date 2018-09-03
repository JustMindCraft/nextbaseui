import Iframe from 'react-iframe'
import React from 'react';



export default class WebShow extends React.Component {
    render(){
        console.log(this.props.source);
        
        return (
            <Iframe
                url={this.props.source.uri}
                style={this.props.style}
            />
        )
    }

}