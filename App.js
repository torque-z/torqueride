import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BottomNavigator from "./src/components/BottomNavigator/BottomNavigator";
import BookingFlow from "./src/screens/BookingFlowScreen/BookingFlow";
import Payment from "./src/screens/BookingFlowScreen/Payment";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";

export default function App() {
  return (
    <View>
      <HomeScreen />
      <BottomNavigator />
    </View>
  );
}
