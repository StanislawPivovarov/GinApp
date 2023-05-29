import { Platform, StatusBar, StyleSheet } from "react-native";

export const Info = StyleSheet.create({
    wrapper: {
        marginHorizontal: 16,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    currentUser: {
        marginTop: 20,
        fontSize: 20
    },

    form: {
        width: "100%",
        height: 300,
        backgroundColor: "#dade98",
        borderRadius: 20
    },

    input: {
        height: 50,
        marginHorizontal: 16,
        backgroundColor: "#fff",
        fontSize: 20,
        paddingLeft: 10,
        borderRadius: 20,
        marginVertical: 20
    },

    adress: {
        flexDirection: 'column'
    },

    adressHome: {
        flexDirection: 'row'
    },

    disclaimer: {
        textAlign: 'center'
    },

    saveButton: {
        height: 50,
        marginHorizontal: 16,
        backgroundColor: "#fff",
        fontSize: 20,
        borderRadius: 20,
        marginVertical: 20
    },

    infoHeader: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20
    }
})