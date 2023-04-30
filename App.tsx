import { StatusBar } from "expo-status-bar";
import React, { FC, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {client} from './src/graphql/client'


import Main from './src/screens/Main'
import Catalog from './src/screens/Catalog'
import Cart from './src/screens/Cart'
import Account from './src/screens/Account'
import BlackTea from "./src/screens/BlackTea"
import { ApolloProvider } from "@apollo/client";

function Tabs() {
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator
    screenOptions={({route}:any) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if(route.name === "Главная") {
          iconName = focused
          ? 'cafe-outline'
          : 'cafe';
        } else if (route.name === "Каталог") {
          iconName = focused
          ? 'grid-outline'
          : 'grid'
        } else if (route.name === "Корзина") {
          iconName = focused
          ? 'cart-outline'
          : 'cart'
        } else if (route.name === "Аккаунт") {
          iconName = focused
          ? 'person-circle-outline'
          : 'person-circle'
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#828770",
      tabBarInactiveTintColor: "#4E4138"
    })}
    >
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
    <ApolloProvider client={client}>
  
    <NavigationContainer
    >
    {/* <Stack.Navigator>
     <Stack.Screen name="BlackTea" component={BlackTea}/>
    </Stack.Navigator> */}
      <Tabs />
    </NavigationContainer>
    </ApolloProvider>
    
    )
}

export default App;