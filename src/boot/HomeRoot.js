
import React from "react";
import { Root, Spinner, Text, Container, View } from "native-base";
import { Platform } from 'react-native';
import Home from "../feathers/home";
import Personal from "../feathers/home/Personal";
import Login from "../feathers/sessions";
import NoMatch from "../feathers/others/NoMatch";
import { Router, Switch, Route, Redirect } from "../cross-router";
import RegNewUser from "../feathers/sessions/RegNewUser";
import Contacts from "../feathers/home/Contacts";
import Appointment from "../feathers/home/Appointment";
import { Provider } from 'react-redux'
import configureStore from "../redux/store";
import { User } from '../service/leancloud';

const store = configureStore();
export default class HomeRoot extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logined: false,
            ready: false,
            currentUser: {},
        }
       
    }
    checkUser = async () => {
        try {
            let currentUser = await User.currentAsync();
        
            if(currentUser){
                currentUser.isAuthenticated().then((authenticated) => {
                    console.log(authenticated);
                    if(authenticated){
                        this.setState({
                            logined: true,
                            ready: true,
                        })
                    }
                
                }).catch(err=>{
                    this.setState({
                        logined: false,
                        ready: true,
                    })
                    
                });

            }else{
                this.setState({
                    logined: false,
                    ready: true,
                })
            }
            
        } catch (error) {
            console.log(error);
            
        }
        

    }
    async componentDidMount(){
        if(Platform.OS === 'web'){
            document.getElementById('root').firstChild.lastChild.style.display = 'none'
        }
        
        this.checkUser();
        
        
       
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
                    <Route path="/appoints" component={Appointment}/>
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