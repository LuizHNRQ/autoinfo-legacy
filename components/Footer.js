import React from "react";
import { View, StyleSheet, Text } from "react-native";

import ColorsCustom from "../constants/Colors";
import ButtonCustom from "./ButtonCustom";

const Footer = (props) => {
  return (
    <View style={{ ...styles.footerContainer, ...props.container }}>
      <Text style={{ ...styles.preText, ...props.preTextStyle }}>
        {props.preText}
      </Text>
      <ButtonCustom
        style={{ ...styles.button, ...props.style }}
        styleText={{ ...styles.text, ...props.textStyle }}
      >
        {props.children}
      </ButtonCustom>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: ColorsCustom.secundario,
    paddingVertical: 20,
  },
  button: {
    backgroundColor: ColorsCustom.detalhe,
  },
  text: {},
  preText: {
    alignSelf: "center",
    color: "white",
    fontSize: 0,
  },
});

export default Footer;
