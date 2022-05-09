import { TouchableOpacity, TouchableOpacityProps, Image, ImageProps, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  imageSrc: ImageProps;
}


const FeedbackOption = ({title, imageSrc, ...props}: Props) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Image style={styles.image} source={imageSrc} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FeedbackOption;
