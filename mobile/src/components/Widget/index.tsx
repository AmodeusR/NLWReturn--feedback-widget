import React, { useState, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import FeedbackOptions from "../FeedbackOptions";
import FeedbackForm from "../FeedbackForm";
import FeedbackSuccess from "../FeedbackSuccess";
import Copyright from "../Copyright";

import { styles } from "./styles";
import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";

export type FeedbackType = keyof typeof feedbackTypes;


const Widget = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleBottomSheetOpen = () => {
    bottomSheetRef.current?.expand();
  };

  const handleFeedbackReset = () => {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleBottomSheetOpen}>
        <ChatTeardropDots size={36} color={theme.colors.text_on_brand_color} />
      </TouchableOpacity>

      <BottomSheet ref={bottomSheetRef} snapPoints={[1, 300]} backgroundStyle={styles.modal} handleIndicatorStyle={styles.indicator}>
        <View style={styles.container}>
          { feedbackSent ?
            <FeedbackSuccess onFeedbackReset={handleFeedbackReset} /> :
            <>
              { feedbackType ?
                <FeedbackForm feedbackType={feedbackType} onFeedbackReturn={handleFeedbackReset} onFeedbackSubmission={setFeedbackSent} /> :
                <FeedbackOptions onFeedbackChange={setFeedbackType} />
              }
            </>
          }
          <Copyright />
        </View>
      </BottomSheet>
    </>
  );
};

export default gestureHandlerRootHOC(Widget);
