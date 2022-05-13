import { View, Text } from "react-native";
import React from "react";

import FeedbackOption from "../FeedbackOption";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { FeedbackType } from "../Widget";
import { styles } from "./styles";

interface Props {
  onFeedbackChange: (param: FeedbackType) => void;
}

const FeecbackOptions = ({ onFeedbackChange }: Props) => {
  
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.title}>Deixe seu feedback</Text>
      <View
        style={styles.innerContainer}
      >
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <FeedbackOption key={key} title={value.title} imageSrc={value.image} onPress={() => onFeedbackChange(key as FeedbackType)} />
        ))}
      </View>
    </View>
  );
};

export default FeecbackOptions;
