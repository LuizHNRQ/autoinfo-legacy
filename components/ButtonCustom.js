import React from "react";

import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import ColorsCustom from "../constants/Colors";

const ButtonCustom = (props) => {
  return (
    <TouchableOpacity style={{ ...styles.button, ...props.style }}>
      <Text style={{ ...styles.text, ...props.styleText }}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderColor: "grey",
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 50,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ColorsCustom.primario,
  },
  text: {
    fontSize: 26,
    color: "white",
  },
});

export default ButtonCustom;
