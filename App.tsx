import { StatusBar } from "expo-status-bar";
import React, { FC, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { client } from "./src/graphql/client";

import Main from "./src/screens/Main";
import Catalog from "./src/screens/Catalog";
import Cart from "./src/screens/Cart";
import ByCategory from "./src/screens/ByCategory";
import ProductInfo from "./src/screens/ProductInfo";
import Account from "./src/screens/Account";
import BlogArticle from "./src/screens/BlogArticle"
import { ApolloProvider } from "@apollo/client";
import { byCategory } from "./src/screens/ByCategory/style";
import { Text, View } from "react-native";

const Stack = createNativeStackNavigator();
function CatalogStackNavigator() {
  return(
    <Stack.Navigator>
    <Stack.Screen name="Меню" component={Catalog} />
    <Stack.Screen name="Категория" component={ByCategory}/>
    <Stack.Screen name="Item" component={ProductInfo}/>
  </Stack.Navigator>
  )
}

function MainStackNavigator() {
  return(
    <Stack.Navigator>
    <Stack.Screen name="Привет!" component={Main}/>
    <Stack.Screen name="Блоги" component={BlogArticle}/>

  </Stack.Navigator>
  )

}

function Tabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }: any) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Привет!") {
            iconName = focused ? "cafe-outline" : "cafe";
          } else if (route.name === "Меню") {
            iconName = focused ? "grid-outline" : "grid";
          } else if (route.name === "Корзина") {
            iconName = focused ? "cart-outline" : "cart";
          } else if (route.name === "Аккаунт") {
            iconName = focused ? "person-circle-outline" : "person-circle";
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: "#828770",
        tabBarInactiveTintColor: "#4E4138",
        headerShown: false
      })}
    >
      <Tab.Screen name="Привет!" component={MainStackNavigator} />
      <Tab.Screen name="Меню" component={CatalogStackNavigator} />
      <Tab.Screen name="Корзина" component={Cart} />
      <Tab.Screen name="Аккаунт" component={Account} />
      <Tab.Screen name="Тест" component={BlogArticle} />
    </Tab.Navigator>
  );
}




const App = () => {
  const time = new Date().getHours();

  // if(time === 11) {
  //   return (
  //     <View style={{flex: 1}}>
  //     <Text style={{flex: 1}}>Извините, мы работаем с 7:00 до 22:00. Увидимся утром!</Text>
  //     </View>

  //   )
  // }
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {/* <StackNavigation/> */}
        <Tabs  />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
