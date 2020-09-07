import React from "react";

import { TextInput, StyleSheet, View, Text } from "react-native";

const Input = (props) => {
  const renderInput = () => {
    switch (props.inputType) {
      case "login":
        return (
          <View>
            <TextInput {...props} style={{ ...styles.input, ...props.style }} />
          </View>
        );

      case "addUser":
        return (
          <View>
            <Text style={styles.inputText}>{props.inputText}</Text>
            <TextInput {...props} style={{ ...styles.input, ...props.style }} />
          </View>
        );

      default:
        return <></>;
    }
  };

  return renderInput();
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
    backgroundColor: "white",
  },
  inputText: {
    fontSize: 24,
    marginLeft: 50,
  },
});

export default Input;
