import React from "react";
import { Image, View, Text, Dimensions } from "react-native";
import { Button } from "@ant-design/react-native";
import { StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import { CAROUSEL } from "../../graphql/queries";
import SVGatorComponent from "../../assets/logo";

const { data, loading, error } = useQuery(CAROUSEL);

const MainCarousel = () => {

    return (
        <View style={{ flex: 1 }}>

        </View>
    );
}

export default MainCarousel;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    width: "100%",
    height: 150,
    borderRadius: 20
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    height: 150,
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 150,
  },
  text: {
    color: "#fff",
    fontSize: 36,
  },
});
