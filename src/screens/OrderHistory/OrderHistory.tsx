import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native";
import { History } from "./styles";
import { auth } from "../../auth/firebase";

const OrderHistory = (navigation: any) => {
    return(
        <SafeAreaView>
            <View style={History.wrapper}>
                <Text style={History.currentUser}>Пользователь: {auth.currentUser?.phoneNumber}</Text>

            </View>
        </SafeAreaView>
    )
}

export default OrderHistory;