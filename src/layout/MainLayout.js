import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import MediaQuery from "../components/media-query";
export default class MainLayout extends Component {
  handleFooterItemClick = (path) =>{
    console.log(path);
    
    this.props.history.push(path)
  }
  render() {
    return (
        <Container>
        <Header>
        <MediaQuery maxDeviceWidth={767}>
            <Left style={{display: "flex", alignItems: "center", flexDirection: 'row'}}>
              <Button transparent>
                <Icon name='menu' />
             </Button>
             </Left>
          </MediaQuery>
          <MediaQuery minDeviceWidth={768}>
            <Left style={{display: "flex", alignItems: "center", flexDirection: 'row'}}>
             
            <Button transparent onPress={()=>this.handleFooterItemClick("/")} active={this.props.match.path === '/'}>
                <Icon name="home" />
                <Text>首页</Text>
            </Button>
            <Button transparent onPress={()=>this.handleFooterItemClick("/contacts")} active={this.props.match.path === '/contacts'}>
                <Icon name="contacts" />
                <Text>联系人</Text>
            </Button>
            <Button transparent onPress={()=>this.handleFooterItemClick("/appoints")} active={this.props.match.path === '/appoints'}>
                <Icon name="star" />
                <Text>预约</Text>
            </Button>
           
            
          </Left>
          </MediaQuery>
          
          <MediaQuery maxDeviceWidth={767}>
          <Body>
            <Title>巫力格格</Title>
          </Body>
          </MediaQuery>
         
          <Right>
          <Button transparent>
              <Icon name="search" />
            </Button>
            <MediaQuery minDeviceWidth={768}>
            <Button transparent onPress={()=>this.handleFooterItemClick("/my")} active={this.props.match.path === '/my'}>
                <Icon name="person" />
                <Text>{
                  this.props.match.path === '/my' && "我的"
                }</Text>
            </Button>
          </MediaQuery>

          </Right>

        </Header>
        <Content>
       
          {this.props.children}
        </Content>
        <Footer>
        <MediaQuery maxDeviceWidth={767}>
          <FooterTab>
              <Button vertical onPress={()=>this.handleFooterItemClick("/")} active={this.props.match.path === '/'}>
                  <Icon name="home" />
                  <Text>首页</Text>
              </Button>
              <Button vertical onPress={()=>this.handleFooterItemClick("/contacts")} active={this.props.match.path === '/contacts'}>
                  <Icon name="list-box" />
                  <Text>分类</Text>
              </Button>
              <Button vertical onPress={()=>this.handleFooterItemClick("/appoints")} active={this.props.match.path === '/appoints'}>
                  <Icon name="infinite" />
                  <Text>后援</Text>
              </Button>
            
              <Button vertical onPress={()=>this.handleFooterItemClick("/my")} active={this.props.match.path === '/my'}>
                  <Icon name="person" />
                  <Text>我的</Text>
              </Button>
            </FooterTab>
        </MediaQuery>
            
        </Footer>
      </Container>
    );
  }
}