import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native-web";

const PlaceholderImage = require("./assets/images/background-image.png");

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={{ color: "#fff" }}>
        Open up App.js to start working on your app!
      </Text> */}
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
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
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
