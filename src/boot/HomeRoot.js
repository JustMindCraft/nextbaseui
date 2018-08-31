
import React from "react";
import { Root, Text } from "native-base";
import { Platform } from 'react-native';
import Home from "../feathers/home";
import Personal from "../feathers/home/Personal";
import Login from "../feathers/sessions";
import NoMatch from "../feathers/others/NoMatch";
import { Router, Switch, Route, Redirect } from "../cross-router";
import firebase from '../firebase'
import RegNewUser from "../feathers/sessions/RegNewUser";

export default class HomeRoot extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logined: false,
            ready: false,
        }
       
    }
    componentDidMount(){
        if(Platform.OS === 'web'){
            document.getElementById('root').firstChild.lastChild.style.display = 'none'
        }
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              console.log(user);
              this.setState({
                  logined: true,
                  ready: true,
              })
            } else {
                console.log('not logined');
                
                this.setState({
                    logined: false,
                    ready: true,
                })
              
            }
          });
    }
    render(){
        if(!this.state.ready){
            console.log('网络正在链接..');
            return (<Root>
                <Text>'网络正在链接..'</Text>
            </Root>)
            
        }
        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route
              {...rest}
              render={props =>
                this.state.logined ? (
                  <Component {...props} />
                ) : (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: props.location }
                    }}
                  />
                )
              }
            />
          );
        return (
            <Root>  
                <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <PrivateRoute path="/my" component={Personal}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={RegNewUser}/>
                    <Route component={NoMatch}/>
                </Switch>
                </Router>
            </Root>
        )
    }
}