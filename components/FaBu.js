import React, { Component } from 'react'
import {View,Text, ScrollView,StyleSheet,ToastAndroid} from 'react-native'
import { Icon } from '@ant-design/react-native'
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class FaBu extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            page:1,
            count:1
        }
    }
    
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=13&page='+this.state.page)
        .then(res=>res.json())
        .then(res=>{
            this.setState({data:res.data})
        })
    }

    componentDidUpdate(count,page){
        console.log(this.state.count);
        console.log(this.state.page)
        if(this.state.count !== this.state.page){
            let page = this.state.count;
            fetch('https://cnodejs.org/api/v1/topics?limit=13&page='+page)
                .then(res=>res.json())
                .then(res=>{
                    this.setState({
                        page:this.state.count,
                        data:res.data
                    })
                })

            }
        }
    
      

    render() {
        return (
            <View style={{backgroundColor:'#eee'}}>
                <View style={{height:40,width:'100%',backgroundColor:'red',flexDirection:'row',alignItems:'center'}}>
                    <Icon name='left' style={{paddingLeft:10}} onPress={()=>Actions.pop()}/>
                    <Text style={{color:'white',paddingLeft:120,fontSize:17}}>我的发布</Text>
                    <Button color='red'style={{marginLeft:100,color:'white'}} >· · ·</Button>
                </View>
                <ScrollView>
                    <View style={{backgroundColor:'white',paddingTop:10}}>
                        {
                            this.state.data.map((item)=>(
                                <View style={styles.row}>
                                    <Text style={styles.txt}>
                                        {item.title ? (item.title.length > 15 ? item.title.substr(0, 15) + "..." : item.title) : ""}
                                        </Text>
                                    <Text style={styles.txt2}>{item.create_at}</Text>
                                    {(parseInt(Math.random()*10))%2==1? <Text style={styles.txt3}>已回复 </Text>: <Text style={styles.txt4}>待回复</Text>}
                                </View>
                            ))
                        }
                    </View>
                    <View style={{backgroundColor:'white',height:80,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Button 
                            style={{backgroundColor:'red',color:'white',borderRadius:8,height:25,width:70}}
                            onPress={() => {
                                if(this.state.page == '1'){
                                    ToastAndroid.show("这已经是第一页啦", ToastAndroid.SHORT)
                                }else{
                                    this.setState({
                                        count:this.state.count-1
                                    })
                                }  
                            }}
                        >上一页</Button>
                        <Text style={{marginLeft:50}}>第{this.state.page}页</Text>
                        <Button 
                            style={{backgroundColor:'red',color:'white',marginLeft:50,borderRadius:8,height:25,width:70}} 
                            onPress={() => {
                                this.setState({
                                    count:this.state.count+1
                                })
                                
                            }}
                        >下一页</Button>
                    </View>
                </ScrollView>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    row:{
        height:20,
        width:'100%',
        margin :5,
        marginLeft:20,
        flexDirection:'row'
    },
    txt:{
        height:20,
        width:200,
        fontSize:15
    },
    txt2:{
        width:80,
        height:20
    },
    txt3:{
        marginLeft:5
    },
    txt4:{
        marginLeft:5,
        color:'red'
    }
})