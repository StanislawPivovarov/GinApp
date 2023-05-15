import { StyleSheet } from "react-native";

export const product = StyleSheet.create({
  wrapper: {
    padding: 8,
    backgroundColor: "#EEE7DA",
    marginTop: 10,
    marginHorizontal: 8,
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 10,
    flex: 1,
  },

  cover: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  coverWrapper: {
    display: "flex",
  },

  description: {
    color: "#4E4138"
  },

  infoWrapper: {
    flex: 1,
    flexWrap: "nowrap",
  },

  components: {
    flexDirection: "column",
    marginLeft: 10,
    flex: 1,
  },

  name: {
    fontSize: 20,
    color: "#4E4138",
    fontWeight: 'bold'
  },

  toCart: {
    marginVertical: 10,
    width: "45%",
    borderRadius: 50,
    backgroundColor: "#DDE19C",
    border: "none",
    justifyContent: 'space-evenly'
  },

  buttonWrapper: {
    flexDirection: "row-reverse",
  },

  price: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: "#4E4138",
  },

  cartComponents: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: "80%",
    alignItems: 'center'
  }
});
