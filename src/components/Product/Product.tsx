import { Button, View } from "@ant-design/react-native";
import React from "react";
import { product } from "./style";
import { Image, Text } from "react-native";
import { IconOutline } from "@ant-design/icons-react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Product = () => {
  return (
    <View style={product.wrapper}>
      <View style={product.coverWrapper}>
        <Image
          style={product.cover}
          source={{
            uri: "https://img.freepik.com/free-vector/watercolor-international-tea-day-illustration_23-2149348084.jpg?w=2000",
          }}
        />
      </View>
      <View style={product.components}>
        <View style={product.infoWrapper}>
          <Text style={product.name}>Эко чай</Text>
          <Text style={product.description} numberOfLines={5}>
            fffjjf Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            maiores officia quaerat! Magni eum sint excepturi dolores obcaecati,
            ab maiores nulla ipsam aliquam odit consequuntur exercitationem
            ratione ipsum dolorem ex.{" "}
          </Text>
          <View>
            <View style={product.buttonWrapper}>
              <Button style={product.toCart}>
                <View style={product.cartComponents}>
                  <Text style={product.price}>2990₽</Text>
                  <Icon name="cart-plus" size={16} color={"#4E4138"}/>
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
