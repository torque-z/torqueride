import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { styles } from "./HMStyle";
import Riders from "../../components/Riders";
import rider from "../../../datasource/riders.js";
import { TouchableOpacity } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const HomeScreen = () => {
  const [loaded] = useFonts({
    Mexon: require("../../../assets/fonts/Mexon.otf"),
    OmegaSans: require("../../../assets/fonts/OmegaSans.ttf"),
    MontserratRegular: require("../../../assets/fonts/Montserrat-Regular.ttf"),
    MontserratBold: require("../../../assets/fonts/Montserrat-Bold.ttf"),
    Helvetica: require("../../../assets/fonts/Helvetica.ttf"),
    HelveticaBold: require("../../../assets/fonts/Helvetica-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  return (
    // Main Container
    <View>
      {/* Header Starts */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/menu.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/happy-face.png")}
          />
        </TouchableOpacity>
      </View>
      {/* Header Ends */}

      {/* Start your Journey */}
      <View style={styles.row1}>
        <Text style={styles.h3}>Start Your Journey</Text>
      </View>
      {/* Start your Journey ends */}

      {/* Pickup and Destination */}
      <View style={styles.container2}>
        <View style={styles.row2}>
          <View style={styles.bgs}>
            <Image
              style={styles.icon1}
              source={require("../../../assets/icons/pickuppoint.png")}
            />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={[styles.h2]}>Choose Pickup Point</Text>
            <SelectList
              data={data}
              boxStyles={styles.dropdown}
              arrowicon={null}
            />
          </View>
        </View>
        <View style={styles.row2}>
          <Image
            style={styles.icon1}
            source={require("../../../assets/icons/droppoint.png")}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={[styles.h2]}>Destination</Text>
            <SelectList data={data} boxStyles={styles.dropdown} />
          </View>
        </View>
      </View>
      {/* Pickup and Destination */}

      <View style={styles.row3}>
        <View style={styles.col1}>
          <View style={[styles.bg1, { backgroundColor: "#05AC78" }]}>
            <Image
              style={styles.iconL}
              source={require("../../../assets/icons/savedloc.png")}
            />
          </View>
          <Text style={styles.h21}>10 Places Traveled</Text>
        </View>

        <View style={styles.col1}>
          <View style={[styles.bg1, { backgroundColor: "black" }]}>
            <Image
              style={styles.iconL}
              source={require("../../../assets/icons/home2.png")}
            />
          </View>
          <Text style={styles.h21}>6 Saved Places</Text>
        </View>
      </View>

      <View>
        <Text style={styles.h22}>Near by Riders</Text>
        <View>
          <FlatList
            data={rider}
            renderItem={({ item }) => <Riders item={item} />}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
