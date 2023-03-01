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

const Bottom: FC = () => {
  const history = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    history.apply(value);
  };
  const tabs = [
    {
      key: "/home",
      title: "Главная",
      icon: <SiBuymeacoffee />,
    },
    {
      key: "/catalog",
      title: "Каталог",
      icon: <IoMdMenu />,
    },
    {
      key: "/cart",
      title: "Корзина",
      icon: <RiShoppingBasketFill />,
    },
    {
      key: "/account",
      title: "Аккаунт",
      icon: <RiAccountCircleFill />,
    },
  ];
  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
}

export default () => {
  return(
    <Routes>
        <Route path="/home">
          <HomeWidget/>
        </Route>
        <Route path="/catalog">
        <CatalogWidget/>
        </Route>
        <Route path="/cart">
          <CartWidget/>
        </Route>
        <Route path="/account">
          <AccountWidget/>
        </Route>
    </Routes>
  )
}

function HomeWidget(){
  return <Main/>
}

function CatalogWidget() {
  return <Catalog/>
}

function CartWidget() {
  return <Cart/>
}

function AccountWidget(){
  return <Account/>
}