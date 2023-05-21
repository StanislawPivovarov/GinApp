import React from "react";
import { View, Image, Text } from "react-native";
import { ScrollView } from "react-native";
import { byCategory } from "./style";
import Product from "../../components/Product";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { gql, useQuery } from "@apollo/client";
// import image from '../../assets/fff.jpg'

const ByCategory = ({navigation, route}: any) => {
  const {categoryId, categoryImage, categoryName, categoryDescription} = route.params;

  const image = JSON.stringify(categoryImage).replace(/['"]+/g, '')
  const name = JSON.stringify(categoryName).replace(/['"]+/g, '')
  const category = JSON.stringify(categoryId).replace(/['"]+/g, '')
  const desciption = JSON.stringify(categoryDescription).replace(/['"]+/g, '')

const items = gql`
query {
  product(where: {product_category: {id: {_eq: ${category}}}}) {
    category
    description
    id
    image
    name
    price
  }
}
`

const {data, loading} = useQuery(items);

console.log(data);
if (loading) {
  return(
    <Text> loading</Text>
  )
}

  return (
    <ScrollView>
      <View style={byCategory.header}>
        <View style={byCategory.innerHeader}>
          <View>
            <Image
              style={byCategory.cover}
              source={{
                uri: `${image}`,
              }}
            />
          </View>
          <View style={byCategory.textWrapper}>
            <Text style={byCategory.headerText}>{name}</Text>
            <Text style={byCategory.description}>
              {categoryDescription}
            </Text>
          </View>
        </View>
      </View>

      {
        data?.product.map((item: any) => (
          <TouchableOpacity key={item.id} onPress={() => navigation.navigate("Item")}>
          <Product name={item.name} description={item.description} price={item.price} image={item.image}/>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  );
};

export default ByCategory;
