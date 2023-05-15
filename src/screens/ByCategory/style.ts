import {StyleSheet } from "react-native";

export const byCategory = StyleSheet.create({
    header: {
        minHeight: 100,
        backgroundColor: "#E4E8A8",
        padding: 8,
        flex: 1

    },
    cover: {
        height: 100,
        width: 100,
        borderRadius: 20,
        marginTop: 10
    
    },

    innerHeader: {
        flexDirection: 'row'
    },

    headerText: {
        fontSize: 24,
    },

    description: {
        fontSize: 16
    },

    textWrapper: {
        flexDirection: "column",
        flex: 1,
        marginLeft: 10
    }
})