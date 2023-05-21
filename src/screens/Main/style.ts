import { StyleSheet } from "react-native";

export const MainStyle = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: "#DDE19C",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 16

  },
  padding: {
    paddingVertical: 16,
    paddingHorizontal: 16
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
  }
});

export const BlogsStyle = StyleSheet.create({
  header: {
      fontSize: 25,
      marginVertical: 10
  }
})