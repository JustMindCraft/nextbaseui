import React from 'react';
import { Item,Input, Label, Form, Button, Text, View, Toast } from 'native-base';
import BackLayout from '../../layout/BackLayout';
import { Keyboard } from 'react-native';
import firebase from '../../firebase';
export default class RegNewUser extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            passwordRepeat: '',
            loading: false,
            isLogined: false,
        }
        this.firebase = firebase;
    }

    handleInputChange = (text, field) => {
        let obj = this.state;
        obj[field] = text;
        this.setState({
            ...obj
        })
        
    }

    componentDidMount(){
        this.firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              // User is signed in.
            console.log(user.email);
            
            
              if(this.state.email === user.email){
                  console.log("注册成功");
                  
                return this.setState({
                    loading: false,
                    isLogined: true,
                    })

              }else{
                this.props.history.push("my");
                return Toast.show({
                    text: '请先注销',
                    buttonText: '好的',
                    position: 'top'
                })
              }
              
             
            } else {
              // User is signed out.
              // ...
              this.setState({
                loading: false,
                isLogined: false,
                })
            }
          });
    }
    onRegisiter = () => {
        Keyboard.dismiss();
        const {email, password, passowrdRepeat} = this.state;
        if(password === ""){
            return Toast.show({
                text: '密码不能留空',
                buttonText: '好的',
            })
        }
        if(email === ""){
            return Toast.show({
                text: '邮箱不能为空',
                buttonText: '好的',
            })
        }
        if(password !== passowrdRepeat){
            
            return Toast.show({
                text: '二次密码不一致',
                buttonText: '好的',
            })
        }
        this.setState({
            loading: true
        })

        this.firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) =>{
            // Handle Errors here.
            console.log(error);
            if(error.code === "auth/invalid-email"){
                this.setState({
                    loading: false,
                })
                return Toast.show({
                    text: '邮箱地址格式不正确',
                    buttonText: '好的',
                })
            }
            if(error.code === "auth/email-already-in-use"){
                this.setState({
                    loading: false,
                })
                return Toast.show({
                    text: '邮箱地址已经被占用',
                    buttonText: '好的',
                })
            }
            
            // ...
            });
            
        
        
        
    }
    
    

    render(){
        const {loading, isLogined} = this.state;
        console.log(isLogined);
        
        return (
            <BackLayout history={ this.props.history} match={this.props.match}>
            <Form style={{padding: "11%"}}>
                <Item stackedLabel>
                <Label>邮箱</Label>
                <Input editable={!loading} keyboardType="email-address" textContentType="emailAddress" email={true}  placeholder='输入您的邮箱' onChangeText={text => this.handleInputChange(text, 'email')}/>
                </Item>
                <Item stackedLabel last>
                    <Label>密码</Label>
                    <Input editable={!loading} onChangeText={text => this.handleInputChange(text, 'password')} textContentType="password" secureTextEntry={true} placeholder='重复您的密码' password={true} />
                </Item>
                <Item stackedLabel last>
                    <Label>重复密码</Label>
                    <Input editable={!loading} secureTextEntry={true} password={true} placeholder='重复您的密码'  onChangeText={text => this.handleInputChange(text, 'passowrdRepeat')}/>
                </Item>
                <View style={{height: 110, display: 'flex', justifyContent: 'space-between'}}>
               
                <Button full onPress={this.onRegisiter}>
                    <Text>同意使用条款并注册</Text>
                </Button>
                </View>
                
            </Form>
                
                
            </BackLayout>
        )
    }
} 