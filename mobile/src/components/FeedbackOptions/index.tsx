import { View, Text } from "react-native";
import React from "react";

import FeedbackOption from "../FeedbackOption";
import { feedbackTypes } from "../../utils/feedbackTypes";

const FeecbackOptions = () => {
  return (
    <View style={{
      flexDirection: "row",
      paddingHorizontal: 20,
      justifyContent: "center",
      width: "100%"
    }}>
      {Object.entries(feedbackTypes).map(([key, value]) => (
        <FeedbackOption key={key} title={value.title} imageSrc={value.image} />
      ))}
    </View>
  );
};

export default FeecbackOptions;
