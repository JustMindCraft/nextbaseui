import React from 'react';
import SessionLayout from '../../../layout/SessionLayout';
import { Keyboard } from 'react-native';
import { Spinner, Item, Input, Label, Form, Button, Text, View, Tab, Tabs, Toast } from 'native-base';
import firebase from '../../../firebase/index'

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.ref = firebase;
        this.state = {
            email: '',
            password: '',
            passwordRepeat: '',
            loading: false,
            logined: false,
        }
        
    }

    async checkUserLogin(){
            this.ref.auth().onAuthStateChanged((user) => {
                if (user) {
                   
                    this.setState({
                        logined: true,
                        loading: false,
                    })

                    this.props.history.push('/my')
                    
                  // User is signed in.
                } else {
                    this.setState({
                        logined: false,
                        loading: false,

                    })
                    
                  // No user is signed in.
                }
              });
    }

    async componentDidMount(){
        await this.checkUserLogin();
        
    }

    handleInputChange = (text, field) => {
        let obj = this.state;
        obj[field] = text;
        this.setState({
            ...obj
        })
        
    }

    handleLoginBtn = () => {
        Keyboard.dismiss();
        const {email, password} = this.state;
        this.setState({
            loading: true,
        })
        
        if(email === ""){
            this.setState({
                loading: false,
            })
            return Toast.show({
                text: '邮箱填写不得为空',
                buttonText: '好的',
                position: 'right'
            });
        }
        if(password === ""){
            this.setState({
                loading: false,
            })
            return Toast.show({
                text: '密码填写不得为空',
                buttonText: '好的',
                position: 'right'
            });
        }

    }

    handleRegBtn = () => {
        Keyboard.dismiss();
        const {email, password, passwordRepeat} = this.state;
        this.setState({
            loading: true,
        })
        
        if(email === ""){
            this.setState({
                loading: false,
            })
            return Toast.show({
                text: '邮箱填写不得为空',
                buttonText: '好的',
                position: 'right'
            });
        }
        if(password === ""){
            this.setState({
                loading: false,
            })
            return Toast.show({
                text: '密码填写不得为空',
                buttonText: '好的',
                position: 'right'
            });
        }
        if(password !== passwordRepeat){
            this.setState({
                loading: false,
            })
            return Toast.show({
                text: '两次密码输入不一致',
                buttonText: '好的',
                position: 'right'
            });
        }
        this.ref.auth().createUserWithEmailAndPassword(email, password).catch((error)=> {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            if(errorCode === 'auth/invalid-email'){
                this.setState({
                    loading: false,
                })
                return Toast.show({
                    text: '邮箱格式错误',
                    buttonText: '好的',
                    position: 'right'
                });
            }
            if(errorCode === 'auth/email-already-in-use'){
                this.setState({
                    loading: false,
                })
                return Toast.show({
                    text: '邮箱已经被占用',
                    buttonText: '好的',
                    position: 'right'
                });

            }

            console.log(errorCode);
            console.log(errorMessage);
            
            
            // ...
          });
        

    }

   
   

    render(){

        const {  loading, password, email, passwordRepeat } = this.state;
        
        
        return (
            
            <SessionLayout history={ this.props.history} match={this.props.match}>
            <Tabs activeTabValue={1}>
                <Tab heading="登录" style={{alignItems: "center"}} >
                    <Form  style={{padding: "8%", maxWidth: 600, width: '100%'}}>
                        <Item stackedLabel  onPress={e=>e.target.focus()}>
                        <Label>邮箱</Label>
                        <Input value={email}   editable={!loading} keyboardType="email-address" textContentType="email"  placeholder='请输入您的邮箱' onChangeText={text => this.handleInputChange(text, 'email')}/>
                        </Item>
                        <Item stackedLabel last  onPress={e=>e.target.focus()}>
                            <Label>密码</Label>
                            <Input value={password} editable={!loading} onChangeText={text => this.handleInputChange(text, 'password')} textContentType="password" secureTextEntry={true} placeholder='请输入您的密码' password={true} />
                        </Item>
                        <View style={{height: 110, display: 'flex', marginTop: 30, justifyContent: 'space-between'}}>
                        <Button disabled={loading} full danger onPress={this.handleLoginBtn}>
                            {
                                loading && <Spinner color='red' />
                            }
                            <Text>登录</Text>
                        </Button>
                        </View>
                    
                    </Form>
                </Tab>
                <Tab heading="注册"  style={{alignItems: "center"}}  >
                    <Form style={{padding: "8%", maxWidth: 600, width: '100%'}}>
                        <Item stackedLabel  onPress={e=>e.target.focus()}>
                        <Label>邮箱</Label>
                        <Input value={email}  editable={!loading} keyboardType="email" textContentType="email"  placeholder='请输入您的邮箱' onChangeText={text => this.handleInputChange(text, 'email')}/>
                        </Item>
                        <Item stackedLabel last  onPress={e=>e.target.focus()}>
                            <Label>密码</Label>
                            <Input value={password} editable={!loading} onChangeText={text => this.handleInputChange(text, 'password')} textContentType="password" secureTextEntry={true} placeholder='请输入您的密码' password={true} />
                        </Item>
                        <Item stackedLabel last  onPress={e=>e.target.focus()}>
                            <Label>重复密码</Label>
                            <Input value={passwordRepeat} editable={!loading} onChangeText={text => this.handleInputChange(text, 'passwordRepeat')} textContentType="password" secureTextEntry={true} placeholder='重复密码您的密码' password={true} />
                        </Item>
                        <View style={{height: 110, display: 'flex', marginTop: 30, justifyContent: 'space-between'}}>
                        <Button disabled={loading} full danger onPress={this.handleRegBtn}>
                            {
                                loading && <Spinner color='red' />
                            }
                            <Text>注册</Text>
                        </Button>
                        </View>
                    
                    </Form>
                </Tab>
            
            </Tabs>
            
                
                
            </SessionLayout>
        )
    }
} 