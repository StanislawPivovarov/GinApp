import { Platform, StatusBar, StyleSheet } from "react-native";

export const History = StyleSheet.create({
    wrapper: {
        width: "90%",
        marginHorizontal: 16,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    currentUser: {
        marginTop: 20,
        fontSize: 20
    }
})