import React from "react";
import { View } from "react-native";
import { widget } from "./style";

interface Widget{
    summ: number
}

const MainWidget = (props: Widget) => {
  return (
    <View style={widget.back}>
      <View>
        <p>Сумма скидки</p>
        <p>{props.summ}%</p>
      </View>
    </View>
  );
};

export default MainWidget;
