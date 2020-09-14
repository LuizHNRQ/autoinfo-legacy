import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import HeaderCustom from "../components/Header";
import InputCustom from "../components/Input";
import ButtonCustom from "../components/ButtonCustom";
import Footer from "../components/Footer";
import firebase from "firebase";

// () => navigation.navigate("Dashboard")

const Login = ({ navigation }) => {
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
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        //console.log("ok logado", user);
        setUserInfo({ ...userInfo, message: "" });
        navigation.navigate("Dashboard");
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
      {/* <HeaderCustom styleText={styles.header} title="AutoInfo"></HeaderCustom> */}
      <View style={styles.loginInputContainer}>
        <Text style={styles.loginText}>Login</Text>
        <InputCustom
          id="username"
          inputTypeDisplay="login"
          placeholder="Usuário..."
          autoCapitalize="none"
          keyboardType="email-address"
          minLength={3}
          onChangeText={(input) => {
            setUserInfo({ ...userInfo, email: input });
            //console.log(user);
          }}
          value={userInfo.email}
        ></InputCustom>
        <InputCustom
          id="password"
          inputTypeDisplay="login"
          placeholder="Senha..."
          minLength={3}
          secureTextEntry
          onChangeText={(input) => {
            setUserInfo({ ...userInfo, password: input });
            //console.log(password);
          }}
          value={userInfo.password}
        ></InputCustom>
        <ButtonCustom
          onPress={() => {
            processLogin();
          }}
        >
          Entrar{" "}
        </ButtonCustom>
        {renderMessage()}
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
  errorMessage: {
    alignSelf: "center",
    fontSize: 18,
    color: "red",
    marginTop: -10,
  },
});

export default Login;
