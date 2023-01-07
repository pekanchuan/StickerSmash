import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";

const PlaceholderImage = require("./assets/images/background-image.png");

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
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
  footContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
