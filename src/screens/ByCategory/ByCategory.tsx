import React from "react";
import { View, Image, Text } from "react-native";
import { ScrollView } from "react-native";
import { byCategory } from "./style";
import Product from "../../components/Product";
import { TouchableOpacity } from "react-native-gesture-handler";
// import image from '../../assets/fff.jpg'

const ByCategory = () => {
  return (
    <ScrollView>
      <View style={byCategory.header}>
        <View style={byCategory.innerHeader}>
          <View>
            <Image
              style={byCategory.cover}
              source={{
                uri: "https://img.freepik.com/premium-vector/pink-light-square-frame-pink-light-square-pink-light-square-banner_1189-2997.jpg",
              }}
            />
          </View>
          <View style={byCategory.textWrapper}>
            <Text style={byCategory.headerText}>Чай эко</Text>
            <Text style={byCategory.description}>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              blanditiis fugit illo aliquam at quas distinctio voluptatibus quo
              iusto aut reprehenderit nemo est harum recusandae pariatur
              adipisci optio, incidunt consequuntur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quae eum quisquam eveniet mollitia.
              Soluta optio quod magni illum. Cum quas repellat molestiae saepe,
              nobis labore facilis rerum cupiditate ut unde?
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <Product />
      </TouchableOpacity>

      <Product />
      <Product />
      <Product />
    </ScrollView>
  );
};

export default ByCategory;
