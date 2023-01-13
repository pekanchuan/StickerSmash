import { View, Image } from "react-native";

import Animated from "react-native-reanimated";

const AnimatedImage = Animated.createAnimatedComponent(Image);

const EmojiSticker = ({ imageSize, stickerSource }) => {
  return (
    <View style={{ top: -350 }}>
      <AnimatedImage
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
};

export default EmojiSticker;
