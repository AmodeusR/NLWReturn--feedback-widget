import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface_secondary,
    width: 98,
    height: 112,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    marginHorizontal: 8,
    borderRadius: 12,
  },
  image: {
    width: 40,
    height: 40
  },
  title: {
    color: "#fff",
    fontFamily: theme.fonts.medium,
    marginTop: 4
  }
});