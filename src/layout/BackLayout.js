import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon } from 'native-base';
export default class BackLayout extends Component {
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
       
      </Container>
    );
  }
}