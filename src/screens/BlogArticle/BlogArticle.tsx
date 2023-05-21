import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Article } from "./style";

const BlogArticle = ({route, navigation}: any) => {
    const {itemId, image, filling, name} = route.params;
    console.log(route.params)

    const finalfilling = JSON.stringify(filling).replace(/\\n/g, '\n').replace(/(^"|"$)/g, '')
    const finalimg = JSON.stringify(image).replace(/['"]+/g, '')
    const finalname= JSON.stringify(name).replace(/['"]+/g, '')
  return (
    <ScrollView>
      <Image style={Article.image} source={{uri: `${finalimg}`}} />
      <Text style={Article.name}>{finalname}</Text>
      <Text style={Article.filling}>
    {finalfilling}
      </Text>
    </ScrollView>
  );
};

export default BlogArticle;
