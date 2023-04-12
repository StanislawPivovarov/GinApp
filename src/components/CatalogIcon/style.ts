import { StyleSheet } from "react-native";

export const Icons = StyleSheet.create({
    component: {
        width: "100%",
        height: 150,
        borderRadius: 10,
        marginBottom: 20,
        overflow: "hidden",
        marginLeft: 8,
        backgroundColor: "#000"
      },
      cover: {
        width: "100%",
        height: "100%",
        opacity: 0.8,
        position: 'absolute',
      },
      title: {
        fontSize: 30,
        letterSpacing: 3,
        lineHeight: 20,
        zIndex: 10,
        width: '100%',
        height: "100%",
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: "bold",
        textAlign: "left",
        marginLeft: 20,
        verticalAlign: "middle",
        textTransform: "uppercase"
      }
})