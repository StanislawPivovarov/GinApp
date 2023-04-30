import { RefreshControl, ScrollView } from "react-native";
import CatalogIcon from "../../components/CatalogIcon";
//@ts-ignore
import React from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import { useQuery } from "@apollo/client";
import { CATEGORIES } from "../../graphql/queries";
import { Text } from "react-native";
import SVGatorComponent from "../../assets/logo";
import { Flex, View } from "@ant-design/react-native";

const Catalog = () => {

    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  const { data, loading, error } = useQuery(CATEGORIES);
  if (loading) {
    return(
        <View style={{height: 500, alignItems: 'center'}}>
        <SVGatorComponent/>
        </View>

    )
  }
  if(error) {
    console.log(error);
    return(
        console.log(error)
    )
  }
  return (
    <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
        >
      {data?.category.map((category: any) => (
        <CatalogIcon
        key={category.id}
          title={category?.name}
          icon={category?.image}
        />
      ))}
    </ScrollView>
  );
};

export default Catalog;
