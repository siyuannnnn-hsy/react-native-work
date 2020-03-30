import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity,AsyncStorage,ToastAndroid} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from './index'

let rootUrl = "https://www.fastmock.site/mock/5f5b816cfc78f3ca6777ff6a27e2e1bd/api"
export default class ZhuCe extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle = (text) => {
        this.setState({username:text})
    }
    pwdhandle = (text) => {
        this.setState({pwd:text})
    }
    zhuce = () => {
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
                    Actions.login();
                })
              }
              console.log(res.data)
              
            })
            ToastAndroid.show('注册成功', 1000)
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
                onPress={this.zhuce}>
                <Text>注册</Text>
            </TouchableOpacity>
            <Text onPress={Actions.login} style={{color:'blue',paddingTop:20}}>回到登录</Text>
        </View>
      
      </View>
    
        )
    }
}
