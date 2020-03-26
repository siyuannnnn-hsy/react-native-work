import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    TextInput,
    Dimensions
  } from 'react-native';
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('window');
const s = width / 640;

export default class Home extends Component {
    render() {
        return (
            <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
              <ScrollView>
                <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'center',
                            height:76*s,
                            paddingTop:5,
                            paddingBottom:5,
                            backgroundColor:'#f23030'
                        }}>
                  <View style={styles.search}>
                        <Icon name='search1'  size={20} color='white' style={{paddingLeft:10}}/>
                        <TextInput style={{width:490*s,height:50*s,padding:0,paddingLeft:10}}
                                    placeholder='请输入商品名称' placeholderTextColor='white'/>
                    </View>
                    <Icon name="shoppingcart" size={20} color='white' style={{marginLeft:10}}/>
                </View>
                <View>
                    <ScrollView 
                        pagingEnabled={true} 
                        horizontal={true}
                        style={{height:270*s}}
                    >
                        <View style={styles.slide}>
                            <Image source={require('../assets/icon/1.png')}/>
                        </View>
                        <View style={styles.slide}>
                            <Image source={require('../assets/icon/2.png')}/>
                        </View>
                        <View style={styles.slide}>
                            <Image source={require('../assets/icon/1.png')}/>
                        </View>
                    </ScrollView>
                </View>
                <View style={{height:310,backgroundColor:'#f5f5f5'}}>
                    <View style={styles.box}>
                        <Image source={require('../assets/icon/s1.png')} style={styles.img}/>
                        <Text style={styles.txt}>居家维修保养</Text>
                    </View>  
                    <View style={styles.box}>
                        <Image source={require('../assets/icon/s2.png')} style={styles.img}/>
                        <Text style={styles.txt}>住宿优惠</Text>
                    </View>  
                    <View style={styles.box}>
                        <Image source={require('../assets/icon/s3.png')} style={styles.img}/>
                        <Text style={styles.txt}>出行接送</Text>
                    </View>  
                    <View style={styles.box}>
                        <Image source={require('../assets/icon/s4.png')} style={styles.img}/>
                    </View>  
                </View>
                <View style={{alignItems:'center'}}>
                    <Button style={styles.btn}>
                        发布需求
                    </Button>
                </View>
              </ScrollView>
            </SafeAreaView>
          </>
        
        )
    }
}

const styles = StyleSheet.create({
    slide:{
        width:width,
        height:200,
        backgroundColor:'#fd4c6d',
        justifyContent:'center',
        alignItems:'center'
    },
    box:{
        width:'100%',
        height:120*s,
        backgroundColor:'white',
        marginTop:5,
        flexDirection:'row'
    },
    txt:{
        fontSize:15,
        marginTop:25,
        marginLeft:30
    },
    btn:{
        width:300,
        height:65*s,
        borderRadius:10,
        color:'#fff',
        backgroundColor:'#f23030',
        textAlignVertical:'center'
    },
    search:{
        width:544*s,
        height:50*s,
        backgroundColor:'#fbb8b8',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10
    },
    img:{
        height:100*s,
        width:100*s,
        marginTop:5,
        marginLeft:10
    }
})