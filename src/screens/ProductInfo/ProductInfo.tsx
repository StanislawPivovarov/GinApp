import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { ProdInfo } from "./style";
import test from "../../../assets/test.jpg";
import { Button } from "@ant-design/react-native";
import { Ionicons } from "@expo/vector-icons";

const ProductInfo = () => {
  return (
    <ScrollView>
      <View style={ProdInfo.wrapper}>
        <Image
          style={ProdInfo.cover}
          source={{
            uri: "https://i.vimeocdn.com/portrait/58832_300x300.jpg",
          }}
        />
        <View style={ProdInfo.priceWrapper}>
          <Text style={ProdInfo.name}>Эко чай Эко чай Эко чай Эко чай</Text>
        </View>

        <Button style={ProdInfo.buttonWrapper}>
          <View style={ProdInfo.buttonText}>
            <Text style={ProdInfo.add}>Добавить в корзину</Text>
            <View style={ProdInfo.price}>
              <Text style={ProdInfo.money}>200₽</Text>
              <Ionicons name="cart" color={"#4E4138"} size={21} />
            </View>
          </View>
        </Button>
        <Text style={ProdInfo.desciption}>
          Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          optio obcaecati pariatur consectetur ullam sed dicta quasi esse, et
          inventore illum at error accusantium cupiditate sequi commodi fugiat
          velit ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
          earum adipisci similique modi sequi voluptatibus sunt doloremque
          aliquid veritatis nemo. Sed nobis nihil in quia eligendi? Aperiam
          expedita temporibus illum! ipsum dolor sit amet consectetur
          adipisicing elit. Eos necessitatibus minima dolore blanditiis ut
          tempore, inventore corporis laboriosam optio voluptatem perferendis
          doloribus ratione quaerat omnis error cum quos facere soluta! Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Sit nulla commodi
          vel velit, quae eaque ut perspiciatis odio natus esse aliquam
          cupiditate culpa ratione corporis cumque. Iste vitae consequatur
          similique.
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProductInfo;
