//@ts-ignore
import React from "react";
import { ScrollView, View, Text } from "react-native";
import { global } from "../../../styles";
import { MainStyle } from "./style";

import { Button } from "@ant-design/react-native";
import CatalogIcon from "../../components/CatalogIcon";
import DiscountAmount from "../../components/DiscountAmount";
import MainCarousel from "../../components/MainCarousel";
import Blogs from "../../components/Blogs";

const Main = () => {
  return (
    <View style={global.screen}>
      <ScrollView style={global.content}>
        <View></View>
        <View style={MainStyle.header}>
          <DiscountAmount summ={10} header="Ваша процент скидки" suffix="%" />
          <DiscountAmount summ={2034} header="Вы купили у нас на" suffix="₽"/>
        </View>
        <View>
          {/* <Text style={MainStyle.description}>
            Похоже, вы не вошли в аккаунт
          </Text> */}
          <Blogs/>
        </View>
      </ScrollView>
    </View>
  );
};

export default Main;
