import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import HeaderCustom from "../components/Header";
import InputCustom from "../components/Input";
import ButtonCustom from "../components/ButtonCustom";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <View style={styles.container}>
      <HeaderCustom styleText={styles.header} title="AutoInfo"></HeaderCustom>
      <View style={styles.loginInputContainer}>
        <Text style={styles.loginText}>Login</Text>
        <InputCustom placeholder="Usuário..."></InputCustom>
        <InputCustom placeholder="Senha..."></InputCustom>
        <ButtonCustom>Entrar</ButtonCustom>
      </View>
      <View>
        <Footer
          preText="Não é Cadastrado ainda?"
          preTextStyle={styles.preTextStyle}
        ></Footer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {},
  loginInputContainer: {
    paddingVertical: 70,
  },
  loginText: {
    fontSize: 30,
    marginLeft: 50,
  },
  preTextStyle: {
    fontSize: 18,
  },
});

export default Login;
