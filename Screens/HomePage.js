import HomePageTab1 from './HomePageTab1';
import HomePageTab2 from './HomePageTab2';
import LiveNews from './LiveNews';



import { View, Text, StyleSheet, SafeAreaView, } from 'react-native'
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();


const For_you =()=>{
  return(
    <View style={{flex: 1,}}><HomePageTab1 /></View>
  )
}

const Home =()=>{
  return(
    <View style={{flex: 1,}}><HomePageTab2 /></View>
  )
}

const Live =()=>{
  return(
    <View style={{flex: 1,}}><LiveNews /></View>
  )
}

const Header =()=>{
  return(
<View styles={[styles.jst, {flexDirection: 'row',}]}>
  <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20,marginVertical: 10,}}>
<Text style={{color: '#FFFFFF', fontSize: 30, borderColor: 'white', borderWidth: 2,}}>Home</Text>

<View style={{height: 50, width: 50, backgroundColor: 'white', borderRadius: 50, }}></View>
      </View>
      </View>
  )
}

export default function HomePage() {
  return (
    <View style={styles.container}>
     
      <Header />
    
    <NavigationContainer independent={true}>
      <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: '#0A0A0A', color: 'FFFFFF', },
        tabBarLabelStyle: { fontSize: 12, color: '#FFFFFF', },
        tabBarIndicatorStyle: {backgroundColor: '#FFFFFF',},
        
        
      }}
      
      >
      <Tab.Screen name="For you" component={For_you} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Live" component={Live} />
    </Tab.Navigator>
    </NavigationContainer>
  
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    paddingTop: 40,
    
  },
  jst: {
  flexDirection: 'row',
  
  },
 
})