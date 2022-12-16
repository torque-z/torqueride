import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./PaymentStyle";

import { Ionicons } from "@expo/vector-icons";
import { flex } from "tailwindcss-classnames";

export default function Payment() {
  const paymentMethods = [
    {
      id: 1,
      src: require("../../../assets/icons/master.png"),
      desc: "Master",
    },
    {
      id: 2,
      src: require("../../../assets/icons/paypal.png"),
      desc: "Paypal",
    },
    {
      id: 3,
      src: require("../../../assets/icons/visa.png"),
      desc: "Visa",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Ionicons name="chevron-back" size={24} color="black" />
        <Text>Payment</Text>
      </View>
      <View>
        <Text>Select Your Payment</Text>
      </View>
      <View style={styles.row2}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Cash</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Business</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Credit</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={styles.cardimg}
          source={require("../../../assets/images/visagold.jpg")}
        />
      </View>
      <View>
        <Text>Payment Method</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {paymentMethods.map((i) => (
          <View style={styles.iconp}>
            <Image source={i.src} />
            <Text>{i.desc}</Text>
          </View>
        ))}
      </View>
      {/* Recent Activity Component Starts Here*/}
      <View>
        <Text>Recent Activity</Text>
      </View>
      {/* Car Card */}
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../../../assets/images/cars/carblue.jpg")}
          />
        </View>

        <View>
          {/* Pickup Card */}
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.icon}
              source={require("../../../assets/icons/pickuppoint.png")}
            />
            <Text>Roauble Light Blue Street</Text>
          </View>
          {/* Destination Card */}
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.icon}
              source={require("../../../assets/icons/droppoint.png")}
            />
            <Text>24/5 Wolf Street</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
