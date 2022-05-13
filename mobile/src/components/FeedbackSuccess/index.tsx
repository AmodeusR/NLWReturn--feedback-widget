import { View, Text, Image } from "react-native";
import React from "react";

import SendAnotherFormButton from "../SendAnotherFormButton";

import { styles } from "./styles";
import successIcon from "../../assets/success.png";

interface Props {
  onFeedbackReset: () => void;
}

const FeedbackSuccess = ({ onFeedbackReset }: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={successIcon} />
      <Text style={styles.title}>Agradecemos o feedback!</Text>
      <SendAnotherFormButton onPress={onFeedbackReset} />
    </View>
  );
};

export default FeedbackSuccess;
