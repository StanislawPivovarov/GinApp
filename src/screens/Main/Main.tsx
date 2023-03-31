import React from "react";
import { ScrollView, View, Text } from "react-native";
import { global } from "../../../styles";
import { MainStyle } from "./style";

import MainWidget from "../../components/MainWidget";
import { Button } from "@ant-design/react-native";
import CatalogIcon from "../../components/CatalogIcon";
const Main = () => {
  return (
    <View style={global.screen}>
      <ScrollView style={global.content}>
        <View></View>
        <View style={MainStyle.header}>
          <MainWidget summ={10} />
          <MainWidget summ={10} />
        </View>
        <View>
          <Text style={MainStyle.description}>
            Похоже, вы не вошли в аккаунт
          </Text>
          <Button style={MainStyle.requestButton} type="ghost">
            Войти / зарегистрироваться
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default Main;
