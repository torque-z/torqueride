import { Image, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./MyTripsStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
const MyTrips = () => {
  return (
    <View style={styles.container}>
      {/* Header Row */}
      <View style={styles.row1}>
        <Ionicons name="chevron-back" size={24} color="black" />
        <Text>Overview</Text>
        <Image
          style={styles.icon}
          source={require("../../assets/icons/happy-face.png")}
        />
      </View>
      {/* My Trips */}
      <View>
        <Text>My Trips</Text>
      </View>

      {/* Booking Events */}
      <View style={styles.row2}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Past</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Booking</Text>
        </TouchableOpacity>
      </View>

      {/* Trip Data */}
      <View>
        <Text>Februray 06 - 10:50 AM</Text>
        <View style={{ flexDirection: "row" }}>
          <View>
            {/* Car Card */}
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../../assets/images/cars/carblue.jpg")}
            />
          </View>
          <View>
            <View style={{ flexDirection: "row" }}>
              {/* Pickup point */}
              <Image
                style={styles.icon}
                source={require("../../assets/icons/pickuppoint.png")}
              />
              <Text>Roauble Light Blue Street</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              {/* droppoint */}
              <Image
                style={styles.icon}
                source={require("../../assets/icons/droppoint.png")}
              />
              <Text>24/5 Wolf Street</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyTrips;
