
import React from "react";
import { Root, Spinner, Text, Container, View } from "native-base";
import { Platform } from 'react-native';
import Home from "../feathers/home";
import Personal from "../feathers/home/Personal";
import Login from "../feathers/sessions/firebase/login";
import NoMatch from "../feathers/others/NoMatch";
import { Router, Switch, Route, Redirect } from "../cross-router";
import RegNewUser from "../feathers/sessions/RegNewUser";
import Contacts from "../feathers/home/Contacts";
import { Provider } from 'react-redux'
import configureStore from "../redux/store";
import Category from "../feathers/home/Category";
import OffLine from "../feathers/home/OffLine";
import firebase from '../firebase/index';

const store = configureStore();
export default class HomeRoot extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logined: false,
            ready: false,
            currentUser: {},
        }
        this.ref = firebase;
       
    }
    async checkUserLogin(){
            return this.ref.auth().onAuthStateChanged((user) => {
                console.log(user);
                
                if (user) {
                   
                    this.setState({
                        logined: true,
                        ready: true,
                    })
    
                    
                  // User is signed in.
                } else {
                    
                    this.setState({
                        logined: false,
                        ready: true,
                    })
                    
                  // No user is signed in.
                }
              });
    }
    checkUser = async () => {
        try {
            let currentUser = await this.checkUserLogin();
            console.log(currentUser);
            
            if(currentUser){
                

            }else{
               
            }
            
        } catch (error) {
            console.log(error);
            
        }
        

    }
    async componentDidMount(){
        
        
        await this.checkUserLogin();
        if(Platform.OS === 'web'){
            document.getElementById('root').firstChild.lastChild.style.display = 'none'
        }
        
        
       
    }

    componentWillUnmount(){
        this.setState({
            logined: false,
            ready: false,
            currentUser: {},
        })
    }

    render(){

        if(!this.state.ready){
            console.log('网络正在链接..');
            return (<Root>
                <Container style={{display: "flex", alignItems: 'center'}}>
                <Spinner color='blue' />
                <Text>载入中</Text>

                </Container>
                
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
            
            <Provider store={store}>
            <Root>  
                <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/category" component={Category}/>
                    <Route path="/offLine" component={OffLine}/>
                    <PrivateRoute path="/my" component={Personal}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={RegNewUser}/>
                    <Route component={NoMatch}/>
                </Switch>
                </Router>
               
               
            </Root>
            </Provider>
            
        )
    }
}