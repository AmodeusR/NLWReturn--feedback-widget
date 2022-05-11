import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {},
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  arrow: {
    position: "absolute",
    left: 0,
    top: 8
  },
  titleText: {
    color: "#fff",
    fontSize: 24,
    marginHorizontal: 8,
    fontFamily: theme.fonts.medium
  },
  image: {
    width: 32,
    height: 32
  },
  input: {
    padding: 12,
    height: 112,
    borderColor: theme.colors.stroke,
    borderWidth: 2,
    borderRadius: 8,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular,
    textAlignVertical: "top",
    marginBottom: 8,
  },
  buttons: {
    flexDirection: "row",
    marginBottom: 8,
  }
})