import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Picker,
  TextInput,
} from "react-native";

import Colors from "../constants/Colors";
import HeaderCustom from "../components/Header";
import Footer from "../components/Footer";
import CarInfo from "../components/CarInfo";
import ButtonCustom from "../components/ButtonCustom";
import DataAndInfo from "../components/DataAndInfo";
import CarReview from "../components/CarReview";
import PickerCustom from "../components/PickerCustom";
import KmInput from "../components/KmInput";
import Input from "../components/Input";

const AddReview = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <HeaderCustom
        styleText={styles.header}
        title="Adicionar"
        styleDescription={styles.description}
      >
        Revisão
      </HeaderCustom>
      <ScrollView style={styles.scroll}>
        <View style={styles.containerCustom}>
          <PickerCustom label="Chevrolet Onix">
            Selecione o Veículo
          </PickerCustom>
        </View>
        <View style={styles.containerCustom}>
          <Text style={styles.text}>Revisão por Kilometragem</Text>
          <KmInput>Km Atual </KmInput>
          <KmInput>Km Revisão</KmInput>
        </View>
        <View style={styles.containerCustom}>
          <PickerCustom label="10/10/2020">Revisão por Tempo</PickerCustom>
        </View>
        <View style={styles.containerCustom}>
          <PickerCustom label="Selecione o Motivo">
            Motivo da Revisão
          </PickerCustom>
          <Input
            placeholder="Descrição detalhada..."
            style={styles.input}
          ></Input>
        </View>
        <ButtonCustom
          style={styles.button}
          onPress={() => navigation.navigate("AddReview")}
        >
          Adicionar esta Revisão
        </ButtonCustom>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    fontSize: 40,
  },
  carContainer: {
    flexDirection: "column",
    backgroundColor: Colors.tercearia,
  },
  scroll: {
    height: 510,
  },
  description: {
    fontSize: 70,
    fontWeight: "bold",
    marginTop: -20,
  },
  containerCustom: {
    flexDirection: "column",
    backgroundColor: Colors.tercearia,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: Colors.secundario,
    borderWidth: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 10,
  },
  kmInputContainer: {
    flexDirection: "row",
  },
  input: {
    fontSize: 12,
    backgroundColor: "white",
    width: 300,
    height: 100,
  },
  button: {
    marginHorizontal: 20,
  },
});

export default AddReview;
