import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { getBottomSpace } from "react-native-iphone-x-helper";

const buttonSize = 64;

export const styles = StyleSheet.create({
  button: {
    width: buttonSize,
    height: buttonSize,
    borderRadius: 32,
    backgroundColor: theme.colors.brand,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 15,
    bottom: getBottomSpace() + 20,
  },
  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: getBottomSpace() + 20,
    alignItems: "center"
  },
  indicator: {
    backgroundColor: theme.colors.text_primary,
    width: 36,
  },
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "90%",
    paddingVertical: 10
  },
  title: {
    color: "#fff",
    fontSize: 24,
  },
});
