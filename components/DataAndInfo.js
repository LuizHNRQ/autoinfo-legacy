import React from "react";
import { View, StyleSheet, Text } from "react-native";

const DataAndInfo = (props) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.data}>{props.data}</Text>
      <Text style={styles.data}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: "row",
    paddingVertical: 5,
    marginVertical: 5,
  },
  data: {
    fontSize: 20,
    marginLeft: 20,
  },
});

export default DataAndInfo;
