//@ts-ignore
import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { global } from "../../../styles";
import { MainStyle } from "./style";
import { ImageSlider } from "react-native-image-slider-banner";
import DiscountAmount from "../../components/DiscountAmount";
import { useQuery } from "@apollo/client";
import { BANNER, BLOGS } from "../../graphql/queries";
import BlogIcon from "../../components/BlogIcon";
import { BlogsStyle } from './style';

const Main = ({ navigation }: any) => {
  const { data: items, loading:itemsload } = useQuery(BANNER);
  const { data, loading, error } = useQuery(BLOGS);
  console.log(items);
  return (
    <View style={global.screen}>
      <ScrollView style={global.content}>
        <View style={MainStyle.header}>
          <DiscountAmount summ={10} header="Ваша процент скидки" suffix="%" />
          <DiscountAmount summ={2034} header="Вы купили у нас на" suffix="₽" />
        </View>
        <View>
          {/* <Text style={MainStyle.description}>
            Похоже, вы не вошли в аккаунт
          </Text> */}
          <ImageSlider
            data={items?.carousel.map((image: any) => ({
              img: `${image.image}`,
            }))}
            timer={500}
            autoPlay
            preview={false}
            showIndicator
            activeIndicatorStyle={{ backgroundColor: "#dade98" }}
            caroselImageStyle={{
              marginHorizontal: "auto",
              resizeMode: "cover",
            }}
          />

          <View style={{ paddingHorizontal: 16 }}>
            <Text style={BlogsStyle.header}>Блоги</Text>
            {data?.blog.map((blog: any) => (
              <TouchableOpacity
                key={blog.id}
                onPress={() =>
                  navigation.navigate("Блоги", { itemId: blog.id, image: blog.image, filling: blog.filling, name: blog.name })
                }
              >
                <BlogIcon name={blog.name} image={blog.image} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Main;
