import React,{useState,useEffect}  from 'react';
import {StyleSheet,View,Text, Image, BackHandler, ToastAndroid} from 'react-native';
import {Router,Scene,Tabs, Actions} from 'react-native-router-flux';
import {Gird,Icon} from '@ant-design/react-native';
import Kinds from './components/Kinds';
import Home from './components/Home';
import Shop from './components/Shop';
import My from './components/My';
import FaBu from './components/FaBu';
import SplashScreen from 'react-native-splash-screen';

const styles = StyleSheet.create({
   
});

const App = () => {
  
  let now = 0;
  useEffect(()=>{
		SplashScreen.hide();
		
	},[])
  return (
    <Router
          backAndroidHandler={()=>{
            if(Actions.currentScene != 'home'){
              Actions.pop();
              return true;
            }else{
              if(new Date().getTime()-now<2000){
                BackHandler.exitApp();
              }else{
                ToastAndroid.show('确定要退出吗',100);
                now = new Date().getTime();
                return true;
              }
            }
            
          }}
      >
      <Scene key='root'>
        <Tabs key='tabbar' hideNavBar activeTintColor='red' 
            header={null}
           inactiveTintColor='blue' tabBarStyle={{backgroundColor:'white'}}
        >
          <Scene key='home' title='首页' 
            icon={
                ({focused})=><Icon color={focused?'red':'gray'} name='home'/>}
                component={Home}
          />
          <Scene key='kinds' title='商品分类' 
              icon={({focused})=><Icon  color={focused?'red':'gray'} name='car'/>}
                   component={Kinds}
          />
          <Scene key='shop' title='购物车' 
              icon={({focused})=><Icon  color={focused?'red':'gray'} name='shopping'/>}
                   component={Shop}
          />
          <Scene key='My' title='个人中心' 
              icon={({focused})=><Icon  color={focused?'red':'gray'} name='user'/>}
                  //  component={My}
          >
            <Scene key='my' component={My}/>
            <Scene key='fabu' component={FaBu} hideTabBar/>
          </Scene>
          
        </Tabs>
       </Scene>
    </Router>
   
  )
};

export default App;
