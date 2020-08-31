import React from "react";
import { View, StyleSheet, Text } from "react-native";

import ColorsCustom from "../constants/Colors";
import ButtonCustom from "./ButtonCustom";

const Footer = (props) => {
  // return (
  //   <View style={{ ...styles.footerContainer, ...props.container }}>
  //     <Text style={{ ...styles.preText, ...props.preTextStyle }}>
  //       {props.preText}
  //     </Text>
  //     <ButtonCustom
  //       style={{ ...styles.button, ...props.style }}
  //       styleText={{ ...styles.text, ...props.textStyle }}
  //     >
  //       {props.children}
  //     </ButtonCustom>
  //   </View>
  // );

  const renderFooter = () => {
    switch (props.footerType) {
      case "login":
        return (
          <View style={{ ...styles.footerContainer, ...props.container }}>
            {props.footerType === "login" && (
              <Text style={{ ...styles.preText, ...props.preTextStyle }}>
                {props.preText}
              </Text>
            )}
            <ButtonCustom
              style={{ ...styles.button, ...props.style }}
              styleText={{ ...styles.text, ...props.textStyle }}
            >
              {props.children}
            </ButtonCustom>
          </View>
        );

      case "dashboard":
        return (
          <View style={{ ...styles.footerContainer, ...props.container }}>
            <Text style={{ ...styles.preText, ...props.preTextStyle }}>
              {props.preText}
            </Text>

            <ButtonCustom
              style={{ ...styles.button, ...props.style }}
              styleText={{ ...styles.text, ...props.textStyle }}
            >
              {props.firstButton}
            </ButtonCustom>

            <ButtonCustom
              style={{
                ...styles.button,
                ...props.style,
                ...styles.secondButton,
              }}
              styleText={{ ...styles.text, ...props.textStyle }}
            >
              {props.secondButton}
            </ButtonCustom>
          </View>
        );

      case "garage":
        return (
          <View style={{ ...styles.footerContainer, ...props.container }}>
            <ButtonCustom
              style={{ ...props.buttonStyle }}
              styleText={{ ...styles.textStyle }}
            >
              {props.children}
            </ButtonCustom>
          </View>
        );

      default:
        return <></>;
    }
  };

  return renderFooter();
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: ColorsCustom.secundario,
    paddingVertical: 20,
  },
  button: {
    backgroundColor: ColorsCustom.detalhe,
  },
  secondButton: {
    backgroundColor: ColorsCustom.detalhe,
  },
  text: {},
  preText: {
    alignSelf: "center",
    color: "white",
  },
});

export default Footer;
