import React from 'react';
import { Item, Input, Label, Form, Button, Text, View, Tab, Tabs, Toast } from 'native-base';
import SessionLayout from '../../layout/SessionLayout';
import { User, Cloud } from 'leancloud-storage';
import { Keyboard } from 'react-native';

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            mobile: '',
            password: '',
            loading: false,
            isLogined: false,
            smsBtnText: '获取验证码',
            smsBtnDisabled: false,
            smsBtnCount: 60,
            sms: '',
        }
        
    }
    handleInputChange = (text, field) => {
        let obj = this.state;
        obj[field] = text;
        this.setState({
            ...obj
        })
        
    }
    handleToRegBtn = () =>{
        this.props.history.push('/register');
    }

    smsBtnTimeCounter = () => {
        let count = this.state.smsBtnCount;
        count = count-1;
        this.setState({
            smsBtnCount: count,
            smsBtnText: count+'s'
        })
        
        this.timer = setTimeout(this.smsBtnTimeCounter, 1000);
        if(count === 0){
            this.setState({
                smsBtnText: '获取验证码',
                smsBtnDisabled: false,
                smsBtnCount: 60,
            })
            clearTimeout(this.timer);
        }
       
    
    }

    handleSendSMSBtn = () => {
        Keyboard.dismiss();
        const { mobile } = this.state;
        

        if(mobile === ""){
            return Toast.show({
                text: '手机号码不得为空',
                buttonText: '好的',
                position: 'top'
            });
        }
        
        this.setState({
            smsBtnDisabled: true,
            smsBtnText: this.state.smsBtnCount+'s'
        })

        console.log(mobile);
        
        this.smsBtnTimeCounter();

        return Cloud.requestSmsCode(mobile).then( (success) => {
            console.log(success);
            
        },  (error) => {
            clearTimeout(this.timer);
            console.log(error);
            this.setState({
                smsBtnText: '获取验证码',
                smsBtnDisabled: false,
                smsBtnCount: 60,
            })
            if(error.toString().includes('无效的手机号码')){
                return Toast.show({
                    text: '无效的手机号码',
                    buttonText: '好的',
                    position: 'top'
                });

            }
            if(error.toString().includes('签名无效')){
                return Toast.show({
                    text: '短信验证服务暂停，请使用其他方式登录',
                    buttonText: '好的',
                    position: 'top'
                });

            }
            
            
        });

    }

    componentWillUnmount(){
        this.setState({
            logined: false,
            ready: false,
            currentUser: {},
        })
    }


    handleSMSLogin = () => {
        const {mobile, sms} = this.state;
        if(mobile === ""){
            return Toast.show({
                text: '手机号码不得为空',
                buttonText: '好的',
                position: 'top'
            });
        }
        if(sms === ""){
            return Toast.show({
                text: '验证码不得为空',
                buttonText: '好的',
                position: 'top'
            });
        }

        console.log({
            mobile, sms,
        });

        this.setState({
            loading: true,
        })


        User.signUpOrlogInWithMobilePhone(mobile, sms).then( async (success) => {
            if(success){
                try {
                    let currentUser = await User.currentAsync();
                
                    if(currentUser){
                        currentUser.isAuthenticated().then((authenticated) => {
                            console.log(authenticated);
                            if(authenticated){
                                this.props.history.push('/my');
                                this.setState({
                                    loading: false,
                                })
                            }
                        
                        }).catch(err=>{
                            this.setState({
                                logined: false,
                                ready: true,
                            })
                            
                        });
        
                    }else{
                        this.setState({
                            logined: false,
                            ready: true,
                        })
                    }
                    
                } catch (error) {
                    console.log(error);
                    
                }

                
            }
            
            // 成功
          },  (error) => {
              console.log(error);
              
            if(error.toString().includes('无效的手机号码')){
                this.setState({
                    loading: false,
                })
                return Toast.show({
                    text: '无效的手机号码',
                    buttonText: '好的',
                    position: 'top'
                });

            }
            if(error.toString().includes('无效的短信验证码')){
                this.setState({
                    loading: false,
                })
                return Toast.show({
                    text: '无效的手机验证码',
                    buttonText: '好的',
                    position: 'top'
                });

            }

            
            
          });
        
    }

    render(){
        const {loading, smsBtnText, smsBtnDisabled} = this.state;
        
        
        return (
            
            <SessionLayout history={ this.props.history} match={this.props.match}>
            <Tabs>
                <Tab heading="手机登录">
                    <Form style={{padding: "11%"}}>
                    <Item stackedLabel>
                    <Label>手机号</Label>
                    <Input editable={!loading} keyboardType="email-address" textContentType="mobile" email={true}  placeholder='输入您的手机号' onChangeText={text => this.handleInputChange(text, 'mobile')}/>
                    </Item>
                    <Item stackedLabel style={{display: "flex", flexDirection: "row"}}>
                        
                        <Input editable={!loading} onChangeText={text => this.handleInputChange(text, 'sms')} textContentType="number"  placeholder='输入手机验证码' password={true} />
                        <Button danger disabled={smsBtnDisabled}  onPress={this.handleSendSMSBtn }>
                         <Text>{smsBtnText}</Text>
                        </Button>
                    </Item>
                    <View style={{height: 110, display: 'flex', justifyContent: 'space-between'}}>
                    <Button disabled={loading} full danger onPress={this.handleSMSLogin}>
                        <Text>登录</Text>
                    </Button>
                    <Button full onPress={this.handleToRegBtn}>
                        <Text>注册</Text>
                    </Button>
                    </View>
                    
                    </Form>
                </Tab>
                <Tab heading="密码登录">
                <Form style={{padding: "11%"}}>
                    <Item stackedLabel>
                    <Label>用户名</Label>
                    <Input editable={!loading} keyboardType="email-address" textContentType="emailAddress" email={true}  placeholder='用户名/手机号' onChangeText={text => this.handleInputChange(text, 'email')}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>密码</Label>
                        <Input editable={!loading} onChangeText={text => this.handleInputChange(text, 'password')} textContentType="password" secureTextEntry={true} placeholder='输入您的密码' password={true} />
                    </Item>
                    <View style={{height: 110, display: 'flex', justifyContent: 'space-between'}}>
                    <Button full danger>
                        <Text>登录</Text>
                    </Button>
                    <Button full onPress={this.handleToRegBtn}>
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