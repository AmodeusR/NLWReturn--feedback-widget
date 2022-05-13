import React from "react";
import { TouchableOpacity, TouchableOpacityProps, ActivityIndicator, Text } from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
 isLoading: boolean;
 onError: boolean;
}

const Button = ({ isLoading, onError, ...props }: Props) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      {isLoading ?
        <ActivityIndicator color={theme.colors.text_on_brand_color} /> :
          <Text style={styles.buttonText}>
            { onError ?
              "Algo deu errado :(" :
              "Enviar feedback"
            }
          </Text>
      }
    </TouchableOpacity>
  );
};

export default Button;
