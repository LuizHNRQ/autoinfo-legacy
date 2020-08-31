import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../constants/Colors";

const CarInfo = (props) => {
  return (
    <View style={{ ...styles.container, ...props.container }}>
      <Image
        style={{ ...styles.carImage, ...props.carImage }}
        source={{ uri: props.image }}
      ></Image>
      <View style={styles.containerInfo}>
        <View style={{ ...styles.display, ...props.displayModel }}>
          <Text style={{ ...styles.model, ...props.makerStyle }}>
            {props.maker}
          </Text>
          <Text style={{ ...styles.model, ...props.modelStyle }}>
            {props.model}
          </Text>
        </View>
        <Text style={styles.license}>{props.license}</Text>
        <Text style={{ ...styles.maintence, ...props.message }}>
          Ultima manutenção
        </Text>
        <Text style={styles.data}>{props.data}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.tercearia,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: Colors.secundario,
    borderWidth: 1,
  },
  containerInfo: {
    marginLeft: 15,
  },
  carImage: {
    aspectRatio: 1,
    height: 115,
  },
  model: {
    fontSize: 26,
    fontWeight: "bold",
  },
  license: {
    fontSize: 20,
  },
  maintence: {
    fontSize: 17,
    fontWeight: "bold",
  },
  data: {
    fontSize: 24,
  },
  display: {
    flexDirection: "row",
  },
});

export default CarInfo;
