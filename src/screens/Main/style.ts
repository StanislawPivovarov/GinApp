import { StyleSheet } from "react-native";

export const MainStyle = StyleSheet.create({
  header: {
    height: 100,
    width: "100%",
    backgroundColor: "#DDE19C",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  padding: {
    paddingVertical: 16,
  },
  swiper: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 15
  },

  requestButton: {
    backgroundColor: '#ECE3D2',
    color: '#000'
  }
});
