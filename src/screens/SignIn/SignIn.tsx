import { signOut } from "firebase/auth";
import React from "react";
import { View, Text } from "react-native";
import { auth } from "../../auth/firebase";
import { Accounts } from "../Account/style";
import { Button } from "@ant-design/react-native";

const SignIn = ({navigation}: any) => {
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
  
  
    return(
        <View style={Accounts.SignUp}>
        <Text style={Accounts.day}>{good}</Text>
        <Text style={Accounts.currentUser}>{auth.currentUser?.phoneNumber}</Text>
        <Button style={Accounts.formSend} onPress={() => navigation.navigate('История заказов')}>История заказов</Button>
        <Button style={Accounts.formSend} onPress={() => navigation.navigate('Информация')}>Информация о Вас</Button>
        <Button style={Accounts.formSend} onPress={() => { signOut(auth); navigation.navigate("Авторизация")}}>Выйти из аккаунта</Button>
      </View>
    )
}

export default SignIn;