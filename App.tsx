import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/screens/Main";
import { global } from "./styles";

export default function App() {
  return (
    <View style={global.entryPoint}>
      <Main />
    </View>
  );
}
