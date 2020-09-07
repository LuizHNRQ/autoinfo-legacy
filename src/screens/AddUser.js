import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Colors from "../constants/Colors";
import Input from "../components/Input";
import ButtonCustom from "../components/ButtonCustom";

const addUser = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Input inputType="addUser" style={styles.input} inputText="Nome" />
      <Input inputType="addUser" style={styles.input} inputText="Usuário" />
      <Input
        inputType="addUser"
        style={styles.input}
        inputText="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        errorMessage="teste 1 2 3"
        onValueChange={() => {}}
        initialValue=""
      />
      <Input
        inputType="addUser"
        style={styles.input}
        inputText="Senha"
        secureTextEntry
      />
      <Input
        inputType="addUser"
        style={styles.input}
        inputText="Confirmação de Senha"
        secureTextEntry
      />
      <ButtonCustom style={styles.btn}>Cadastrar</ButtonCustom>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    margin: 20,
    borderColor: Colors.secundario,
    borderWidth: 1,
    borderRadius: 6,
    paddingTop: 20,
  },
  input: {
    fontSize: 22,
    height: 40,
    backgroundColor: "white",
    marginVertical: 0,
    marginBottom: 10,
  },
  btn: {
    marginTop: 50,
  },
});

export default addUser;
