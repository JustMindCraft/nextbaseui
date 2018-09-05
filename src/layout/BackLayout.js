import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, View } from 'native-base';
import WebShow from "../components/web-show";

export default class BackLayout extends Component {
  handleBackPress = () => {
      this.props.history.goBack();
  }
  matchTitle = (path) => {
     switch (path) {
         case '/login':
             
             return "登录您的账号";
        
         case '/register':
            return "新用户"
     
         default:
            return "敬请期待";
     }
  }
  render() {
    const { path } = this.props.match;
    return (
        <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.handleBackPress}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{this.matchTitle(path)}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          
          {this.props.children}

          <View style={{height: 185}}>
            <WebShow style={{height: 185}} source={{uri: 'http://test2.10000cars.cn/'}}/>


          </View>
         
          
        </Content>
       
      </Container>
    );
  }
}