import { View, Text } from "react-native";
import React from "react";

import { styles } from "./styles";

const Copyright = () => {
  return (
    <View style={{alignItems: "center"}}>
      <Text style={styles.text}>Feito por Amodeus R.</Text>
    </View>
  );
};

export default Copyright;
