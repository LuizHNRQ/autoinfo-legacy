import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import HeaderCustom from "../components/Header";
import InputCustom from "../components/Input";
import ButtonCustom from "../components/ButtonCustom";
import Footer from "../components/Footer";

// () => navigation.navigate("Dashboard")

const Login = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const processLogin = () => {
    console.log(user, password);
  };

  useEffect(() => {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAaYn63FUpkRErtvHx--CKkca2gKKWKJeA",
      authDomain: "autoinfo-5a151.firebaseapp.com",
      databaseURL: "https://autoinfo-5a151.firebaseio.com",
      projectId: "autoinfo-5a151",
      storageBucket: "autoinfo-5a151.appspot.com",
      messagingSenderId: "291816444037",
      appId: "1:291816444037:web:2348b13391f7f27fd459ec",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  });

  return (
    <View style={styles.container}>
      {/* <HeaderCustom styleText={styles.header} title="AutoInfo"></HeaderCustom> */}
      <View style={styles.loginInputContainer}>
        <Text style={styles.loginText}>Login</Text>
        <InputCustom
          id="username"
          inputTypeDisplay="login"
          placeholder="Usuário..."
          minLength={3}
          onChangeText={(input) => {
            setUser(input);
            //console.log(user);
          }}
          value={user}
        ></InputCustom>
        <InputCustom
          id="password"
          inputTypeDisplay="login"
          placeholder="Senha..."
          minLength={3}
          secureTextEntry
          onChangeText={(input) => {
            setPassword(input);
            //console.log(password);
          }}
          value={password}
        ></InputCustom>
        <ButtonCustom
          onPress={() => {
            processLogin();
          }}
        >
          Entrar{" "}
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
    paddingVertical: "25%",
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
