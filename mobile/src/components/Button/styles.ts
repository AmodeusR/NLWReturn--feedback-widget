import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.brand,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: 6
  },
  buttonText: {
    fontSize: 16,
    color: theme.colors.text_on_brand_color,
    fontFamily: theme.fonts.medium
  }
})