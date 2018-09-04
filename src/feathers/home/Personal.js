import React from 'react';
import MainLayout from '../../layout/MainLayout';
import {Card, CardItem, Text, Icon, Right, Thumbnail, Body, Left, Button } from 'native-base';
import { User } from '../../service/leancloud';

export default class Personal extends React.Component{
    constructor(props){
        super(props);
        this.user = User;
        
    }

    async componentDidMount(){
        await this.checkUserLogined();
    }
    
    checkUserLogined = async () => {
        let currentUser = await this.user.currentAsync();
        if(!currentUser){
            this.props.history.push('/login')
        }else{
            currentUser.isAuthenticated().then((authenticated) => {
                console.log(authenticated);
                if(!authenticated){
                    this.props.history.push('/login')
                }
               
            }).catch(err=>{
                this.props.history.push('/login')
                
            });
        }
    }
    logout = () =>{
        this.user.logOut();
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
                <Card>
                        <Button full danger onPress={(e)=>this.logout()}>
                            <Text>安全注销</Text>
                        </Button>
                </Card>
                
            </MainLayout>
        )
    }
} 