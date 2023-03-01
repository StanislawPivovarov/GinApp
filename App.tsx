import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SiBuymeacoffee } from "@react-icons/all-files/si/SiBuymeacoffee";
import { IoMdMenu } from "@react-icons/all-files/io/IoMdMenu";
import { RiShoppingBasketFill } from "@react-icons/all-files/ri/RiShoppingBasketFill";
import { RiAccountCircleFill } from "@react-icons/all-files/ri/RiAccountCircleFill";

import { global } from "./styles";
import { useLocation, useNavigate, MemoryRouter as Router, Routes, Route} from "react-router-dom";
import { TabBar } from "antd-mobile";

import Main from "./src/screens/Main";
import Catalog from './src/screens/Catalog';
import Cart from './src/screens/Cart';
import Account from './src/screens/Account';

const App = () => {
  return(
    <Main/>
  )
}

export default App;