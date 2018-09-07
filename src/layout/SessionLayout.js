import React from 'react'
import { Container, Header, Body, Title, Left, Button, Icon, View, Right } from 'native-base';
import { Platform } from 'react-native';
// import WebShow from "../components/web-show";

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
        {/* <View style={{height: "185px"}}>
            <WebShow style={{height: "185px"}} source={{uri: 'http://test2.10000cars.cn/'}}/>


          </View> */}
      </Container>
    );
  }
}