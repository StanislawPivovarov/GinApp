import { StyleSheet } from "react-native";

export const BlogIcons = StyleSheet.create({
    icons: {
        width: "100%",
        height: 120,
        backgroundColor: 'red',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        flex: 1,

    },
    cover: {
        height: 100,
        width: 100,
        borderRadius: 10,
    },
    name: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#4E4138',
        fontSize: 20,
        width: "90%",
        flex: 1
    }
})