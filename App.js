import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import LoginScreen from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Garage from "./screens/Garage";
import AddCar from "./screens/AddCar";
import AddReview from "./screens/AddReview";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen></LoginScreen>
      {/* <Dashboard></Dashboard> */}
      {/* <Garage></Garage> */}
      {/* <AddCar></AddCar> */}
      {/* <AddReview></AddReview> */}
    </View>
  );
}

const styles = StyleSheet.create({});
