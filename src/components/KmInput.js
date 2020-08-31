import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";

import Colors from "../constants/Colors";

const KmInput = (props) => {
  return (
    <View style={styles.kmInputContainer}>
      <Text style={styles.font}>{props.children}</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.font2}>Km</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  kmInputContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  font: {
    width: 120,
    fontSize: 20,
  },
  font2: {
    fontSize: 20,
  },
  input: {
    width: 120,
    fontSize: 20,
    borderWidth: 1,
    borderBottomColor: "black",
    marginHorizontal: 10,
    borderRadius: 4,
    backgroundColor: "white",
  },
});

export default KmInput;
