import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Colors from "../constants/Colors";
import HeaderCustom from "../components/Header";
import Footer from "../components/Footer";
import CarInfo from "../components/CarInfo";
const Garage = () => {
  return (
    <View style={styles.container}>
      <HeaderCustom styleText={styles.header} title="Garagem"></HeaderCustom>
      <View>
        <ScrollView style={styles.scroll}>
          <CarInfo
            image="https://i.imgur.com/iPTEV1U.jpg"
            maker="Chevrolet"
            model=" Onix"
            license="XXX-000"
            data="10/10/2020"
          />
          <CarInfo
            image="https://i.imgur.com/iPTEV1U.jpg"
            maker="Chevrolet"
            model=" Onix"
            license="XXX-000"
            data="10/10/2020"
          />
          <CarInfo
            image="https://i.imgur.com/iPTEV1U.jpg"
            maker="Chevrolet"
            model=" Onix"
            license="XXX-000"
            data="10/10/2020"
          />
          <CarInfo
            image="https://i.imgur.com/iPTEV1U.jpg"
            maker="Chevrolet"
            model=" Onix"
            license="XXX-000"
            data="10/10/2020"
          />
        </ScrollView>
      </View>
      <Footer style={styles.textStyle}>Adicionar Veículos</Footer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {},
  scroll: {
    height: 430,
  },
  textStyle: {
    backgroundColor: Colors.primario,
  },
});

export default Garage;
