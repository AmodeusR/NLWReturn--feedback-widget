import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { captureScreen } from "react-native-view-shot";
import { api } from "../../libs/api";
import * as FileSystem from "expo-file-system";

import { FeedbackType } from "../Widget";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { styles } from "./styles";
import { theme } from "../../theme";

import ScreenshotButton from "../ScreenshotButton";
import Button from "../Button";

interface Props {
  feedbackType: FeedbackType;
  onFeedbackReturn: () => void;
  onFeedbackSubmission: (param: boolean) => void;
}

const FeedbackForm = ({
  feedbackType,
  onFeedbackReturn,
  onFeedbackSubmission,
}: Props) => {
  const [comment, setComment] = useState("");
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const handleFormSubmission = async () => {
    if (isSendingFeedback) return;

    setIsSendingFeedback(true);

    const screenshotBase64 =
      screenshot &&
      await FileSystem.readAsStringAsync(screenshot, { encoding: "base64" });

    try {
      await api.post("/feedbacks", {
        type: feedbackTypeInfo.title,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment,
      });

      onFeedbackSubmission(true);
    } catch (error) {
      console.warn(error);
    } finally {
      setIsSendingFeedback(false);
    }
  };

  const handleScreenshotTake = () => {
    captureScreen({
      format: "jpg",
      quality: 0.8,
    })
      .then((uri) => setScreenshot(uri))
      .catch((error) => console.warn(error));
  };

  const handleScreenshotRemove = () => {
    setScreenshot(null);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrow} onPress={onFeedbackReturn}>
        <ArrowLeft
          size={24}
          weight="bold"
          color={theme.colors.text_secondary}
        />
      </TouchableOpacity>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Image style={styles.image} source={feedbackTypeInfo.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
        onChangeText={setComment}
      />
      <View style={styles.buttons}>
        <ScreenshotButton
          screenshot={screenshot}
          onRemoveShot={handleScreenshotRemove}
          onTakeShot={handleScreenshotTake}
        />
        <Button
          isLoading={isSendingFeedback}
          onPress={handleFormSubmission}
          onError={submitError}
        />
      </View>
    </View>
  );
};

export default FeedbackForm;
