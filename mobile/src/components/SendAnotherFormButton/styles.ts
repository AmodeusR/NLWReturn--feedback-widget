import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.surface_secondary,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    marginTop: 24
  },
  buttonText: {
    fontFamily: theme.fonts.medium,
    color: "white",
    fontSize: 18
  }
})