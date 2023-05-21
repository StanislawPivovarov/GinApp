import { Grid, View } from "@ant-design/react-native";
import React from "react";
import { Text , Image} from "react-native";
import {BlogIcons} from './style'

interface Props {
  name: String,
  image: String,
}


const BlogIcon = (props: Props) => {
  return (
    <View style={BlogIcons.icons}>
        <Image style={BlogIcons.cover} source={{
            uri: `${props.image}`
          }}/>
          <Text style={BlogIcons.name}>{props.name}</Text>
    </View>
  );
};

export default BlogIcon;
