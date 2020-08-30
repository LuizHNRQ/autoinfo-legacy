import React from "react";
import { StyleSheet, View, Text } from "react-native";

import DataAndInfo from "../components/DataAndInfo";
import Colors from "../constants/Colors";

const CarReview = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
      <DataAndInfo data="10/10/2020">Informação</DataAndInfo>
      <DataAndInfo data="10/10/2020">Informação</DataAndInfo>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tercearia,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: Colors.secundario,
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
    marginLeft: 50,
  },
});

export default CarReview;
