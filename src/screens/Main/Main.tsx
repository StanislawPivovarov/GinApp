import React, { useRef } from "react";
import { ScrollView, View, Text} from "react-native";
import { global } from "../../../styles";
import { MainStyle } from "./style";
import Header from "../../components/Header";

import MainWidget from "../../components/MainWidget";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom'
import { Button } from "@ant-design/react-native";
const Main = () => {
    
  return (
    <View style={global.screen}>
      <Header name="Главная" />
      <ScrollView style={global.content} >
        <View style={MainStyle.header}>
            <MainWidget summ={10}/>
            <MainWidget summ={10}/>
        </View>
        <View>
          <Text style={MainStyle.description}>Похоже, вы не вошли в аккаунт</Text>
          <Button style={MainStyle.requestButton} type="ghost">Войти / зарегистрироваться</Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default Main;
