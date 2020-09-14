import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";

import firebase from "firebase";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import ButtonCustom from "../components/ButtonCustom";

const addUser = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    message: "",
  });

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
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  const processLogin = () => {
    const { email, password } = userInfo;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        //console.log("ok logado", user);
        setUserInfo({ ...userInfo, message: "" });
        Alert.alert("Sucesso", "Usuario Cadastrado!", [], { cancelable: true });
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log("erro", error);
        setUserInfo({ ...userInfo, message: getErrorByMessage(error.code) });
      });
  };

  const getErrorByMessage = (code) => {
    switch (code) {
      case "auth/wrong-password":
        return "Senha Errada";
      case "auth/user-not-found":
        return "Usuário Não encontrado";
      case "auth/invalid-email":
        return "Email Inválido";
      default:
        return "Erro no login";
    }
  };

  const renderMessage = () => {
    const { message } = userInfo;

    if (!message) {
      return null;
    } else {
      return <Text style={styles.errorMessage}>{message}</Text>;
    }
  };
  return (
    <View style={styles.container}>
      <Input inputTypeDisplay="addUser" style={styles.input} inputText="Nome" />
      <Input
        inputTypeDisplay="addUser"
        style={styles.input}
        inputText="Usuário"
      />

      <Input
        id="email"
        inputText="Email"
        style={styles.input}
        inputTypeDisplay="addUser"
        placeholder=""
        autoCapitalize="none"
        keyboardType="email-address"
        minLength={3}
        onChangeText={(input) => {
          setUserInfo({ ...userInfo, email: input });
          //console.log(user);
        }}
        value={userInfo.email}
      ></Input>
      <Input
        id="password"
        style={styles.input}
        inputTypeDisplay="addUser"
        placeholder=""
        inputText="Senha"
        secureTextEntry
        minLength={3}
        secureTextEntry
        onChangeText={(input) => {
          setUserInfo({ ...userInfo, password: input });
          //console.log(password);
        }}
        value={userInfo.password}
      ></Input>
      <Input
        inputTypeDisplay="addUser"
        style={styles.input}
        inputText="Confirmação de Senha"
        secureTextEntry
      />
      {renderMessage()}
      <ButtonCustom
        style={styles.btn}
        onPress={() => {
          processLogin();
        }}
      >
        Cadastrar
      </ButtonCustom>
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
  errorMessage: {
    alignSelf: "center",
    fontSize: 18,
    color: "red",
    marginTop: -10,
  },
});

export default addUser;
