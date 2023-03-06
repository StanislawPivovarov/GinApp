import { StatusBar } from "expo-status-bar";
import React, { FC, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from './src/screens/Main'
import Catalog from './src/screens/Catalog'
import Cart from './src/screens/Cart'
import Account from './src/screens/Account'

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

const App = () => {
  return(
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
    )
}

export default App;