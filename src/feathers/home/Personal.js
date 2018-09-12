import React from 'react';
import MainLayout from '../../layout/MainLayout';
import {Card, CardItem, Text, Icon, Right, Thumbnail, Body, Left, Button } from 'native-base';
import SwipStatics from '../../components/Personal/SwipStatics';
import firebase from '../../firebase/index'

export default class Personal extends React.Component{
    constructor(props){
        super(props);
        this.ref = firebase;
        this.state = {
            user: {}
        }
        
        
        
    }

    async checkUserLogin(){
        return await this.ref.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    logined: true,
                    user
                })
                
              // User is signed in.
            } else {
                this.setState({
                    logined: false,
                })
                this.props.history.push('/login')
                
              // No user is signed in.
            }
          });
    }

    async componentDidMount(){
        await this.checkUserLogin();
    }
    
    
     logout =  async () =>{
        await this.ref.auth().signOut();
        this.props.history.push('/login')
    }
    render(){
        return (
            <MainLayout history={this.props.history} match={this.props.match}>
                <Card>
                    <CardItem>
                    <Left>
                        <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFD8WoVHrgZkAfxxtCcbZFNHJapDAPhSCsiNL2zqS9QxaNBoQe'}} />
                        <Body>
                        <Text>用户名</Text>
                        <Text note>食色性也</Text>
                        </Body>
                    </Left>
                    </CardItem>
                    <CardItem>
                    <Icon active name="logo-googleplus" />
                    <Text>个人资料</Text>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                    </CardItem>
                    <CardItem>
                    <Icon active name="logo-googleplus" />
                    <Text>我的收藏</Text>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                    </CardItem>
                </Card>
                <SwipStatics />
                <Card>
                        <Button full danger onPress={(e)=>this.logout()}>
                            <Text>安全注销</Text>
                        </Button>
                </Card>
                
            </MainLayout>
        )
    }
} 