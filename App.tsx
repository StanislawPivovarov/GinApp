import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {SiBuymeacoffee} from '@react-icons/all-files/si/SiBuymeacoffee'
import {IoMdMenu} from '@react-icons/all-files/io/IoMdMenu'
import {RiShoppingBasketFill} from '@react-icons/all-files/ri/RiShoppingBasketFill'
import {RiAccountCircleFill} from '@react-icons/all-files/ri/RiAccountCircleFill'

import Main from "./src/screens/Main";
import { global } from "./styles";


export default function App() {
  const tabs = [
    {
        key: '/home',
        title: 'Главная',
        icon: <SiBuymeacoffee />
    },
    {
        key: '/catalog',
        title: 'Каталог',
        icon: <IoMdMenu/>
    },
    {
        key: '/cart',
        title: 'Корзина',
        icon: <RiShoppingBasketFill/>
    },
    {
        key: '/account',
        title: 'Аккаунт',
        icon: <RiAccountCircleFill/>
    }
]
  return (
    <View style={global.entryPoint}>
      <Main />
    </View>
  );
}
