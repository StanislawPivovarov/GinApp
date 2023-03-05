import React from "react";
import { View, Text } from "react-native";
import { widget } from "./style";

interface Widget{
    summ: number
}

const MainWidget = (props: Widget) => {
  return (
    <View style={widget.back}>
      <View style={widget.inner}>
        <Text style={widget.description}>Сумма скидки</Text>
        <Text style={widget.summa}>{props.summ}%</Text>
      </View>
    </View>
  );
};

export default MainWidget;
