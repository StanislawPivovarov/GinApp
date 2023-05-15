import { StyleSheet } from "react-native";

export const Accounts = StyleSheet.create({
    wrapper: {
        alignContent: 'center'
    },
    buttons: {
        width: "70%",
        height: "100%",
        marginHorizontal: '15%',
        marginTop: 20,
        alignItems: 'center'
    },

    icon: {
        width: 120,
        height: 120,
        backgroundColor: "#dde19c",
        borderRadius: 60, 
        alignItems: 'center',
        justifyContent: 'center'
    },

    helloMsg: {
        marginTop: 20
    },

    names: {
        textAlign: 'center',
        fontSize: 18
    },

    time: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },

    actions: {
        marginTop: 20,
    },

    history: {
        marginBottom: 20,
        backgroundColor: "#dde19c",
        width: "100%",
        color: '#fff'
    },

    logout: {
        backgroundColor: "#F3411A",
        color: '#fff'
    }
})

export const SignUp = StyleSheet.create({
    wrapper: {
        alignContent: 'center',
    },
    buttons: {
        width: "70%",
        height: "100%",
        marginHorizontal: '15%',
        marginTop: 20,
        alignItems: 'center'
    },
})