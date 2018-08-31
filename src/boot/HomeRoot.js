
import React from "react";
import { Root } from "native-base";
import { Platform } from 'react-native';
import Home from "../feathers/home";
import Personal from "../feathers/home/Personal";
import Login from "../feathers/sessions";
import NoMatch from "../feathers/others/NoMatch";
import { Router, Switch, Route } from "../cross-router";

export default class HomeRoot extends React.Component{
    componentDidMount(){
        if(Platform.OS === 'web'){
            document.getElementById('root').firstChild.lastChild.style.display = 'none'
        }
    }
    render(){
        return (
            <Root>  
                <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/my" component={Personal}/>
                    <Route path="/login" component={Login}/>
                    <Route component={NoMatch}/>
                </Switch>
                </Router>
            </Root>
        )
    }
}