import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

const SendAnotherFormButton = ({ ...props }) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>Quero enviar outro</Text>
    </TouchableOpacity>
  );
};

export default SendAnotherFormButton;
