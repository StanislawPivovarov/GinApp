import React from "react";
import { View, Text } from "react-native";
import { widget } from "./style";

interface Widget{
    summ: number,
    header: string,
    suffix: string
}

const DiscountAmount = (props: Widget) => {
  return (
    <View style={widget.back}>
      <View style={widget.inner}>
        <Text style={widget.description}>{props.header}</Text>
        <Text style={widget.summa}>{props.summ}{props.suffix}</Text>
      </View>
    </View>
  );
};

export default DiscountAmount;
