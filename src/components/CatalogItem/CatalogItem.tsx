import { View, Image, Text } from "react-native";
import React from "react";
import { Button } from "@ant-design/react-native";
import { Component } from "./style";

interface ItemProps {
  imageUrl: string;
  name: string;
  description: string;
  price: string;
}

const CatalogItem = (props: ItemProps) => {
  return (
    <View style={Component.wrapper}>
        <View>
        <Image
        style={Component.image}
        source={{
          uri: `${props.imageUrl}`,
        }}
      />
        </View>
      
      <View style={Component.descriptionWrapper}>
        <Text style={Component.name}>{props.name}</Text>
        <Text>{props.description}</Text>
      </View>
      <View>
        <Text style={Component.price}>{props.price}₽</Text>
        <Button>В корзину</Button>
      </View>
    </View>
  );
};

export default CatalogItem;
