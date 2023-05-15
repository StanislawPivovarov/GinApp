import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Accounts, SignUp } from "../Catalog/style";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@ant-design/react-native";
const Account = () => {
  const time = new Date().getHours();
  var good;
  if (time >= 7 && time < 12) {
    good = "Доброе утро ";
  }
  if (time >= 12 && time < 18) {
    good = "Добрый день ";
  }

  if (time >= 18 && time <= 22) {
    good = "Добрый вечер ";
  }
  console.log(time);

  const logged: Boolean = false;

  if (!logged) {
    return (
      <View style={SignUp.wrapper}>
        <View style={SignUp.buttons}>
          <Text>{good}</Text>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <View style={Accounts.wrapper}>
        <View style={Accounts.buttons}>
          <View style={Accounts.icon}>
            <Ionicons
              name="person-circle-outline"
              size={100}
              color={"#4E4138"}
            />
          </View>
          <View style={Accounts.helloMsg}>
            <Text style={Accounts.time}>{good}, </Text>
            <Text style={Accounts.names}>Имя!</Text>
            <View style={Accounts.actions}>
              <Button style={Accounts.history}>История заказов</Button>
              <Button style={Accounts.logout}>Выйти из аккаунта</Button>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Account;
