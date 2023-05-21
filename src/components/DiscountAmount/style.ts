import { StyleSheet } from "react-native";

export const widget = StyleSheet.create({
    back: {
        backgroundColor: "#fff",
        borderRadius: 10,
        width: 120,
        height: 'auto',
    },
    inner: {
        padding: 5,
        flexDirection: 'column'
    },
    summa: {
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        fontSize: 25
    },
    description: {
        margin: 0,
        display: 'flex',
        alignContent: 'center',
        marginBottom: 10
    }
})