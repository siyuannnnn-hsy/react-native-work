import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity,BackHandler,AsyncStorage, Alert,ToastAndroid} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from './index'

let firstClick = 0;
let rootUrl = "https://www.fastmock.site/mock/5f5b816cfc78f3ca6777ff6a27e2e1bd/api"
export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            isloading:false,
        }
        this.handleBack = this.handleBack.bind(this);
    }
    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBack)
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBack)
  }

  handleBack = () => {
    var timestamp = (new Date()).valueOf();
    if (timestamp - firstClick > 1000) {
        firstClick = timestamp;
        return false;
    } else {
        ToastAndroid.show('退出程序', ToastAndroid.SHORT);
        BackHandler.exitApp();
        return true;
    }
  }

    userhandle = (text) => {
        this.setState({username:text})
    }
    pwdhandle = (text) => {
        this.setState({pwd:text})
    }
    login = () => {
        this.setState({isloading:true})
        myFetch.post('./login',{
                username:this.state.username,
                pwd:this.state.pwd
            }).then(res=>{
              if(res.data.token == '1'){
                Alert.alert('账户已存在')
              }
              else if(res.data.token == '2'){
                Alert.alert('连接错误')
              }
              else{
                AsyncStorage.setItem('user',JSON.stringify(res.data))
                .then(()=>{
                    this.setState({isloading:false})
                    ToastAndroid.show('正在登录中...', 1000)
                    Actions.homePage();
                })
              }
              console.log(res.data)
            })
            
    }
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput placeholder="用户名" 
                onChangeText={this.userhandle}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput placeholder="密码" 
                secureTextEntry={true}
                onChangeText={this.pwdhandle}
            />
          </View>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.login}>
                <Text>登录</Text>
            </TouchableOpacity>
            <Text onPress={Actions.zhuce} style={{color:'blue',paddingTop:20}}>去注册一个吧！</Text>
        </View>
        {/* {
            this.state.isloading?<View style={{alignItems:'center'}}><Text>正在登录...</Text></View>:null
        } */}
      </View>
    );
  }
}