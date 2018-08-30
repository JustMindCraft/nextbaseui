import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class MainLayout extends Component {
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
          <Grid>
              <Row>
                <Col><Icon type="FontAwesome" name="home" /></Col>
                <Col><Icon type="FontAwesome" name="home" /></Col>
                <Col><Icon type="FontAwesome" name="home" /></Col>
                <Col><Icon type="FontAwesome" name="home" /></Col>

              </Row>
              <Row>
                <Col><Icon type="FontAwesome" name="home" /></Col>
                <Col><Icon type="FontAwesome" name="home" /></Col>
                <Col><Icon type="FontAwesome" name="home" /></Col>
                <Col><Icon type="FontAwesome" name="home" /></Col>

              </Row>
           
           
          </Grid>
          <Text>123</Text>
          <Text>123</Text>

          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>

         
          
        </Content>
        <Footer>
            <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}