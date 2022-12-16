import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  btn: {
    width: 100,
    height: 40,
    backgroundColor: "#05BB83",
    borderRadius: 10,
  },
  txt: {
    color: "white",
    textAlign: "center",
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
