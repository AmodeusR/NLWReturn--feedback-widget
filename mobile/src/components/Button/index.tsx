import React from "react";
import { TouchableOpacity, TouchableOpacityProps, ActivityIndicator, Text } from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
 isLoading: boolean;
}

const Button = ({ isLoading }: Props) => {
  return (
    <TouchableOpacity style={styles.button}>
      {isLoading ?
        <ActivityIndicator color={theme.colors.text_on_brand_color} /> :
        <Text style={styles.buttonText}>Enviar feedback</Text>
      }
    </TouchableOpacity>
  );
};

export default Button;
