import { StyleSheet } from "react-native";

export const Icons = StyleSheet.create({
    component: {
        width: 150,
        height: 150,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#000"
      },
      cover: {
        width: "100%",
        height: "100%",
        opacity: 0.8,
        position: 'absolute',
      },
      title: {
        fontSize: 15,
        lineHeight: 20,
        zIndex: 10,
        width: '100%',
        height: "100%",
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontStyle: "italic",
        textAlign: "center",
        verticalAlign: "middle"
      }
})