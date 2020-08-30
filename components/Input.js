import React from "react";

import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: "grey",
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 50,
    borderRadius: 4,
    fontSize: 26,
  },
});

export default Input;
