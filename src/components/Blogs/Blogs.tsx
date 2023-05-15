import { View } from "@ant-design/react-native";
import { Text, TouchableOpacity } from "react-native";
import React from "react";
import BlogIcon from "../BlogIcon";
import { BlogsStyle } from "./style";
import SVGatorComponent from "../../assets/logo";
import { BLOGS } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

const Blogs = () => {
  const { data, loading, error } = useQuery(BLOGS);
  if (loading) {
    return (
      <View style={{ height: 500, alignItems: "center" }}>
        <SVGatorComponent />
        <Text>Блоги загружаются</Text>
      </View>
    );
  }
  if (error) {
    console.log(error);
    return console.log(error);
  }

  return (
    <View>
      <Text style={BlogsStyle.header}>Блоги</Text>
      {data?.blog.map((blog: any) => (
        <TouchableOpacity key={blog.id}>
            <BlogIcon name={blog.name} image={blog.image}/>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Blogs;
