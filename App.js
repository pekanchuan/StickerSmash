import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native-web";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25292e",
  },
});
