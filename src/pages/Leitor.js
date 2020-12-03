import React from 'react';
import { StyleSheet,View,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewPager from '@react-native-community/viewpager';

export function Leitor() {
  return (
        <ViewPager style={styles.viewPager} initialPage={0}>
          <View key="1">
            <Image source={require('../../assets/capa.png')} style={{width:420,height:600, marginTop: 70}}></Image>
          </View>
          <View key="2">
          <Image source={require('../../assets/1.png')} style={{width:420,height:600, marginTop: 70}}></Image>
          </View>
          <View key="3">
          <Image source={require('../../assets/2.png')} style={{width:420,height:600, marginTop: 70}}></Image>
          </View>
          <View key="4">
          <Image source={require('../../assets/3.png')} style={{width:420,height:600, marginTop: 70}}></Image>
          </View>
          <View key="5">
          <Image source={require('../../assets/4.png')} style={{width:420,height:600, marginTop: 70}}></Image>
          </View>
          <View key="6">
          <Image source={require('../../assets/5.png')} style={{width:420,height:600, marginTop: 70}}></Image>
          </View>
          <View key="7">
          <Image source={require('../../assets/6.png')} style={{width:420,height:600, marginTop: 70}}></Image>
          </View>
          <View key="8">
          <Image source={require('../../assets/7.png')} style={{width:420,height:600, marginTop: 70}}></Image>
          </View>
          <View key="9">
          <Image source={require('../../assets/8.png')} style={{width:420,height:600, marginTop: 70}}></Image>
          </View>
          <View key="10">
          <Image source={require('../../assets/9.png')} style={{width:420,height:600, marginTop: 70}}></Image>
          </View>
          <View key="11">
          <Image source={require('../../assets/10.png')} style={{width:420,height:600, marginTop: 70}}></Image>
          </View>
          <View key="12">
          <Image source={require('../../assets/11.png')} style={{width:420,height:600, marginTop: 70}}></Image>
          </View>
          <View key="13">
          <Image source={require('../../assets/12.png')} style={{width:420,height:600, marginTop: 70}}></Image>
          </View>
          <View key="14">
          <Image source={require('../../assets/13.png')} style={{width:420,height:600, marginTop: 70}}></Image>
          </View>
          <View key="15">
          <Image source={require('../../assets/14.png')} style={{width:420,height:600, marginTop: 70}}></Image>
          </View>
          <View key="16">
          <Image source={require('../../assets/15.png')} style={{width:420,height:600, marginTop: 70}}></Image>
          </View>
          <View key="17">
          <Image source={require('../../assets/16.png')} style={{width:420,height:600, marginTop: 70}}></Image>
          </View>
        </ViewPager>
      );
    };
    
    const styles = StyleSheet.create({
      viewPager: {
        flex: 1,
        alignItems: 'center',

  },
  Text:{
    color: 'black',
  },
  views1:{
    width: 360,
    height: 70,
    flexDirection: "row",
  },
  views2:{
    width: 350,
    height: 635,
    alignItems: 'center'
  },
  views3:{
    width: 360,
    height: 35,
  },
  
  child1: {
    backgroundColor: '#ff9900',
  },
  child2: {
    backgroundColor: 'white',
  },
  child3: {
    backgroundColor:'#FF9900',
    shadowColor: '#ffffff',
    alignItems: 'center',

  
    width: 150,
    height: 100,
    shadowOpacity: 0.0,
    shadowRadius: 3,
    elevation: 10,
    padding:30,
    margin: 20,
  },
    
});
