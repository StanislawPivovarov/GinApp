import React from "react";
import { Image, View, Text } from "react-native";
import { Button, Carousel } from "@ant-design/react-native";
import { StyleSheet } from "react-native";

class MainCarousel extends React.Component<any, any> {
  carousel: null | Carousel | undefined;
  constructor(props: any) {
    super(props);
    this.state = {
      selectedIndex: 2,
      autoplay: true,
    };
  }
  onHorizontalSelectedIndexChange = (index: number) => {
    /* tslint:disable: no-console */
    this.setState({ selectedIndex: index });
  };
  onVerticalSelectedIndexChange(index: number) {
    /* tslint:disable: no-console */
  }
  render() {
    return (
      <View>
        <View>
          <Carousel
            style={styles.wrapper}
            selectedIndex={this.state.selectedIndex}
            autoplay
            infinite
            afterChange={this.onHorizontalSelectedIndexChange}
            ref={(ref) => (this.carousel = ref)}
          >
            <View
              style={[styles.containerHorizontal, { backgroundColor: "red" }]}
            >
              <Text>Carousel 1</Text>
            </View>
            <View
              style={[styles.containerHorizontal, { backgroundColor: "blue" }]}
            >
              <Text>Carousel 2</Text>
            </View>
            <View
              style={[
                styles.containerHorizontal,
                { backgroundColor: "yellow" },
              ]}
            >
              <Text>Carousel 3</Text>
            </View>
            <View
              style={[styles.containerHorizontal, { backgroundColor: "aqua" }]}
            >
              <Text>Carousel 4</Text>
            </View>
            <View
              style={[
                styles.containerHorizontal,
                { backgroundColor: "fuchsia" },
              ]}
            >
              <Text>Carousel 5</Text>
            </View>
          </Carousel>
        </View>
      </View>
    );
  }
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
