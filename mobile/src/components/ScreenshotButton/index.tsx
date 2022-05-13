import { View, TouchableOpacity, Image } from "react-native";
import React from "react";

import { styles } from "./styles";
import { Trash, Camera } from "phosphor-react-native";
import { theme } from "../../theme";

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

const ScreenshotButton = ({ screenshot, onTakeShot, onRemoveShot }: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {screenshot ? (
        <View>
          <Image style={styles.backgroundImage} source={{ uri: screenshot }} />
          <Trash
            size={20}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <Camera size={24} color={theme.colors.text_secondary} weight="bold" />
      )}
    </TouchableOpacity>
  );
};

export default ScreenshotButton;
