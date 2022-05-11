import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    height: 48,
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 6,
    marginRight: 6,
  },
  removeIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  backgroundImage: {
    width: 48,
    height: 48,
    borderRadius: 6,
    borderColor: theme.colors.stroke,
    borderWidth: 1
  }
});
