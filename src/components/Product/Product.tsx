import { Button, View } from "@ant-design/react-native";
import React from "react";
import { product } from "./style";
import { Image, Text, TouchableOpacity } from "react-native";
import { IconOutline } from "@ant-design/icons-react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';

interface ProductProps {
  image: string,
  name: string,
  description: string,
  price: number
}

const Product = (props: ProductProps) => {
  return (

      <View style={product.wrapper}>
        <View style={product.coverWrapper}>
          <Image
            style={product.cover}
            source={{
              uri: `${props.image}`
            }}
          />
        </View>
        <View style={product.components}>
          <View style={product.infoWrapper}>
            <Text style={product.name}>{props.name}</Text>
            <Text style={product.description} numberOfLines={5}>
              {props.description}
            </Text>
            <View>
              <View style={product.buttonWrapper}>
                <Button style={product.toCart}>
                  <View style={product.cartComponents}>
                    <Text style={product.price}>{props.price}₽</Text>
                    <Icon name="cart-plus" size={16} color={"#4E4138"} />
                  </View>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </View>
  );
};

export default Product;
