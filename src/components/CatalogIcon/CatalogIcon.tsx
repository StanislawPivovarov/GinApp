
import { View, Text, Image } from "react-native";
import { Icons } from "./style";
//@ts-ignore
import React from "react";
interface IconProps {
  title: string;
  icon: string;
}

const CatalogIcon = (props: IconProps) => {
  return (
<View style={Icons.component}>
        <Image style={Icons.cover} source={{uri: `${props.icon}`}} alt="img" />
        <Text style={Icons.title}>{props.title}</Text>
      </View>
  );
};

export default CatalogIcon;
