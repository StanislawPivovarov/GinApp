import { StyleSheet } from "react-native";

export const Component = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        marginHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 50
    },
    descriptionWrapper: {
        width: 150
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    price: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 23,
        marginBottom: 10
    }
})