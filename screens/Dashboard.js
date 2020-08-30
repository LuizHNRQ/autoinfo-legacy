import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Colors from "../constants/Colors";
import HeaderCustom from "../components/Header";
import Footer from "../components/Footer";
import DataAndInfo from "../components/DataAndInfo";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <HeaderCustom
        styleText={styles.header}
        title="Olá Cláudio,"
        styleDescription={styles.description}
      >
        {`A sua próxima revisão\ndeve ocorrer no dia 18/10 ou quando\nChevrolet Onix\natingir 25.000Km.`}
      </HeaderCustom>
      <View>
        <Text style={styles.information}>Ultimas Manutenções</Text>
        <ScrollView style={styles.scroll}>
          <DataAndInfo data="10/10/2020">Informação</DataAndInfo>
          <DataAndInfo data="10/10/2020">Informação</DataAndInfo>
          <DataAndInfo data="10/10/2020">Informação</DataAndInfo>
          <DataAndInfo data="10/10/2020">Informação</DataAndInfo>
        </ScrollView>
      </View>
      <View>
        <Footer
          container={styles.container}
          style={styles.up}
          preText="Acessar Sua Garagem"
          preTextStyle={styles.preTextStyle}
        >
          Meus Veiculos
        </Footer>
        <Footer container={styles.container} style={styles.down}>
          Adicionar Revisão
        </Footer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  scroll: {
    height: 125,
  },
  header: {
    fontSize: 55,
  },
  description: {
    fontSize: 28,
  },
  information: {
    marginVertical: 10,
    fontSize: 26,
    marginLeft: 20,
  },
  container: {
    paddingVertical: 0,
  },
  up: {
    backgroundColor: Colors.primario,
  },
  down: {},
  preTextStyle: {
    fontSize: 36,
    paddingVertical: 10,
    fontWeight: "bold",
  },
});

export default Dashboard;
