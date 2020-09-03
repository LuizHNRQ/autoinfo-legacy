import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import HeaderCustom from "../components/Header";
import InputCustom from "../components/Input";
import ButtonCustom from "../components/ButtonCustom";
import Footer from "../components/Footer";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <HeaderCustom styleText={styles.header} title="AutoInfo"></HeaderCustom> */}
      <View style={styles.loginInputContainer}>
        <Text style={styles.loginText}>Login</Text>
        <InputCustom placeholder="Usuário..."></InputCustom>
        <InputCustom placeholder="Senha..."></InputCustom>
        <ButtonCustom onPress={() => navigation.navigate("Dashboard")}>
          Entrar
        </ButtonCustom>
      </View>
      <View>
        <Footer
          preText="Não é Cadastrado ainda?"
          preTextStyle={styles.preTextStyle}
          textStyle={styles.textStyle}
          footerType={"login"}
          pressAddUser={() => navigation.navigate("AddUser")}
        >
          Cadastrar
        </Footer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  header: {},
  loginInputContainer: {
    paddingVertical: 100,
  },
  loginText: {
    fontSize: 30,
    marginLeft: 50,
  },
  preTextStyle: {
    fontSize: 18,
    textDecorationLine: "underline",
  },
  textStyle: {
    textDecorationLine: "underline",
  },
  footerContainer: {
    flex: 1,
  },
});

export default Login;
