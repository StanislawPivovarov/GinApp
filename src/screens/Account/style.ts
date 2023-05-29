import { Platform, StatusBar, StyleSheet } from "react-native";

export const Accounts = StyleSheet.create({
    SignUp: {
        width: "90%",
        marginHorizontal: 16,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    day: {
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 20,
        textTransform: "uppercase",
        fontWeight: 'bold',
        marginTop: 30
    },


    text: {
        fontSize: 20,
        textAlign: 'center'
    },

    form: {
        width: "100%",
        height: 400,
        backgroundColor: "#DADE93",
        borderRadius: 20,
        marginTop: 20
    },

    formTel: {
        backgroundColor: "#fff",
        height: 70,
        fontSize: 20,
        marginHorizontal: 20,
        paddingLeft: 20,
        borderRadius: 20
    },

    formTelText: {
        fontSize: 18,
        marginVertical: 10,
        marginLeft: 25,
        marginTop: 20
    },

    formSend: {
        marginTop: 10,
        borderRadius: 20,
        height: 50,
        opacity: 0.75,
        marginHorizontal: 20
    },


    formConfirm: {
        fontSize: 18,
        marginVertical: 10,
        marginLeft: 25,
        marginTop: 20
    },
    
    capchainfo: {
        marginHorizontal: 20,
        marginVertical: 20,
        textAlign: 'center'
    },

    currentUser: {
        textAlign: "center",
        fontSize: 20,
        marginBottom: 20
    },
    
})