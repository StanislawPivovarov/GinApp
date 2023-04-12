import { StatusBar } from "expo-status-bar";
import React, { FC, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Main from './src/screens/Main'
import Catalog from './src/screens/Catalog'
import Cart from './src/screens/Cart'
import Account from './src/screens/Account'
import BlackTea from "./src/screens/BlackTea"

function Tabs() {
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator>
    <Tab.Screen name="Главная" component={Main}/>
    <Tab.Screen name="Каталог" component={Catalog}/>
    <Tab.Screen name="Корзина" component={Cart}/>
    <Tab.Screen name="Аккаунт" component={Account}/>
  </Tab.Navigator>
  )

}

const Stack = createNativeStackNavigator()
const App = () => {
  return(
    <>
  
    <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name="BlackTea" component={BlackTea}/>
    </Stack.Navigator>
      <Tabs />
    </NavigationContainer>
    </>
    
    )
}

export default App;