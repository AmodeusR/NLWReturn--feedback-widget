import { View, Text } from "react-native";
import React from "react";

import FeedbackOption from "../FeedbackOption";
import { feedbackTypes } from "../../utils/feedbackTypes";

import { styles } from "./styles";

const FeecbackOptions = () => {
  return (
    <>
    <Text style={styles.title}>Deixe seu feedback</Text>
    <View
      style={styles.container}
    >

      {Object.entries(feedbackTypes).map(([key, value]) => (
        <FeedbackOption key={key} title={value.title} imageSrc={value.image} />
      ))}
    </View>
    </>
  );
};

export default FeecbackOptions;
