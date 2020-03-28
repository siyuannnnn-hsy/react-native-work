import React, { Component } from 'react'
import { Text, View,Image,StyleSheet,AsyncStorage ,TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper';
import Button from 'react-native-button'

export default class SwiperPage extends Component {
    start = ()=>{
        console.log('aaaa')
        AsyncStorage.setItem('isInstall','true',()=>{
            this.props.afterInstall();
        });
        
    }
    render() {
        return (
                <Swiper style={styles.wrapper} showsButtons={false}>
                    <View style={styles.slide1}>
                        <Image style={styles.img} source={require('../assets/slide.png')}/>
                        <TouchableOpacity style={styles.start}  onPress={this.start}>
                            <Text style={{color: '#fff'}}>开始体验</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.slide1}>
                        <Image style={styles.img} source={require('../assets/slide.png')}/>
                    </View>
                    <View style={styles.slide1}>
                        <Image style={styles.img} source={require('../assets/slide.png')}/>
                    </View>
                </Swiper>
        )
    }
}
const styles = StyleSheet.create({
    wrapper:{},
    img:{
        width:'100%',
        height:'100%'
    },
    slide1:{
        flex:1,
        height:'100%',
        alignItems:'center',
    },
    start:{
        bottom:100,
        width:120,
        height:40,
        color:"#fff",
        textAlignVertical:'center',
        backgroundColor:'gray',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
        // zIndex:99
    }
})