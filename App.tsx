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
import Account from "./src/screens/Account";
import { ApolloProvider } from "@apollo/client";
import { byCategory } from "./src/screens/ByCategory/style";
import { Text, View } from "react-native";

const Stack = createNativeStackNavigator();
function CatalogStackNavigator() {
  return(
    <Stack.Navigator>
    <Stack.Screen headless="true" name="Каталог" component={Catalog} />
    <Stack.Screen name=" " component={ByCategory}/>
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

          if (route.name === "Главная") {
            iconName = focused ? "cafe-outline" : "cafe";
          } else if (route.name === "Каталог") {
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
      <Tab.Screen name="Главная" component={Main} />
      <Tab.Screen name="Каталог" component={CatalogStackNavigator} />
      <Tab.Screen name="Корзина" component={Cart} />
      <Tab.Screen name="Аккаунт" component={Account} />
      <Tab.Screen name="Тест" component={ByCategory} />
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
