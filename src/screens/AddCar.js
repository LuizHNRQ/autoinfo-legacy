import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Colors from "../constants/Colors";
import HeaderCustom from "../components/Header";
import Footer from "../components/Footer";
import CarInfo from "../components/CarInfo";
import ButtonCustom from "../components/ButtonCustom";
import DataAndInfo from "../components/DataAndInfo";
import CarReview from "../components/CarReview";

const AddCar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <HeaderCustom styleText={styles.header} title="Adicionar"></HeaderCustom> */}
      <ScrollView style={styles.scroll}>
        <View>
          <CarInfo
            container={styles.carContainer}
            image="https://i.imgur.com/iPTEV1U.jpg"
            carImage={styles.carImage}
            maker="Chevrolet"
            model="Onix/2018"
            license="XXX-000"
            data="20.000 Km"
            makerStyle={styles.makerStyle}
            modelStyle={styles.modelStyle}
            displayModel={styles.display}
            message={styles.message}
          />
        </View>

        <ButtonCustom
          style={styles.button}
          onPress={() => navigation.navigate("AddReview")}
        >
          Adicionar Revisão
        </ButtonCustom>
        <CarReview data="10/10/2020" info="exemplo">
          Revisões Passadas
        </CarReview>
        <CarReview data="10/10/2020" info="exemplo">
          Revisões Futuras
        </CarReview>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {},
  carContainer: {
    flexDirection: "column",
    backgroundColor: Colors.tercearia,
  },
  display: {
    flexDirection: "column",
  },
  message: {
    display: "none",
  },
  carImage: {
    height: 120,
    aspectRatio: 5.8 / 2,
  },
  modelStyle: {
    fontWeight: "600",
  },
  makerStyle: {
    fontSize: 40,
  },
  button: {
    marginHorizontal: 20,
  },
  scroll: {
    height: 580,
  },
});

export default AddCar;
