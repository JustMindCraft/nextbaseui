import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class MainLayout extends Component {
  handleFooterItemClick = (path) =>{
    console.log(path);
    
    this.props.history.push(path)
  }
  render() {
    return (
        <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>首页</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {this.props.children}
        </Content>
        <Footer>
            <FooterTab>
            <Button vertical onPress={()=>this.handleFooterItemClick("/")}>
                <Icon name="home" />
                <Text>首页</Text>
            </Button>
           
            <Button vertical onPress={()=>this.handleFooterItemClick("/my")}>
                <Icon name="person" />
                <Text>我的</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}