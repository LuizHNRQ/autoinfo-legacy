import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Picker } from "react-native";

import Colors from "../constants/Colors";
import HeaderCustom from "../components/Header";
import Footer from "../components/Footer";
import CarInfo from "../components/CarInfo";
import ButtonCustom from "../components/ButtonCustom";
import DataAndInfo from "../components/DataAndInfo";
import CarReview from "../components/CarReview";

const PickerCustom = (props) => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
      <View style={styles.picker}>
        <Picker
          style={styles.pickerCustom}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label={props.label} value="item" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  picker: {
    height: 50,
    width: 300,
    borderColor: "grey",
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 50,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secundario,
  },
  pickerCustom: {
    height: 50,
    width: 300,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default PickerCustom;
