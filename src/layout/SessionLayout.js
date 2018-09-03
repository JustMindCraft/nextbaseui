import React from 'react'
import { Container, Header, Content, Tab, Tabs, Body, Title, Left, Button, Icon } from 'native-base';

export default class SessionLayout extends React.Component {
  handleBackPress = () => {
    this.props.history.goBack();
  }
  render() {
    return (
      <Container>
        <Header hasTabs  >
        <Left>
            <Button transparent onPress={this.handleBackPress}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
        <Body>
            <Title>登录您的账户</Title>
          </Body>
        </Header>
        {this.props.children}
      </Container>
    );
  }
}