import React from "react";
import { View, StyleSheet, Text } from "react-native";

import ColorsCustom from "../constants/Colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={{ ...styles.text, ...props.styleText }}>{props.title}</Text>
      <Text style={{ ...styles.description, ...props.styleDescription }}>
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: ColorsCustom.primario,
    paddingTop: 50,
    paddingBottom: 0,
    paddingLeft: 20,
  },
  text: {
    fontSize: 70,
    fontWeight: "bold",
    color: "white",
  },
  description: {},
});

export default Header;
