import { View } from "@ant-design/react-native";
import { Text } from "react-native";
import React from "react";
import BlogIcon from "../BlogIcon";
import { BlogsStyle } from "./style";

const Blogs = () => {
    return(
        <View>
                  <Text style={BlogsStyle.header}>Блоги</Text>
            <BlogIcon/>
        </View>
    )
}

export default Blogs;