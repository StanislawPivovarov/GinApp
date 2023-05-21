import { StyleSheet } from "react-native";

export const Article = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column'
    },

    image: {
        height: 400
    },

    name: {
        fontSize: 20,
        marginVertical: 10,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: "center"
    },

    filling: {
        marginHorizontal: 8,
        fontSize: 18,
        textAlign:'justify',
        
    }
})