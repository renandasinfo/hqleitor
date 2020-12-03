import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, BackHandler} from 'react-native';
import { StatusBar } from 'expo-status-bar';




import Exit from 'react-native-vector-icons/Octicons';
Exit.loadFont();





export function Home({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white'}}>
          <TouchableOpacity style={styles.child1} 
              onPress={() => navigation.navigate('Leitor')}>
              
      
      
              <Text>Turma da Monica</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.child1} 
              onPress={() => navigation.navigate('Leitor')}>
              
              <Text>Menino Maluquinho</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.child1} 
                    onPress={() => { BackHandler.exitApp()}}>
                    <Exit name="sign-out" size={25} color="black"></Exit> 
                    <Text>Sair</Text>      
                </TouchableOpacity>
                
            
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    paddingTop: 40,
  },
  views: {
    width: 100,
    height: 100,
    margin: 15,
    borderRadius: 6,
    alignItems: "center",
  },

 child1: {
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