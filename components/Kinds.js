import React, { Component } from 'react'
import {View,Image,FlatList,TouchableOpacity,Text,Dimensions,StyleSheet, TextInput} from 'react-native'
import { Icon } from '@ant-design/react-native';

const {width,scale} = Dimensions.get('window');
const s = width / 640;

const goods = [
    {
        title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price:'36.00',
        img:require('../assets/icon/shanghaojia.png')
    },
    {
        title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price:'36.00',
        img:require('../assets/icon/shupian.png')
    },
    {
        title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price:'36.00',
        img:require('../assets/icon/shanghaojia.png')
    },
    {
        title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price:'36.00',
        img:require('../assets/icon/shupian.png')
    },
    {
        title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price:'36.00',
        img:require('../assets/icon/shanghaojia.png')
    },
    {
        title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price:'36.00',
        img:require('../assets/icon/shupian.png')
    },
    
]

export default class Test extends Component {
    
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <TextInput style={{width:490*s,height:50*s,padding:0,paddingLeft:10}}
                                    placeholder='请输入商品名称'/>
                        <Icon name='search'/>
                    </View>
                </View>
                <View style={styles.nav}>
                    <TouchableOpacity>
                        <Text style={{color:'red'}}>综合</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>销售</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>新品</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>价格</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>信用</Text>
                    </TouchableOpacity>
                </View>
                <FlatList 
                    style={{backgroundColor:'#f4f4f4'}}
                    data={goods}
                    numColumns={2}
                    renderItem={({item})=>(
                        <View style={styles.good}>
                            <Image source={item.img} style={{height:120,width:120,marginTop:60*s}}/>
                            <Text style={{paddingTop:10}}>{item.title}</Text>
                            <Text style={{width:'100%',color:'red',paddingTop:3}}>{item.price}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        height:70*s,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1*s,
        justifyContent:'center',
        alignItems:'center'
    },
    search:{
        width:544*s,
        height:50*s,
        backgroundColor:'#eee',
        flexDirection:'row',
        alignItems:'center'
    },
    nav:{
        height:73*s,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'white'
    },
    good:{
        width:290*s,
        backgroundColor:'white',
        marginLeft:20*s,
        marginTop:20*s,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:20,
        alignItems:'center'
    }
})