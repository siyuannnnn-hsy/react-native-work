import React, { Component } from 'react'
import {StyleSheet,View,Text, ScrollView, Image, ImageBackground,Dimensions,AsyncStorage,Animated,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';

const {width} = Dimensions.get('window');
const s = width / 640;

export default class My extends Component {
    constructor(){
        super();
        this.state = {
            imageUrl:require('../assets/icon/use.png')
        }
    }
    takephoto = ()=>{
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64:true
          }).then(image => {
            this.setState({
                imageUrl:{uri:image.path}
            })
         }).then(
            async ()=>{
                await AsyncStorage.setItem('imageUrl',JSON.stringify(this.state.imageUrl),
                    ()=>{console.log('store success')}
                )}
            );
        }


    componentDidMount(){
        AsyncStorage.getItem('imageUrl')
            .then((res)=>{
                    this.setState({
                    imageUrl:JSON.parse(res)
                })
            })
    }

    render() {
        return (
            <ScrollView>
                <View style={{backgroundColor:'#eeeeee',height:1400*s}}>
                    <View style={{backgroundColor:'white',height:440*s}}>
                        <ImageBackground style={{height:380*s}} source={require('../assets/icon/beijing.png')}>
                            <View style={{alignItems:'center',justifyContent:'center',paddingTop:53*s}}>
                                <TouchableOpacity onPress={()=>{this.takephoto()}}>
                                        <Image source={this.state.imageUrl}
                                            style={{width:100,height:100,borderRadius:50}}    
                                        />
                                </TouchableOpacity>                               
                                <Text style={{fontSize:20,paddingTop:10}}>BINNU AHILLON</Text>
                            </View>
                        </ImageBackground>
                        <View style={{flexDirection:'row'}}>
                            <Icon name='user' size={25} color='#bbb' style={{paddingLeft:20}}/>
                            <Text style={{fontSize:15,paddingTop:5,paddingLeft:10}}>我的个人中心</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor:'white',height:400*s,marginTop:1}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.box}>
                                <Icon name='setting' size={25} style={{paddingLeft:30}} color='#bbb'/>
                                <Text style={styles.txt}>账户管理</Text>
                            </View>
                            <View style={styles.box}>
                                <Icon name='database' size={25} style={{paddingLeft:30}} color='#bbb'/>
                                <Text style={styles.txt}>收货地址</Text>
                            </View>
                            <View style={styles.box}>
                                <Icon name='idcard' size={25} style={{paddingLeft:30}} color='#bbb'/>
                                <Text style={styles.txt}>我的信息</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.box}>
                                <Icon name='addfile' size={25} style={{paddingLeft:30}} color='#bbb'/>
                                <Text style={styles.txt}>我的订单</Text>
                            </View>
                            <View style={styles.box}>
                                <Icon name='qrcode' size={25} style={{paddingLeft:30}} color='#bbb'/>
                                <Text style={styles.txt}>我的二维码</Text>
                            </View>
                            <View style={styles.box}>
                                <Icon name='flag' size={25} style={{paddingLeft:30}} color='#bbb'/>
                                <Text style={styles.txt}>我的积分</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.box}>
                                <Icon name='heart' size={25} style={{paddingLeft:30}} color='#bbb'/>
                                <Text style={styles.txt}>我的收藏</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',height:80*s,backgroundColor:'white',marginTop:1}}>
                        <Icon  name='tagso' size={25} style={{paddingLeft:20,marginTop:10}} color='#bbb'/>
                        <Text style={styles.txt2}>E族活动</Text>
                    </View>
                    <View style={{height:330*s,backgroundColor:'white',marginTop:1}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.box2}>
                                <Icon name='rocket1' size={25} style={{paddingLeft:30}} color='#bbb'/>
                                <Text style={{paddingLeft:5,marginTop:8}}>居家维修保养</Text>
                            </View>
                            <View style={styles.box2}>
                                <Icon name='printer' size={25} style={{paddingLeft:30}} color='#bbb'/>
                                <Text style={styles.txt}>出行接送</Text>
                            </View>
                            <View style={styles.box2}>
                                <Icon name='team' size={25} style={{paddingLeft:30}} color='#bbb'/>
                                <Text style={styles.txt}>我的受赠人</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.box2}>
                                <Icon name='table' size={25} style={{paddingLeft:30}} color='#bbb'/>
                                <Text style={{paddingLeft:5,marginTop:8}}>我的住宿优惠</Text>
                            </View>
                            <View style={styles.box2}>
                                <Icon name='dotchart' size={25} style={{paddingLeft:30}} color='#bbb'/>
                                <Text style={styles.txt}>我的活动</Text>
                            </View>
                            <View style={styles.box2}>
                                <Icon name='iconfontdesktop' size={25} style={{paddingLeft:30}} color='#bbb'/>
                                <Text style={styles.txt} onPress={()=>Actions.fabu()} >我的发布</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Text style={{paddingTop:30,color:'#bbb'}}>BINNU DHILLON  |  退出</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    box:{
        width:'28%',
        height:100*s,
        marginTop:13,
        marginLeft:20
    },
    box2:{
        width:'28%',
        height:120*s,
        marginTop:20,
        marginLeft:20
    },
    txt:{
        paddingLeft:14,
        marginTop:8,
        fontSize:14
    },
    txt2:{
        paddingLeft:14,
        marginTop:13,
        fontSize:15
    }
})