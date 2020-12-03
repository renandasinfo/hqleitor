import React from 'react';
import { StyleSheet,View,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewPager from '@react-native-community/viewpager';

export function Leitor() {
  return (
        <ViewPager style={styles.viewPager} initialPage={0}>
          <View key="1">
            <Image source={require('../../assets/capa.png')}></Image>
          </View>
          <View key="2">
          <Image source={require('../../assets/1.png')}></Image>
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
