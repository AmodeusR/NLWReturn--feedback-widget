import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "90%"
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 5
  },
  title: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_on_brand_color,
    fontSize: 24
  }
})