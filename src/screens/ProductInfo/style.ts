import { StyleSheet } from "react-native";

export const ProdInfo = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
  },

  cover: {
    width: "100%",
    height: 300,
  },

  name: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  desciption: {
    fontSize: 18,
    marginHorizontal: 8,
  },

  priceWrapper: {
    marginHorizontal: 8,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },

  buttonWrapper: {
    borderRadius: 20,
    backgroundColor: "#DADE93",
    height: 50,
    width: "95%",
    marginHorizontal: 8,
    marginVertical: 10
  },

  buttonText: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 8,
    width: "100%",
    alignItems: "center",
  },

  price: {
    flexDirection: "row",
    alignItems: "center",
  },

  money: {
    fontSize: 20,
    color: "#4E4138",
    marginRight: 5
  },

  add: {
    fontSize: 20,
    color: "#4E4138"
  }
});
