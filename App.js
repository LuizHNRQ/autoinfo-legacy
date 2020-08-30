import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import LoginScreen from "./screens/Login";
import Dashboard from "./screens/Dashboard";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen></LoginScreen> */}
      <Dashboard></Dashboard>
    </View>
  );
}

const styles = StyleSheet.create({});
