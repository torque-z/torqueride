import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const Riders = (props) => {
  const [loaded] = useFonts({
    MontserratRegular: require("../../assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.icon} source={props.item.riderimg} />
      </View>
      <View style={styles.container1}>
        <View style={styles.content}>
          <Text style={styles.h1}>{props.item.name}</Text>
          <Text style={styles.h1}>{props.item.desc}</Text>
          <Text style={styles.h1}>$0.5/Km</Text>
        </View>
        <View>
          <Image
            style={styles.icon1}
            source={require("../../assets/icons/phone.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default Riders;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
  },
  icon: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  icon1: {
    width: 40,
    height: 40,
    borderRadius: 20,
    left: 50,
    marginTop: 10,
  },
  h1: {
    fontFamily: "MontserratRegular",
  },
  container1: {
    flexDirection: "row",
    backgroundColor: "#EEEEEE",
    width: 260,
    borderRadius: 20,
  },
  content: {
    marginLeft: 15,
    marginTop: 5,
  },
});
