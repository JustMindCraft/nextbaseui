import React from 'react'
import { Container, Header, Content, Tab, Tabs, Body, Title, Left, Button, Icon } from 'native-base';
import { Platform } from 'react-native';

export default class SessionLayout extends React.Component {
  handleBackPress = () => {
    this.props.history.goBack();
  }
  componentDidMount(){
    if(Platform.OS === 'web'){
      document.getElementById('root').firstChild.lastChild.style.display = 'none'
    }
  
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